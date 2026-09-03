export default function AISuggestion({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-xs bg-white border border-border-color rounded-full px-3 py-1.5 hover:bg-soft-indigo hover:border-primary/30 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {text}
    </button>
  );
}