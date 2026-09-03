import Logo from '../ui/Logo';

export default function AuthLayout({ children }) {
  return (
    <div className="relative flex min-h-screen w-full max-w-full flex-col items-center justify-center overflow-hidden bg-main-bg px-4 py-10 sm:px-6">
      {/* Ambient background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* Top-left branding */}
      <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
        <a
          href="/"
          className="inline-block transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          <Logo className="text-xl text-primary" />
        </a>
      </div>

      {/* Main login card */}
      <div className="relative z-10 w-full max-w-[420px]">
        {children}
      </div>

      {/* Trust message */}
      <p className="mt-8 text-xs text-muted-text text-center">
        Securely access your Veltrio workspace.
      </p>
    </div>
  );
}
