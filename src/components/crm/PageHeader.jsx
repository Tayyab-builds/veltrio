export default function PageHeader({ title, subtitle, actions }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl sm:text-[1.75rem] leading-tight font-bold tracking-tight text-dark">{title}</h1>
        {subtitle && <p className="max-w-2xl text-sm text-secondary-text mt-1.5">{subtitle}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2 shrink-0">{actions}</div>}
    </div>
  );
}

