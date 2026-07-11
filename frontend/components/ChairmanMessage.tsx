"use client";

import Image from "next/image";
import { Quote, UserRound } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Tries multiple known filenames so the photo shows regardless of which
// one exists in /public/images/faculty/. Shows a styled placeholder if none do.
const CHAIRMAN_IMAGE_CANDIDATES = [
  "/images/faculty/chairmainpic.jpg",
  "/images/faculty/chairman.jpg",
  "/images/faculty/chairman.png",
  "/images/faculty/chairman.jpeg",
];

function ChairmanImage() {
  const [idx, setIdx] = useState(0);

  if (idx >= CHAIRMAN_IMAGE_CANDIDATES.length) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-navy-100 to-navy-50 flex flex-col items-center justify-center gap-3">
        <UserRound size={64} className="text-navy-300" />
        <span className="font-display text-navy-400 font-semibold text-sm">
          Prof. Dr. Pardeep Kumar
        </span>
      </div>
    );
  }

  return (
    <Image
      src={CHAIRMAN_IMAGE_CANDIDATES[idx]}
      alt="Prof. Dr. Pardeep Kumar"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      onError={() => setIdx((i) => i + 1)}
      priority
    />
  );
}

export default function ChairmanMessage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-14 md:py-20 bg-slate-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-dots-light opacity-50 pointer-events-none" />
      <motion.div
        className="absolute left-0 top-0 w-1 bg-gradient-to-b from-gold-500 to-transparent"
        initial={{ height: 0 }}
        animate={inView ? { height: "100%" } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Giant faded quote mark */}
      <Quote
        size={280}
        className="absolute -top-10 right-0 text-navy-950/[0.03] fill-navy-950/[0.03] pointer-events-none hidden lg:block"
      />

      <div className="relative max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-center">
          {/* Photo */}
          <motion.div
            className="lg:col-span-2 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-sm mx-auto group">
              {/* Offset gradient frame */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700"
                initial={{ x: 0, y: 0 }}
                animate={inView ? { x: 10, y: 10 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              />
              {/* Gold corner tick */}
              <motion.div
                className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-gold-500 rounded-tl-2xl z-10"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card-hover">
                <ChairmanImage />
              </div>
            </div>
            <motion.div
              className="mt-8 text-center lg:text-left lg:ml-2"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <p className="font-display text-navy-950 font-bold text-xl">
                Prof. Dr. Pardeep Kumar
              </p>
              <p className="font-body text-sm text-slate-500 mt-1">
                Chairman, Dept. of Software Engineering
              </p>
              <p className="font-mono text-[11px] text-gold-600 font-semibold uppercase tracking-[0.2em] mt-1.5">
                QUEST Nawabshah
              </p>
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
               a word from our chairman
            </span>
            <h2 className="section-title mb-7">Chairman&apos;s Message</h2>

            {/* Quote card */}
            <div className="relative rounded-2xl border border-slate-200/80 bg-white p-7 md:p-9 shadow-card">
              <span className="absolute -top-4 left-8 w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center shadow-glow-gold">
                <Quote size={18} className="text-navy-950 fill-navy-950" />
              </span>
              <div className="space-y-4 font-body text-slate-600 text-base leading-relaxed pt-3">
                {[
                  "Welcome to the Department of Software Engineering at QUEST Nawabshah. It gives me immense pleasure to welcome you to our department's official website. The Department is committed to providing quality engineering education, promoting innovative research, and developing competent professionals capable of addressing real-world technological challenges.",
                  "Our department offers Bachelor of Engineering (B.E.), Master of Engineering (M.E.), and Doctor of Philosophy (Ph.D.) programs designed to produce graduates with strong technical expertise, analytical thinking, ethical values, and leadership skills.",
                  "Through a modern curriculum, experienced faculty, state-of-the-art laboratories, and strong industry engagement, we encourage students to become innovators, researchers, entrepreneurs, and responsible professionals who contribute to society and the advancement of technology.",
                  "We invite you to explore our academic programs, research activities, and achievements, and become part of our journey toward excellence in Software Engineering education and research.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              <motion.div
                className="mt-7 pt-6 border-t border-slate-100 flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="w-10 h-0.5 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full" />
                <p className="font-display text-sm text-navy-950 font-semibold italic">
                  Prof. Dr. Pardeep Kumar, Chairman
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}