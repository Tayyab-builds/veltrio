import { quickActions, user } from '../../data/dashboardData';
import { RenderIcon, PlusIcon } from '../ui/icons';

export default function WelcomeSection() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-1.5">Sales workspace</p>
        <h2 className="text-2xl sm:text-[1.75rem] leading-tight font-bold tracking-tight text-dark">Good morning, {user.name}</h2>
        <p className="mt-1.5 text-sm text-secondary-text">Here’s an overview of your sales and customer activity.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {quickActions.map((action) => (
          <button
            key={action.id}
            className="btn-premium hidden sm:inline-flex items-center gap-2 h-10 px-4 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark"
          >
            <RenderIcon name={action.icon} className="w-4 h-4" />
            <span>{action.label}</span>
          </button>
        ))}
        <button
          className="btn-premium sm:hidden inline-flex items-center gap-2 h-10 px-4 text-sm font-semibold text-white bg-primary rounded-lg"
        >
          <PlusIcon className="w-4 h-4" />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}
