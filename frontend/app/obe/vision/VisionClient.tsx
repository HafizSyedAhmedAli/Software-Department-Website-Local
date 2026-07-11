"use client";

import { Eye, Star, Target } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface VisionMission {
    vision: string;
    mission: string[];
    values: { title: string; description: string }[];
}

export default function VisionClient({ vm }: { vm: VisionMission }) {
    const visionRef = useRef(null);
    const missionRef = useRef(null);
    const valuesRef = useRef(null);
    const visionInView = useInView(visionRef, { once: true, amount: 0.2 });
    const missionInView = useInView(missionRef, { once: true, amount: 0.15 });
    const valuesInView = useInView(valuesRef, { once: true, amount: 0.1 });

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6 space-y-16">

                {/* Vision */}
                <div className="flex gap-6 items-start" ref={visionRef}>
                    <motion.div
                        className="w-14 h-14 rounded-sm bg-navy-950 flex items-center justify-center shrink-0"
                        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                        animate={visionInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
                        whileHover={{ scale: 1.08, backgroundColor: "#d9a128" }}
                    >
                        <Eye size={24} className="text-gold-400" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={visionInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="gold-rule" />
                        <h2 className="section-title mb-4">Our Vision</h2>
                        <motion.p
                            className="font-body text-lg text-slate-600 leading-relaxed border-l-4 border-gold-400 pl-5 italic"
                            initial={{ opacity: 0 }}
                            animate={visionInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {vm.vision}
                        </motion.p>
                    </motion.div>
                </div>

                <motion.hr
                    className="border-slate-100"
                    initial={{ scaleX: 0 }}
                    animate={visionInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ originX: 0 }}
                />

                {/* Mission */}
                <div className="flex gap-6 items-start" ref={missionRef}>
                    <motion.div
                        className="w-14 h-14 rounded-sm bg-navy-950 flex items-center justify-center shrink-0"
                        initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
                        animate={missionInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
                        whileHover={{ scale: 1.08, backgroundColor: "#d9a128" }}
                    >
                        <Target size={24} className="text-gold-400" />
                    </motion.div>
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: 30 }}
                        animate={missionInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.55, delay: 0.1 }}
                    >
                        <span className="gold-rule" />
                        <h2 className="section-title mb-6">Our Mission</h2>
                        <div className="space-y-4">
                            {vm.mission.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex gap-4 items-start group"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={missionInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.45, delay: 0.2 + i * 0.09 }}
                                >
                                    <motion.span
                                        className="w-7 h-7 rounded-full bg-navy-950 text-gold-400 font-display font-bold text-xs flex items-center justify-center shrink-0 mt-0.5"
                                        whileHover={{ scale: 1.15, backgroundColor: "#d9a128", color: "#002147" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {i + 1}
                                    </motion.span>
                                    <p className="font-body text-slate-600 leading-relaxed">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.hr
                    className="border-slate-100"
                    initial={{ scaleX: 0 }}
                    animate={missionInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{ originX: 0 }}
                />

                {/* Core Values */}
                <div ref={valuesRef}>
                    <div className="flex gap-6 items-start mb-8">
                        <motion.div
                            className="w-14 h-14 rounded-sm bg-navy-950 flex items-center justify-center shrink-0"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={valuesInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
                            whileHover={{ scale: 1.08, backgroundColor: "#d9a128" }}
                        >
                            <Star size={24} className="text-gold-400" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={valuesInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <span className="gold-rule" />
                            <h2 className="section-title">Core Values</h2>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {vm.values?.map((val, i) => (
                            <motion.div
                                key={val.title}
                                className="bg-slate-50 border border-slate-100 rounded-sm p-5 hover:border-gold-300 hover:shadow-card transition-all duration-300"
                                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                                animate={valuesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{ duration: 0.45, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -4 }}
                            >
                                <motion.div
                                    className="w-8 h-1 bg-gold-500 mb-3"
                                    initial={{ width: 0 }}
                                    animate={valuesInView ? { width: 32 } : {}}
                                    transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                                />
                                <h3 className="font-display text-navy-950 font-bold text-base mb-2">{val.title}</h3>
                                <p className="font-body text-sm text-slate-500 leading-relaxed">{val.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}