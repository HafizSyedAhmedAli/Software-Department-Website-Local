import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { api } from "../lib/api";
import { EVENTS_DATA } from "../download/data";
import LatestNewsClient from "./LatestNewsClient";

export default async function LatestNewsSection() {
  const events = await api.latestEvents().catch(() => EVENTS_DATA.slice(0, 6));

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Faint dot backdrop */}
      <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none" />

      <div className="relative max-w-8xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
          <div>
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              what we have been upto
            </span>
            <h2 className="section-title">Latest News &amp; Events</h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-navy-950 border border-slate-200 rounded-lg px-5 py-2.5 hover:border-gold-400 hover:bg-gold-50 hover:text-gold-700 transition-all duration-200 shrink-0 group"
          >
            View All Events{" "}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <LatestNewsClient events={events} />
      </div>
    </section>
  );
}