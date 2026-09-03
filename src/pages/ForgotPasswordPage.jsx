import { useEffect } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import RecoveryForm from '../components/auth/RecoveryForm';

export default function ForgotPasswordPage() {
  useEffect(() => {
    document.title = 'Forgot Password | Veltrio';
  }, []);

  return (
    <AuthLayout>
      <RecoveryForm />
    </AuthLayout>
  );
}