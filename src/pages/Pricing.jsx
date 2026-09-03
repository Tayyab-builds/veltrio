import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CheckIcon } from '../components/ui/icons';

const plans = [
  {
    name: 'Free', price: '$0', period: '/month', description: 'For individuals starting out.',
    features: ['Up to 100 contacts', 'Basic pipeline', 'Task management', 'Community support'], cta: 'Start Free', href: '/signup', featured: false,
  },
  {
    name: 'Pro', price: '$29', period: '/month', description: 'For growing teams that need more power.',
    features: ['Unlimited contacts', 'Advanced pipeline', 'AI assistant', 'Priority support'], cta: 'Start 14-day Trial', href: '/signup', featured: true,
  },
  {
    name: 'Enterprise', price: 'Custom', period: '', description: 'For organizations with advanced needs.',
    features: ['Everything in Pro', 'Custom integrations', 'Dedicated success manager', 'SSO & advanced security'], cta: 'Contact Sales', href: '/book-demo', featured: false,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-main-bg text-primary-text">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Pricing</span>
          <h1 className="mt-2 text-3xl font-extrabold text-dark sm:text-4xl">Plans that scale with your team</h1>
          <p className="mt-4 text-base text-secondary-text">Start free, upgrade when you&apos;re ready. No hidden fees.</p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`flex flex-col rounded-2xl border p-8 shadow-sm ${plan.featured ? 'border-primary/30 bg-white ring-2 ring-primary/20' : 'border-border-color bg-white'}`}>
              <h2 className="text-lg font-bold text-dark">{plan.name}</h2>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-dark">{plan.price}</span>
                <span className="text-muted-text">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-secondary-text">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-secondary-text">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={plan.href} className={`btn-premium mt-8 w-full rounded-lg py-3 text-center font-semibold ${plan.featured ? 'bg-primary text-white hover:bg-primary-dark' : 'border border-primary/20 bg-white text-primary hover:bg-soft-indigo'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-text">All plans include secure authentication and core CRM features.</p>
      </main>
      <Footer />
    </div>
  );
}
