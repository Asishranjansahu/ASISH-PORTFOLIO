import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const USERNAME = 'Asishranjansahu';
const PROFILE_URL = `https://github.com/${USERNAME}`;
const REPOSITORIES_URL = `https://api.github.com/users/${USERNAME}/repos`;
const EVENTS_URL = `https://api.github.com/users/${USERNAME}/events/public`;
const CACHE_KEY = `github-activity:${USERNAME}:v1`;
const CACHE_TTL_MS = 10 * 60 * 1000;
const REPOSITORY_PAGE_SIZE = 10;
const MAX_REPOSITORIES = 5;
const MAX_PUSHES = 5;

const formatDate = (dateString) => new Intl.DateTimeFormat(undefined, {
  dateStyle: 'medium',
}).format(new Date(dateString));

const formatTimestamp = (timestamp) => new Intl.DateTimeFormat(undefined, {
  dateStyle: 'medium',
  timeStyle: 'short',
}).format(new Date(timestamp));

const formatRelativeTime = (dateString) => {
  const elapsed = Math.max(0, Date.now() - new Date(dateString).getTime());
  const relative = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  if (elapsed < 60 * 1000) return 'just now';
  if (elapsed < 60 * 60 * 1000) return relative.format(-Math.floor(elapsed / (60 * 1000)), 'minute');
  if (elapsed < 24 * 60 * 60 * 1000) return relative.format(-Math.floor(elapsed / (60 * 60 * 1000)), 'hour');
  return relative.format(-Math.floor(elapsed / (24 * 60 * 60 * 1000)), 'day');
};

const truncateMessage = (message) => {
  const firstLine = message.split(/\r?\n/, 1)[0].trim();
  const characters = Array.from(firstLine);

  return characters.length > 80
    ? `${characters.slice(0, 79).join('')}…`
    : firstLine;
};

