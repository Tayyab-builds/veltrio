import { useState } from 'react';
import AIButton from './AIButton';
import AIChatPanel from './AIChatPanel';
import ContactFloatingButton from '../ui/ContactFloatingButton';

export default function VeltrioAI() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)} />}
      <ContactFloatingButton />
      <AIButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      {isOpen && <AIChatPanel onClose={() => setIsOpen(false)} />}
    </>
  );
}