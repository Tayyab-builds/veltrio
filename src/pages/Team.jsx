import { useState } from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import PageHeader from '../components/crm/PageHeader';
import StatusBadge from '../components/crm/StatusBadge';
import Modal from '../components/crm/Modal';
import { teamMembers } from '../data/teamData';

export default function Team() {
  const [showInvite, setShowInvite] = useState(false);

  return (
    <DashboardLayout>
      <PageHeader
        title="Team"
        subtitle="Manage your workspace members and their roles."
        actions={
          <button onClick={() => setShowInvite(true)} className="btn-premium px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg">
            Invite Member
          </button>
        }
      />

      <div className="card-premium bg-white rounded-xl border border-border-color shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-text border-b border-border-color">
                <th className="p-3 font-medium">Member</th>
                <th className="p-3 font-medium">Email</th>
                <th className="p-3 font-medium">Role</th>
                <th className="p-3 font-medium">Status</th>
                <th className="p-3 font-medium">Last Active</th>
                <th className="p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-color">
              {teamMembers.map(member => (
                <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3 font-medium text-dark">{member.name}</td>
                  <td className="p-3 text-secondary-text">{member.email}</td>
                  <td className="p-3 text-secondary-text">{member.role}</td>
                  <td className="p-3"><StatusBadge status={member.status} /></td>
                  <td className="p-3 text-secondary-text">{member.lastActive}</td>
                  <td className="p-3">
                    <button className="text-primary hover:underline">Edit</button>
                    <button className="ml-2 text-red-500 hover:underline">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={showInvite} onClose={() => setShowInvite(false)} title="Invite Member">
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <select className="w-full px-3 py-2 border border-border-color rounded-lg">
            <option>Admin</option>
            <option>Manager</option>
            <option>Sales</option>
            <option>Member</option>
          </select>
          <button type="button" onClick={() => setShowInvite(false)} className="btn-premium w-full py-2 bg-primary text-white rounded-lg">Send Invite</button>
        </form>
      </Modal>
    </DashboardLayout>
  );
}
