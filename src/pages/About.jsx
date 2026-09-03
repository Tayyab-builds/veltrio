import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CheckIcon } from '../components/ui/icons';

const values = [
  'Customer-first design',
  'Simplicity over complexity',
  'Performance you can feel',
  'Reliable and secure',
];

const stats = [
  { value: '10K+', label: 'Teams trust Veltrio' },
  { value: '50+', label: 'Countries served' },
  { value: '99.9%', label: 'Platform uptime' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-main-bg text-primary-text">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">About Veltrio</span>
          <h1 className="mt-2 text-3xl font-extrabold text-dark sm:text-4xl">
            We&apos;re building the future of client management
          </h1>
          <p className="mt-4 text-base text-secondary-text">
            Veltrio helps modern teams manage leads, clients, pipelines, and performance in one premium workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dark">Our Mission</h2>
            <p className="leading-relaxed text-secondary-text">
              To simplify sales and client management for growing businesses. We believe great software should feel effortless, so teams can focus on relationships, not spreadsheets.
            </p>
            <p className="leading-relaxed text-secondary-text">
              Veltrio was born from the frustration of juggling disconnected tools. We wanted one clean, modern workspace where leads, deals, tasks, and analytics live together.
            </p>
          </div>
          <div className="rounded-2xl border border-border-color bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-dark">Core Values</h2>
            <ul className="space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-2 text-secondary-text">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border-color bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-primary">{stat.value}</div>
              <div className="mt-1 text-sm text-secondary-text">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
