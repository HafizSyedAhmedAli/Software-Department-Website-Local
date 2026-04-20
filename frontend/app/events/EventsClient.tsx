"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NewsEvent } from "../../lib/types";

function EventCard({ event, index }: { event: NewsEvent; index: number }) {
    const formattedDate = event.date
        ? new Date(event.date).toLocaleDateString("en-PK", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : null;

    return (
        <motion.article
            className="group bg-white rounded-sm shadow-card overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,23,48,0.15)" }}
        >
            <div className="relative h-52 overflow-hidden bg-navy-100">
                {event.imageUrl ? (
                    <Image
                        src={event.imageUrl} alt={event.title} fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="font-display text-navy-300 text-xl">SWE QUEST</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                    className="absolute top-3 left-3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.07 }}
                >
                    <span className="bg-navy-950/85 text-white text-xs font-semibold font-body px-2.5 py-1 uppercase tracking-wide">
                        Event
                    </span>
                </motion.div>
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

            <motion.div
                className="h-0.5 bg-gold-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
            />
        </motion.article>
    );
}

export default function EventsClient({ events }: { events: NewsEvent[] }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.05 });

    return (
        <section className="py-16 md:py-24 bg-white" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <span className="gold-rule" />
                    <h2 className="section-title mb-3">All Events</h2>
                    <p className="font-body text-slate-500 text-sm mb-10">
                        {events.length} event{events.length !== 1 ? "s" : ""} found
                    </p>
                </motion.div>

                {inView && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((e, i) => (
                            <EventCard key={e._id ?? e.title} event={e} index={i} />
                        ))}
                    </div>
                )}

                {events.length === 0 && (
                    <motion.div
                        className="py-24 text-center text-slate-400 font-body"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        No events yet. Check back soon!
                    </motion.div>
                )}
            </div>
        </section>
    );
}