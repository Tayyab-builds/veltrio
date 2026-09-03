import { useState } from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import PageHeader from '../components/crm/PageHeader';
import StatusBadge from '../components/crm/StatusBadge';
import Modal from '../components/crm/Modal';
import { leads } from '../data/leadsData';

export default function Leads() {
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(search.toLowerCase()) || lead.company.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <PageHeader
        title="Leads"
        subtitle="Capture, qualify, and convert your most promising prospects."
        actions={
          <>
            <button className="btn-premium px-4 py-2 text-sm font-medium bg-white text-primary border border-primary/20 rounded-lg hover:bg-soft-indigo">
              Filters
            </button>
            <button
              onClick={() => setShowAdd(true)}
              className="btn-premium px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary-dark"
            >
              Add Lead
            </button>
          </>
        }
      />

      {/* Table card */}
      <div className="card-premium bg-white rounded-xl border border-border-color shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-border-color flex flex-col sm:flex-row gap-3">
          <input
            type="search"
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border border-border-color rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-border-color rounded-lg text-sm"
          >
            <option>All</option>
            <option>New</option>
            <option>Contacted</option>
            <option>Qualified</option>
            <option>Unqualified</option>
            <option>Converted</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-text border-b border-border-color">
                <th className="p-3 font-medium">Lead</th>
                <th className="p-3 font-medium">Company</th>
                <th className="p-3 font-medium">Source</th>
                <th className="p-3 font-medium">Status</th>
                <th className="p-3 font-medium">Owner</th>
                <th className="p-3 font-medium">Value</th>
                <th className="p-3 font-medium">Created</th>
                <th className="p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-color">
              {filteredLeads.map(lead => (
                <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3 font-medium text-dark">{lead.name}</td>
                  <td className="p-3 text-secondary-text">{lead.company}</td>
                  <td className="p-3 text-secondary-text">{lead.source}</td>
                  <td className="p-3"><StatusBadge status={lead.status} /></td>
                  <td className="p-3 text-secondary-text">{lead.owner}</td>
                  <td className="p-3 font-medium text-dark">{lead.value}</td>
                  <td className="p-3 text-secondary-text">{lead.created}</td>
                  <td className="p-3">
                    <button className="text-primary hover:underline">Edit</button>
                    <button className="ml-2 text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Lead Modal */}
      <Modal isOpen={showAdd} onClose={() => setShowAdd(false)} title="Add Lead">
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <input type="text" placeholder="Company" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <select className="w-full px-3 py-2 border border-border-color rounded-lg">
            <option>Website</option>
            <option>Referral</option>
            <option>LinkedIn</option>
            <option>Google</option>
            <option>Campaign</option>
          </select>
          <select className="w-full px-3 py-2 border border-border-color rounded-lg">
            <option>New</option>
            <option>Contacted</option>
            <option>Qualified</option>
            <option>Unqualified</option>
            <option>Converted</option>
          </select>
          <input type="text" placeholder="Estimated value" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <input type="text" placeholder="Owner" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <textarea placeholder="Notes" className="w-full px-3 py-2 border border-border-color rounded-lg" rows="3" />
          <button type="button" onClick={() => setShowAdd(false)} className="btn-premium w-full py-2 bg-primary text-white rounded-lg">
            Save Lead
          </button>
        </form>
      </Modal>
    </DashboardLayout>
  );
}
