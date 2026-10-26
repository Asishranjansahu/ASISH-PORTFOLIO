import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    year: '2025',
  },
  {
    name: 'Java Programming Fundamentals',
    issuer: 'Infosys Springboard',
    year: '2026',
  },
  {
    name: 'Java Full Stack',
    issuer: 'Apna College',
    year: '2024',
  },
  {
    name: 'Alpha (DSA with Java)',
    issuer: 'Apna College',
    year: null,
    certificateUrl: '/certificates/alpha-dsa-with-java.pdf',
  },
];

const Certifications = () => (
  <section id="certifications" className="certifications-section scroll-mt-24 px-6 py-24">
    <div className="mx-auto max-w-[1120px]">
      <div className="section-heading mb-10 max-w-2xl">
        <p className="section-kicker mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Certifications &amp; participation</p>
        <h2 className="font-display text-3xl font-bold text-white md:text-5xl">Learning and involvement</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {certifications.map((certification) => (
          <article key={certification.name} className="holo-card certificate-card flex min-h-48 flex-col p-5 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{certification.name}</h3>
                <p className="mt-2 text-slate-300">{certification.issuer}</p>
              </div>
              {certification.year ? (
                <time dateTime={certification.year} className="shrink-0 text-sm text-slate-300">
                  {certification.year}
                </time>
              ) : (
                <span className="shrink-0 text-sm text-slate-300">Year not stated</span>
              )}
            </div>
            <div className="mt-auto border-t border-[var(--border)] pt-4">
              {certification.certificateUrl ? (
                <a
                  href={certification.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${certification.name} certificate PDF`}
                  className="certificate-action inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 underline-offset-4 hover:text-cyan-200 hover:underline"
                >
                  View Certificate (PDF) <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : (
                <p className="text-sm text-slate-400">Certificate verification link unavailable</p>
              )}
            </div>
          </article>
        ))}
        <article className="holo-card participation-card p-5 sm:col-span-2 sm:p-6 xl:col-span-3">
          <p className="text-slate-200">
            Participant: Team Tech Asish, TechSurge 2K26 (HackIndia, BVRIT Hyderabad, Sep 2026)
          </p>
          <p className="mt-3 text-slate-300">
            Participated in college-level coding contests; maintained well-documented GitHub repositories.
          </p>
        </article>
      </div>
    </div>
  </section>
);

export default Certifications;
