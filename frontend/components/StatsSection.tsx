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
    let frame: number;
    const start = performance.now();
    // Ease-out cubic for a satisfying deceleration
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
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
      className="relative flex flex-col items-center text-center px-4"
      initial={{ opacity: 0, y: 36 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Vertical divider between items (desktop) */}
      {index > 0 && (
        <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
      )}

      <motion.div
        className="relative w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-sm flex items-center justify-center mb-5"
        whileHover={{ scale: 1.1, rotate: 4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Glow behind icon */}
        <span className="absolute inset-0 rounded-2xl bg-gold-500/20 blur-lg opacity-0 hover:opacity-100 transition-opacity" />
        <Icon size={26} className="relative text-gold-400" />
      </motion.div>

      <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 tabular-nums">
        {count.toLocaleString()}
        <span className="text-gradient-gold">+</span>
      </p>
      <p className="font-mono text-[11px] text-slate-400 uppercase tracking-[0.25em] mt-1">
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
      className="bg-navy-950 relative overflow-hidden py-16 md:py-24"
    >
      {/* Ambient mesh + patterns */}
      <div className="absolute inset-0 bg-mesh-navy opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-dots-dark opacity-40 pointer-events-none" />

      {/* Floating glow orbs */}
      <motion.div
        className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 right-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated gold top line */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-transparent"
        initial={{ width: 0 }}
        animate={inView ? { width: "60%" } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative max-w-8xl mx-auto px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow-dark">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
             stats --live
          </span>
          <h2 className="font-display text-white text-section font-bold">
            The Department in Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}