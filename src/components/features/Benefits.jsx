import { BENEFITS_ITEMS } from '../../data/mockData';
import useReveal from '../../hooks/useReveal';

export default function Benefits() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="benefits" className="py-20 bg-main-bg border-t border-border-color">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'reveal is-visible' : 'reveal'}`}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-primary tracking-wider uppercase">Why Veltrio</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-dark">
            <span className="bg-gradient-to-r from-dark via-primary-dark to-dark bg-clip-text text-transparent">
              Engineered to remove friction
            </span>{" "}
            from your sales operations.
          </h2>
        </div>

        {/* Asymmetric Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENEFITS_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className={`card-premium relative space-y-4 rounded-2xl border border-border-color bg-white p-6 shadow-sm sm:p-8 ${
                index === 0 ? "md:col-span-2 bg-gradient-to-br from-white via-white to-soft-indigo/40" : ""
              }`}
            >
              <div className="inline-block px-3 py-1 bg-soft-indigo text-primary text-xs font-bold rounded-md">
                {item.tag}
              </div>
              <h3 className="text-xl font-bold text-dark">{item.title}</h3>
              <p className="text-secondary-text text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
