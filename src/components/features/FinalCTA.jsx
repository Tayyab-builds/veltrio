import { ArrowRightIcon } from '../ui/icons';

export default function FinalCTA() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-slate-950 py-20 text-white">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 z-0 opacity-30" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-64 w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Build a <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">better sales process</span> with Veltrio.
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Bring your leads, clients, teams, and sales pipeline together in one powerful workspace.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="/signup"
            className="btn-premium w-full sm:w-auto rounded-xl px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary-dark flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span>Start Free</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/book-demo"
            className="btn-premium w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            <span>Book a Demo</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="text-xs text-slate-400">
          Instant setup • No credit card required • Cancel anytime
        </div>

      </div>
    </section>
  );
}
