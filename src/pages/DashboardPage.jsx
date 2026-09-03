import DashboardLayout from '../components/Dashboard/DashboardLayout';
import WelcomeSection from '../components/Dashboard/WelcomeSection';
import KpiGrid from '../components/Dashboard/KpiGrid';
import RevenueOverview from '../components/Dashboard/RevenueOverview';
import SalesPipeline from '../components/Dashboard/SalesPipeline';
import RecentActivity from '../components/Dashboard/RecentActivity';
import UpcomingTasks from '../components/Dashboard/UpcomingTasks';
import TopCustomers from '../components/Dashboard/TopCustomers';
import VeltrioAI from '../components/ai/VeltrioAI';

export default function DashboardPage() {
  return (
    <>
      <DashboardLayout>
        <div className="space-y-6">
          <WelcomeSection />
          <KpiGrid />
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <RevenueOverview />
            </div>
            <div>
              <SalesPipeline />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <RecentActivity />
            <UpcomingTasks />
            <TopCustomers />
          </div>
        </div>
      </DashboardLayout>
      <VeltrioAI />
    </>
  );
}
