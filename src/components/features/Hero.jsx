import HeroProductPreview from './HeroProductPreview';
import { ArrowRightIcon, CheckIcon } from '../ui/icons';

export default function Hero() {
  return (
    <section id="start" className="relative isolate w-full max-w-full overflow-hidden pb-14 pt-16 sm:pb-16 sm:pt-24 md:pb-24 md:pt-28">
      {/* Background subtle gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-soft-indigo/50 to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -z-10 h-96 w-full max-w-7xl -translate-x-1/2 bg-gradient-to-b from-soft-indigo/60 to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Eyebrow Badge */}
            <div className="hero-enter hero-enter-1 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-indigo-100 bg-soft-indigo px-3 py-1.5 text-xs font-semibold text-primary sm:flex-nowrap">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Next-Gen CRM Workspace</span>
              <span className="text-indigo-300">•</span>
              <span className="text-secondary-text">Built for B2B Teams</span>
            </div>

            {/* H1 Headline */}
            <h1 className="hero-enter hero-enter-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-dark leading-[1.15]">
              Turn client relationships into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-600 to-accent">
                predictable growth.
              </span>
            </h1>

            {/* Subheading */}
            <p className="hero-enter hero-enter-3 text-base sm:text-lg text-secondary-text max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Veltrio gives growing teams one place to manage leads, clients, sales pipelines, tasks, and business performance.
            </p>

            {/* Action Buttons */}
            <div className="hero-enter hero-enter-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="/signup"
                className="btn-premium w-full sm:w-auto rounded-xl px-6 py-3.5 text-base font-semibold text-white bg-primary hover:bg-primary-dark flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span>Start Free</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/book-demo"
                className="btn-premium w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-dark bg-white hover:bg-slate-100 border border-border-color rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <span>Book a Demo</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Micro-copy */}
            <div className="hero-enter hero-enter-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-1 text-xs text-muted-text lg:justify-start">
              <span className="flex items-center gap-1">
                <CheckIcon className="text-emerald-500" />
                No credit card required
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckIcon className="text-emerald-500" />
                14-day free trial
              </span>
            </div>
          </div>

          {/* Right Column: Visual Product Mockup */}
          <div className="hero-enter hero-enter-6 lg:col-span-6">
            <HeroProductPreview />
          </div>

        </div>
      </div>
    </section>
  );
}
