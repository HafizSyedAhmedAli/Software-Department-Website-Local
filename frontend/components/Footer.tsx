import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
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
    <footer className="bg-navy-950 text-white">
      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-sm p-1">
                <Image
                  src="/images/favicon.png"
                  alt="SWE QUEST"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <p className="font-display font-semibold text-white text-base leading-tight">
                  Software Engineering
                </p>
                <p className="font-body text-xs text-slate-400 leading-tight">
                  QUEST Nawabshah
                </p>
              </div>
            </Link>
            <p className="font-body text-sm text-slate-400 leading-relaxed">
              Empowering future software engineers through quality education, 
              cutting-edge research, and industry collaboration.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <SocialLink href={CONTACT.facebook} label="Facebook" icon="fb" />
              <SocialLink href={CONTACT.linkedin} label="LinkedIn" icon="li" />
              <SocialLink href={CONTACT.twitter} label="Twitter" icon="tw" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-sm text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OBE Links */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Academic
            </h4>
            <ul className="space-y-2.5">
              {OBE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-sm text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <span className="font-body text-sm text-slate-400 leading-relaxed">
                  {CONTACT.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <div className="font-body text-sm text-slate-400">
                  <a href={`tel:${CONTACT.phone}`} className="hover:text-gold-400 transition-colors block">
                    {CONTACT.phone}
                  </a>
                  <span className="text-xs text-slate-500">{CONTACT.phone2}</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-body text-sm text-slate-400 hover:text-gold-400 transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-slate-500">
            © {new Date().getFullYear()} Department of Software Engineering, QUEST Nawabshah. All rights reserved.
          </p>
          <p className="font-body text-xs text-slate-500">
            Designed & Developed by{" "}
            <a
              href="mailto:aslamqasim126@gmail.com"
              className="text-gold-500 hover:text-gold-400 transition-colors"
            >
              Qasim & Ahmed
            </a>
          </p>
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 rounded-sm bg-navy-800 hover:bg-gold-500 hover:text-navy-950 text-slate-400 flex items-center justify-center transition-all duration-200"
    >
      {icons[icon]}
    </a>
  );
}