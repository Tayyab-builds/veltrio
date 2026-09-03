import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submit – replace with real backend later
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-main-bg text-primary-text">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-primary tracking-wider uppercase">Contact Us</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mt-2">
            We'd love to hear from you
          </h1>
          <p className="text-base text-secondary-text mt-4">
            Questions about Veltrio? Send us a message and we'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-border-color p-5 shadow-sm">
              <h3 className="font-semibold text-dark">Email</h3>
              <p className="text-secondary-text text-sm">support@veltrio.com</p>
            </div>
            <div className="bg-white rounded-xl border border-border-color p-5 shadow-sm">
              <h3 className="font-semibold text-dark">Phone</h3>
              <p className="text-secondary-text text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white rounded-xl border border-border-color p-5 shadow-sm">
              <h3 className="font-semibold text-dark">Address</h3>
              <p className="text-secondary-text text-sm">100 Market Street, Suite 200, San Francisco, CA</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-2 bg-white rounded-xl border border-border-color p-6 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 mx-auto rounded-full bg-soft-indigo text-primary flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-dark">Message Sent!</h2>
                <p className="text-secondary-text mt-2">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-primary hover:underline text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="px-3 py-2.5 border border-border-color rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="px-3 py-2.5 border border-border-color rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="px-3 py-2.5 border border-border-color rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="px-3 py-2.5 border border-border-color rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <button
                  type="submit"
                  className="btn-premium w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}