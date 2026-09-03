import { FEATURES_LIST } from '../../data/mockData';
import { RenderIcon } from '../ui/icons';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white border-t border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-primary tracking-wider uppercase">Core Features</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            A complete toolkit for modern sales teams
          </h2>
          <p className="text-base text-secondary-text">
            Everything you need to manage leads, clients, and revenue in one place — without the clutter.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES_LIST.map((feature) => (
            <div
              key={feature.id}
              className="group relative flex flex-col rounded-2xl border border-border-color bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg hover:border-primary/30"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-soft-indigo text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <RenderIcon name={feature.icon} className="w-6 h-6" />
                </div>

                {/* Feature Title */}
                <h3 className="text-lg font-bold text-dark tracking-tight">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-sm text-secondary-text leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
