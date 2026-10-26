import React, { lazy, Suspense } from 'react';
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Music2,
  Phone,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import StatsCard from './components/StatsCard';

const Certifications = lazy(() => import('./components/Certifications'));
const GithubStats = lazy(() => import('./components/GithubStats'));

const featuredProjects = [
  {
    title: 'Health Monitor API',
    year: '2026',
    status: 'No live demo',
    accent: '#38BDF8',
    icon: Activity,
    sourceUrl: 'https://github.com/Asishranjansahu/health-monitor-api',
    technologies: ['Spring Boot', 'WebSocket', 'H2', 'JUnit 5', 'Mockito', 'GitHub Actions', 'Chart.js'],
    bullets: [
      'Built a REST API for live patient vitals using WebSocket STOMP, sending sub-second alerts to many clients.',
      'Added a Chart.js dashboard to visualize live vitals data.',
      'Wrote JUnit 5 and Mockito tests for normal cases, edge cases and exceptions; set up GitHub Actions CI/CD for automated Maven builds and tests.',
    ],
  },
  {
    title: 'Smart Campus Automation System',
    year: '2025',
    accent: '#2DD4BF',
    icon: Building2,
    sourceUrl: 'https://github.com/Asishranjansahu/SMART-CAMPUS-AUTOMATION-SYSTEM',
    liveDemoUrl: 'https://smart-campus-automation-system.vercel.app/',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Firebase', 'Flutter'],
    bullets: [
      'Built IoT automation across 200+ campus facilities, cutting manual tasks by 60% and energy use by 25%.',
      'Developed REST APIs used by a Flutter mobile app and a React dashboard.',
      'Maintained 95% bug-free performance across 200+ automated test cases using a CI/CD pipeline.',
    ],
  },
];

const moreProjects = [
  {
    title: 'Spotify Clone',
    year: '2024',
    status: 'No live demo',
    accent: '#A3E635',
    icon: Music2,
    technologies: ['Java', 'HTML', 'CSS', 'JavaScript'],
    bullets: [
      'Built a music streaming web app with 3 custom playlist features, cutting navigation clicks by ~30%.',
      'Added a responsive interface with audio controls (play, pause, next, previous, seek) and playlist browsing.',
    ],
  },
  {
    title: 'Portfolio',
    accent: '#22D3EE',
    icon: Code2,
    technologies: ['React'],
    bullets: ['Personal developer portfolio built with React, deployed on Vercel.'],
    sourceUrl: 'https://github.com/Asishranjansahu/ASISH-PORTFOLIO',
    liveDemoUrl: 'https://asishranjansahu.vercel.app',
  },
];

const hackathonProjects = [
  {
    title: 'Dukaan Dost',
    eyebrow: 'HackIndia AI-First Startup Hackathon | Team SMART TECH',
    status: 'In progress',
    accent: '#FBBF24',
    icon: ShoppingBag,
    technologies: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Gemini'],
    bullets: [
      'Building a multilingual order desk that turns voice notes and text into editable order drafts; owners review and confirm details before an order is created.',
      'Implemented order and payment tracking with customer ledgers, calculated balances, overdue dues, and printable receipts.',
      'Added local-language reminder drafts and optional UPI payment links; the owner chooses whether to send a reminder, and the app does not process payments.',
    ],
  },
  {
    title: 'Deletion Audit Agent',
    eyebrow: 'HackerRank Orchestrate Hackathon',
    year: '2026',
    status: 'No live demo',
    accent: '#A78BFA',
    icon: ShieldCheck,
    technologies: ['Python'],
    bullets: [
      'Built a Python deletion-audit tool to review 518 customer-data requests across identity histories and evidence files.',
      'Applied policy rules to identify data requiring deletion, redaction, anonymization, or retention.',
      'Generated structured remediation and verification steps; evaluated against public samples and documented accuracy gaps.',
    ],
  },
];

