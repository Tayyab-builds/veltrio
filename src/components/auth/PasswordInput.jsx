import { useState } from 'react';

export default function PasswordInput({ id, label, placeholder, value, onChange, error, autoComplete }) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="block text-sm font-medium mb-1 text-secondary-text">
          {label}
        </label>
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className="text-sm font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          {visible ? 'Hide' : 'Show'}
        </button>
      </div>
      <input
        id={id}
        type={visible ? 'text' : 'password'}
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