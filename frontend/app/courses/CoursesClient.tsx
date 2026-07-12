"use client";

import { useState, useMemo, useEffect } from "react";
import {
  BookOpen,
  Clock,
  ChevronRight,
  Layers,
  Brain,
  Wrench,
  Heart,
  X,
  ListChecks,
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
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-body font-semibold whitespace-nowrap ${map.cls}`}
    >
      <Icon size={10} /> {domain}
    </span>
  );
}

// ─── Course Card (grid style) ───────────────────────────────────────────────
function CourseCard({
  course,
  index,
  onOpen,
}: {
  course: Course;
  index: number;
  onOpen: () => void;
}) {
  const hasClos = Array.isArray(course.clos) && course.clos.length > 0;

  return (
    <motion.button
      onClick={() => hasClos && onOpen()}
      className={clsx(
        "group relative text-left bg-white border border-slate-100 rounded-2xl shadow-card p-5 overflow-hidden w-full h-full flex flex-col focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2",
        hasClos ? "cursor-pointer" : "cursor-default",
      )}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.45,
        delay: (index % 6) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={hasClos ? { y: -6, boxShadow: "0 18px 44px rgba(5,18,41,0.14)" } : {}}
      whileTap={hasClos ? { scale: 0.99 } : {}}
    >
      {/* Gold left accent grows on hover */}
      <span className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-gold-500 to-gold-300 group-hover:h-full transition-all duration-300 rounded-l-2xl" />
      {/* Corner glow */}
      <span className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gold-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-start justify-between gap-3 mb-3">
        <motion.span
          className="w-10 h-10 rounded-xl bg-navy-950 flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-colors duration-300"
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <BookOpen
            size={18}
            className="text-gold-400 group-hover:text-navy-950 transition-colors duration-300"
          />
        </motion.span>
        <span className="font-mono text-[11px] text-gold-600 font-bold bg-gold-500/10 border border-gold-500/25 rounded-full px-2.5 py-1">
          {course.code}
        </span>
      </div>

      <h3 className="font-display font-semibold text-navy-950 text-[15px] leading-snug mb-3 flex-1">
        {course.name}
      </h3>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-1">
        <span className="inline-flex items-center gap-1 font-body text-[11px] text-slate-400">
          <Clock size={10} /> {course.creditHours} CH
        </span>
        {course.type && (
          <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-600 font-body text-[10px] font-medium px-2 py-0.5">
            {course.type}
          </span>
        )}
      </div>

      {hasClos && (
        <span className="mt-3 pt-3 border-t border-slate-100 inline-flex items-center gap-1.5 text-[11px] font-body font-bold text-navy-950 uppercase tracking-wide group-hover:text-gold-600 transition-colors">
          <ListChecks size={12} className="text-gold-600" />
          View {course.clos.length} CLO{course.clos.length > 1 ? "s" : ""} &amp;
          PLO Mapping
          <ChevronRight
            size={12}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      )}
    </motion.button>
  );
}

// ─── CLO–PLO Mapping Modal ──────────────────────────────────────────────────
function CloModal({ course, onClose }: { course: Course; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[88svh] flex flex-col overflow-hidden"
        initial={{ opacity: 0, scale: 0.92, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={`${course.name} CLO PLO mapping`}
      >
        {/* Header */}
        <div className="relative bg-navy-950 px-6 py-5 shrink-0 overflow-hidden">
          <div className="absolute inset-0 bg-mesh-navy opacity-60 pointer-events-none" />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-400 mb-1.5">
                // clo_plo_mapping
              </p>
              <h2 className="font-display text-white font-bold text-lg sm:text-xl leading-snug">
                {course.name}
              </h2>
              <p className="font-body text-xs text-slate-300 mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
                <span className="font-mono text-gold-400 font-semibold">
                  {course.code}
                </span>
                <span>{course.creditHours} Credit Hours</span>
                <span>Semester {course.semester}</span>
                {course.type && <span>{course.type}</span>}
              </p>
            </div>
            <motion.button
              onClick={onClose}
              aria-label="Close"
              className="w-9 h-9 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center transition-colors shrink-0"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={16} />
            </motion.button>
          </div>
        </div>

        {/* Table */}
        <div className="p-5 sm:p-6 overflow-y-auto">
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
                      {clo.plo
                        ? `PLO-${String(clo.plo).replace(/^PLO-?/i, "")}`
                        : "—"}
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
    </motion.div>
  );
}

// ─── Main client: semester tabs + card grid + modal ────────────────────────
export default function CoursesClient({ courses }: { courses: Course[] }) {
  const semesters = useMemo(
    () =>
      [...new Set(courses.map((c) => c.semester))]
        .filter((s) => typeof s === "number" && s >= 1)
        .sort((a, b) => a - b),
    [courses],
  );
  const [active, setActive] = useState<number>(semesters[0] ?? 1);
  const [openCourse, setOpenCourse] = useState<Course | null>(null);

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
             select --semester
          </span>
          <div className="flex flex-wrap gap-2 mt-2">
            {semesters.map((sem) => (
              <button
                key={sem}
                onClick={() => setActive(sem)}
                className={clsx(
                  "px-4 py-2 rounded-xl font-body text-sm font-semibold transition-all duration-200",
                  active === sem
                    ? "bg-navy-950 text-white shadow-card"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-gold-400 hover:text-navy-950",
                )}
              >
                Semester {sem}
                {active === sem && (
                  <span className="ml-1.5 text-gold-400 font-mono text-[10px]">
                    ●
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Semester content ── */}
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
              <p className="font-mono text-[11px] text-slate-400 hidden sm:block">
                 click a course to view its CLO-PLO mapping
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {visible.map((course, i) => (
                <CourseCard
                  key={course._id ?? `${active}-${i}`}
                  course={course}
                  index={i}
                  onOpen={() => setOpenCourse(course)}
                />
              ))}
            </div>
            {visible.length === 0 && (
              <p className="py-16 text-center font-body text-slate-400">
                No courses added for this semester yet.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── CLO modal ── */}
      <AnimatePresence>
        {openCourse && (
          <CloModal course={openCourse} onClose={() => setOpenCourse(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}