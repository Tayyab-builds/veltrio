import { useState } from 'react';
import SocialLoginButton from "./SocialLoginButton";
import PasswordInput from "./PasswordInput";
import FormField from "./FormField";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    const newErrors = { email: '', password: '' };
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      // Simulate authentication delay – replace with real auth later
      setTimeout(() => {
        setIsLoading(false);
        window.location.href = '/dashboard'; // redirect to dashboard
      }, 1500);
    }
  };

  return (
    <div className="card-premium w-full rounded-2xl border border-border-color bg-white/90 p-6 shadow-lg backdrop-blur-sm sm:p-8 md:p-10">
      <h1 className="text-2xl font-bold mb-2 text-dark">
        Welcome back
      </h1>
      <p className="text-sm mb-8 text-secondary-text">
        Sign in to your Veltrio account and continue where you left off.
      </p>

      <SocialLoginButton />

      <div className="relative my-6 text-center">
        <span className="relative z-10 px-4 text-xs uppercase tracking-wider text-muted-text bg-white/90">
          OR
        </span>
        <div className="absolute left-0 top-1/2 h-px w-full bg-border-color"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <FormField
          id="email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          autoComplete="email"
        />

        <PasswordInput
          id="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          autoComplete="current-password"
        />

        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <label className="flex items-center gap-2 text-sm text-secondary-text cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            Remember me
          </label>
          <a
            href="/forgot-password"
            className="text-sm font-medium text-primary hover:underline"
          >
            Forgot password?
          </a>
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
              Signing in...
            </>
          ) : (
            'Sign in'
          )}
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-secondary-text">
        Don't have a Veltrio account?{' '}
        <a href="/signup" className="font-medium text-primary hover:underline">
          Create an account
        </a>
      </p>
    </div>
  );
}