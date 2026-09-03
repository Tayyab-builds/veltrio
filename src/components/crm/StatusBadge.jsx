const statusColors = {
  Active: 'bg-emerald-100 text-emerald-700',
  Inactive: 'bg-slate-100 text-slate-500',
  New: 'bg-blue-100 text-blue-700',
  Contacted: 'bg-indigo-100 text-indigo-700',
  Qualified: 'bg-violet-100 text-violet-700',
  Unqualified: 'bg-red-100 text-red-700',
  Converted: 'bg-emerald-100 text-emerald-700',
  Won: 'bg-emerald-100 text-emerald-700',
  Lost: 'bg-red-100 text-red-700',
  Todo: 'bg-slate-100 text-slate-600',
  'In Progress': 'bg-blue-100 text-blue-700',
  Completed: 'bg-emerald-100 text-emerald-700',
  Invited: 'bg-amber-100 text-amber-700',
  Suspended: 'bg-red-100 text-red-700',
};

export default function StatusBadge({ status }) {
  const color = statusColors[status] || 'bg-slate-100 text-slate-600';
  return (
    <span className={`inline-flex items-center whitespace-nowrap px-2.5 py-1 rounded-full text-xs font-semibold ${color}`}>
      {status}
    </span>
  );
}
