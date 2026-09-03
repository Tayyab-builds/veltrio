import { notifications } from '../../data/dashboardData';

export default function NotificationPanel() {
  return (
    <div className="absolute right-0 mt-2 w-80 bg-white border border-border-color rounded-xl shadow-lg py-2 z-50">
      <div className="px-4 py-2 border-b border-border-color">
        <h3 className="text-sm font-semibold text-dark">Notifications</h3>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`px-4 py-3 flex items-start gap-3 hover:bg-slate-50 transition-colors ${
              notification.unread ? 'bg-soft-indigo/40' : ''
            }`}
          >
            <span className={`mt-1 w-2 h-2 rounded-full ${notification.unread ? 'bg-primary' : 'bg-transparent'}`} />
            <div className="flex-1">
              <p className="text-sm text-dark">{notification.text}</p>
              <p className="text-xs text-muted-text">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}