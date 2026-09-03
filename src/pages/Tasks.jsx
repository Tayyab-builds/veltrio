import { useState } from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import PageHeader from '../components/crm/PageHeader';
import Modal from '../components/crm/Modal';
import { tasks as initialTasks } from '../data/tasksData';

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showAdd, setShowAdd] = useState(false);

  // Form state for new task
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    due: '',
    priority: 'Medium',
    assignee: '',
    related: '',
    status: 'Todo',
  });

  const toggleTask = (id) => {
    setTasks((currentTasks) => currentTasks.map(task => task.id === id ? { ...task, status: task.status === 'Completed' ? 'Todo' : 'Completed' } : task));
  };

  const handleAddTask = () => {
    const newId = tasks.length + 1;
    setTasks([...tasks, { id: newId, ...newTask }]);
    setShowAdd(false);
    // Reset form
    setNewTask({
      title: '',
      description: '',
      due: '',
      priority: 'Medium',
      assignee: '',
      related: '',
      status: 'Todo',
    });
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="Tasks"
        subtitle="Stay organized and never miss an important follow-up."
        actions={
          <button
            onClick={() => setShowAdd(true)}
            className="btn-premium px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg"
          >
            Add Task
          </button>
        }
      />

      {/* Tasks list */}
      <div className="card-premium bg-white rounded-xl border border-border-color shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border-color">
          <input
            type="search"
            placeholder="Search tasks..."
            className="px-3 py-2 border border-border-color rounded-lg text-sm w-full sm:w-64"
          />
        </div>
        <ul className="divide-y divide-border-color">
          {tasks.map(task => (
            <li key={task.id} className={`flex items-start gap-3 p-4 transition-colors hover:bg-slate-50 ${task.status === 'Completed' ? 'opacity-60' : ''}`}>
              <input
                type="checkbox"
                checked={task.status === 'Completed'}
                onChange={() => toggleTask(task.id)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <div className="flex-1">
                <p className={`text-sm font-medium text-dark ${task.status === 'Completed' ? 'line-through' : ''}`}>{task.title}</p>
                <p className="text-xs text-muted-text">Related: {task.related} · Due {task.due}</p>
              </div>
              <span className={`rounded-full px-2 py-1 text-xs font-semibold ${task.priority === 'High' ? 'bg-red-50 text-red-600' : task.priority === 'Medium' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-500'}`}>
                {task.priority}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Task Modal */}
      <Modal isOpen={showAdd} onClose={() => setShowAdd(false)} title="Add Task">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
          <input
            type="text"
            placeholder="Task title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="w-full px-3 py-2 border border-border-color rounded-lg"
            required
          />
          <textarea
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            className="w-full px-3 py-2 border border-border-color rounded-lg"
            rows="3"
          />
          <input
            type="text"
            placeholder="Related contact/company"
            value={newTask.related}
            onChange={(e) => setNewTask({ ...newTask, related: e.target.value })}
            className="w-full px-3 py-2 border border-border-color rounded-lg"
          />
          <input
            type="text"
            placeholder="Due date (e.g., Today, 2:00 PM)"
            value={newTask.due}
            onChange={(e) => setNewTask({ ...newTask, due: e.target.value })}
            className="w-full px-3 py-2 border border-border-color rounded-lg"
          />
          <select
            value={newTask.priority}
            onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            className="w-full px-3 py-2 border border-border-color rounded-lg"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <input
            type="text"
            placeholder="Assignee"
            value={newTask.assignee}
            onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
            className="w-full px-3 py-2 border border-border-color rounded-lg"
          />
          <button type="submit" className="btn-premium w-full py-2 bg-primary text-white rounded-lg">
            Save Task
          </button>
        </form>
      </Modal>
    </DashboardLayout>
  );
}
