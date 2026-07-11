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
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHeader from "../../components/PageHeader";
import { CONTACT } from "../../download/data";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
        >
          <CheckCircle size={52} className="text-green-500 mb-4" />
        </motion.div>
        <h3 className="font-display text-navy-950 font-bold text-xl mb-2">Message Sent!</h3>
        <p className="font-body text-slate-500 text-sm max-w-xs">
          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
        <motion.button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
          className="mt-6 btn-outline text-xs"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Send Another
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { id: "contact-name", name: "name", label: "Full Name", type: "text", placeholder: "Your full name", value: form.name },
          { id: "email", name: "email", label: "Email Address", type: "email", placeholder: "your@email.com", value: form.email },
        ].map((field, i) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <label htmlFor={field.id} className="block font-body text-xs font-semibold text-navy-950 uppercase tracking-wide mb-1.5">
              {field.label} <span className="text-red-500">*</span>
            </label>
            <input
              id={field.id} type={field.type} name={field.name} required
              value={field.value} onChange={handleChange} placeholder={field.placeholder}
              className="w-full border border-slate-200 rounded-sm px-4 py-2.5 font-body text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-950 focus:border-transparent transition"
            />
          </motion.div>
        ))}
      </div>

      {[
        { id: "subject", name: "subject", label: "Subject", type: "input", placeholder: "What is this about?", value: form.subject },
        { id: "message", name: "message", label: "Message", type: "textarea", placeholder: "Write your message here...", value: form.message },
      ].map((field, i) => (
        <motion.div
          key={field.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 + i * 0.08 }}
        >
          <label htmlFor={field.id} className="block font-body text-xs font-semibold text-navy-950 uppercase tracking-wide mb-1.5">
            {field.label} <span className="text-red-500">*</span>
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.id} name={field.name} required rows={5}
              value={field.value} onChange={handleChange} placeholder={field.placeholder}
              className="w-full border border-slate-200 rounded-sm px-4 py-2.5 font-body text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-950 focus:border-transparent transition resize-none"
            />
          ) : (
            <input
              id={field.id} type="text" name={field.name} required
              value={field.value} onChange={handleChange} placeholder={field.placeholder}
              className="w-full border border-slate-200 rounded-sm px-4 py-2.5 font-body text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-950 focus:border-transparent transition"
            />
          )}
        </motion.div>
      ))}

      <motion.button
        type="submit" disabled={loading}
        className="btn-primary w-full justify-center"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.36 }}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending…
          </span>
        ) : (
          <><Send size={15} /> Send Message</>
        )}
      </motion.button>
    </form>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function ContactPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const isValidMapEmbed = (url: string) =>
    url.startsWith("https://www.google.com/maps/embed") || url.startsWith("https://maps.google.com/");

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="The Department of Software Engineering welcomes prospective students, researchers, industry partners, and alumni. For admissions, academic inquiries, research collaborations, or general information, please reach us through the channels below."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="py-16 md:py-24 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info panel */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <span className="gold-rule" />
                <h2 className="section-title mb-2">Get in Touch</h2>
                <p className="font-body text-slate-500 text-sm leading-relaxed">
                  Our team is ready to assist with admissions, academic, and general enquiries.
                </p>
              </motion.div>

              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Address", content: CONTACT.address, href: undefined },
                  { icon: Phone, label: "Phone", content: CONTACT.phone, href: `tel:${CONTACT.phone}`, sub: CONTACT.phone2 },
                  { icon: Mail, label: "Email", content: CONTACT.email, href: `mailto:${CONTACT.email}` },
                ].map(({ icon: Icon, label, content, href, sub }, i) => (
                  <motion.div key={label} className="flex gap-4" variants={itemVariants}>
                    <motion.div
                      className="w-10 h-10 rounded-sm bg-navy-950 flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.1, backgroundColor: "#d9a128" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={16} className="text-gold-400" />
                    </motion.div>
                    <div>
                      <p className="font-body font-semibold text-navy-950 text-sm mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="font-body text-sm text-slate-500 hover:text-gold-600 transition-colors block">
                          {content}
                        </a>
                      ) : (
                        <p className="font-body text-sm text-slate-500 leading-relaxed">{content}</p>
                      )}
                      {sub && <p className="font-body text-xs text-slate-400 mt-0.5">{sub}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants}>
                <p className="font-body text-xs font-semibold text-navy-950 uppercase tracking-wide mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { href: CONTACT.facebook, icon: <Facebook size={16} />, label: "Facebook" },
                    { href: CONTACT.linkedin, icon: <Linkedin size={16} />, label: "LinkedIn" },
                    { href: CONTACT.twitter, icon: <Twitter size={16} />, label: "Twitter" },
                  ].map((s, i) => (
                    <motion.a
                      key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      className="w-9 h-9 rounded-sm bg-navy-950 hover:bg-gold-500 text-slate-400 hover:text-navy-950 flex items-center justify-center transition-all duration-200"
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 200 }}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:col-span-3 bg-white border border-slate-100 rounded-sm shadow-card p-8"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-display text-navy-950 font-bold text-lg mb-6">Send a Message</h3>
              <ContactForm />
            </motion.div>
          </div>

          {/* Map */}
          {isValidMapEmbed(CONTACT.mapEmbed) && (
            <motion.div
              className="mt-14 rounded-sm overflow-hidden shadow-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <iframe
                src={CONTACT.mapEmbed} width="100%" height="400"
                style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="QUEST Nawabshah Map" className="block"
              />
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}