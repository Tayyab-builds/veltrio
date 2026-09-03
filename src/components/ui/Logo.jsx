export default function Logo({ className = '', signAnimated = false, compact = false }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg className={`h-5 w-5 sm:h-6 sm:w-6 ${signAnimated ? 'logo-sign' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4 L12 18 L20 4" />
      </svg>
      {!compact && <span className="font-bold tracking-tight">VELTRIO</span>}
    </span>
  );
}
