"use client";

import Link from "next/link";
import {
  BrainCircuit,
  ShieldCheck,
  Database,
  Cloud,
  Cpu,
  Boxes,
  BadgeCheck,
  FlaskConical,
  ArrowRight,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../../components/FadeIn";
import type { ResearchItem } from "../../lib/types";
import { PUBLICATIONS, type Publication } from "../../download/research-data";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { clsx } from "clsx";

const KIND_LABEL: Record<ResearchItem["kind"], string> = {
  journal: "Journal",
  conference: "Conference",
  project: "Project",
  book: "Book",
};

const RESEARCH_AREAS = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Intelligent systems, deep learning, natural language processing, and computer vision applied to real-world problems.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Secure software design, network security, digital forensics, and privacy-preserving technologies.",
  },
  {
    icon: Database,
    title: "Data Science & Big Data",
    description:
      "Data analytics, predictive modelling, and large-scale data processing for decision support.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Distributed systems, serverless architectures, scalability, and cloud-native software engineering.",
  },
  {
    icon: Cpu,
    title: "Internet of Things (IoT)",
    description:
      "Smart devices, sensor networks, embedded software, and IoT platforms for smart cities and agriculture.",
  },
  {
    icon: Boxes,
    title: "Digital Twin Technologies",
    description:
      "Virtual replicas of physical systems for simulation, monitoring, and optimisation of processes.",
  },
  {
    icon: BadgeCheck,
    title: "Software Quality Assurance",
    description:
      "Software testing, verification & validation, quality metrics, and reliable software processes.",
  },
  {
    icon: FlaskConical,
    title: "Emerging Technologies",
    description:
      "Exploratory research in blockchain, AR/VR, edge computing, and next-generation software paradigms.",
  },
];

export default function ResearchClient({
  items = [],
}: {
  items?: ResearchItem[];
}) {
  return (
    <>
      {/* ── Research Areas ── */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none" />
        <div className="relative max-w-8xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="mb-10 text-center">
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              // active_research_domains
            </span>
            <h2 className="section-title">Our Research Areas</h2>
            <p className="section-subtitle">
              Faculty-led and student-driven research spanning today&apos;s most
              impactful technology domains.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESEARCH_AREAS.map(({ icon: Icon, title, description }) => (
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

      {/* ── Publications Directory (local data + CMS, filterable & paginated) ── */}
      <PublicationsDirectory cmsItems={items} />

      {/* ── Collaboration CTA ── */}
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
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              $ collaborate --with-us
            </span>
            <h2 className="font-display text-white text-section font-bold mb-4">
              Interested in Research Collaboration?
            </h2>
            <p className="font-body text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              We welcome collaboration with industry, academia, and research
              organisations. Reach out to explore joint projects, consultancy,
              and student research supervision.
            </p>
            <Link href="/contact" className="btn-gold">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}


// ─── Publications Directory ────────────────────────────────────────────────
const PAGE_SIZE = 12;
const CATEGORY_ORDER = ["All", "Journal", "Conference", "Book Chapter", "Book", "Patent"];

function PublicationsDirectory({ cmsItems }: { cmsItems: ResearchItem[] }) {
  // Merge: local generated data + anything added later via CMS
  const all: Publication[] = useMemo(() => {
    const fromCms: Publication[] = (cmsItems || []).map((r) => ({
      citation: `${r.authors}, "${r.title}"${r.venue ? `, ${r.venue}` : ""}${r.year ? `, ${r.year}` : ""}.`,
      category:
        r.kind === "journal" ? "Journal"
        : r.kind === "conference" ? "Conference"
        : r.kind === "book" ? "Book"
        : "Journal",
      faculty: "Department",
      year: r.year ?? null,
    }));
    return [...PUBLICATIONS, ...fromCms].sort(
      (a, b) => (b.year ?? 0) - (a.year ?? 0),
    );
  }, [cmsItems]);

  const facultyList = useMemo(
    () => ["All Faculty", ...new Set(PUBLICATIONS.map((p) => p.faculty))],
    [],
  );

  const [category, setCategory] = useState("All");
  const [faculty, setFaculty] = useState("All Faculty");
  const [query, setQuery] = useState("");
  const [shown, setShown] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (faculty === "All Faculty" || p.faculty === faculty) &&
        (!q || p.citation.toLowerCase().includes(q)),
    );
  }, [all, category, faculty, query]);

  const visible = filtered.slice(0, shown);

  function resetPage() {
    setShown(PAGE_SIZE);
  }

  return (
    <section className="relative py-14 md:py-20 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none" />
      <div className="relative max-w-8xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="mb-8 text-center">
          <span className="eyebrow">
            <BookOpen size={12} className="text-gold-600" />
            $ cat ./publications
          </span>
          <h2 className="section-title">Publications &amp; Research Output</h2>
          <p className="section-subtitle">
            {all.length}+ books, chapters, journal and conference publications
            by our faculty.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-7">
          <div className="flex flex-wrap gap-2">
            {CATEGORY_ORDER.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCategory(c);
                  resetPage();
                }}
                className={clsx(
                  "px-3.5 py-2 rounded-xl font-body text-sm font-semibold transition-all duration-200",
                  category === c
                    ? "bg-navy-950 text-white shadow-card"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-gold-400 hover:text-navy-950",
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:ml-auto">
            <select
              value={faculty}
              onChange={(e) => {
                setFaculty(e.target.value);
                resetPage();
              }}
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 font-body text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-gold-400 cursor-pointer"
            >
              {facultyList.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
            <div className="relative sm:w-64">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  resetPage();
                }}
                placeholder="Search publications…"
                className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 font-body text-sm text-navy-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-all"
              />
            </div>
          </div>
        </div>

        <p className="font-body text-sm text-slate-500 mb-5">
          Showing {visible.length} of {filtered.length} publication
          {filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Citation list */}
        <div className="space-y-3">
          {visible.map((p, i) => (
            <motion.div
              key={`${p.citation.slice(0, 60)}-${i}`}
              className="group bg-white border border-slate-100 rounded-xl px-5 py-4 shadow-sm hover:shadow-card hover:border-gold-300 transition-all duration-200"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min((i % PAGE_SIZE) * 0.03, 0.35) }}
            >
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="inline-flex items-center rounded-full bg-navy-950 text-gold-400 font-mono text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5">
                  {p.category}
                </span>
                {p.year && (
                  <span className="font-mono text-[11px] text-slate-400">
                    {p.year}
                  </span>
                )}
                {p.faculty !== "Department" && (
                  <span className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-700 font-body text-[10px] font-medium px-2.5 py-0.5">
                    {p.faculty}
                  </span>
                )}
              </div>
              <p className="font-body text-[13px] text-slate-600 leading-relaxed">
                {p.citation}
              </p>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-16 text-center font-body text-slate-400">
            No publications match your filters.
          </p>
        )}

        {/* Show more */}
        {shown < filtered.length && (
          <div className="text-center mt-8">
            <motion.button
              onClick={() => setShown((s) => s + PAGE_SIZE)}
              className="btn-outline"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Show More ({filtered.length - shown} remaining)
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
