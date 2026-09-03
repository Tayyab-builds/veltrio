import { useState } from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import PageHeader from '../components/crm/PageHeader';
import StatusBadge from '../components/crm/StatusBadge';
import Modal from '../components/crm/Modal';
import { contacts } from '../data/contactsData';

export default function Contacts() {
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);

  const filtered = contacts.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <PageHeader 
        title="Contacts" 
        subtitle="Manage your customers and relationships in one place."
        actions={
          <>
            <button className="btn-premium px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary-dark">Import</button>
            <button 
              onClick={() => setShowAdd(true)}
              className="btn-premium px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary-dark"
            >
              Add Contact
            </button>
          </>
        }
      />

      <div className="card-premium bg-white rounded-xl border border-border-color shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border-color flex flex-col sm:flex-row gap-3">
          <input
            type="search"
            placeholder="Search contacts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border border-border-color rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <select className="px-3 py-2 border border-border-color rounded-lg text-sm">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-text border-b border-border-color">
                <th className="p-3 font-medium">Name</th>
                <th className="p-3 font-medium">Company</th>
                <th className="p-3 font-medium">Email</th>
                <th className="p-3 font-medium">Phone</th>
                <th className="p-3 font-medium">Status</th>
                <th className="p-3 font-medium">Owner</th>
                <th className="p-3 font-medium">Last Activity</th>
                <th className="p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-color">
              {filtered.map(contact => (
                <tr key={contact.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3 font-medium text-dark">{contact.name}</td>
                  <td className="p-3 text-secondary-text">{contact.company}</td>
                  <td className="p-3 text-secondary-text">{contact.email}</td>
                  <td className="p-3 text-secondary-text">{contact.phone}</td>
                  <td className="p-3"><StatusBadge status={contact.status} /></td>
                  <td className="p-3 text-secondary-text">{contact.owner}</td>
                  <td className="p-3 text-secondary-text">{contact.lastActivity}</td>
                  <td className="p-3">
                    <button className="text-primary hover:underline">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={showAdd} onClose={() => setShowAdd(false)} title="Add Contact">
        <form className="space-y-4">
          <input type="text" placeholder="Full name" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <input type="tel" placeholder="Phone" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <input type="text" placeholder="Company" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <div className="flex gap-4">
            <input type="text" placeholder="Job title" className="flex-1 px-3 py-2 border border-border-color rounded-lg" />
            <input type="text" placeholder="Owner" className="flex-1 px-3 py-2 border border-border-color rounded-lg" />
          </div>
          <button type="button" onClick={() => setShowAdd(false)} className="btn-premium w-full py-2 bg-primary text-white rounded-lg">Save</button>
        </form>
      </Modal>
    </DashboardLayout>
  );
}
