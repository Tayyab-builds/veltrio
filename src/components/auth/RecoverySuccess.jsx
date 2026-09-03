export default function RecoverySuccess({ onReset }) {
  return (
    <div className="card-premium rounded-2xl p-8 sm:p-10 shadow-lg border border-border-color bg-white/90 backdrop-blur-sm">
      {/* Success icon */}
      <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-soft-indigo text-primary">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2m-16 0h16" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l2 2" />
        </svg>
      </div>

      <h1 className="text-center text-2xl font-bold mb-2 text-dark">
        Check your inbox
      </h1>
      <p className="text-center text-sm mb-6 text-secondary-text">
        If an account exists for this email, you'll receive instructions to reset your password.
      </p>

      <a
        href="/login"
        className="btn-premium block w-full py-3 px-4 rounded-lg text-white font-semibold text-center transition-all"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        Back to sign in
      </a>

      <button
        type="button"
        onClick={onReset}
        className="mt-4 text-sm text-muted-text hover:text-primary underline-offset-2 transition-colors text-center w-full"
      >
        Didn't receive the email? Check your spam folder or try again.
      </button>
    </div>
  );
}