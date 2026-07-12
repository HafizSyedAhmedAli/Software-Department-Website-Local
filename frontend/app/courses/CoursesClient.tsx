"use client";

import { useState, useMemo } from "react";
import {
  BookOpen,
  Clock,
  ChevronDown,
  Layers,
  Brain,
  Wrench,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

const SEMESTER_LABELS: Record<number, string> = {
  1: "First Semester",
  2: "Second Semester",
  3: "Third Semester",
  4: "Fourth Semester",
  5: "Fifth Semester",
  6: "Sixth Semester",
  7: "Seventh Semester",
  8: "Eighth Semester",
};

interface CourseCLO {
  clo: string;
  description: string;
  domain: string;
  taxonomy: string;
  plo: string;
}
interface Course {
  _id?: string;
  code: string;
  name: string;
  creditHours: number;
  semester: number;
  type: string;
  clos: CourseCLO[];
}

// ─── Domain badge (Cognitive / Psychomotor / Affective) ────────────────────
function DomainBadge({ domain }: { domain?: string }) {
  if (!domain) return <span className="text-slate-300">—</span>;
  const d = domain.toLowerCase();
  const map = d.startsWith("cog")
    ? { icon: Brain, cls: "bg-navy-50 text-navy-800 border-navy-200" }
    : d.startsWith("psy")
      ? { icon: Wrench, cls: "bg-gold-50 text-gold-800 border-gold-200" }
      : { icon: Heart, cls: "bg-rose-50 text-rose-700 border-rose-200" };
  const Icon = map.icon;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-body font-semibold ${map.cls}`}
    >
      <Icon size={10} /> {domain}
    </span>
  );
}

// ─── Expandable course row with proper OBE CLO–PLO table ───────────────────
function CourseRow({ course }: { course: Course }) {
  const [open, setOpen] = useState(false);
  const hasClos = Array.isArray(course.clos) && course.clos.length > 0;

  return (
    <motion.div
      layout
      className="bg-white border border-slate-100 rounded-2xl shadow-card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header — always visible, clickable */}
      <button
        onClick={() => hasClos && setOpen((v) => !v)}
        className={clsx(
          "w-full flex items-center gap-4 px-5 py-4 text-left transition-colors",
          hasClos ? "hover:bg-slate-50 cursor-pointer" : "cursor-default",
        )}
        aria-expanded={open}
      >
        <span className="w-10 h-10 rounded-xl bg-navy-950 flex items-center justify-center shrink-0">
          <BookOpen size={17} className="text-gold-400" />
        </span>

        <span className="flex-1 min-w-0">
          <span className="block font-display font-semibold text-navy-950 text-sm sm:text-base leading-snug">
            {course.name}
          </span>
          <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-mono text-[11px] text-gold-600 font-semibold">
              {course.code}
            </span>
            <span className="inline-flex items-center gap-1 font-body text-[11px] text-slate-400">
              <Clock size={10} /> {course.creditHours} Credit Hours
            </span>
            {course.type && (
              <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-600 font-body text-[10px] font-medium px-2 py-0.5">
                {course.type}
              </span>
            )}
            {hasClos && (
              <span className="inline-flex items-center rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 font-mono text-[10px] font-semibold px-2 py-0.5">
                {course.clos.length} CLO{course.clos.length > 1 ? "s" : ""}
              </span>
            )}
          </span>
        </span>

        {hasClos && (
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="text-slate-400 shrink-0"
          >
            <ChevronDown size={18} />
          </motion.span>
        )}
      </button>

      {/* CLO–PLO mapping table (standard OBE format) */}
      <AnimatePresence initial={false}>
        {open && hasClos && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <div className="overflow-x-auto rounded-xl border border-slate-100">
                <table className="w-full text-sm border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-navy-950 text-white">
                      <th className="font-body font-semibold text-xs px-3 py-2.5 text-left w-20">
                        CLO
                      </th>
                      <th className="font-body font-semibold text-xs px-3 py-2.5 text-left">
                        Course Learning Outcome Statement
                      </th>
                      <th className="font-body font-semibold text-xs px-3 py-2.5 text-left w-32">
                        Domain
                      </th>
                      <th className="font-body font-semibold text-xs px-3 py-2.5 text-center w-20">
                        Level
                      </th>
                      <th className="font-body font-semibold text-xs px-3 py-2.5 text-center w-20">
                        PLO
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {course.clos.map((clo, i) => (
                      <tr
                        key={i}
                        className={clsx(
                          "border-b border-slate-100 last:border-0",
                          i % 2 === 1 && "bg-slate-50/60",
                        )}
                      >
                        <td className="px-3 py-2.5 font-mono text-[11px] font-bold text-navy-950 whitespace-nowrap align-top">
                          {clo.clo}
                        </td>
                        <td className="px-3 py-2.5 font-body text-[13px] text-slate-600 leading-relaxed align-top">
                          {clo.description}
                        </td>
                        <td className="px-3 py-2.5 align-top">
                          <DomainBadge domain={clo.domain} />
                        </td>
                        <td className="px-3 py-2.5 text-center align-top">
                          <span className="inline-flex items-center justify-center rounded-md bg-navy-950 text-gold-400 font-mono text-[11px] font-bold px-2 py-0.5">
                            {clo.taxonomy || "—"}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 text-center align-top font-mono text-[12px] font-bold text-navy-950">
                          {clo.plo ? `PLO-${String(clo.plo).replace(/^PLO-?/i, "")}` : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2.5 font-body text-[11px] text-slate-400">
                Domains: Cognitive (C1–C6, Bloom&apos;s Taxonomy) · Psychomotor
                (P1–P5) · Affective (A1–A5). Each CLO is mapped to a Program
                Learning Outcome (PLO).
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main client: semester tabs + course accordions ────────────────────────
export default function CoursesClient({ courses }: { courses: Course[] }) {
  const semesters = useMemo(
    () =>
      [...new Set(courses.map((c) => c.semester))]
        .filter((s) => typeof s === "number" && s >= 1)
        .sort((a, b) => a - b),
    [courses],
  );
  const [active, setActive] = useState<number>(semesters[0] ?? 1);

  const visible = useMemo(
    () => courses.filter((c) => c.semester === active),
    [courses, active],
  );

  const totalCH = visible.reduce((sum, c) => sum + (c.creditHours || 0), 0);
  const totalClos = visible.reduce((sum, c) => sum + (c.clos?.length || 0), 0);

  return (
    <section className="relative py-14 md:py-20 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none" />
      <div className="relative max-w-8xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* ── Semester tabs ── */}
        <div className="mb-8">
          <span className="eyebrow">
            <Layers size={11} className="text-gold-600" />
            $ select --semester
          </span>
          <div className="flex flex-wrap gap-2 mt-2">
            {semesters.map((sem) => (
              <button
                key={sem}
                onClick={() => setActive(sem)}
                className={clsx(
                  "relative px-4 py-2 rounded-xl font-body text-sm font-semibold transition-all duration-200",
                  active === sem
                    ? "bg-navy-950 text-white shadow-card"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-gold-400 hover:text-navy-950",
                )}
              >
                {active === sem && (
                  <motion.span
                    layoutId="sem-pill"
                    className="absolute inset-0 rounded-xl bg-navy-950 -z-10"
                    transition={{ duration: 0.25 }}
                  />
                )}
                <span className="relative">
                  Semester {sem}
                  {active === sem && (
                    <span className="ml-1.5 text-gold-400 font-mono text-[10px]">
                      ●
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Semester summary ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
              <div>
                <h2 className="font-display text-navy-950 font-bold text-xl sm:text-2xl">
                  {SEMESTER_LABELS[active] ?? `Semester ${active}`}
                </h2>
                <p className="font-body text-sm text-slate-500 mt-1">
                  {visible.length} course{visible.length !== 1 ? "s" : ""} ·{" "}
                  {totalCH} credit hours · {totalClos} learning outcomes
                </p>
              </div>
              <p className="font-mono text-[11px] text-slate-400">
                click a course to view its CLO-PLO mapping
              </p>
            </div>

            {/* ── Course accordion list ── */}
            <div className="space-y-3">
              {visible.map((course, i) => (
                <CourseRow key={course._id ?? `${active}-${i}`} course={course} />
              ))}
              {visible.length === 0 && (
                <p className="py-16 text-center font-body text-slate-400">
                  No courses added for this semester yet.
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}