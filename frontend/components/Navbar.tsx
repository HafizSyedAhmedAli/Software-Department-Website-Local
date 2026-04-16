"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search, Mail, Phone } from "lucide-react";
import { clsx } from "clsx";
import { NavItem } from "../lib/types";
import { CONTACT, NAV_ITEMS } from "../download/data";

// ─── Dropdown ──────────────────────────────────────────────────────────────
function Dropdown({ items }: { items: NavItem[] }) {
  return (
    <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-slate-100 shadow-lg rounded-sm z-50 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2.5 text-sm font-body text-slate-700 hover:bg-navy-950 hover:text-white transition-colors duration-150"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

// ─── Mobile Nav Item ────────────────────────────────────────────────────────
function MobileNavItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-slate-700 hover:text-navy-950 hover:bg-slate-50 transition-colors"
        >
          <span>{item.label}</span>
          <ChevronDown
            size={16}
            className={clsx(
              "transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </button>
        {open && (
          <div className="bg-slate-50 border-l-2 border-gold-500 ml-4">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                className="block px-5 py-2.5 text-sm text-slate-600 hover:text-navy-950 transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  const active = pathname === item.href;
  return (
    <Link
      href={item.href}
      onClick={onClose}
      className={clsx(
        "block px-4 py-3 text-sm font-medium transition-colors",
        active
          ? "text-navy-950 bg-slate-50 border-l-2 border-gold-500"
          : "text-slate-700 hover:text-navy-950 hover:bg-slate-50",
      )}
    >
      {item.label}
    </Link>
  );
}

// ─── Navbar ─────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Scroll shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── Top Bar ── */}
      <div className="hidden md:block bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 text-xs font-body">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-gold-400 transition-colors"
            >
              <Mail size={12} />
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-gold-400 transition-colors"
            >
              <Phone size={12} />
              {CONTACT.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gold-400 transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={CONTACT.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gold-400 transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gold-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <nav
        ref={navRef}
        className={clsx(
          "sticky top-0 z-40 bg-white transition-shadow duration-300",
          scrolled ? "shadow-nav" : "shadow-sm",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative w-40 h-10 md:w-64 md:h-16">
                <Image
                  src="/images/logo.png"
                  alt="SWE QUEST Logo"
                  fill
                  sizes="(max-width: 768px) 160px, 256px"
                  className="object-contain object-left" // object-left keeps it aligned with the edge
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                if (item.children) {
                  return (
                    <div key={item.label} className="relative group">
                      <button
                        className={clsx(
                          "flex items-center gap-1 px-3 py-2 rounded-sm text-sm font-body font-medium",
                          "text-slate-700 hover:text-navy-950 transition-colors",
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className="transition-transform duration-200 group-hover:rotate-180"
                        />
                      </button>
                      <Dropdown items={item.children} />
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "px-3 py-2 text-sm font-body font-medium rounded-sm transition-colors",
                      active
                        ? "text-navy-950 font-semibold"
                        : "text-slate-700 hover:text-navy-950",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden p-2 rounded-sm text-slate-600 hover:text-navy-950 hover:bg-slate-100 transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "lg:hidden border-t border-slate-100 bg-white overflow-hidden transition-all duration-300",
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-2 divide-y divide-slate-50">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onClose={() => setMobileOpen(false)}
              />
            ))}
          </div>
          {/* Mobile contact strip */}
          <div className="bg-navy-950 px-4 py-3 flex flex-col gap-2">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-xs text-slate-300 flex items-center gap-2"
            >
              <Mail size={11} /> {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="text-xs text-slate-300 flex items-center gap-2"
            >
              <Phone size={11} /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
