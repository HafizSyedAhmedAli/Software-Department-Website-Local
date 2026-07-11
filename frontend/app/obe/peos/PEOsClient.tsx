"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Metadata } from "next";

interface PEO { id: string; title: string; description: string; }

export default function PEOsClient({ peos }: { peos: PEO[] }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.05 });

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <span className="gold-rule" />
                    <h2 className="section-title mb-3">What are PEOs?</h2>
                    <p className="font-body text-slate-500 leading-relaxed mb-12 max-w-3xl">
                        Program Educational Objectives are broad statements describing the career and professional
                        accomplishments the programme prepares graduates to achieve.
                    </p>
                </motion.div>

                <div className="space-y-5">
                    {peos.map((peo, i) => (
                        <motion.div
                            key={peo.id}
                            className="group flex gap-5 bg-white border border-slate-100 rounded-sm shadow-card hover:shadow-card-hover hover:border-gold-200 transition-all duration-300 p-6"
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ x: 4 }}
                        >
                            <div className="shrink-0 flex flex-col items-center gap-2">
                                <motion.div
                                    className="w-12 h-12 rounded-sm bg-navy-950 flex items-center justify-center"
                                    whileHover={{ backgroundColor: "#d9a128", scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="font-mono text-gold-400 font-bold text-xs">{peo.id}</span>
                                </motion.div>
                                {i < peos.length - 1 && (
                                    <motion.div
                                        className="w-px bg-slate-100 group-hover:bg-gold-200 transition-colors"
                                        initial={{ height: 0 }}
                                        animate={inView ? { height: "100%" } : {}}
                                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                    />
                                )}
                            </div>
                            <div className="pt-1">
                                <h3 className="font-display text-navy-950 font-bold text-lg mb-2">{peo.title}</h3>
                                <p className="font-body text-slate-500 leading-relaxed text-sm">{peo.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}