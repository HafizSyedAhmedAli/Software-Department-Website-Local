"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Images,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { NewsEvent } from "../../lib/types";

// ─── Helpers ────────────────────────────────────────────────────────────────
function formatDate(date?: string) {
  return date
    ? new Date(date).toLocaleDateString("en-PK", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;
}

/** All images for an event: cover first, then gallery images (deduped). */
function eventImages(event: NewsEvent): string[] {
  const list = [event.imageUrl, ...(event.images ?? [])].filter(
    (u): u is string => Boolean(u),
  );
  return [...new Set(list)];
}

// ─── Event Card ─────────────────────────────────────────────────────────────
function EventCard({
  event,
  index,
  onOpen,
}: {
  event: NewsEvent;
  index: number;
  onOpen: () => void;
}) {
  const formattedDate = formatDate(event.date);
  const imgs = eventImages(event);

  return (
    <motion.article
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
      className="group relative bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden flex flex-col cursor-pointer h-full focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(5,18,41,0.16)" }}
      whileTap={{ scale: 0.99 }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-navy-100">
        {imgs[0] ? (
          <>
            <Image
              src={imgs[0]}
              alt=""
              aria-hidden
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover scale-125 blur-xl opacity-50"
            />
            <Image
              src={imgs[0]}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="relative object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy-100 to-navy-50 flex items-center justify-center">
            <span className="font-display text-navy-300 text-lg font-semibold">
              SWE QUEST
            </span>
          </div>
        )}

        {/* Hover overlay with "open" affordance */}
        <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/35 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-1.5 bg-gold-500 text-navy-950 font-body font-bold text-xs uppercase tracking-wide px-4 py-2 rounded-full shadow-glow-gold">
            View Event <ArrowUpRight size={13} />
          </span>
        </div>

        {/* Multi-image badge */}
        {imgs.length > 1 && (
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-navy-950/80 backdrop-blur-sm text-white text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full">
            <Images size={11} className="text-gold-400" />
            {imgs.length}
          </span>
        )}

        {/* Date badge */}
        {formattedDate && (
          <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-navy-950 text-[10px] font-mono font-semibold px-3 py-1.5 rounded-full">
            <Calendar size={10} className="text-gold-600" />
            {formattedDate}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="font-display text-navy-950 font-semibold text-base leading-snug mb-2.5 group-hover:text-navy-700 transition-colors line-clamp-2">
          {event.title}
        </h2>
        <p className="font-body text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1">
          {event.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-body font-bold text-navy-950 uppercase tracking-wide group-hover:text-gold-600 transition-colors">
          Read More{" "}
          <ChevronRight
            size={13}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>

      {/* Gold sweep accent */}
      <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

// ─── Event Modal (carousel + full description) ─────────────────────────────
function EventModal({
  event,
  onClose,
}: {
  event: NewsEvent;
  onClose: () => void;
}) {
  const imgs = eventImages(event);
  const [idx, setIdx] = useState(0);
  const formattedDate = formatDate(event.date);
  const body = event.description?.trim() || event.summary;

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + imgs.length) % imgs.length),
    [imgs.length],
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % imgs.length),
    [imgs.length],
  );

  // Keyboard: Esc closes, arrows navigate. Lock page scroll while open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90svh] flex flex-col overflow-hidden"
        initial={{ opacity: 0, scale: 0.92, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={event.title}
      >
        {/* Close */}
        <motion.button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-navy-950/70 backdrop-blur-sm text-white hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center transition-colors"
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={17} />
        </motion.button>

        {/* Carousel */}
        {imgs.length > 0 && (
          <div className="relative h-56 sm:h-72 md:h-80 bg-navy-950 shrink-0 overflow-hidden">
            <AnimatePresence mode="sync">
              <motion.div
                key={idx}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Image
                  src={imgs[idx]}
                  alt=""
                  aria-hidden
                  fill
                  sizes="768px"
                  className="object-cover scale-125 blur-xl opacity-40"
                />
                <Image
                  src={imgs[idx]}
                  alt={`${event.title} — photo ${idx + 1}`}
                  fill
                  sizes="768px"
                  className="relative object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {imgs.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy-950/60 backdrop-blur-sm text-white hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center transition-colors z-10"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy-950/60 backdrop-blur-sm text-white hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center transition-colors z-10"
                >
                  <ChevronRight size={18} />
                </button>

                {/* Dots + counter */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                  {imgs.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      aria-label={`Go to image ${i + 1}`}
                      className={clsx(
                        "rounded-full transition-all duration-300",
                        i === idx
                          ? "w-6 h-2 bg-gold-500"
                          : "w-2 h-2 bg-white/50 hover:bg-white/80",
                      )}
                    />
                  ))}
                </div>
                <span className="absolute bottom-3 right-3.5 font-mono text-[10px] text-white/70 bg-navy-950/60 backdrop-blur-sm px-2 py-0.5 rounded-full z-10">
                  {idx + 1} / {imgs.length}
                </span>
              </>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-600">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              Event
            </span>
            {formattedDate && (
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-body">
                <Calendar size={12} className="text-gold-600" />
                <time dateTime={event.date}>{formattedDate}</time>
              </span>
            )}
          </div>

          <h2 className="font-display text-navy-950 font-bold text-xl sm:text-2xl leading-snug mb-4">
            {event.title}
          </h2>

          <div className="font-body text-sm sm:text-[15px] text-slate-600 leading-relaxed whitespace-pre-line">
            {body}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Events Grid ────────────────────────────────────────────────────────────
export default function EventsClient({ events }: { events: NewsEvent[] }) {
  const [openEvent, setOpenEvent] = useState<NewsEvent | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        {events.map((e, i) => (
          <EventCard
            key={e._id ?? `${e.title}-${i}`}
            event={e}
            index={i}
            onOpen={() => setOpenEvent(e)}
          />
        ))}
      </div>

      <AnimatePresence>
        {openEvent && (
          <EventModal event={openEvent} onClose={() => setOpenEvent(null)} />
        )}
      </AnimatePresence>
    </>
  );
}