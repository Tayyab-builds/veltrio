import { useState } from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import PageHeader from '../components/crm/PageHeader';
import StatusBadge from '../components/crm/StatusBadge';
import Modal from '../components/crm/Modal';
import { deals } from '../data/dealsData';

export default function Deals() {
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);

  const totalPipeline = deals.reduce((sum, d) => sum + parseInt(d.value.replace(/\D/g, '')), 0);
  const openDeals = deals.filter(d => d.stage !== 'Won' && d.stage !== 'Lost').length;
  const wonDeals = deals.filter(d => d.stage === 'Won').length;
  const winRate = Math.round((wonDeals / deals.length) * 100) + '%';

  const filteredDeals = deals.filter(d => d.name.toLowerCase().includes(search.toLowerCase()) || d.company.toLowerCase().includes(search.toLowerCase()));

  return (
    <DashboardLayout>
      <PageHeader
        title="Deals"
        subtitle="Track opportunities and keep your sales moving forward."
        actions={
          <button onClick={() => setShowAdd(true)} className="btn-premium px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary-dark">
            Add Deal
          </button>
        }
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card-premium bg-white rounded-xl border border-border-color p-5 shadow-sm">
          <p className="text-sm text-muted-text">Total Pipeline</p>
          <p className="text-2xl font-bold text-dark">${totalPipeline.toLocaleString()}</p>
        </div>
        <div className="card-premium bg-white rounded-xl border border-border-color p-5 shadow-sm">
          <p className="text-sm text-muted-text">Open Deals</p>
          <p className="text-2xl font-bold text-dark">{openDeals}</p>
        </div>
        <div className="card-premium bg-white rounded-xl border border-border-color p-5 shadow-sm">
          <p className="text-sm text-muted-text">Won Deals</p>
          <p className="text-2xl font-bold text-dark">{wonDeals}</p>
        </div>
        <div className="card-premium bg-white rounded-xl border border-border-color p-5 shadow-sm">
          <p className="text-sm text-muted-text">Win Rate</p>
          <p className="text-2xl font-bold text-dark">{winRate}</p>
        </div>
      </div>

      {/* Deals Table */}
      <div className="card-premium bg-white rounded-xl border border-border-color shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border-color">
          <input
            type="search"
            placeholder="Search deals..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border border-border-color rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-text border-b border-border-color">
                <th className="p-3 font-medium">Deal</th>
                <th className="p-3 font-medium">Company</th>
                <th className="p-3 font-medium">Value</th>
                <th className="p-3 font-medium">Stage</th>
                <th className="p-3 font-medium">Probability</th>
                <th className="p-3 font-medium">Owner</th>
                <th className="p-3 font-medium">Expected Close</th>
                <th className="p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-color">
              {filteredDeals.map(deal => (
                <tr key={deal.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3 font-medium text-dark">{deal.name}</td>
                  <td className="p-3 text-secondary-text">{deal.company}</td>
                  <td className="p-3 font-medium text-dark">{deal.value}</td>
                  <td className="p-3"><StatusBadge status={deal.stage} /></td>
                  <td className="p-3 text-secondary-text">{deal.probability}%</td>
                  <td className="p-3 text-secondary-text">{deal.owner}</td>
                  <td className="p-3 text-secondary-text">{deal.expectedClose}</td>
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

      {/* Add Deal Modal */}
      <Modal isOpen={showAdd} onClose={() => setShowAdd(false)} title="Add Deal">
        <form className="space-y-4">
          <input type="text" placeholder="Deal name" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <input type="text" placeholder="Company" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <input type="text" placeholder="Value" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <select className="w-full px-3 py-2 border border-border-color rounded-lg">
            <option>New Lead</option>
            <option>Qualified</option>
            <option>Proposal</option>
            <option>Negotiation</option>
            <option>Won</option>
            <option>Lost</option>
          </select>
          <input type="text" placeholder="Probability" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <input type="text" placeholder="Expected close" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <input type="text" placeholder="Owner" className="w-full px-3 py-2 border border-border-color rounded-lg" />
          <textarea placeholder="Notes" className="w-full px-3 py-2 border border-border-color rounded-lg" rows="3" />
          <button type="button" onClick={() => setShowAdd(false)} className="btn-premium w-full py-2 bg-primary text-white rounded-lg">Save Deal</button>
        </form>
      </Modal>
    </DashboardLayout>
  );
}
