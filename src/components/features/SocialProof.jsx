import { CLIENT_LOGOS, TRUST_METRICS } from '../../data/mockData';
import useReveal from '../../hooks/useReveal';

export default function SocialProof() {
  const [ref, isVisible] = useReveal();

  return (
    <section className="relative isolate overflow-hidden border-y border-border-color bg-white py-12">
      <div ref={ref} className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'reveal is-visible' : 'reveal'}`}>
        <div className="text-center space-y-6">
          <p className="text-xs font-bold tracking-wider text-muted-text uppercase">
            Built for teams that move business forward
          </p>

          {/* Logo Bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {CLIENT_LOGOS.map((client) => (
              <div key={client.name} className="flex items-center gap-2 font-bold tracking-wider text-slate-700 text-sm sm:text-base">
                <div className="w-6 h-6 rounded bg-slate-200 flex items-center justify-center text-[10px] text-slate-800 font-extrabold">
                  {client.symbol.slice(0, 2)}
                </div>
                <span>{client.symbol}</span>
              </div>
            ))}
          </div>

          {/* Key Platform Stats */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-slate-100">
            {TRUST_METRICS.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">{metric.value}</div>
                <div className="text-xs font-medium text-secondary-text mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-text">Illustrative platform data for demonstration purposes.</p>
        </div>
      </div>
    </section>
  );
}