const skillGroups = [
  {
    title: 'Languages',
    skills: ['Java (21)', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Core CS',
    skills: ['OOP', 'DSA', 'DBMS', 'Design Patterns', 'Multithreading', 'SDLC'],
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Web & Mobile',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'React.js'],
  },
  {
    title: 'Data',
    skills: ['Power BI', 'Chart.js'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3)', 'Firebase', 'Docker', 'GitHub Actions', 'Maven', 'CI/CD'],
  },
  {
    title: 'Testing',
    skills: ['JUnit 5', 'Mockito'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA', 'Antigravity', 'Agile'],
  },
];

const skillLogos = {
  'Java (21)': 'java',
  Python: 'python',
  JavaScript: 'javascript',
  'Spring Boot': 'spring',
  'Node.js': 'nodejs',
  'Express.js': 'express',
  PostgreSQL: 'postgresql',
  MySQL: 'mysql',
  MongoDB: 'mongodb',
  HTML5: 'html5',
  CSS3: 'css3',
  Bootstrap: 'bootstrap',
  'React.js': 'react',
  'Chart.js': 'chartjs',
  'AWS (EC2, S3)': 'aws',
  Firebase: 'firebase',
  Docker: 'docker',
  'GitHub Actions': 'github-actions',
  Maven: 'maven',
  'JUnit 5': 'junit',
  Git: 'git',
  GitHub: 'github',
  Postman: 'postman',
  'VS Code': 'vscode',
  'IntelliJ IDEA': 'intellij',
};

const ProjectCard = ({ project, featured = false }) => {
  const ProjectIcon = project.icon;

  return (
    <article className={`holo-card project-card flex h-full flex-col p-6 md:p-7 ${featured ? 'border-cyan-400/20' : ''}`}>
      <div
        aria-hidden="true"
        className="project-artwork mb-5"
        style={{ '--project-accent': project.accent }}
      >
        <span className="project-artwork-icon">
          <ProjectIcon className="h-7 w-7" />
        </span>
      </div>

      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          {project.eyebrow && (
            <p className="mb-2 text-sm font-medium text-cyan-300">{project.eyebrow}</p>
          )}
          <h3 className="text-xl font-bold text-white md:text-2xl">{project.title}</h3>
        </div>
        {(project.year || project.status) && (
          <div className="flex flex-wrap gap-2">
            {project.year && (
              <span className="project-status rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-sm text-slate-300">
                {project.year}
              </span>
            )}
            {project.status && (
              <span className="project-status rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-sm text-slate-300">
                {project.status}
              </span>
            )}
          </div>
        )}
      </div>

      <p className="mb-4 leading-relaxed text-slate-300">{project.bullets[0]}</p>

      <ul className="mb-6 flex-1 space-y-3 text-slate-300">
        {project.bullets.slice(1).map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 leading-relaxed">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 border-t border-white/10 pt-5" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <span key={technology} className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-sm text-slate-300">
            {technology}
          </span>
        ))}
      </div>

      {(project.sourceUrl || project.liveDemoUrl) && (
        <div className="mt-5 flex flex-wrap gap-5">
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              className="project-action inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
            >
              Source Code <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="project-action inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
            >
              Live Demo <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  );
};

function App() {
  const allProjects = [...featuredProjects, ...moreProjects, ...hackathonProjects];
  const projectCount = allProjects.length;
  const deploymentCount = allProjects.filter((project) => project.liveDemoUrl).length;

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-slate-100">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />

        <main id="main-content" tabIndex={-1} className="portfolio-main relative z-10">
        <section id="hero" className="hero-section relative flex min-h-[88svh] scroll-mt-24 items-center overflow-hidden px-6 pb-16 pt-32">
          <div className="hero-layout mx-auto grid w-full max-w-[1120px] items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:gap-16">
            <div>
              <p className="availability-badge mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-sm font-medium text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to SWE roles and internships
              </p>
              <h1 className="hero-title max-w-4xl font-display font-bold text-white">
                Asish Ranjan Sahu
              </h1>
              <p className="hero-copy mt-7 text-lg leading-relaxed text-slate-300 md:text-xl">
                Entry-level Full Stack Developer | Java, Spring Boot, React | Open to SWE roles and internships
              </p>
              <div className="hero-actions mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="hero-text-link inline-flex min-h-12 items-center gap-2 px-2 py-3 font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Contact me
                </a>
                <a
                  href="#projects"
                  className="button-secondary inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-semibold text-white transition-colors hover:border-cyan-300"
                >
                  View projects <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="button-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                >
                  Download Resume <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <div className="hero-meta mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <a className="hero-meta-link transition-colors hover:text-cyan-300" href="https://github.com/Asishranjansahu" target="_blank" rel="noopener noreferrer">
                  GitHub activity
                </a>
                <a className="hero-meta-link transition-colors hover:text-cyan-300" href="mailto:asishranjansahu2003@gmail.com">
                  asishranjansahu2003@gmail.com
                </a>
              </div>
            </div>

            <div className="hero-visual mx-auto w-full max-w-[1120px]">
              <img
                src="/profile.jpeg"
                alt="Asish Ranjan Sahu"
                width="844"
                height="768"
                fetchpriority="high"
                decoding="async"
                className="hero-portrait mx-auto aspect-square w-full max-w-[360px] rounded-2xl border border-[var(--border)] object-cover lg:ml-auto"
              />
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="about-section scroll-mt-24 px-6 py-24">
          <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
            <div className="section-heading max-w-xl">
              <p className="section-kicker mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">About</p>
              <h2 id="about-heading" className="font-display text-3xl font-bold text-white md:text-5xl">A bit about me</h2>
            </div>

            <div className="about-content">
              <p className="text-lg leading-relaxed text-slate-200">
                I’m an entry-level full stack developer focused on Java, Spring Boot, and React, and open to SWE roles and internships.
              </p>
              <p className="mt-5 leading-relaxed text-slate-300">
                I earned a B.Tech in Computer Science &amp; Engineering from Vignan Institute of Technology &amp; Management (2021–2025). I’m currently a Virtual Intern at Infosys Springboard, working with a team on a Digital Subsidy &amp; Grant Administration Platform.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <article className="holo-card about-detail-card p-5">
                  <GraduationCap className="mb-4 h-5 w-5 text-cyan-300" aria-hidden="true" />
                  <h3 className="font-semibold text-white">Education</h3>
                  <p className="mt-2 text-slate-300">B.Tech, Computer Science &amp; Engineering</p>
                  <p className="mt-1 text-sm text-slate-400">Vignan Institute of Technology &amp; Management · 2021–2025</p>
                </article>
                <article className="holo-card about-detail-card p-5">
                  <BriefcaseBusiness className="mb-4 h-5 w-5 text-cyan-300" aria-hidden="true" />
                  <h3 className="font-semibold text-white">Current role</h3>
                  <p className="mt-2 text-slate-300">Virtual Intern · Infosys Springboard</p>
                  <p className="mt-1 text-sm text-slate-400">Digital Subsidy &amp; Grant Administration Platform</p>
                </article>
              </div>

              <div className="mt-6 flex flex-wrap gap-5">
                <a href="#projects" className="about-link inline-flex min-h-11 items-center gap-2 font-semibold text-cyan-300">
                  Explore projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#experience" className="about-link inline-flex min-h-11 items-center gap-2 font-semibold text-cyan-300">
                  View experience <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="px-6 pb-12">
          <div className="mx-auto max-w-[1120px]">
            <StatsCard projectCount={projectCount} deploymentCount={deploymentCount} />
          </div>
        </div>

        <section id="projects" className="projects-section scroll-mt-24 px-6 py-24">
          <div className="mx-auto max-w-[1120px]">
            <div className="section-heading mb-10 max-w-2xl">
              <p className="section-kicker mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Selected work</p>
              <h2 className="font-display text-3xl font-bold text-white md:text-5xl">Projects</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} featured />
              ))}
            </div>

            <details className="more-projects group mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white marker:hidden">
                <span>More projects</span>
                <span className="text-sm font-normal text-slate-300 group-open:hidden">Show 2 projects</span>
                <span className="hidden text-sm font-normal text-slate-300 group-open:inline">Hide projects</span>
              </summary>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {moreProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </details>
          </div>
        </section>

        <section id="hackathons" className="hackathons-section scroll-mt-24 border-y border-[var(--border)] bg-[var(--surface)] px-6 py-24">
          <div className="mx-auto max-w-[1120px]">
            <div className="section-heading mb-10 max-w-2xl">
              <p className="section-kicker mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Hackathons</p>
              <h2 className="font-display text-3xl font-bold text-white md:text-5xl">Hackathon projects</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {hackathonProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section scroll-mt-24 border-y border-[var(--border)] bg-[var(--surface)] px-6 py-24">
          <div className="mx-auto max-w-[1120px]">
            <div className="section-heading mb-10 max-w-2xl">
              <p className="section-kicker mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Experience</p>
              <h2 className="font-display text-3xl font-bold text-white md:text-5xl">Building with a team</h2>
            </div>
            <article className="holo-card experience-card max-w-4xl p-6 md:p-9">
              <div className="experience-heading flex flex-col justify-between gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-bold text-white md:text-2xl">Virtual Intern</h3>
                  <p className="mt-2 text-lg font-semibold text-cyan-300">Infosys Springboard</p>
                </div>
                <p className="experience-date text-sm font-medium text-slate-300">Sep 2026 - Present</p>
              </div>
              <div className="py-5">
                <h4 className="text-lg font-semibold text-white">Digital Subsidy &amp; Grant Administration Platform</h4>
                <p className="mt-2 text-sm text-slate-300">Java, Spring Boot, Spring Security, PostgreSQL</p>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li>Worked in a team to build a Java/Spring Boot platform for managing subsidies and grants end to end.</li>
                <li>Added application scoring, duplicate checks and role-based approval for field, district and finance officers.</li>
                <li>Built staged payments with milestone tracking, admin reports and an audit trail of every action.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="skills" className="skills-section scroll-mt-24 px-6 py-24">
          <div className="mx-auto max-w-[1120px]">
            <div className="section-heading mb-10 max-w-2xl">
              <p className="section-kicker mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Technical skills</p>
              <h2 className="font-display text-3xl font-bold text-white md:text-5xl">Tools I work with</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <article key={group.title} className="holo-card skill-group-card p-5 md:p-6">
                  <h3 className="skill-group-title mb-4 text-lg font-semibold text-white">{group.title}</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span key={skill} className={`skill-chip ${skillLogos[skill] ? 'has-logo' : ''}`}>
                        {skillLogos[skill] && (
                          <img
                            src={`/tech-logos/${skillLogos[skill]}.svg`}
                            alt=""
                            aria-hidden="true"
                            width="20"
                            height="20"
                            loading="lazy"
                            decoding="async"
                          />
                        )}
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6">
              <h3 className="text-lg font-semibold text-white">Generative AI &amp; AI-assisted development</h3>
              <p className="mt-2 text-slate-300">
                GitHub Copilot, Claude and ChatGPT for debugging, test generation, code review and learning, used in VS Code, Antigravity and IntelliJ IDEA. Review and validate all AI-generated code before using it.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-24 border-y border-[var(--border)] bg-[var(--surface)] px-6 py-24">
          <div className="mx-auto max-w-[1120px]">
            <div className="section-heading mb-10 max-w-2xl">
              <p className="section-kicker mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Education</p>
              <h2 className="font-display text-3xl font-bold text-white md:text-5xl">Computer Science</h2>
            </div>
            <article className="holo-card max-w-4xl p-6 md:p-9">
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-white md:text-2xl">B.Tech - Computer Science &amp; Engineering</h3>
                  <p className="mt-3 text-lg text-slate-200">Vignan Institute of Technology &amp; Management</p>
                  <p className="mt-1 text-slate-300">Berhampur, Odisha</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-slate-200">Dec 2021 - 2025</p>
                  <p className="mt-2 font-semibold text-cyan-300">GPA: 7.74/10</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <Suspense fallback={<div className="min-h-32" />}>
          <Certifications />
        </Suspense>

        <Suspense fallback={<div className="min-h-32" />}>
          <GithubStats />
        </Suspense>

        <section id="contact" className="contact-section scroll-mt-24 px-6 py-24">
          <div className="mx-auto max-w-[1120px]">
            <div className="holo-card contact-panel grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
              <div>
                <p className="section-kicker mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
                <h2 className="font-display text-3xl font-bold text-white md:text-5xl">Let’s build something useful.</h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Open to entry-level software engineering roles and internships.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 text-slate-200">
                <a className="contact-detail-link flex items-center gap-3 break-all transition-colors hover:text-cyan-300" href="mailto:asishranjansahu2003@gmail.com">
                  <Mail className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                  asishranjansahu2003@gmail.com
                </a>
                <a className="contact-detail-link flex items-center gap-3 transition-colors hover:text-cyan-300" href="tel:+916372411499">
                  <Phone className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                  +91 6372411499
                </a>
                <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-sm">
                  <a
                    href="https://linkedin.com/in/asish-ranjan-sahu-15ab1422b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-300 transition-colors hover:text-cyan-200"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.hackerrank.com/Asish"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-300 transition-colors hover:text-cyan-200"
                  >
                    HackerRank
                  </a>
                </div>
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                  Berhampur, Odisha, India
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background)] px-5 py-3 font-semibold text-white transition-colors hover:border-cyan-300"
                >
                  Download Resume <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
        </main>

        <footer className="border-t border-[var(--border)] px-6 py-6 text-center text-sm text-slate-300">
          © {new Date().getFullYear()} Asish Ranjan Sahu. All rights reserved.
        </footer>
      </div>
    </MotionConfig>
  );
}

export default App;
