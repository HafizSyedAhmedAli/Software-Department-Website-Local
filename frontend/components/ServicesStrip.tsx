"use client";

import { BookOpen, Users, MonitorDot } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SERVICES = [
  {
    icon: BookOpen,
    title: "Learn with Us",
    description:
      "Join us on a transformative educational adventure. Explore new horizons and unlock your potential through our comprehensive learning programmes.",
    color: "bg-navy-950",
    hoverColor: "hover:bg-navy-800",
    textDark: false,
    delay: 0,
  },
  {
    icon: Users,
    title: "Expert Teachers",
    description:
      "Our dedicated team of experienced educators is committed to guiding you towards mastery. Benefit from their deep insights, expertise, and practical wisdom.",
    color: "bg-gold-500",
    hoverColor: "hover:bg-gold-400",
    textDark: true,
    delay: 0.12,
  },
  {
    icon: MonitorDot,
    title: "Best Classrooms",
    description:
      "Step into our state-of-the-art classrooms designed to foster effective learning. Experience an environment that enhances your educational journey.",
    color: "bg-navy-800",
    hoverColor: "hover:bg-navy-700",
    textDark: false,
    delay: 0.24,
  },
];

export default function ServicesStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="relative z-10 py-12 bg-slate-50" ref={ref}>
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-950 via-gold-500 to-navy-800" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map(
            ({ icon: Icon, title, description, color, hoverColor, textDark, delay }, i) => (
              <motion.div
                key={title}
                className={`${color} ${hoverColor} rounded-sm px-8 py-8 flex gap-5 items-start transition-all duration-300 cursor-default shadow-card`}
                initial={{ opacity: 0, y: 48, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, boxShadow: "0 12px 36px rgba(0,23,48,0.22)" }}
              >
                {/* Icon box */}
                <motion.div
                  className={`shrink-0 w-12 h-12 rounded-sm flex items-center justify-center ${textDark ? "bg-navy-950/20" : "bg-white/10"
                    }`}
                  whileHover={{ rotate: 8, scale: 1.12 }}
                  transition={{ duration: 0.22 }}
                >
                  <Icon
                    size={22}
                    className={textDark ? "text-navy-950" : "text-white"}
                  />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <motion.h3
                    className={`font-display font-bold text-lg mb-2 leading-snug ${textDark ? "text-navy-950" : "text-white"
                      }`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: delay + 0.15 }}
                  >
                    {title}
                  </motion.h3>
                  <motion.p
                    className={`font-body text-sm leading-relaxed ${textDark ? "text-navy-800/80" : "text-white/70"
                      }`}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.45, delay: delay + 0.25 }}
                  >
                    {description}
                  </motion.p>
                </div>

                {/* Animated bottom accent on hover */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 rounded-b-sm ${textDark ? "bg-navy-950/40" : "bg-gold-500/60"
                    }`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.35 }}
                  style={{ position: "absolute" }}
                />
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}