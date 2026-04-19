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
  },
  {
    icon: Users,
    title: "Expert Teachers",
    description:
      "Our dedicated team of experienced educators is committed to guiding you towards mastery. Benefit from their deep insights, expertise, and practical wisdom.",
    color: "bg-gold-500",
    hoverColor: "hover:bg-gold-400",
    textDark: true,
  },
  {
    icon: MonitorDot,
    title: "Best Classrooms",
    description:
      "Step into our state-of-the-art classrooms designed to foster effective learning. Experience an environment that enhances your educational journey.",
    color: "bg-navy-800",
    hoverColor: "hover:bg-navy-700",
    textDark: false,
  },
];

export default function ServicesStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative -mt-10 z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-card-hover rounded-sm overflow-hidden">
          {SERVICES.map(
            (
              { icon: Icon, title, description, color, hoverColor, textDark },
              i,
            ) => (
              <motion.div
                key={title}
                className={`${color} ${hoverColor} px-8 py-8 flex gap-5 items-start transition-all duration-300 cursor-default`}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className={`shrink-0 w-12 h-12 rounded-sm flex items-center justify-center ${
                    textDark ? "bg-navy-950/20" : "bg-white/10"
                  }`}
                  whileHover={{ rotate: 6, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon
                    size={22}
                    className={textDark ? "text-navy-950" : "text-white"}
                  />
                </motion.div>
                <div>
                  <h3
                    className={`font-display font-bold text-lg mb-2 leading-snug ${textDark ? "text-navy-950" : "text-white"}`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`font-body text-sm leading-relaxed ${textDark ? "text-navy-800/80" : "text-white/70"}`}
                  >
                    {description}
                  </p>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
