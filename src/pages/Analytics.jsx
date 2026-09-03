import DashboardLayout from '../components/Dashboard/DashboardLayout';
import PageHeader from '../components/crm/PageHeader';
import { analyticsKpis, revenueChartData, leadSources, salesPerformance } from '../data/analyticsData';

export default function Analytics() {
  return (
    <DashboardLayout>
      <PageHeader title="Analytics" subtitle="Understand your sales performance and customer growth." />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {analyticsKpis.map((kpi, idx) => (
          <div key={idx} className="card-premium bg-white rounded-xl border border-border-color p-5 shadow-sm">
            <p className="text-sm text-muted-text">{kpi.label}</p>
            <p className="text-2xl font-bold text-dark">{kpi.value}</p>
            <p className="text-xs font-medium text-emerald-600">{kpi.change}</p>
          </div>
        ))}
      </div>

      {/* Revenue Chart (simple bar) */}
      <div className="card-premium bg-white rounded-xl border border-border-color p-5 sm:p-6 shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-dark mb-4">Revenue Performance</h3>
        <div className="flex items-end justify-between gap-2 h-40">
          {revenueChartData.values.map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-primary rounded-t" style={{ height: `${(val / Math.max(...revenueChartData.values)) * 100}%` }} />
              <span className="text-xs text-muted-text">{revenueChartData.labels[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lead Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card-premium bg-white rounded-xl border border-border-color p-5 sm:p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-dark mb-4">Lead Sources</h3>
          {leadSources.map((source, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span>{source.source}</span>
                <span className="font-medium">{source.value}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: `${source.value}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Sales Performance */}
        <div className="card-premium bg-white rounded-xl border border-border-color p-5 sm:p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-dark mb-4">Sales Performance</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-text border-b border-border-color">
                <th className="pb-2">Rep</th>
                <th className="pb-2">Deals</th>
                <th className="pb-2">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-color">
              {salesPerformance.map((rep, idx) => (
                <tr key={idx}>
                  <td className="py-2">{rep.rep}</td>
                  <td className="py-2">{rep.deals}</td>
                  <td className="py-2 font-medium">{rep.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
