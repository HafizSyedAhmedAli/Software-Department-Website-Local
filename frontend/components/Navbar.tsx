"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Mail, Phone } from "lucide-react";
import { clsx } from "clsx";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";
import { NavItem } from "../lib/types";
import { CONTACT, NAV_ITEMS } from "../download/data";

// ─── Animated Dropdown ──────────────────────────────────────────────────────
function Dropdown({ items, visible }: { items: NavItem[]; visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-full left-0 mt-2 w-60 bg-white/95 backdrop-blur-xl border border-slate-100 shadow-xl rounded-xl z-50 py-1.5 overflow-hidden"
        >
          {/* Gold accent line */}
          <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500 to-transparent" />
          {items.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04, duration: 0.18 }}
            >
              <Link
                href={item.href}
                className="group flex items-center gap-2.5 mx-1.5 px-3 py-2.5 rounded-lg text-sm font-body text-slate-700 hover:bg-navy-950 hover:text-white transition-all duration-150"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 opacity-60 group-hover:opacity-100 shrink-0 transition-all duration-150 group-hover:scale-125" />
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Desktop Nav Link ───────────────────────────────────────────────────────
function DesktopNavLink({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className={clsx(
            "flex items-center gap-1.5 px-3.5 py-2 text-sm font-body font-medium rounded-lg transition-colors duration-200 relative group",
            "text-slate-700 hover:text-navy-950 hover:bg-slate-100/70",
          )}
        >
          {item.label}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={13} />
          </motion.span>
          <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
        </button>
        <Dropdown items={item.children} visible={open} />
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={clsx(
        "relative px-3.5 py-2 text-sm font-body font-medium rounded-lg transition-colors duration-200 group",
        active
          ? "text-navy-950 font-semibold"
          : "text-slate-700 hover:text-navy-950 hover:bg-slate-100/70",
      )}
    >
      {item.label}
      <span
        className={clsx(
          "absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full transition-transform duration-300 origin-left",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
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
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} />
          </motion.span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="bg-slate-50 border-l-2 border-gold-500 ml-4 rounded-r-lg">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="block px-5 py-2.5 text-sm text-slate-600 hover:text-navy-950 hover:bg-slate-100 transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── Top Bar ── */}
      <div className="hidden md:block bg-navy-950 text-white relative overflow-hidden">
        {/* Animated gradient sheen */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-gradient-x bg-[length:200%_100%] pointer-events-none" />
        <div className="max-w-8xl mx-auto px-6 lg:px-10 py-2 flex items-center justify-between relative">
          <div className="flex items-center gap-6 text-xs font-body">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-gold-400 transition-colors duration-200"
            >
              <Mail size={12} />
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-gold-400 transition-colors duration-200"
            >
              <Phone size={12} />
              {CONTACT.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            {[
              {
                href: CONTACT.facebook,
                label: "Facebook",
                icon: (
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ),
              },
              {
                href: CONTACT.twitter,
                label: "Twitter",
                icon: (
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                href: CONTACT.linkedin,
                label: "LinkedIn",
                icon: (
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-slate-400 hover:text-gold-400 transition-colors duration-200 p-1 rounded"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Nav (glassmorphism when scrolled) ── */}
      <nav
        className={clsx(
          "sticky top-0 z-40 transition-all duration-300 border-b",
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-nav border-slate-200/60"
            : "bg-white border-transparent shadow-sm",
        )}
      >
        <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-10">
          <div
            className={clsx(
              "flex items-center justify-between transition-all duration-300",
              scrolled ? "h-14 md:h-16" : "h-16 md:h-20",
            )}
          >
            {/* Brand: crisp emblem tile + typographic lockup.
                Text is rendered by fonts (always sharp at any size/zoom),
                and the emblem renders at 2x resolution for retina clarity. */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <motion.div
                className={clsx(
                  "relative rounded-xl bg-white ring-1 ring-slate-200/80 shadow-sm flex items-center justify-center transition-all duration-300 overflow-hidden",
                  scrolled
                    ? "w-9 h-9 md:w-11 md:h-11"
                    : "w-10 h-10 md:w-[52px] md:h-[52px]",
                )}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/favicon.png"
                  alt="QUEST Software Engineering emblem"
                  width={104}
                  height={104}
                  quality={100}
                  className="object-contain p-1"
                  priority
                />
              </motion.div>
              <div className="leading-none">
                <p
                  className={clsx(
                    "font-display font-bold text-navy-950 tracking-tight transition-all duration-300",
                    scrolled
                      ? "text-[13px] md:text-[15px]"
                      : "text-sm md:text-[17px]",
                  )}
                >
                  Software Engineering
                </p>
                <p
                  className={clsx(
                    "font-mono font-semibold text-gold-600 uppercase transition-all duration-300",
                    scrolled
                      ? "text-[8px] md:text-[9px] tracking-[0.22em]"
                      : "text-[9px] md:text-[10px] tracking-[0.26em]",
                  )}
                >
                  QUEST Nawabshah
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => (
                <DesktopNavLink
                  key={item.label}
                  item={item}
                  active={pathname === item.href}
                />
              ))}
            </div>

            {/* Mobile toggle */}
            <motion.button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-navy-950 hover:bg-slate-100 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ── Scroll progress bar ── */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 origin-left"
          style={{ scaleX: progress }}
        />

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
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
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}