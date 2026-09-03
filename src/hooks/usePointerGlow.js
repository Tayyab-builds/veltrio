import { useEffect, useRef } from 'react';

export default function usePointerGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) {
      return undefined;
    }

    const handleMove = (event) => {
      const rect = element.getBoundingClientRect();
      element.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
      element.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
    };

    element.addEventListener('pointermove', handleMove, { passive: true });
    return () => element.removeEventListener('pointermove', handleMove);
  }, []);

  return ref;
}
