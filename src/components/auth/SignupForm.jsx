import { useState } from 'react';
import SocialLoginButton from './SocialLoginButton';
import FormField from './FormField';
import PasswordInput from './PasswordInput';
import PasswordStrength from './PasswordStrength';

export default function SignupForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Enter a valid email';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      // Simulate API call – replace with real backend later
      setTimeout(() => {
        setIsLoading(false);
        console.log('Account created');
      }, 1500);
    }
  };

  return (
    <div className="card-premium rounded-2xl p-8 sm:p-10 shadow-lg border border-border-color bg-white/90 backdrop-blur-sm">
      <h1 className="text-2xl font-bold mb-2 text-dark">
        Create your account
      </h1>
      <p className="text-sm mb-8 text-secondary-text">
        Start managing your customer relationships with Veltrio.
      </p>

      <SocialLoginButton label="Continue with Google" />

      <div className="relative my-6 text-center">
        <span className="relative z-10 px-4 text-xs uppercase tracking-wider text-muted-text bg-white/90">
          OR
        </span>
        <div className="absolute left-0 top-1/2 h-px w-full bg-border-color"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <FormField
          id="fullName"
          label="Full name"
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          error={errors.fullName}
          autoComplete="name"
        />

        <FormField
          id="email"
          label="Work email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          autoComplete="email"
        />

        <div>
          <PasswordInput
            id="password"
            label="Password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            autoComplete="new-password"
          />
          <PasswordStrength password={password} />
        </div>

        <PasswordInput
          id="confirmPassword"
          label="Confirm password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
          autoComplete="new-password"
        />

        <div>
          <label className="flex items-start gap-2 text-sm text-secondary-text cursor-pointer">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span>
              I agree to the{' '}
              <a href="/terms" className="text-primary hover:underline">Terms of Service</a>{' '}
              and{' '}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
            </span>
          </label>
          {errors.agreeTerms && <p className="mt-1 text-xs text-red-500">{errors.agreeTerms}</p>}
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
              Creating account...
            </>
          ) : (
            'Create account'
          )}
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-secondary-text">
        Already have an account?{' '}
        <a href="/login" className="font-medium text-primary hover:underline">
          Sign in
        </a>
      </p>
    </div>
  );
}