import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { NewsEvent } from "../animations/lib/types";
import { EVENTS_DATA } from "../Download/data";

function EventCard({ event }: { event: NewsEvent }) {
  const formattedDate = event.date
    ? new Date(event.date).toLocaleDateString("en-PK", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <div className="card group overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {event.imageUrl ? (
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-navy-100 flex items-center justify-center">
            <span className="text-navy-300 font-display text-lg">SWE QUEST</span>
          </div>
        )}
        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-navy-950/90 text-white text-xs font-body font-semibold px-2.5 py-1 uppercase tracking-wide">
            Event
          </span>
        </div>
      </div>

      {/* Content */}
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
          View More
          <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>

      {/* Bottom accent */}
      <div className="h-0.5 w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

export default function LatestNewsSection() {
  const featured = EVENTS_DATA.slice(0, 6);

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="gold-rule" />
            <h2 className="section-title">Latest News &amp; Events</h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-navy-950 hover:text-gold-600 transition-colors shrink-0"
          >
            View All Events <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}