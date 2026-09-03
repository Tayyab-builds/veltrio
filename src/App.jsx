import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import BookDemoPage from './pages/BookDemoPage';
import DashboardPage from './pages/DashboardPage';
import Contacts from './pages/Contacts';
import Leads from './pages/Leads';
import Deals from './pages/Deals';
import Pipeline from './pages/Pipeline';
import Tasks from './pages/Tasks';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';
import Team from './pages/Team';
import Settings from './pages/Settings';
import Navbar from "./components/layout/Navbar";
import Hero from "./components/features/Hero";
import SocialProof from "./components/features/SocialProof";
import ProductOverview from "./components/features/ProductOverview";
import FeaturesSection from "./components/features/Features";
import PipelineSection from "./components/features/Pipeline";
import AnalyticsSection from "./components/features/Analytics";
import Collaboration from "./components/features/Collaboration";
import HowItWorks from "./components/features/HowItWorks";
import Benefits from "./components/features/Benefits";
import FinalCTA from "./components/features/FinalCTA";
import Footer from "./components/layout/Footer";
import VeltrioAI from './components/ai/VeltrioAI';
import About from './pages/About';
import Pricing from './pages/Pricing';
import InfoPage from './pages/InfoPage';
import Contact from './pages/Contact';

export default function App() {
  const path = window.location.pathname;

  // Auth routes
  if (path === '/login') return <LoginPage />;
  if (path === '/signup') return <SignupPage />;
  if (path === '/forgot-password') return <ForgotPasswordPage />;
  if (path === '/book-demo') return <BookDemoPage />;

  // CRM application routes
  if (path === '/dashboard') return <DashboardPage />;
  if (path === '/contacts') return <Contacts />;
  if (path === '/leads') return <Leads />;
  if (path === '/deals') return <Deals />;
  if (path === '/pipeline') return <Pipeline />;
  if (path === '/tasks') return <Tasks />;
  if (path === '/analytics') return <Analytics />;
  if (path === '/reports') return <Reports />;
  if (path === '/team') return <Team />;
  if (path === '/settings') return <Settings />;
  if (path === '/about') return <About />;
  if (path === '/pricing') return <Pricing />;
  if (path === '/integrations') return <InfoPage page="integrations" />;
  if (path === '/solutions') return <InfoPage page="solutions" />;
  if (path === '/resources') return <InfoPage page="resources" />;
  if (path === '/documentation') return <InfoPage page="documentation" />;
  if (path === '/help') return <InfoPage page="help" />;
  if (path === '/privacy') return <InfoPage page="privacy" />;
  if (path === '/terms') return <InfoPage page="terms" />;
  if (path === '/security') return <InfoPage page="security" />;
  if (path === '/contact') return <Contact />;

  // Landing page
  return (
    <div className="min-h-screen bg-main-bg text-primary-text">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProductOverview />
        <FeaturesSection />
        <PipelineSection />
        <AnalyticsSection />
        <Collaboration />
        <HowItWorks />
        <Benefits />
        <FinalCTA />
      </main>
      <Footer />
      <VeltrioAI />
    </div>
  );
}
