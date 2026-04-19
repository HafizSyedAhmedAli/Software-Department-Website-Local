"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ChairmanMessage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Decorative left bar */}
      <motion.div
        className="absolute left-0 top-0 w-1 bg-gold-500 opacity-20"
        initial={{ height: 0 }}
        animate={inView ? { height: "100%" } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Photo */}
          <motion.div
            className="lg:col-span-2 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-sm mx-auto">
              <motion.div
                className="absolute inset-0 rounded-sm bg-navy-900"
                initial={{ x: 0, y: 0 }}
                animate={inView ? { x: 8, y: 8 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              />
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md">
                <Image
                  src="/images/faculty/chairmainpic.jfif"
                  alt="Prof. Dr. Pardeep Kumar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <motion.div
              className="mt-6 text-center lg:text-left md:ml-12"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="font-display text-navy-950 font-bold text-xl">
                Prof. Dr. Pardeep Kumar
              </p>
              <p className="font-body text-sm text-slate-500 mt-1">
                Chairman, Dept. of Software Engineering
              </p>
              <p className="font-body text-xs text-gold-600 font-semibold uppercase tracking-wider mt-1">
                QUEST Nawabshah
              </p>
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="gold-rule" />
            <h2 className="section-title mb-6">Chairman&apos;s Message</h2>
            <div className="relative pl-6 border-l-2 border-gold-400">
              <Quote
                size={32}
                className="text-gold-300 absolute -left-4 -top-2 fill-gold-100"
              />
              <div className="space-y-4 font-body text-slate-600 text-base leading-relaxed">
                {[
                  "It gives me immense pleasure to invite you to the website of the Software Engineering Department, QUEST. The department offers Bachelors of Engineering (B.E) and Masters of Engineering (M.E) degrees in Software Engineering.",
                  "Our graduates are already serving in reputable public and private sector software organisations both locally and internationally. The department provides a congenial environment for carrying out cutting-edge research and experimental work with modern, state-of-the-art laboratories.",
                  "Our faculty is highly qualified and always ready to guide students in any academic-related problems. Please explore the Department of Software Engineering — I am sure you will love to be a part of it.",
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
            </div>
            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="w-10 h-0.5 bg-gold-500" />
              <p className="font-body text-sm text-slate-500 italic">
                Prof. Dr. Pardeep Kumar, Chairman
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
