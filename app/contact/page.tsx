"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react";
import PageHeader from "../../components/PageHeader";
import { CONTACT } from "../../Download/data";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate send — replace with actual API call or mailto
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={48} className="text-green-500 mb-4" />
        <h3 className="font-display text-navy-950 font-bold text-xl mb-2">
          Message Sent!
        </h3>
        <p className="font-body text-slate-500 text-sm max-w-xs">
          Thank you for reaching out. We&apos;ll get back to you as soon as
          possible.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", subject: "", message: "" });
          }}
          className="mt-6 btn-outline text-xs"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-xs font-semibold text-navy-950 uppercase tracking-wide mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full border border-slate-200 rounded-sm px-4 py-2.5 font-body text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-950 focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block font-body text-xs font-semibold text-navy-950 uppercase tracking-wide mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full border border-slate-200 rounded-sm px-4 py-2.5 font-body text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-950 focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label className="block font-body text-xs font-semibold text-navy-950 uppercase tracking-wide mb-1.5">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          placeholder="What is this about?"
          className="w-full border border-slate-200 rounded-sm px-4 py-2.5 font-body text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-950 focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block font-body text-xs font-semibold text-navy-950 uppercase tracking-wide mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          className="w-full border border-slate-200 rounded-sm px-4 py-2.5 font-body text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-950 focus:border-transparent transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Sending…
          </span>
        ) : (
          <>
            Send Message <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a question or want to get in touch? We'd love to hear from you."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info panel */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="gold-rule" />
                <h2 className="section-title mb-2">Get in Touch</h2>
                <p className="font-body text-slate-500 text-sm leading-relaxed">
                  Our team is ready to assist with admissions, academic, and
                  general enquiries.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-sm bg-navy-950 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-navy-950 text-sm mb-0.5">
                      Address
                    </p>
                    <p className="font-body text-slate-500 text-sm leading-relaxed">
                      {CONTACT.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-sm bg-navy-950 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-navy-950 text-sm mb-0.5">
                      Phone
                    </p>
                    <a
                      href={`tel:${CONTACT.phone}`}
                      className="font-body text-sm text-slate-500 hover:text-gold-600 transition-colors block"
                    >
                      {CONTACT.phone}
                    </a>
                    <span className="font-body text-xs text-slate-400">
                      {CONTACT.phone2}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-sm bg-navy-950 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-navy-950 text-sm mb-0.5">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="font-body text-sm text-slate-500 hover:text-gold-600 transition-colors break-all"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="font-body text-xs font-semibold text-navy-950 uppercase tracking-wide mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    {
                      href: CONTACT.facebook,
                      icon: <Facebook size={16} />,
                      label: "Facebook",
                    },
                    {
                      href: CONTACT.linkedin,
                      icon: <Linkedin size={16} />,
                      label: "LinkedIn",
                    },
                    {
                      href: CONTACT.twitter,
                      icon: <Twitter size={16} />,
                      label: "Twitter",
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-9 h-9 rounded-sm bg-navy-950 hover:bg-gold-500 text-slate-400 hover:text-navy-950 flex items-center justify-center transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white border border-slate-100 rounded-sm shadow-card p-8">
              <h3 className="font-display text-navy-950 font-bold text-lg mb-6">
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </div>

          {/* Map */}
          <div className="mt-14 rounded-sm overflow-hidden shadow-card">
            <iframe
              src={CONTACT.mapEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="QUEST Nawabshah Map"
              className="block"
            />
          </div>
        </div>
      </section>
    </>
  );
}
