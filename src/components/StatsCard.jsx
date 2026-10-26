import React from 'react';
import { Layers3, Rocket, ShieldCheck, Workflow } from 'lucide-react';

const proofPoints = [
  { icon: ShieldCheck, label: 'Testing & CI/CD' },
  { icon: Workflow, label: 'Deployment (Vercel, AWS)' },
];

const StatsCard = ({ projectCount, deploymentCount }) => (
  <div className="holo-card stats-strip grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-center lg:p-5">
    <div className="stat-cell rounded-lg border border-[var(--border)] bg-[var(--background)] p-4">
        <div className="mb-1 flex items-center gap-2 text-cyan-300">
          <Layers3 className="h-4 w-4" aria-hidden="true" />
          <span className="text-sm font-medium">Projects</span>
        </div>
        <span className="text-2xl font-bold text-white">{projectCount}</span>
    </div>
    <div className="stat-cell rounded-lg border border-[var(--border)] bg-[var(--background)] p-4">
        <div className="mb-1 flex items-center gap-2 text-cyan-300">
          <Rocket className="h-4 w-4" aria-hidden="true" />
          <span className="text-sm font-medium">Deployments</span>
        </div>
        <span className="text-2xl font-bold text-white">{deploymentCount}</span>
    </div>

    <div className="stat-proof-points flex flex-wrap gap-2 lg:col-span-2">
      {proofPoints.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-slate-200"
        >
          <Icon className="h-4 w-4 text-cyan-300" aria-hidden="true" />
          {label}
        </span>
      ))}
    </div>
  </div>
);

export default StatsCard;
