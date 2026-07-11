"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { NewsEvent } from "../lib/types";
import { StaggerContainer, StaggerItem } from "./FadeIn";

function EventCard({ event }: { event: NewsEvent }) {
  const formattedDate = event.date
    ? new Date(event.date).toLocaleDateString("en-PK", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <motion.article
      className="group relative bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden flex flex-col h-full"
      whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(5,18,41,0.16)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="relative h-52 overflow-hidden bg-navy-100">
        {event.imageUrl ? (
          <>
            {/* Blurred, zoomed-in backdrop fills the frame so there's no empty grey bars */}
            <Image
              src={event.imageUrl}
              alt=""
              aria-hidden
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover scale-125 blur-xl opacity-50"
            />
            {/* Full, uncropped image on top */}
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="relative object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy-100 to-navy-50 flex items-center justify-center">
            <span className="text-navy-300 font-display text-lg font-semibold">
              SWE QUEST
            </span>
          </div>
        )}
        {/* Subtle bottom gradient over image */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category badge */}
        <div className="absolute top-3.5 left-3.5">
          <span className="inline-flex items-center gap-1.5 bg-navy-950/85 backdrop-blur-sm text-white text-[10px] font-mono font-semibold px-3 py-1.5 rounded-full uppercase tracking-[0.15em] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            Event
          </span>
        </div>

        {/* Date badge */}
        {formattedDate && (
          <div className="absolute top-3.5 right-3.5">
            <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-navy-950 text-[10px] font-mono font-semibold px-3 py-1.5 rounded-full">
              <Calendar size={10} className="text-gold-600" />
              {formattedDate}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-navy-950 font-semibold text-base leading-snug mb-2.5 group-hover:text-navy-700 transition-colors line-clamp-2">
          {event.title}
        </h3>
        <p className="font-body text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1 mb-5">
          {event.summary}
        </p>
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-xs font-body font-bold text-navy-950 uppercase tracking-wide hover:text-gold-600 transition-colors group/link"
        >
          View More{" "}
          <ArrowRight
            size={13}
            className="transition-transform group-hover/link:translate-x-1.5"
          />
        </Link>
      </div>

      {/* Animated gold bottom accent */}
      <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-400 group-hover:w-full" />
    </motion.article>
  );
}

export default function LatestNewsClient({ events }: { events: NewsEvent[] }) {
  return (
    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {events.map((event, i) => (
        <StaggerItem key={event._id ?? i} className="h-full">
          <EventCard event={event} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
