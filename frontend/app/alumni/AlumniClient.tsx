"use client";

import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Globe2,
  Rocket,
  ArrowRight,
  HeartHandshake,
  Quote,
  MapPin,
  Linkedin,
  UserRound,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StaggerContainer, StaggerItem } from "../../components/FadeIn";
import type { AlumnusProfile } from "../../lib/types";

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

export default function AlumniClient({
  profiles = [],
}: {
  profiles?: AlumnusProfile[];
}) {
  return (
    <>
      {/* ── Where Our Graduates Go ── */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none" />
        <div className="relative max-w-8xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="mb-10 text-center">
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
               where our graduates go
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

      {/* ── Notable Alumni (CMS-driven, hidden until data exists) ── */}
      {profiles.length > 0 && (
        <section className="relative py-14 md:py-20 bg-slate-50 overflow-hidden">
          <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none" />
          <div className="relative max-w-8xl mx-auto px-5 sm:px-6 lg:px-10">
            <div className="mb-10 text-center">
              <span className="eyebrow">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                 proud graduates
              </span>
              <h2 className="section-title">Notable Alumni</h2>
              <p className="section-subtitle">
                Meet some of the graduates carrying our department&apos;s name
                into the world.
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((p, i) => (
                <StaggerItem key={p._id ?? i} className="h-full">
                  <motion.div
                    className="group relative h-full bg-white border border-slate-100 rounded-2xl p-6 shadow-card overflow-hidden flex flex-col"
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 48px rgba(5,18,41,0.14)",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gold-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Photo + identity */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-navy-100 shrink-0 ring-2 ring-gold-500/20 group-hover:ring-gold-500/50 transition-all">
                        {p.photoUrl ? (
                          <Image
                            src={p.photoUrl}
                            alt={p.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <UserRound size={26} className="text-navy-300" />
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display font-semibold text-navy-950 text-base leading-snug truncate">
                          {p.name}
                        </h3>
                        <p className="font-mono text-[10px] text-gold-600 font-semibold uppercase tracking-wider mt-0.5">
                          {p.batch}
                        </p>
                      </div>
                    </div>

                    {/* Role */}
                    <p className="font-body text-sm text-navy-950 font-semibold">
                      {p.designation}
                      {p.company && (
                        <span className="text-slate-500 font-normal">
                          {" "}
                          @ {p.company}
                        </span>
                      )}
                    </p>
                    {p.location && (
                      <p className="font-body text-xs text-slate-400 mt-1 flex items-center gap-1">
                        <MapPin size={11} /> {p.location}
                      </p>
                    )}

                    {/* Quote */}
                    {p.quote && (
                      <div className="mt-4 pt-4 border-t border-slate-100 flex-1">
                        <Quote
                          size={14}
                          className="text-gold-500 fill-gold-500 mb-1.5"
                        />
                        <p className="font-body text-sm text-slate-500 leading-relaxed italic line-clamp-4">
                          {p.quote}
                        </p>
                      </div>
                    )}

                    {/* LinkedIn */}
                    {p.linkedin && (
                      <a
                        href={p.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-body font-bold text-navy-950 uppercase tracking-wide hover:text-gold-600 transition-colors self-start"
                      >
                        <Linkedin size={13} /> Connect
                      </a>
                    )}

                    <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

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
               join --alumni-network
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
