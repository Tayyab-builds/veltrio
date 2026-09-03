export default function EmptyState({ title, description, actionLabel, onAction }) {
  return (
    <div className="text-center py-12">
      <div className="mx-auto w-12 h-12 rounded-full bg-soft-indigo text-primary flex items-center justify-center mb-4">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-dark">{title}</h3>
      <p className="text-sm text-secondary-text mt-1">{description}</p>
      {actionLabel && (
        <button
          onClick={onAction}
          className="mt-4 btn-premium px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}