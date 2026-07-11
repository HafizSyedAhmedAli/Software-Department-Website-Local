"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HIGHLIGHTS = [
  "PEC Accredited Engineering Program",
  "Outcome-Based Education (OBE)",
  "Undergraduate, Postgraduate & Doctoral Programs",
  "Modern Computing Laboratories",
  "Highly Qualified Faculty",
  "Research & Innovation Culture",
  "Industry Collaboration",
  "Project-Based Practical Learning",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      className="relative py-14 md:py-20 bg-white overflow-hidden"
      ref={ref}
    >
      {/* Faint dot backdrop */}
      <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none" />

      <div className="relative max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card-hover group">
              <Image
                src="/images/swdept.jpeg"
                alt="Software Engineering Department QUEST"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient sheen on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/30 via-transparent to-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating "Established" badge */}
            <motion.div
              className="absolute -bottom-6 -right-4 lg:-right-6 bg-gradient-to-br from-gold-500 to-gold-600 text-navy-950 px-6 py-5 rounded-2xl shadow-glow-gold hidden md:block"
              initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, rotate: 2 }}
            >
              <p className="font-display font-bold text-3xl leading-none">
                2018
              </p>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] mt-1">
                Established
              </p>
            </motion.div>

            {/* Corner accent frame */}
            <motion.div
              className="absolute -top-5 -left-5 w-28 h-28 border-4 border-gold-500/40 rounded-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            {/* Small floating dot cluster */}
            <div className="absolute -bottom-8 left-8 w-24 h-16 bg-dots-light hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
               who we are
            </span>
            <h2 className="section-title mb-6">About the Department</h2>

            <div className="space-y-4 font-body text-slate-600 text-base leading-relaxed mb-8">
              <p>
                The Department of Software Engineering at QUEST Nawabshah is
                dedicated to producing highly skilled software engineers capable
                of addressing modern technological challenges through
                innovation, research, and professional excellence. The
                department offers comprehensive academic programs at
                undergraduate, postgraduate, and doctoral levels —{" "}
                <strong className="text-navy-950">
                  Bachelor of Engineering (B.E.), Master of Engineering (M.E.),
                  and Doctor of Philosophy (Ph.D.)
                </strong>{" "}
                in Software Engineering.
              </p>
              <p>
                The department follows an{" "}
                <strong className="text-navy-950">
                  Outcome-Based Education (OBE)
                </strong>{" "}
                framework with a curriculum aligned with national accreditation
                standards and evolving industry requirements. Students acquire
                expertise in software design, programming, software
                architecture, artificial intelligence, cybersecurity, cloud
                computing, data science, and emerging technologies through
                modern laboratories and project-based learning.
              </p>
              <p>
                Supported by experienced faculty, advanced computing facilities,
                and strong academic and industrial collaborations, the
                department develops ethical, innovative, and globally
                competitive software engineers who contribute to technological
                advancement and sustainable development.
              </p>
            </div>

            {/* Highlights */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-9">
              {HIGHLIGHTS.map((h, i) => (
                <motion.li
                  key={h}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 hover:border-gold-300 hover:bg-gold-50/40 transition-colors duration-200"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.45,
                    delay: 0.35 + i * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <CheckCircle2
                    size={17}
                    className="text-gold-500 shrink-0 mt-0.5"
                  />
                  <span className="font-body text-sm text-slate-600 leading-snug">
                    {h}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              whileHover={{ scale: 1.03, x: 4 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link href="/courses" className="btn-primary">
                View Courses <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}