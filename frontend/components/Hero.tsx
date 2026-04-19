"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    image: "/images/poster-1.png",
    eyebrow: "Welcome to the Department of Software Engineering",
    heading: ["Empowering Your", "Learning Journey"],
    body: "Embark on a path of discovery and mastery in the world of software engineering with us.",
    cta: { label: "Explore Programmes", href: "/courses" },
    ctaSecondary: { label: "Meet Our Faculty", href: "/faculty" },
    accent: "#d9a128",
  },
  {
    image: "/images/poster-2.png",
    eyebrow: "PEC Accredited Programme",
    heading: ["Where Learning is", "a Journey"],
    body: "Join us in the pursuit of knowledge and skill in the realm of Software Engineering.",
    cta: { label: "View Events", href: "/events" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
    accent: "#d9a128",
  },
  {
    image: "/images/questgate.jpg",
    eyebrow: "Research & Innovation",
    heading: ["Your Gateway to", "the World of Coding"],
    body: "Unleash the power of software. Here we nurture your curiosity into expertise.",
    cta: { label: "Gallery", href: "/gallery" },
    ctaSecondary: { label: "Downloads", href: "/downloads" },
    accent: "#d9a128",
  },
];

const textVariants = {
  enter: { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  function goTo(idx: number) {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }

  function prev() {
    setDirection(-1);
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  }

  function next() {
    setDirection(1);
    setCurrent((c) => (c + 1) % SLIDES.length);
  }

  const slide = SLIDES[current];

  return (
    <section className="relative h-[540px] md:h-[620px] lg:h-[700px] overflow-hidden bg-navy-950">
      {/* ── Background Images with crossfade ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <Image
            src={slide.image}
            alt={slide.heading.join(" ")}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Layered gradient overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-950/65 to-navy-950/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent z-10" />

      {/* ── Animated geometric accent ── */}
      <div className="absolute top-0 right-0 w-72 h-72 z-10 pointer-events-none opacity-20">
        <motion.div
          className="absolute top-8 right-8 w-48 h-48 border-2 border-gold-400 rounded-sm"
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-20 right-20 w-28 h-28 border border-gold-300 rounded-sm"
          animate={{ rotate: [0, -8, 0, 8, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* ── Dot pattern overlay ── */}
      <div
        className="absolute inset-0 z-10 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Gold left accent bar ── */}
      <motion.div
        className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-500 via-gold-400 to-transparent z-20"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="max-w-2xl"
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-5"
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <motion.span
                className="h-px bg-gold-500"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <span className="font-body text-gold-400 text-xs uppercase tracking-widest font-semibold">
                {slide.eyebrow}
              </span>
            </motion.div>

            {/* Heading */}
            <div className="mb-6">
              {slide.heading.map((line, i) => (
                <motion.h1
                  key={i}
                  className="font-display text-white text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight block"
                  variants={textVariants}
                  transition={{
                    duration: 0.55,
                    delay: 0.1 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {i === 1 ? (
                    <span className="relative inline-block">
                      {line}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-1 bg-gold-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 0.6,
                          delay: 0.5,
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
              className="font-body text-slate-300 text-base md:text-lg leading-relaxed mb-9 max-w-lg"
              variants={textVariants}
              transition={{ duration: 0.55, delay: 0.28 }}
            >
              {slide.body}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={textVariants}
              transition={{ duration: 0.55, delay: 0.36 }}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href={slide.cta.href} className="btn-gold">
                  {slide.cta.label}
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={slide.ctaSecondary.href}
                  className="btn-outline !border-white/70 !text-white hover:!bg-white/10 hover:!border-white"
                >
                  {slide.ctaSecondary.label}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Slide Indicators ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {SLIDES.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={clsx(
              "rounded-full transition-all duration-300 cursor-pointer",
              i === current ? "bg-gold-500" : "bg-white/30 hover:bg-white/60",
            )}
            animate={{
              width: i === current ? 24 : 8,
              height: 8,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* ── Prev / Next ── */}
      <div className="hidden md:flex absolute bottom-7 right-8 z-20 items-center gap-3">
        <motion.button
          onClick={prev}
          className="w-9 h-9 rounded-sm border border-white/20 hover:border-gold-500 hover:bg-gold-500/20 text-white/60 hover:text-white flex items-center justify-center transition-all duration-200"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={16} />
        </motion.button>
        <span className="font-mono text-xs text-white/40">
          <span className="text-white font-bold">
            {String(current + 1).padStart(2, "0")}
          </span>
          {" / "}
          {String(SLIDES.length).padStart(2, "0")}
        </span>
        <motion.button
          onClick={next}
          className="w-9 h-9 rounded-sm border border-white/20 hover:border-gold-500 hover:bg-gold-500/20 text-white/60 hover:text-white flex items-center justify-center transition-all duration-200"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={16} />
        </motion.button>
      </div>

      {/* ── Progress bar ── */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <motion.div
          className="h-full bg-gold-500"
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6.5, ease: "linear" }}
        />
      </div>
    </section>
  );
}
