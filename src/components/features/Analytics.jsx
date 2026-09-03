import { ANALYTICS_METRICS } from '../../data/mockData';
import useReveal from '../../hooks/useReveal';
import { CheckIcon } from '../ui/icons';

const conversionBars = [
  { month: 'Jan', value: '40%' }, { month: 'Feb', value: '55%' }, { month: 'Mar', value: '70%' },
  { month: 'Apr', value: '65%' }, { month: 'May', value: '85%' }, { month: 'Jun', value: '95%' },
];

export default function Analytics() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="analytics" className="w-full max-w-full border-t border-border-color bg-white py-16 sm:py-20">
      <div ref={ref} className={`mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8 ${isVisible ? 'reveal is-visible' : 'reveal'}`}>
        <div className="space-y-6 lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Business Intelligence</span>
          <h2 className="text-2xl font-extrabold tracking-tight text-dark sm:text-3xl md:text-4xl">Turn sales data into better decisions.</h2>
          <p className="text-base leading-relaxed text-secondary-text">Veltrio automatically parses sales activity into real-time visual reports, helping teams pinpoint their strongest growth opportunities.</p>
          <ul className="space-y-3 pt-2 text-sm text-secondary-text">
            {['Automated monthly revenue forecasting', 'Lead source conversion attribution', 'Individual rep quota tracking'].map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-soft-indigo text-primary"><CheckIcon className="h-3 w-3" /></span>{item}</li>)}
          </ul>
        </div>
        <div className="w-full min-w-0 space-y-4 rounded-2xl border border-border-color bg-slate-50 p-4 shadow-sm sm:space-y-6 sm:p-6 lg:col-span-7">
          <div className="grid grid-cols-2 gap-4">
            {ANALYTICS_METRICS.slice(0, 2).map((metric) => <div key={metric.label} className="card-premium rounded-xl border border-border-color bg-white p-4 shadow-sm"><div className="text-xs font-semibold text-muted-text">{metric.label}</div><div className="mt-1 text-xl font-extrabold text-dark">{metric.value}</div><div className="mt-0.5 text-xs font-semibold text-emerald-600">{metric.growth}</div></div>)}
          </div>
          <div className="card-premium space-y-4 rounded-xl border border-border-color bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-1"><div className="text-xs font-bold text-dark">Quarterly Pipeline Conversion</div><div className="text-xs text-muted-text">Q1 - Q4 2026</div></div>
            <div className="flex h-36 items-end justify-between gap-2 px-2 pt-4">
              {conversionBars.map((bar, index) => <div key={bar.month} className="flex flex-1 flex-col items-center gap-2"><div className={`bar-animate w-full origin-bottom rounded-t bg-primary/90 transition-colors hover:bg-primary ${isVisible ? '' : 'invisible'}`} style={{ height: bar.value, animationDelay: `${index * 100}ms` }} aria-label={`${bar.month}: ${bar.value} pipeline conversion`} /><span className="text-[10px] font-medium text-muted-text">{bar.month}</span></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
