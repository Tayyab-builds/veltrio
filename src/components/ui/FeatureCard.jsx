import { RenderIcon } from './icons';
import usePointerGlow from '../../hooks/usePointerGlow';

export default function FeatureCard({ feature, isFeatured = false }) {
  const cardRef = usePointerGlow();
  return (
    <div ref={isFeatured ? cardRef : null} className={`group premium-card glass-edge relative flex flex-col justify-between rounded-2xl border border-border-color bg-white p-6 shadow-subtle ${isFeatured ? 'pointer-glow accent-trace' : ''}`}>
      <div className="space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-indigo text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white"><RenderIcon name={feature.icon} className="h-6 w-6" /></div>
        <h3 className="text-lg font-bold tracking-tight text-dark">{feature.title}</h3>
        <p className="text-sm leading-relaxed text-secondary-text">{feature.description}</p>
      </div>
      <div className="mt-6 flex items-center border-t border-slate-100 pt-4 text-xs font-semibold text-primary transition-transform group-hover:translate-x-1"><span>Learn more</span><span className="ml-1">→</span></div>
    </div>
  );
}
