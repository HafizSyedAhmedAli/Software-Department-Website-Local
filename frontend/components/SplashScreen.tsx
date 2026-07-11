"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Plays on every full page load / refresh.
const SPLASH_DURATION = 2400; // ms before exit animation begins

const TITLE_LINE_1 = "Software Engineering";
const TITLE_LINE_2 = "QUEST Nawabshah";

function StaggeredText({
  text,
  className,
  baseDelay,
}: {
  text: string;
  className: string;
  baseDelay: number;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: baseDelay + i * 0.028,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, SPLASH_DURATION);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-navy-950 flex flex-col items-center justify-center overflow-hidden"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden
        >
          {/* Ambient background */}
          <div className="absolute inset-0 bg-mesh-navy opacity-70 pointer-events-none" />
          <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
          <motion.div
            className="absolute w-[420px] h-[420px] rounded-full bg-gold-500/10 blur-3xl"
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Logo mark with pulse rings */}
          <div className="relative mb-8">
            <motion.span
              className="absolute inset-0 rounded-2xl border border-gold-400/40"
              animate={{ scale: [1, 1.7], opacity: [0.7, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-2xl border border-gold-400/25"
              animate={{ scale: [1, 2.1], opacity: [0.5, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.4,
              }}
            />
            <motion.div
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-glass"
              initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/favicon.png"
                alt=""
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Title */}
          <div className="text-center px-6">
            <StaggeredText
              text={TITLE_LINE_1}
              baseDelay={0.35}
              className="block font-display text-white font-bold text-2xl sm:text-4xl tracking-tight"
            />
            <motion.div
              className="mx-auto my-3 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "70%", opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <StaggeredText
              text={TITLE_LINE_2}
              baseDelay={1.0}
              className="block font-mono text-gold-400 text-[11px] sm:text-sm uppercase tracking-[0.35em]"
            />
          </div>

          {/* Loading bar */}
          <div className="absolute bottom-14 w-44 sm:w-56 h-[3px] rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: SPLASH_DURATION / 1000 - 0.3, ease: "easeInOut" }}
            />
          </div>

          {/* Dev-console signature */}
          <motion.p
            className="absolute bottom-7 font-mono text-[10px] text-slate-500 tracking-[0.2em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            $ initializing_experience …
          </motion.p>
          {/* Developer watermark */}
          <motion.p
           className="absolute bottom-2 inset-x-0 text-center sm:inset-x-auto sm:text-right sm:bottom-5 sm:right-6 font-mono text-xs sm:text-sm text-slate-400 tracking-[0.15em] select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.7, duration: 0.6 }}
          >
            {"</>"} crafted by{" "}
            <span className="text-gold-500/60">Rao Qasim</span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}