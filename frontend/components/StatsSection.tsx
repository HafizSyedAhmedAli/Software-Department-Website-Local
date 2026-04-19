"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, Users, FlaskConical, GraduationCap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { STATS } from "../download/data";

const ICONS = {
  book: BookOpen,
  users: Users,
  flask: FlaskConical,
  "graduation-cap": GraduationCap,
};

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
}

function StatItem({
  stat,
  active,
  index,
}: {
  stat: (typeof STATS)[number];
  active: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, 1800, active);
  const Icon = ICONS[stat.icon as keyof typeof ICONS] ?? BookOpen;

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 32 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="w-14 h-14 rounded-sm bg-white/10 flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(217,161,40,0.2)" }}
        transition={{ duration: 0.2 }}
      >
        <Icon size={24} className="text-gold-400" />
      </motion.div>
      <p className="font-display text-4xl md:text-5xl font-bold text-white mb-1">
        {count.toLocaleString()}
        <span className="text-gold-400">+</span>
      </p>
      <p className="font-body text-sm text-slate-400 uppercase tracking-widest">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-navy-950 relative overflow-hidden py-16 md:py-20"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Animated gold top line */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-transparent"
        initial={{ width: 0 }}
        animate={inView ? { width: "60%" } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
