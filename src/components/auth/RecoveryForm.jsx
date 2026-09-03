import { useState } from 'react';
import RecoverySuccess from './RecoverySuccess';

export default function RecoveryForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate email
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate API call – replace with real backend later
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return <RecoverySuccess email={email} onReset={() => setIsSuccess(false)} />;
  }

  return (
    <div className="card-premium rounded-2xl p-8 sm:p-10 shadow-lg border border-border-color bg-white/90 backdrop-blur-sm">
      {/* Icon container */}
      <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-soft-indigo text-primary">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      </div>

      <h1 className="text-center text-2xl font-bold mb-2 text-dark">
        Forgot your password?
      </h1>
      <p className="text-center text-sm mb-8 text-secondary-text">
        Enter the email address associated with your Veltrio account and we'll help you get back in.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-secondary-text">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            required
            className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
              error ? 'border-red-400 focus:ring-red-300' : 'border-border-color focus:ring-primary'
            }`}
            style={{ backgroundColor: 'var(--color-white)' }}
          />
          {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`btn-premium w-full py-3 px-4 rounded-lg text-white font-semibold transition-all ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          {isLoading ? (
            <>
              <span className="inline-block mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
              Sending reset link...
            </>
          ) : (
            'Send reset link'
          )}
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-secondary-text">
        Remember your password?{' '}
        <a href="/login" className="font-medium text-primary hover:underline">
          Back to sign in
        </a>
      </p>
    </div>
  );
}