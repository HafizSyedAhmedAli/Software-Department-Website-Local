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
      className="group bg-white rounded-sm shadow-card overflow-hidden flex flex-col"
      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,23,48,0.15)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="relative h-48 overflow-hidden">
        {event.imageUrl ? (
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-navy-100 flex items-center justify-center">
            <span className="text-navy-300 font-display text-lg">
              SWE QUEST
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="bg-navy-950/90 text-white text-xs font-body font-semibold px-2.5 py-1 uppercase tracking-wide">
            Event
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        {formattedDate && (
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-body mb-2.5">
            <Calendar size={11} />
            <span>{formattedDate}</span>
          </div>
        )}
        <h3 className="font-display text-navy-950 font-semibold text-base leading-snug mb-2.5 group-hover:text-navy-700 transition-colors line-clamp-2">
          {event.title}
        </h3>
        <p className="font-body text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1 mb-4">
          {event.summary}
        </p>
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-navy-950 uppercase tracking-wide hover:text-gold-600 transition-colors group/link"
        >
          View More{" "}
          <ArrowRight
            size={13}
            className="transition-transform group-hover/link:translate-x-1"
          />
        </Link>
      </div>
      <motion.div
        className="h-0.5 bg-gold-500"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
}

export default function LatestNewsClient({ events }: { events: NewsEvent[] }) {
  return (
    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, i) => (
        <StaggerItem key={event._id ?? i}>
          <EventCard event={event} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
