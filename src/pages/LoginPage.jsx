import { useEffect } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import LoginForm from '../components/auth/LoginForm';

export default function LoginPage() {
  useEffect(() => {
    document.title = 'Sign In | Veltrio';
  }, []);

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}