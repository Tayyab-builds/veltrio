import { cloneElement, useEffect, useState } from 'react';
import Logo from '../components/ui/Logo';
import { ArrowRightIcon, CheckIcon } from '../components/ui/icons';

const initialForm = {
  fullName: '',
  email: '',
  company: '',
  companySize: '',
  jobTitle: '',
  goal: '',
  demoTime: '',
};

const fields = [
  ['fullName', 'Full name'],
  ['email', 'Work email'],
  ['company', 'Company name'],
  ['companySize', 'Company size'],
  ['jobTitle', 'Job title'],
  ['goal', 'What are you looking to improve?'],
  ['demoTime', 'Preferred demo time'],
];

export default function BookDemoPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Book a Demo | Veltrio';
  }, []);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: '' }));
  };

  const validate = () => {
    const nextErrors = {};
    fields.forEach(([field, label]) => {
      if (!form[field].trim()) nextErrors[field] = `${label} is required.`;
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid work email address.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    window.setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 650);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-main-bg">
      <div className="absolute inset-x-0 top-0 h-[26rem] bg-gradient-to-b from-soft-indigo via-indigo-50/60 to-transparent" aria-hidden="true" />
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <a href="/" className="rounded-lg p-1.5 text-primary transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          <Logo className="text-xl" />
        </a>
        <a href="/login" className="text-sm font-semibold text-secondary-text transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded">Log in</a>
      </header>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 pb-12 pt-6 sm:px-6 sm:pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16 lg:px-8 lg:pt-14">
        <section className="pt-2 lg:pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Personalized product tour</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">See Veltrio in action</h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-secondary-text sm:text-lg">Tell us a little about your business and we'll help you see how Veltrio can fit your sales workflow.</p>
          <ul className="mt-8 space-y-3 text-sm text-secondary-text">
            {['A focused look at the workflows that matter to your team', 'Answers tailored to your sales process and goals', 'No obligation and no credit card required'].map((item) => (
              <li key={item} className="flex items-start gap-3"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-soft-indigo text-primary"><CheckIcon className="h-3 w-3" /></span>{item}</li>
            ))}
          </ul>
        </section>

        <section className="card-premium rounded-2xl border border-border-color bg-white p-5 shadow-lg sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center" role="status" aria-live="polite">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><CheckIcon className="h-6 w-6" /></div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-dark">Demo request received</h2>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-secondary-text">Thanks for your interest in Veltrio. We'll be in touch to schedule your demo.</p>
              <p className="mx-auto mt-5 max-w-sm rounded-lg bg-slate-50 px-3 py-2 text-xs text-muted-text">This confirmation is frontend-only until demo requests are connected to a backend.</p>
              <a href="/" className="btn-premium mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary-dark">Back to homepage <ArrowRightIcon className="h-4 w-4" /></a>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-dark">Request your demo</h2>
                <p className="mt-1 text-sm text-secondary-text">All fields are required so we can tailor the conversation.</p>
              </div>
              <form className="space-y-4" noValidate onSubmit={handleSubmit}>
                <Field label="Full name" id="fullName" error={errors.fullName}><input id="fullName" value={form.fullName} onChange={(e) => updateField('fullName', e.target.value)} placeholder="Jordan Lee" autoComplete="name" /></Field>
                <Field label="Work email" id="email" error={errors.email}><input id="email" type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} placeholder="jordan@company.com" autoComplete="email" /></Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Company name" id="company" error={errors.company}><input id="company" value={form.company} onChange={(e) => updateField('company', e.target.value)} placeholder="Acme Inc." autoComplete="organization" /></Field>
                  <Field label="Company size" id="companySize" error={errors.companySize}><select id="companySize" value={form.companySize} onChange={(e) => updateField('companySize', e.target.value)}><option value="">Select size</option>{['1–10', '11–50', '51–200', '201–500', '500+'].map((value) => <option key={value}>{value}</option>)}</select></Field>
                </div>
                <Field label="Job title" id="jobTitle" error={errors.jobTitle}><input id="jobTitle" value={form.jobTitle} onChange={(e) => updateField('jobTitle', e.target.value)} placeholder="Sales Operations Manager" autoComplete="organization-title" /></Field>
                <Field label="What are you looking to improve?" id="goal" error={errors.goal}><select id="goal" value={form.goal} onChange={(e) => updateField('goal', e.target.value)}><option value="">Select an area</option>{['Lead management', 'Customer management', 'Sales pipeline', 'Team collaboration', 'Analytics', 'Other'].map((value) => <option key={value}>{value}</option>)}</select></Field>
                <Field label="Preferred demo time" id="demoTime" error={errors.demoTime}><input id="demoTime" value={form.demoTime} onChange={(e) => updateField('demoTime', e.target.value)} placeholder="e.g. Tuesday morning, Pakistan Standard Time" /></Field>
                <button type="submit" disabled={isLoading} className="btn-premium mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70">
                  {isLoading ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />Validating request…</> : <>Request Demo <ArrowRightIcon className="h-4 w-4" /></>}
                </button>
              </form>
            </>
          )}
        </section>
      </div>
    </main>
  );
}

function Field({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-dark">{label}</label>
      {cloneElement(children, {
        'aria-invalid': Boolean(error),
        'aria-describedby': error ? `${id}-error` : undefined,
        className: `block h-11 w-full rounded-lg border px-3 text-sm text-dark outline-none transition placeholder:text-slate-400 ${error ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-100' : 'border-border-color bg-white focus:border-primary/60 focus:ring-2 focus:ring-primary/10'}`,
      })}
      {error && <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}
