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
               active research domains
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

      {/* ── Publications & Projects (CMS-driven, hidden until data exists) ── */}
      {items.length > 0 && (
        <section className="relative py-14 md:py-20 bg-slate-50 overflow-hidden">
          <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none" />
          <div className="relative max-w-8xl mx-auto px-5 sm:px-6 lg:px-10">
            <div className="mb-10 text-center">
              <span className="eyebrow">
                <BookOpen size={12} className="text-gold-600" />
                 publications
              </span>
              <h2 className="section-title">Publications &amp; Projects</h2>
              <p className="section-subtitle">
                Recent research output from our faculty and students.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {items.map((item, i) => (
                <motion.div
                  key={item._id ?? i}
                  className="group bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="inline-flex items-center rounded-full bg-navy-950 text-gold-400 font-mono text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
                      {KIND_LABEL[item.kind] ?? item.kind}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      {item.year}
                    </span>
                    {item.area && (
                      <span className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-700 font-body text-[11px] font-medium px-2.5 py-0.5">
                        {item.area}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-navy-950 text-base leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-slate-500">
                    {item.authors}
                    {item.venue && (
                      <span className="text-slate-400"> — {item.venue}</span>
                    )}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-body font-bold text-navy-950 uppercase tracking-wide hover:text-gold-600 transition-colors"
                    >
                      View Publication <ExternalLink size={12} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
