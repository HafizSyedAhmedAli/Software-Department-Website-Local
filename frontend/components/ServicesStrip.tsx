"use client";

import { BookOpen, FlaskConical, MonitorDot, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SERVICES = [
  {
    icon: BookOpen,
    title: "Learn with Us",
    description:
      "A dynamic academic environment combining strong theoretical foundations with hands-on software development — emphasising innovation, teamwork, and real-world problem solving for successful technology careers.",
    gradient: "from-navy-800 to-navy-950",
    iconBg: "bg-gold-500/15 border-gold-400/25 text-gold-400",
    delay: 0,
  },
  {
    icon: FlaskConical,
    title: "Research & Innovation",
    description:
      "Faculty and students actively engage in research across Artificial Intelligence, Machine Learning, Cybersecurity, Data Science, Cloud Computing, IoT, Digital Twin Technologies, and other emerging areas.",
    gradient: "from-gold-500 to-gold-600",
    iconBg: "bg-navy-950/15 border-navy-950/20 text-navy-950",
    delay: 0.12,
    dark: true,
  },
  {
    icon: MonitorDot,
    title: "Modern Learning Environment",
    description:
      "Well-equipped computing laboratories, modern classrooms, high-speed internet, advanced software tools, and project-based learning to enhance students' academic and professional development.",
    gradient: "from-navy-700 to-navy-900",
    iconBg: "bg-cyan-500/15 border-cyan-400/25 text-cyan-400",
    delay: 0.24,
  },
];

export default function ServicesStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="relative bg-slate-50 pt-14 pb-12 md:pt-16 md:pb-14" ref={ref}>
      {/* Faint dot backdrop */}
      <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none" />

      <div className="relative max-w-8xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Section intro */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
             why choose us
          </span>
          <h2 className="section-title">What Makes Us Different</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map(
            (
              { icon: Icon, title, description, gradient, iconBg, delay, dark },
              i,
            ) => (
              <motion.div
                key={title}
                className={`relative bg-gradient-to-br ${gradient} rounded-2xl px-6 py-8 sm:px-8 sm:py-9 overflow-hidden group cursor-default shadow-card`}
                initial={{ opacity: 0, y: 48, scale: 0.97 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.65,
                  delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
              >
                {/* Decorative corner glow */}
                <div
                  className={`absolute -top-14 -right-14 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    dark ? "bg-white/25" : "bg-gold-500/20"
                  }`}
                />
                {/* Dot pattern */}
                <div
                  className={`absolute inset-0 pointer-events-none ${
                    dark ? "opacity-[0.06]" : "opacity-[0.05]"
                  }`}
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, ${
                      dark ? "#051229" : "white"
                    } 1px, transparent 0)`,
                    backgroundSize: "22px 22px",
                  }}
                />

                <div className="relative flex gap-4 sm:gap-5 items-start">
                  {/* Icon tile */}
                  <motion.div
                    className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl border flex items-center justify-center ${iconBg}`}
                    whileHover={{ rotate: 8, scale: 1.12 }}
                    transition={{ duration: 0.22 }}
                  >
                    <Icon size={22} />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <motion.h3
                      className={`font-display font-bold text-base sm:text-lg mb-2 leading-snug flex items-center gap-2 ${
                        dark ? "text-navy-950" : "text-white"
                      }`}
                      initial={{ opacity: 0, x: -12 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.45, delay: delay + 0.15 }}
                    >
                      {title}
                      <ArrowUpRight
                        size={16}
                        className={`opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ${
                          dark ? "text-navy-950" : "text-gold-400"
                        }`}
                      />
                    </motion.h3>
                    <motion.p
                      className={`font-body text-sm leading-relaxed ${
                        dark ? "text-navy-900/80" : "text-white/70"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.45, delay: delay + 0.25 }}
                    >
                      {description}
                    </motion.p>
                  </div>
                </div>

                {/* Animated bottom accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 rounded-b-2xl ${
                    dark
                      ? "bg-navy-950/40"
                      : "bg-gradient-to-r from-gold-500 to-gold-300"
                  }`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}