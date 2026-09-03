import { useEffect } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import SignupForm from '../components/auth/SignupForm';

export default function SignupPage() {
  useEffect(() => {
    document.title = 'Create Account | Veltrio';
  }, []);

  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}