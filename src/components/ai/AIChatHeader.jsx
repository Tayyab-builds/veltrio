export default function AIChatHeader({ onClear, onClose }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-border-color bg-white rounded-t-xl">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-soft-indigo text-primary flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-dark">Veltrio AI</h2>
          <div className="flex items-center gap-1 text-xs text-emerald-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            AI Assistant
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button onClick={onClear} className="p-1.5 rounded-md text-muted-text hover:text-dark hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Clear conversation" title="Clear conversation">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
        <button onClick={onClose} className="p-1.5 rounded-md text-muted-text hover:text-dark hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Close chat" title="Close">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}