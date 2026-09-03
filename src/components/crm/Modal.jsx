import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="presentation">
      <div className="absolute inset-0 bg-slate-950/35 backdrop-blur-[2px]" onClick={onClose} />
      <div className="relative max-h-[calc(100vh-2rem)] w-full max-w-md overflow-y-auto rounded-xl border border-border-color bg-white p-5 shadow-2xl sm:p-6" role="dialog" aria-modal="true" aria-label={title}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-dark">{title}</h3>
          <button onClick={onClose} className="icon-button text-muted-text hover:text-dark" aria-label="Close dialog">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
