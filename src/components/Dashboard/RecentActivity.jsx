import { recentActivities } from '../../data/dashboardData';

export default function RecentActivity() {
  return (
    <div className="card-premium bg-white rounded-xl border border-border-color p-5 sm:p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-dark mb-4">Recent activity</h3>
      <ul className="space-y-1">
        {recentActivities.map((activity) => (
          <li key={activity.id} className="flex items-start gap-3 rounded-lg p-2 -mx-2 transition-colors hover:bg-slate-50">
            <div className="w-8 h-8 rounded-full bg-soft-indigo text-primary flex items-center justify-center text-xs font-semibold">
              {activity.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-dark">
                <span className="font-medium">{activity.user}</span> {activity.action}
              </p>
              <p className="mt-0.5 text-xs text-muted-text">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
