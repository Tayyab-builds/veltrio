import { useState } from 'react';
import { upcomingTasks } from '../../data/dashboardData';

export default function UpcomingTasks() {
  const [tasks, setTasks] = useState(upcomingTasks);

  const toggleTask = (id) => {
    setTasks((currentTasks) => currentTasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  return (
    <div className="card-premium bg-white rounded-xl border border-border-color p-5 sm:p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-dark mb-4">Upcoming tasks</h3>
      <ul className="space-y-1">
        {tasks.map((task) => (
          <li key={task.id} className={`flex items-start gap-3 rounded-lg p-2 -mx-2 transition-colors hover:bg-slate-50 ${task.done ? 'opacity-60' : ''}`}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <div className="flex-1">
              <p className={`text-sm text-dark ${task.done ? 'line-through' : ''}`}>{task.title}</p>
              <p className="mt-0.5 text-xs text-muted-text">{task.date}</p>
            </div>
            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
              task.priority === 'high' ? 'bg-red-50 text-red-600' : task.priority === 'medium' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-500'
            }`}>
              {task.priority}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
