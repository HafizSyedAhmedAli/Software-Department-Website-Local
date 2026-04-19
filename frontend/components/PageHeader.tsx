"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
  return (
    <div className="bg-navy-950 relative overflow-hidden">
      {/* Decorative circles */}
      <motion.div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-navy-800 opacity-40 pointer-events-none"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Gold left bar */}
      <motion.div
        className="absolute left-0 top-0 w-1 bg-gold-500"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.3) 59px, rgba(255,255,255,0.3) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.3) 59px, rgba(255,255,255,0.3) 60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        {crumbs && crumbs.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ol className="flex items-center gap-1.5 text-xs font-body mb-4">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-gold-400 transition-colors"
                >
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

        <motion.h1
          className="font-display text-white text-3xl md:text-4xl font-bold mb-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="font-body text-slate-300 text-sm mb-3 max-w-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Gold accent line */}
        <motion.div
          className="mt-4 h-1 bg-gold-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
