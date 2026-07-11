import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import { api } from "../../lib/api";
import { EVENTS_DATA } from "../../download/data";
import EventsClient from "./EventsClient";

export const metadata: Metadata = { title: "Events" };

export default async function EventsPage() {
  const fetched = await api.events().catch(() => EVENTS_DATA);
  const raw = Array.isArray(fetched) ? fetched : EVENTS_DATA;
  const sorted = [...raw].sort(
    (a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime(),
  );

  return (
    <>
      <PageHeader
        title="News & Events"
        subtitle="Stay up to date with the latest happenings and announcements from our department. Click any event to see full details and photos."
        crumbs={[{ label: "Events" }]}
      />
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dots-light opacity-40 pointer-events-none" />
        <div className="relative max-w-8xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="mb-10">
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              Happenings
            </span>
            <h2 className="section-title mb-2">All Events</h2>
            <p className="font-body text-slate-500 text-sm">
              {sorted.length} event{sorted.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {sorted.length > 0 ? (
            <EventsClient events={sorted} />
          ) : (
            <div className="py-24 text-center text-slate-400 font-body">
              No events yet. Check back soon!
            </div>
          )}
        </div>
      </section>
    </>
  );
}