const fetchJson = async (url, signal) => {
  const response = await fetch(url, {
    headers: { Accept: 'application/vnd.github+json' },
    signal,
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed with status ${response.status}`);
  }

  return response.json();
};

const fetchRepositories = async (signal) => {
  const url = new URL(REPOSITORIES_URL);
  url.searchParams.set('sort', 'updated');
  url.searchParams.set('per_page', String(REPOSITORY_PAGE_SIZE));

  const results = await fetchJson(url, signal);
  if (!Array.isArray(results)) {
    throw new Error('GitHub returned an invalid repositories response');
  }

  return results
    .filter((repository) => (
      repository
      && repository.private === false
      && repository.fork === false
      && typeof repository.name === 'string'
      && typeof repository.html_url === 'string'
      && typeof repository.updated_at === 'string'
      && Number.isFinite(new Date(repository.updated_at).getTime())
    ))
    .slice(0, MAX_REPOSITORIES);
};

const fetchPushes = async (signal) => {
  const events = await fetchJson(EVENTS_URL, signal);
  if (!Array.isArray(events)) {
    throw new Error('GitHub returned an invalid events response');
  }

  return events
    .filter((event) => (
      event?.type === 'PushEvent'
      && event.actor?.login?.toLowerCase() === USERNAME.toLowerCase()
      && typeof event.repo?.name === 'string'
      && typeof event.created_at === 'string'
      && Number.isFinite(new Date(event.created_at).getTime())
      && Array.isArray(event.payload?.commits)
      && event.payload.commits.length > 0
    ))
    .map((event) => {
      const commit = event.payload.commits[event.payload.commits.length - 1];
      const message = typeof commit?.message === 'string' ? truncateMessage(commit.message) : '';

      return {
        id: event.id,
        repository: event.repo.name,
        message,
        createdAt: event.created_at,
      };
    })
    .filter((event) => event.message)
    .slice(0, MAX_PUSHES);
};

const readCachedActivity = () => {
  let cached;

  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    cached = JSON.parse(raw);
  } catch (error) {
    console.warn('Could not read cached GitHub activity.', error);
    return null;
  }

  const age = Date.now() - cached?.cachedAt;
  if (
    !Number.isFinite(age)
    || age < 0
    || age >= CACHE_TTL_MS
    || !Array.isArray(cached?.repositories)
    || !Array.isArray(cached?.pushes)
  ) {
    try {
      sessionStorage.removeItem(CACHE_KEY);
    } catch (error) {
      console.warn('Could not clear expired GitHub activity cache.', error);
    }
    return null;
  }

  return cached;
};

const cacheActivity = (activity) => {
  const cached = {
    ...activity,
    cachedAt: Date.now(),
  };

  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(cached));
  } catch (error) {
    console.warn('Could not cache GitHub activity for this session.', error);
  }

  return cached;
};

const RepositorySkeleton = () => (
  <div className="holo-card animate-pulse space-y-4 p-5" aria-hidden="true">
    <div className="h-5 w-2/5 rounded bg-white/10" />
    <div className="h-4 w-full rounded bg-white/[0.07]" />
    <div className="h-4 w-4/5 rounded bg-white/[0.07]" />
    <div className="h-4 w-1/3 rounded bg-white/[0.07]" />
  </div>
);

const PushSkeleton = () => (
  <div className="holo-card animate-pulse space-y-4 p-5" aria-hidden="true">
    <div className="h-5 w-1/2 rounded bg-white/10" />
    <div className="h-4 w-full rounded bg-white/[0.07]" />
    <div className="h-4 w-1/4 rounded bg-white/[0.07]" />
  </div>
);

const repositoryUrlFromEvent = (fullName) => {
  const parts = fullName.split('/');
  if (parts.length !== 2 || parts.some((part) => !part)) return PROFILE_URL;

  return `https://github.com/${parts.map(encodeURIComponent).join('/')}`;
};

const GithubStats = () => {
  const [activity, setActivity] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();
    let isActive = true;
    const cached = readCachedActivity();

    if (cached) {
      setActivity(cached);
      setLastUpdated(cached.cachedAt);
      setStatus('ready');
      return () => controller.abort();
    }

    const loadActivity = async () => {
      try {
        const [repositories, pushes] = await Promise.all([
          fetchRepositories(controller.signal),
          fetchPushes(controller.signal),
        ]);
        const result = cacheActivity({ repositories, pushes });
        if (isActive) {
          setActivity(result);
          setLastUpdated(result.cachedAt);
          setStatus('ready');
        }
      } catch (error) {
        if (error.name === 'AbortError') return;

        console.error('Unable to load public GitHub activity.', error);
        if (isActive) setStatus('error');
      }
    };

    loadActivity();

    return () => {
      isActive = false;
      controller.abort();
    };
  }, []);

  return (
    <section id="github-stats" className="github-section scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="section-heading">
            <p className="section-kicker mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">GitHub activity</p>
            <h2 className="flex items-center gap-3 font-display text-3xl font-bold text-white md:text-5xl">
              <Github className="h-8 w-8 text-cyan-300 md:h-10 md:w-10" aria-hidden="true" />
              Code Activity
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {status === 'ready' && lastUpdated !== null && (
              <time dateTime={new Date(lastUpdated).toISOString()} className="text-sm text-slate-300">
                Last updated {formatTimestamp(lastUpdated)}
              </time>
            )}
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-fit items-center gap-2 text-base font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
            >
              View my GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {status === 'error' ? (
          <div role="status" className="holo-card p-6 text-slate-200">
            <p>Activity unavailable right now.{' '}
              <a
                href={PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
              >
                View my GitHub
              </a>
            </p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            <section aria-labelledby="recent-repositories-heading">
              <h3 id="recent-repositories-heading" className="mb-4 text-xl font-bold text-white md:text-2xl">
                Recently updated
              </h3>
              <div className="space-y-3" aria-busy={status === 'loading'}>
                {status === 'loading' ? (
                  Array.from({ length: MAX_REPOSITORIES }, (_, index) => <RepositorySkeleton key={index} />)
                ) : activity.repositories.length > 0 ? (
                  activity.repositories.map((repository) => (
                    <article key={repository.id} className="holo-card p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <a
                          href={repository.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="break-all text-lg font-semibold text-cyan-200 hover:text-cyan-100"
                        >
                          {repository.name}
                        </a>
                        <time dateTime={repository.updated_at} className="text-base text-slate-300">
                          Updated {formatDate(repository.updated_at)}
                        </time>
                      </div>
                      <p className="mt-2 break-words text-base leading-relaxed text-slate-300">
                        {repository.description || 'No description provided.'}
                      </p>
                      <p className="mt-3 text-base text-slate-200">
                        Main language: {repository.language || 'Not specified'}
                      </p>
                    </article>
                  ))
                ) : (
                  <p className="holo-card p-5 text-base text-slate-300">No recently updated public repositories found.</p>
                )}
              </div>
            </section>

            <section aria-labelledby="latest-pushes-heading">
              <h3 id="latest-pushes-heading" className="mb-4 text-xl font-bold text-white md:text-2xl">
                Latest pushes
              </h3>
              <div className="space-y-3" aria-busy={status === 'loading'}>
                {status === 'loading' ? (
                  Array.from({ length: MAX_PUSHES }, (_, index) => <PushSkeleton key={index} />)
                ) : activity.pushes.length > 0 ? (
                  activity.pushes.map((push) => (
                    <article key={push.id} className="holo-card p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <a
                          href={repositoryUrlFromEvent(push.repository)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="break-all text-lg font-semibold text-cyan-200 hover:text-cyan-100"
                        >
                          {push.repository}
                        </a>
                        <time dateTime={push.createdAt} className="text-base text-slate-300">
                          {formatDate(push.createdAt)} · {formatRelativeTime(push.createdAt)}
                        </time>
                      </div>
                      <p className="mt-3 break-words text-base leading-relaxed text-slate-200">{push.message}</p>
                    </article>
                  ))
                ) : (
                  <p className="holo-card p-5 text-base text-slate-300">No recent public pushes found.</p>
                )}
              </div>
            </section>
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubStats;
