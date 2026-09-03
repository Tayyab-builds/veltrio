import { useState } from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import PageHeader from '../components/crm/PageHeader';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Account');

  const tabs = ['Account', 'Workspace', 'Notifications', 'Security', 'Billing', 'Integrations'];

  return (
    <DashboardLayout>
      <PageHeader title="Settings" subtitle="Manage your account, workspace, and preferences." />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Settings Navigation */}
        <div className="lg:w-64 bg-white rounded-xl border border-border-color p-2 shrink-0">
          <nav className="space-y-1">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab ? 'bg-soft-indigo text-primary' : 'text-secondary-text hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-white rounded-xl border border-border-color p-6">
          {activeTab === 'Account' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-dark">Profile</h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-semibold">TA</div>
                <div>
                  <p className="font-medium text-dark">Tayyab</p>
                  <p className="text-sm text-muted-text">tayyab@veltrio.com</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full name" className="px-3 py-2 border border-border-color rounded-lg" />
                <input type="email" placeholder="Email" className="px-3 py-2 border border-border-color rounded-lg" />
                <input type="text" placeholder="Job title" className="px-3 py-2 border border-border-color rounded-lg" />
              </div>
              <button className="btn-premium px-4 py-2 bg-primary text-white rounded-lg">Save Changes</button>
            </div>
          )}

          {activeTab === 'Workspace' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-dark">Workspace</h3>
              <input type="text" placeholder="Workspace name" className="w-full px-3 py-2 border border-border-color rounded-lg" />
              <input type="text" placeholder="Workspace URL" className="w-full px-3 py-2 border border-border-color rounded-lg" />
              <input type="text" placeholder="Industry" className="w-full px-3 py-2 border border-border-color rounded-lg" />
              <select className="w-full px-3 py-2 border border-border-color rounded-lg">
                <option>UTC-05:00 Eastern Time</option>
                <option>UTC+00:00 London</option>
                <option>UTC+05:00 Pakistan</option>
              </select>
            </div>
          )}

          {activeTab === 'Notifications' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-dark">Notifications</h3>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary" />
                <span>Email notifications</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="h-4 w-4 text-primary" />
                <span>Task reminders</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="h-4 w-4 text-primary" />
                <span>Deal updates</span>
              </label>
            </div>
          )}

          {activeTab === 'Security' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-dark">Security</h3>
              <input type="password" placeholder="Current password" className="w-full px-3 py-2 border border-border-color rounded-lg" />
              <input type="password" placeholder="New password" className="w-full px-3 py-2 border border-border-color rounded-lg" />
              <input type="password" placeholder="Confirm new password" className="w-full px-3 py-2 border border-border-color rounded-lg" />
              <button className="btn-premium px-4 py-2 bg-primary text-white rounded-lg">Update Password</button>
            </div>
          )}

          {activeTab === 'Billing' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-dark">Billing</h3>
              <p className="text-sm text-secondary-text">Current plan: <span className="font-semibold text-dark">Veltrio Pro</span> — $29/month</p>
              <button className="btn-premium px-4 py-2 bg-primary text-white rounded-lg">Manage Plan</button>
            </div>
          )}

          {activeTab === 'Integrations' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-dark">Integrations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-border-color rounded-lg p-4 flex items-center justify-between">
                  <span>Google</span>
                  <span className="text-emerald-600 text-sm">Connected</span>
                </div>
                <div className="border border-border-color rounded-lg p-4 flex items-center justify-between">
                  <span>Slack</span>
                  <span className="text-slate-400 text-sm">Not connected</span>
                </div>
                <div className="border border-border-color rounded-lg p-4 flex items-center justify-between">
                  <span>Microsoft</span>
                  <span className="text-slate-400 text-sm">Not connected</span>
                </div>
                <div className="border border-border-color rounded-lg p-4 flex items-center justify-between">
                  <span>Zapier</span>
                  <span className="text-slate-400 text-sm">Not connected</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
