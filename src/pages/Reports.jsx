import DashboardLayout from '../components/Dashboard/DashboardLayout';
import PageHeader from '../components/crm/PageHeader';
import { reports } from '../data/reportsData';
import { RenderIcon } from '../components/ui/icons';

export default function Reports() {
  return (
    <DashboardLayout>
      <PageHeader title="Reports" subtitle="Turn your CRM data into actionable business insights." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map(report => (
          <div key={report.id} className="card-premium bg-white rounded-xl border border-border-color p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded-lg bg-soft-indigo text-primary">
                <RenderIcon name={report.icon} className="w-6 h-6" />
              </span>
              <h3 className="text-lg font-semibold text-dark">{report.title}</h3>
            </div>
            <p className="text-sm text-secondary-text mb-4">{report.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-text">Last generated: {report.lastGenerated}</span>
              <button className="text-sm text-primary hover:underline">View Report</button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
