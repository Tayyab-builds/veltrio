export default function SkeletonLoader({ className = '' }) {
  return (
    <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
  );
}