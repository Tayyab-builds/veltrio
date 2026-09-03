import { HOW_IT_WORKS_STEPS } from '../../data/mockData';
import useReveal from '../../hooks/useReveal';

export default function HowItWorks() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="how-it-works" className="py-20 bg-white border-t border-border-color">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'reveal is-visible' : 'reveal'}`}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-primary tracking-wider uppercase">Simple Onboarding</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            Three steps to predictable revenue.
          </h2>
          <p className="text-base text-secondary-text">
            Start closing deals organized in Veltrio in under 15 minutes.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div key={step.step} className="card-premium relative space-y-4 rounded-2xl border border-border-color bg-slate-50 p-6 sm:p-8">
              <div className="text-3xl font-black text-primary/30 tracking-tight">
                {step.step}
              </div>

              <h3 className="text-xl font-bold text-dark">
                {step.title}
              </h3>

              <div className="text-xs font-bold text-primary uppercase tracking-wide">
                {step.subtitle}
              </div>

              <p className="text-sm text-secondary-text leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
