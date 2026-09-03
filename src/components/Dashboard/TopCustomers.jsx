import { topCustomers } from '../../data/dashboardData';

export default function TopCustomers() {
  return (
    <div className="card-premium bg-white rounded-xl border border-border-color p-5 sm:p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-dark mb-4">Top customers</h3>
      <div className="overflow-x-auto -mx-2 px-2">
        <table className="w-full min-w-[420px] text-sm">
          <thead>
            <tr className="text-left text-muted-text border-b border-border-color">
              <th className="pb-3 font-medium">Customer</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 text-right font-medium">Deals</th>
              <th className="pb-3 text-right font-medium">Revenue</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-color">
            {topCustomers.map((customer) => (
              <tr key={customer.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-3 font-medium text-dark">{customer.name}</td>
                <td className="py-3">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                    {customer.status}
                  </span>
                </td>
                <td className="py-3 text-right text-dark">{customer.deals}</td>
                <td className="py-3 text-right text-dark font-semibold">{customer.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
