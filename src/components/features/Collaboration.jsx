import { TEAM_COLLABORATION_ITEMS } from '../../data/mockData';
import useReveal from '../../hooks/useReveal';

export default function Collaboration() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="collaboration" className="py-20 bg-main-bg border-t border-border-color">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'reveal is-visible' : 'reveal'}`}>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Interactive Timeline Box */}
          <div className="lg:col-span-7 order-2 lg:order-1 bg-white p-6 rounded-2xl border border-border-color shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-border-color pb-3">
              <h3 className="text-sm font-bold text-dark">Live Team Activity Stream</h3>
              <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Updated Realtime
              </span>
            </div>

            <div className="space-y-3">
              {TEAM_COLLABORATION_ITEMS.map((item) => (
                <div key={item.id} className="card-premium p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                    {item.avatar}
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="text-dark">
                      <span className="font-bold">{item.user}</span> ({item.role}) {item.action} <span className="font-semibold text-primary">{item.target}</span>
                    </div>
                    <div className="text-muted-text text-[10px] mt-1">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-bold text-primary tracking-wider uppercase">Seamless Synchronization</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
              Everyone knows what happens next.
            </h2>
            <p className="text-base text-secondary-text leading-relaxed">
              Eliminate information silos. Keep managers, reps, and client executives synchronized with shared note histories, tagged comments, and task delegation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}