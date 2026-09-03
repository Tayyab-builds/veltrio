import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const pageContent = {
  integrations: {
    eyebrow: 'Integrations', title: 'Connect the tools your team already uses',
    description: 'Bring your sales workflow together with secure, flexible connections built around your business.',
    details: ['Keep customer information aligned across your workflow.', 'Reduce manual handoffs with connected sales operations.', 'Talk to our team about the integrations you need most.'], cta: 'Book a Demo', href: '/book-demo',
  },
  solutions: {
    eyebrow: 'Solutions', title: 'A clearer way to run your sales operations',
    description: 'Veltrio gives growing teams one calm, organized workspace for prospects, customers, and revenue.',
    details: ['Centralize the information your team needs every day.', 'Give every rep a consistent process to follow.', 'Use live performance insights to make better decisions.'], cta: 'Explore Pricing', href: '/pricing',
  },
  resources: {
    eyebrow: 'Resources', title: 'Guidance for building a stronger sales process',
    description: 'Explore practical ideas for managing relationships, creating repeatable workflows, and growing with confidence.',
    details: ['Sales process and pipeline best practices.', 'Ideas for improving customer relationships.', 'Practical ways to get more from your CRM.'], cta: 'Get Started', href: '/signup',
  },
  documentation: {
    eyebrow: 'Documentation', title: 'Everything you need to get started with Veltrio',
    description: 'Set up your workspace, organize your team, and start managing your sales activity in one place.',
    details: ['Create a focused workspace for your team.', 'Add your contacts, leads, and deals.', 'Track performance with the built-in dashboard.'], cta: 'Start Free', href: '/signup',
  },
  help: {
    eyebrow: 'Help Center', title: 'We are here to help your team succeed',
    description: 'Find clear guidance for getting started, using Veltrio effectively, and keeping your sales work moving.',
    details: ['Get started with your workspace.', 'Learn how to manage your pipeline.', 'Contact us for tailored product guidance.'], cta: 'Book a Demo', href: '/book-demo',
  },
  privacy: {
    eyebrow: 'Privacy', title: 'Your data deserves thoughtful protection',
    description: 'Veltrio is committed to handling your information responsibly and transparently.',
    details: ['We collect only what is needed to provide and improve Veltrio.', 'Your information is used to operate and support your account.', 'We do not sell your personal information.'], cta: 'View Security', href: '/security',
  },
  terms: {
    eyebrow: 'Terms of Service', title: 'Clear terms for using Veltrio',
    description: 'These terms set out the expectations for using Veltrio and maintaining a secure, reliable service for everyone.',
    details: ['Use Veltrio in accordance with applicable law.', 'Keep your account credentials secure.', 'Contact our team with any account or service questions.'], cta: 'Contact Us', href: '/book-demo',
  },
  security: {
    eyebrow: 'Security', title: 'Security is built into the Veltrio experience',
    description: 'We design our platform to help teams manage customer information with confidence.',
    details: ['Secure authentication protects access to your workspace.', 'Reliable infrastructure supports your daily operations.', 'Our team continuously improves the platform and its safeguards.'], cta: 'Start Securely', href: '/signup',
  },
};

export default function InfoPage({ page }) {
  const content = pageContent[page];

  return (
    <div className="min-h-screen bg-main-bg text-primary-text">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">{content.eyebrow}</span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">{content.title}</h1>
          <p className="mt-4 text-base leading-relaxed text-secondary-text">{content.description}</p>
        </div>
        <section className="mt-14 rounded-2xl border border-border-color bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-dark">What this means for your team</h2>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-secondary-text">
            {content.details.map((detail) => <li key={detail} className="flex gap-3"><span className="font-bold text-primary">•</span>{detail}</li>)}
          </ul>
          <a href={content.href} className="btn-premium mt-8 inline-flex rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark">
            {content.cta}
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
