import { PIPELINE_STAGES } from '../../data/mockData';
import useReveal from '../../hooks/useReveal';

export default function Pipeline() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="pipeline" className="py-20 bg-main-bg border-t border-border-color">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'reveal is-visible' : 'reveal'}`}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-primary tracking-wider uppercase">Pipeline Visualizer</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-dark">
            Know exactly where{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              every deal stands.
            </span>
          </h2>
          <p className="text-base text-secondary-text">
            Gain full visual command over deal progressions, potential roadblocks, and projected close dates.
          </p>
        </div>

        {/* Horizontal Kanban Preview Container */}
        <div className="w-full max-w-full overflow-x-auto pb-4 [scrollbar-width:thin]">
          <div className="grid min-w-0 gap-4 sm:flex sm:min-w-[1000px]">
            {PIPELINE_STAGES.map((stage) => (
              <div
                key={stage.name}
                className="relative flex flex-col justify-between rounded-xl border border-border-color bg-slate-50 p-3.5 sm:flex-1"
              >
                <div>
                  {/* Stage Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-border-color mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-dark">{stage.name}</span>
                      <span className="text-[10px] px-2 py-0.5 bg-white text-secondary-text font-semibold rounded-full border border-border-color">
                        {stage.count}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-muted-text">{stage.totalValue}</span>
                  </div>

                  {/* Deals Cards */}
                  <div className="space-y-3">
                    {stage.deals.map((deal) => (
                      <div
                        key={deal.id}
                        className="card-premium bg-white p-3 rounded-lg border border-border-color shadow-sm space-y-2"
                      >
                        <div className="text-xs font-bold text-dark">{deal.name}</div>
                        <div className="text-[11px] text-muted-text">{deal.client}</div>

                        <div className="flex items-center justify-between pt-1 text-[11px]">
                          <span className="font-bold text-dark">{deal.value}</span>
                          <span className="px-1.5 py-0.5 bg-soft-indigo text-primary font-semibold rounded text-[10px]">
                            {deal.prob}
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px] text-muted-text">
                          <span>Owner: {deal.owner}</span>
                          <span>Due {deal.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3 pt-2 text-center text-[11px] font-semibold text-secondary-text border-t border-slate-200">
                  + Add opportunity
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
