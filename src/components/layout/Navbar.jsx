import { useState, useEffect } from "react";
import { CloseIcon, MenuIcon } from "../ui/icons";
import Logo from "../ui/Logo";

const navigation = [
  { name: "Features", href: "/#features" },
  { name: "Pipeline", href: "/#pipeline" },
  { name: "Analytics", href: "/#analytics" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

  // Check if a nav item is active
  const isActive = (href) => {
    if (href.startsWith("/#")) return currentPath === "/" && href === "/#features"; // keep simple; anchor active only for features? Better ignore anchors for active state
    return currentPath === href;
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 32;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <header
        className={`${scrolled ? "navbar-fixed navbar-animate" : "relative"} bg-white/60 backdrop-blur-md border-b border-border-color z-50`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 text-xl font-bold text-primary">
              <Logo />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-text hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link text-sm font-semibold leading-6 ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-primary-text hover:text-primary"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop right side */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <a href="/login" className="nav-link text-sm font-semibold leading-6 text-primary-text self-center">
              Log in
            </a>
            <a
              href="/signup"
              className="btn-premium rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
            >
              Get Started
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border-color bg-white px-4 pt-2 pb-6 space-y-3">
            <div className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link block rounded-lg px-3 py-2 text-base font-semibold ${
                    isActive(item.href)
                      ? "bg-soft-indigo text-primary"
                      : "text-primary-text hover:bg-soft-indigo hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-border-color flex flex-col gap-2">
              <a
                href="/login"
                className="nav-link block rounded-lg px-3 py-2 text-base font-semibold text-primary-text hover:bg-soft-indigo"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </a>
              <a
                href="/signup"
                className="btn-premium block rounded-lg bg-primary px-3 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-primary-dark"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent layout shift when navbar becomes fixed */}
      {scrolled && <div style={{ height: "72px" }} />}
    </>
  );
}