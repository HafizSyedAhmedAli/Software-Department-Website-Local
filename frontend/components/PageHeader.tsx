"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  crumbs?: Crumb[];
  subtitle?: string;
}

export default function PageHeader({
  title,
  crumbs,
  subtitle,
}: PageHeaderProps) {
  const words = title.split(" ");

  return (
    <div className="relative bg-navy-950 overflow-hidden">
      {/* Ambient mesh gradient */}
      <div className="absolute inset-0 bg-mesh-navy pointer-events-none" />
      {/* Fine grid pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none" />

      {/* Floating glow orbs */}
      <motion.div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Gold left bar */}
      <motion.div
        className="absolute left-0 top-0 w-1 bg-gradient-to-b from-gold-500 via-gold-400 to-transparent"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative max-w-8xl mx-auto px-6 lg:px-10 py-12 md:py-16">
        {/* Breadcrumb */}
        {crumbs && crumbs.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ol className="inline-flex items-center gap-1.5 text-xs font-body mb-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-1"
                >
                  <Home size={11} />
                  Home
                </Link>
              </li>
              {crumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-slate-500" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="text-slate-400 hover:text-gold-400 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gold-400 font-medium">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        {/* Word-by-word animated title */}
        <h1 className="font-display text-white text-3xl md:text-5xl font-bold mb-3 tracking-tight flex flex-wrap gap-x-3">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.55,
                delay: 0.08 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {subtitle && (
          <motion.p
            className="font-body text-slate-300 text-sm md:text-base mb-3 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Gold accent line */}
        <motion.div
          className="mt-5 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
