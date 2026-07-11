"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    image: "/images/poster-1.png",
    eyebrow: "Department of Software Engineering",
    heading: ["Shape the Future", "With QUEST SWE"],
    body: "Where engineering education, research, and innovation meet — building the next generation of software engineers and technology leaders.",
    cta: { label: "Explore Programs", href: "/courses" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
  },
  {
    image: "/images/poster-2.png",
    eyebrow: "PEC Accredited Programme",
    heading: ["Where Learning is", "a Journey"],
    body: "Join us in the pursuit of knowledge and skill in the realm of Software Engineering.",
    cta: { label: "View Events", href: "/events" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
  },
  {
    image: "/images/questgate.jpg",
    eyebrow: "Research & Innovation",
    heading: ["Your Gateway to", "the World of Coding"],
    body: "Unleash the power of software. Here we nurture your curiosity into expertise.",
    cta: { label: "Gallery", href: "/gallery" },
    ctaSecondary: { label: "Downloads", href: "/downloads" },
  },
];

const textVariants = {
  enter: { opacity: 0, y: 28 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  function goTo(idx: number) {
    setCurrent(idx);
  }
  function prev() {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  }
  function next() {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }

  const slide = SLIDES[current];

  return (
    <section className="relative min-h-[520px] h-[72svh] md:h-[calc(100svh-8.5rem)] max-h-[860px] overflow-hidden bg-navy-950">
      {/* ── Background images: crossfade + Ken Burns drift ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 animate-ken-burns">
            <Image
              src={slide.image}
              alt={slide.heading.join(" ")}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Gradient overlays — strong on the left for text legibility,
             light on the right so your hero image stays clearly visible ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/60 to-navy-950/10 z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/85 to-transparent z-10" />

      {/* ── Gold left accent bar ── */}
      <motion.div
        className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-500 via-gold-400 to-transparent z-20"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ── Content — left aligned, right side stays open for the image ── */}
      <div className="relative z-20 h-full max-w-8xl mx-auto px-5 sm:px-6 lg:px-10 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="max-w-3xl pb-16 md:pb-10"
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* Eyebrow pill */}
            <motion.div
              className="mb-5 md:mb-6"
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/30 bg-navy-950/40 backdrop-blur-md px-3.5 py-1.5 md:px-4 md:py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gold-400 animate-pulse-ring" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
                </span>
                <span className="font-mono text-gold-400 text-[10px] md:text-[11px] uppercase tracking-[0.18em] md:tracking-[0.22em] font-semibold">
                  {slide.eyebrow}
                </span>
              </span>
            </motion.div>

            {/* Heading — fluid clamp size scales phone → 4K */}
            <div className="mb-5 md:mb-7">
              {slide.heading.map((line, i) => (
                <motion.h1
                  key={i}
                  className="font-display text-white text-hero font-bold block"
                  variants={textVariants}
                  transition={{
                    duration: 0.6,
                    delay: 0.12 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {i === 1 ? (
                    <span className="relative inline-block text-gradient-gold animate-shimmer">
                      {line}
                      <motion.span
                        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 0.7,
                          delay: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </span>
                  ) : (
                    line
                  )}
                </motion.h1>
              ))}
            </div>

            {/* Body */}
            <motion.p
              className="font-body text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed mb-7 md:mb-10 max-w-xl [text-shadow:0_1px_12px_rgba(5,18,41,0.6)]"
              variants={textVariants}
              transition={{ duration: 0.55, delay: 0.32 }}
            >
              {slide.body}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 md:gap-4"
              variants={textVariants}
              transition={{ duration: 0.55, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href={slide.cta.href} className="btn-gold">
                  {slide.cta.label}
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={slide.ctaSecondary.href}
                  className="btn-outline !border-white/60 !text-white hover:!bg-white/10 hover:!border-white backdrop-blur-sm"
                >
                  {slide.ctaSecondary.label}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Slide Indicators ── */}
      <div className="absolute bottom-7 md:bottom-9 left-5 sm:left-6 lg:left-10 z-20 flex items-center gap-2.5">
        {SLIDES.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={clsx(
              "rounded-full transition-all duration-300 cursor-pointer",
              i === current
                ? "bg-gold-500 shadow-glow-gold"
                : "bg-white/30 hover:bg-white/60",
            )}
            animate={{
              width: i === current ? 28 : 8,
              height: 8,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* ── Scroll hint (desktop) ── */}
      <div className="hidden md:flex absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 text-white/50">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ChevronDown size={16} className="animate-scroll-hint" />
      </div>

      {/* ── Prev / Next ── */}
      <div className="flex absolute bottom-6 md:bottom-7 right-5 sm:right-6 lg:right-10 z-20 items-center gap-2.5 md:gap-3">
        <motion.button
          onClick={prev}
          aria-label="Previous slide"
          className="w-9 h-9 md:w-10 md:h-10 rounded-xl border border-white/15 bg-navy-950/30 backdrop-blur-md hover:border-gold-500 hover:bg-gold-500/20 text-white/70 hover:text-white flex items-center justify-center transition-all duration-200"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={16} />
        </motion.button>
        <span className="hidden sm:inline font-mono text-xs text-white/40">
          <span className="text-gold-400 font-bold">
            {String(current + 1).padStart(2, "0")}
          </span>
          {" / "}
          {String(SLIDES.length).padStart(2, "0")}
        </span>
        <motion.button
          onClick={next}
          aria-label="Next slide"
          className="w-9 h-9 md:w-10 md:h-10 rounded-xl border border-white/15 bg-navy-950/30 backdrop-blur-md hover:border-gold-500 hover:bg-gold-500/20 text-white/70 hover:text-white flex items-center justify-center transition-all duration-200"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={16} />
        </motion.button>
      </div>

      {/* ── Slide progress bar ── */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-gold-500 to-gold-300"
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
        />
      </div>
    </section>
  );
}