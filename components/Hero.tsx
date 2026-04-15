"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

const SLIDES = [
  {
    image: "/images/poster-1.png",
    eyebrow: "Welcome to the Department of Software Engineering",
    heading: "Empowering Your\nLearning Journey",
    body: "Embark on a path of discovery and mastery in the world of software engineering with us.",
    cta: { label: "Explore Programmes", href: "/courses" },
    ctaSecondary: { label: "Meet Our Faculty", href: "/faculty" },
  },
  {
    image: "/images/poster-2.png",
    eyebrow: "PEC Accredited Programme",
    heading: "Where Learning is a\nJourney",
    body: "Join us in the pursuit of knowledge and skill in the realm of Software Engineering.",
    cta: { label: "View Events", href: "/events" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
  },
  {
    image: "/images/questgate.jpg",
    eyebrow: "Research & Innovation",
    heading: "Your Gateway to the\nWorld of Coding",
    body: "Unleash the power of software. Here we nurture your curiosity into expertise.",
    cta: { label: "Gallery", href: "/gallery" },
    ctaSecondary: { label: "Downloads", href: "/downloads" },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  function goTo(idx: number) {
    if (idx === current || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  }

  const slide = SLIDES[current];

  return (
    <section className="relative h-[520px] md:h-[600px] lg:h-[680px] overflow-hidden bg-navy-950">
      {/* Background Image */}
      <div
        className={clsx(
          "absolute inset-0 transition-opacity duration-500",
          animating ? "opacity-0" : "opacity-100"
        )}
      >
        <Image
          src={slide.image}
          alt={slide.heading}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div
          className={clsx(
            "max-w-2xl transition-all duration-500",
            animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          )}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gold-500" />
            <span className="font-body text-gold-400 text-xs uppercase tracking-widest font-semibold">
              {slide.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            {slide.heading.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Body */}
          <p className="font-body text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            {slide.body}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href={slide.cta.href} className="btn-gold">
              {slide.cta.label}
              <ArrowRight size={16} />
            </Link>
            <Link href={slide.ctaSecondary.href} className="btn-outline !border-white !text-white hover:!bg-white hover:!text-navy-950">
              {slide.ctaSecondary.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={clsx(
              "transition-all duration-300 rounded-full",
              i === current
                ? "w-6 h-2 bg-gold-500"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            )}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-2 font-mono text-xs text-white/50">
        <span className="text-white font-bold">{String(current + 1).padStart(2, "0")}</span>
        <span>/</span>
        <span>{String(SLIDES.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}