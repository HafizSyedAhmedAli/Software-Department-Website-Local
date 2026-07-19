"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Globe2,
  Rocket,
  ArrowRight,
  HeartHandshake,
  Search,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { StaggerContainer, StaggerItem } from "../../components/FadeIn";
import { ALUMNI_RECORDS } from "../../download/alumni-data";

const PATHS = [
  {
    icon: Briefcase,
    title: "Industry Professionals",
    description:
      "Alumni working as software engineers, architects, and team leads in national and multinational technology organisations.",
  },
  {
    icon: GraduationCap,
    title: "Researchers & Academics",
    description:
      "Graduates pursuing higher studies and research careers at universities in Pakistan and abroad.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurs",
    description:
      "Founders building startups, software houses, and freelance careers that create jobs and drive innovation.",
  },
  {
    icon: Globe2,
    title: "Global Talent",
    description:
      "Alumni contributing to the global technology sector across the Middle East, Europe, North America, and beyond.",
  },
];

export default function AlumniClient() {
  const batches = useMemo(
    () => [...new Set(ALUMNI_RECORDS.map((a) => a.batch))].sort(),
    [],
  );
  const [activeBatch, setActiveBatch] = useState<string>(batches[0] ?? "");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALUMNI_RECORDS.filter(
      (a) =>
        a.batch === activeBatch &&
        (!q ||
          a.name.toLowerCase().includes(q) ||
          a.roll.toLowerCase().includes(q)),
    );
  }, [activeBatch, query]);

  return (
    <>
      {/* ── Where Our Graduates Go ── */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none" />
        <div className="relative max-w-8xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="mb-10 text-center">
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              // where_our_graduates_go
            </span>
            <h2 className="section-title">A Growing Global Network</h2>
            <p className="section-subtitle">
              From Nawabshah to the world — our graduates carry the
              department&apos;s values of excellence, ethics, and innovation.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PATHS.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title} className="h-full">
                <motion.div
                  className="group relative h-full bg-white border border-slate-100 rounded-2xl p-6 shadow-card overflow-hidden"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 48px rgba(5,18,41,0.14)",
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gold-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors duration-300"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                  >
                    <Icon
                      size={22}
                      className="text-gold-400 group-hover:text-navy-950 transition-colors duration-300"
                    />
                  </motion.div>
                  <h3 className="font-display font-semibold text-navy-950 text-base leading-snug mb-2">
                    {title}
                  </h3>
                  <p className="font-body text-sm text-slate-500 leading-relaxed">
                    {description}
                  </p>
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Graduates Directory ── */}
      <section className="relative py-14 md:py-20 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none" />
        <div className="relative max-w-8xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="mb-8 text-center">
            <span className="eyebrow">
              <Users size={11} className="text-gold-600" />
              $ ls ./graduates
            </span>
            <h2 className="section-title">Our Graduates</h2>
            <p className="section-subtitle">
              The complete record of graduating batches of the Department of
              Software Engineering.
            </p>
          </div>

          {/* Controls: batch tabs + search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
            <div className="flex flex-wrap gap-2">
              {batches.map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBatch(b)}
                  className={clsx(
                    "px-4 py-2 rounded-xl font-body text-sm font-semibold transition-all duration-200",
                    activeBatch === b
                      ? "bg-navy-950 text-white shadow-card"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-gold-400 hover:text-navy-950",
                  )}
                >
                  {b} Batch
                  {activeBatch === b && (
                    <span className="ml-1.5 text-gold-400 font-mono text-[10px]">
                      ●
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="relative sm:w-72">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name or roll no…"
                className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 font-body text-sm text-navy-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-all"
              />
            </div>
          </div>

          {/* Count */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBatch + query}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="font-body text-sm text-slate-500 mb-5">
                {visible.length} graduate{visible.length !== 1 ? "s" : ""}
                {query ? ` matching "${query}"` : ` in the ${activeBatch} batch`}
              </p>

              {/* Compact graduate grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {visible.map((a, i) => (
                  <motion.div
                    key={a.roll}
                    className="group flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3 shadow-sm hover:shadow-card hover:border-gold-300 hover:-translate-y-0.5 transition-all duration-200"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: Math.min(i * 0.015, 0.4),
                    }}
                  >
                    <span className="w-9 h-9 rounded-lg bg-navy-950 text-gold-400 font-display font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-200">
                      {a.name
                        .replace(/^(Mr|Ms|Mrs)\.?\s+/i, "")
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-body font-semibold text-navy-950 text-sm truncate">
                        {a.name}
                      </span>
                      <span className="block font-mono text-[11px] text-slate-400">
                        {a.roll}
                      </span>
                    </span>
                  </motion.div>
                ))}
              </div>

              {visible.length === 0 && (
                <p className="py-16 text-center font-body text-slate-400">
                  No graduates match your search.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Join the Network CTA ── */}
      <section className="relative py-14 md:py-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-navy opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
        <div className="relative max-w-8xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow-dark">
              <HeartHandshake size={12} className="text-gold-400" />
              $ join --alumni-network
            </span>
            <h2 className="font-display text-white text-section font-bold mb-4">
              Are You a SWE QUEST Graduate?
            </h2>
            <p className="font-body text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              We would love to hear from you. Share your journey, mentor
              current students, or collaborate with the department — your story
              inspires the next generation.
            </p>
            <Link href="/contact" className="btn-gold">
              Connect With Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
