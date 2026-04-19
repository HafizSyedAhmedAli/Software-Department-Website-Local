"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HIGHLIGHTS = [
  "PEC Accredited Bachelor of Engineering programme",
  "Introduced in 2020 — first batch graduated 2024",
  "State-of-the-art laboratories & infrastructure",
  "Highly qualified faculty & technical staff",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-sm overflow-hidden aspect-[4/3] shadow-card-hover">
              <Image
                src="/images/swdept.jpeg"
                alt="Software Engineering Department QUEST"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Overlay shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-5 -right-5 bg-gold-500 text-navy-950 p-5 rounded-sm shadow-lg hidden md:block"
              initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="font-display font-bold text-2xl leading-none">
                2020
              </p>
              <p className="font-body text-xs font-semibold uppercase tracking-wide mt-0.5">
                Established
              </p>
            </motion.div>

            {/* Gold corner accent */}
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 border-4 border-gold-500 rounded-sm hidden md:block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 0.3, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="gold-rule" />
            <h2 className="section-title mb-5">About the Department</h2>

            <div className="space-y-4 font-body text-slate-600 text-base leading-relaxed mb-7">
              <p>
                The Software Engineering Department&apos;s key objective is to
                provide state-of-the-art education to undergraduates, enabling
                them to master the creation, design, development, debugging, and
                delivery of reliable, cost-effective software systems.
              </p>
              <p>
                Recognising the field&apos;s significance, QUEST introduced the
                Software Engineering programme in 2020, conferring a{" "}
                <strong className="text-navy-950">
                  Bachelor of Engineering (BE)
                </strong>{" "}
                degree upon successful completion of 4 years (8 semesters) of
                study.
              </p>
              <p>
                Accredited by the{" "}
                <strong className="text-navy-950">
                  Pakistan Engineering Council (PEC)
                </strong>
                , the curriculum harmonises theoretical foundations with
                essential practical engineering knowledge.
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-2.5 mb-8">
              {HIGHLIGHTS.map((h, i) => (
                <motion.li
                  key={h}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.35 + i * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <CheckCircle
                    size={17}
                    className="text-gold-500 shrink-0 mt-0.5"
                  />
                  <span className="font-body text-sm text-slate-600">{h}</span>
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
