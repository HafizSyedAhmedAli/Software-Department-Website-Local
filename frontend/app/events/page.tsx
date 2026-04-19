import { Calendar } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { NewsEvent } from "../../lib/types";
import PageHeader from "../../components/PageHeader";
import { api } from "../../lib/api";
import { EVENTS_DATA } from "../../download/data";

export const metadata: Metadata = { title: "Events" };

function EventCard({ event }: { event: NewsEvent }) {
  const formattedDate = event.date
    ? new Date(event.date).toLocaleDateString("en-PK", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;
  return (
    <article className="group bg-white rounded-sm shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative h-52 overflow-hidden bg-navy-100">
        {event.imageUrl ? (
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-navy-300 text-xl">
              SWE QUEST
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <span className="bg-navy-950/85 text-white text-xs font-semibold font-body px-2.5 py-1 uppercase tracking-wide">
            Event
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        {formattedDate && (
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-body mb-3">
            <Calendar size={11} />
            <time dateTime={event.date}>{formattedDate}</time>
          </div>
        )}
        <h2 className="font-display text-navy-950 font-semibold text-base leading-snug mb-3 group-hover:text-navy-700 transition-colors line-clamp-2">
          {event.title}
        </h2>
        <p className="font-body text-sm text-slate-500 leading-relaxed line-clamp-4 flex-1">
          {event.summary}
        </p>
      </div>
      <div className="h-0.5 w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
    </article>
  );
}

export default async function EventsPage() {
  const raw = await api.events().catch(() => EVENTS_DATA);
  const sorted = [...raw].sort(
    (a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime(),
  );

  return (
    <>
      <PageHeader
        title="News & Events"
        subtitle="Stay up to date with the latest happenings and announcements from our department."
        crumbs={[{ label: "Events" }]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="gold-rule" />
          <h2 className="section-title mb-3">All Events</h2>
          <p className="font-body text-slate-500 text-sm mb-10">
            {sorted.length} event{sorted.length !== 1 ? "s" : ""} found
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((e) => (
              <EventCard key={e._id ?? e.title} event={e} />
            ))}
          </div>
          {sorted.length === 0 && (
            <div className="py-24 text-center text-slate-400 font-body">
              No events yet. Check back soon!
            </div>
          )}
        </div>
      </section>
    </>
  );
}
