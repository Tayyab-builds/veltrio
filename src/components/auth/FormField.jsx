export default function FormField({ id, label, type, placeholder, value, onChange, error, autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1 text-secondary-text">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
          error ? 'border-red-400 focus:ring-red-300' : 'border-border-color focus:ring-primary'
        }`}
        style={{ backgroundColor: 'var(--color-white)' }}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}