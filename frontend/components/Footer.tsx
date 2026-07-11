"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT } from "../download/data";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Faculty", href: "/faculty" },
  { label: "Events", href: "/events" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" },
];

const OBE_LINKS = [
  { label: "Vision & Mission", href: "/obe/vision" },
  { label: "PEOs", href: "/obe/peos" },
  { label: "PLOs", href: "/obe/plos" },
  { label: "CLOs", href: "/obe/clos" },
  { label: "Courses", href: "/courses" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 text-white overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-cyan-500 to-gold-500 bg-[length:200%_100%] animate-gradient-x" />

      {/* Ambient mesh + grid background */}
      <div className="absolute inset-0 bg-mesh-navy opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      {/* ── Main Footer ── */}
      <div className="relative max-w-8xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <motion.div
                className="relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-1.5"
                whileHover={{ scale: 1.06, rotate: 3 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/favicon.png"
                  alt="SWE QUEST"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </motion.div>
              <div>
                <p className="font-display font-semibold text-white text-base leading-tight">
                  Software Engineering
                </p>
                <p className="font-mono text-[11px] text-gold-400/80 tracking-wider leading-tight mt-0.5">
                  QUEST NAWABSHAH
                </p>
              </div>
            </Link>
            <p className="font-body text-sm text-slate-400 leading-relaxed">
              Committed to excellence in engineering education, innovative
              research, and industry collaboration — preparing future software
              engineers, researchers, and technology leaders for sustainable
              technological advancement and digital transformation.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <SocialLink href={CONTACT.facebook} label="Facebook" icon="fb" />
              <SocialLink href={CONTACT.linkedin} label="LinkedIn" icon="li" />
              <SocialLink href={CONTACT.twitter} label="Twitter" icon="tw" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-gold-500" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-sm text-slate-400 hover:text-gold-400 transition-all duration-200 flex items-center gap-2 group hover:translate-x-1"
                  >
                    <ArrowRight
                      size={12}
                      className="text-gold-500/50 group-hover:text-gold-400 transition-colors shrink-0"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OBE Links */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-gold-500" />
              Academic
            </h4>
            <ul className="space-y-2.5">
              {OBE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-sm text-slate-400 hover:text-gold-400 transition-all duration-200 flex items-center gap-2 group hover:translate-x-1"
                  >
                    <ArrowRight
                      size={12}
                      className="text-gold-500/50 group-hover:text-gold-400 transition-colors shrink-0"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-gold-500" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-gold-400" />
                </span>
                <span className="font-body text-sm text-slate-400 leading-relaxed">
                  {CONTACT.address}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-gold-400" />
                </span>
                <div className="font-body text-sm text-slate-400">
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="hover:text-gold-400 transition-colors block"
                  >
                    {CONTACT.phone}
                  </a>
                  <span className="text-xs text-slate-500">
                    {CONTACT.phone2}
                  </span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-gold-400" />
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-body text-sm text-slate-400 hover:text-gold-400 transition-colors break-all self-center"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative border-t border-white/[0.07]">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-slate-500">
            © {new Date().getFullYear()} Department of Software Engineering,
            QUEST Nawabshah. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="font-body text-xs text-slate-500">
              Designed &amp; Developed by{" "}
              <a
                href="mailto:aslamqasim126@gmail.com"
                className="text-gold-500 hover:text-gold-400 transition-colors font-medium"
              >
                Syed Ahmed Ali &amp; Muhammad Qasim
              </a>
            </p>
            {/* Back to top */}
            <motion.button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg bg-gold-500 text-navy-950 flex items-center justify-center hover:bg-gold-400 transition-colors shadow-glow-gold"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Social Icon ───────────────────────────────────────────────────────────
function SocialLink({
  href,
  label,
  icon,
}: {
  href?: string;
  label: string;
  icon: "fb" | "li" | "tw";
}) {
  const icons = {
    fb: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    li: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    tw: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-gold-500 hover:border-gold-500 hover:text-navy-950 text-slate-400 flex items-center justify-center transition-all duration-200"
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
    >
      {icons[icon]}
    </motion.a>
  );
}