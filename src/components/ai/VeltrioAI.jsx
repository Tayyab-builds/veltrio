import { useEffect, useState } from 'react';
import AIButton from './AIButton';
import AIChatPanel from './AIChatPanel';

export default function VeltrioAI() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-30 bg-slate-950/10 sm:bg-transparent" onClick={() => setIsOpen(false)} aria-hidden="true" />}
      <AIButton onClick={() => setIsOpen((open) => !open)} isOpen={isOpen} />
      {isOpen && <AIChatPanel onClose={() => setIsOpen(false)} />}
    </>
  );
}
