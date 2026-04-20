"use client";

import Link from "next/link";
import { BookOpen, Clock, Tag, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SEMESTER_LABELS: Record<number, string> = {
    1: "First Semester", 2: "Second Semester", 3: "Third Semester",
    4: "Fourth Semester", 5: "Fifth Semester", 6: "Sixth Semester",
    7: "Seventh Semester", 8: "Eighth Semester",
};

interface CourseCLO { clo: string; description: string; domain: string; taxonomy: string; plo: string; }
interface Course { code: string; name: string; creditHours: number; semester: number; type: string; clos: CourseCLO[]; }

function StatCard({ label, value, index }: { label: string; value: string; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            className="bg-navy-950 text-white rounded-sm px-6 py-5 text-center"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, backgroundColor: "#1f3d6e" }}
        >
            <p className="font-display text-3xl font-bold text-gold-400 mb-1">{value}</p>
            <p className="font-body text-xs text-slate-400 uppercase tracking-wide">{label}</p>
        </motion.div>
    );
}

function CourseCard({ course, index }: { course: Course; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });
    return (
        <motion.div
            ref={ref}
            className="group bg-white border border-slate-100 rounded-sm shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 p-5 relative overflow-hidden"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
        >
            {/* Hover accent */}
            <motion.div
                className="absolute top-0 left-0 w-1 h-0 bg-gold-500 group-hover:h-full transition-all duration-300"
                style={{ height: 0 }}
            />

            <div className="flex items-start justify-between gap-3 mb-3">
                <motion.div
                    className="w-10 h-10 rounded-sm bg-navy-950 flex items-center justify-center shrink-0"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                >
                    <BookOpen size={18} className="text-gold-400" />
                </motion.div>
                <span className="font-mono text-xs bg-gold-50 text-gold-700 border border-gold-200 px-2 py-0.5 rounded-sm font-semibold">
                    {course.code}
                </span>
            </div>

            <h3 className="font-display text-navy-950 font-semibold text-base leading-snug mb-3">
                {course.name}
            </h3>
            <div className="flex flex-wrap gap-3 text-xs font-body text-slate-500">
                <span className="flex items-center gap-1.5">
                    <Clock size={11} className="text-gold-500" />{course.creditHours} Credit Hours
                </span>
                <span className="flex items-center gap-1.5">
                    <Tag size={11} className="text-gold-500" />{course.type}
                </span>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-50">
                <p className="font-body text-xs text-slate-400 uppercase tracking-wide mb-2">{course.clos?.length} CLOs</p>
                <div className="flex gap-1 flex-wrap">
                    {course.clos?.map((clo) => (
                        <motion.span
                            key={clo.clo}
                            className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-sm font-mono"
                            whileHover={{ backgroundColor: "#002147", color: "#e4b847" }}
                            transition={{ duration: 0.15 }}
                        >
                            {clo.clo}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function CoursesClient({ courses }: { courses: Course[] }) {
    const bySemester = courses.reduce<Record<number, Course[]>>((acc, c) => {
        if (!acc[c.semester]) acc[c.semester] = [];
        acc[c.semester].push(c);
        return acc;
    }, {});
    const semesters = Object.keys(bySemester).map(Number).sort((a, b) => a - b);
    const totalCredits = courses.reduce((s, c) => s + c.creditHours, 0);
    const ctaRef = useRef(null);
    const ctaInView = useInView(ctaRef, { once: true });

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {[
                        { label: "Total Courses", value: `${courses.length}+` },
                        { label: "Credit Hours", value: `${totalCredits}+` },
                        { label: "Semesters", value: "8" },
                        { label: "Duration", value: "4 Years" },
                    ].map((item, i) => (
                        <StatCard key={item.label} {...item} index={i} />
                    ))}
                </div>

                <div className="space-y-14">
                    {semesters.map((sem, semIndex) => {
                        const semRef = useRef(null);
                        const semInView = useInView(semRef, { once: true, amount: 0.05 });
                        return (
                            <motion.div
                                key={sem}
                                ref={semRef}
                                initial={{ opacity: 0 }}
                                animate={semInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.4 }}
                            >
                                <motion.div
                                    className="flex items-center gap-4 mb-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={semInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.45 }}
                                >
                                    <span className="gold-rule mb-0" />
                                    <h2 className="font-display text-xl font-bold text-navy-950">
                                        {SEMESTER_LABELS[sem] ?? `Semester ${sem}`}
                                    </h2>
                                    <span className="text-xs text-slate-400 font-body">
                                        ({bySemester[sem].length} course{bySemester[sem].length > 1 ? "s" : ""})
                                    </span>
                                </motion.div>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                    {bySemester[sem].map((course, i) => (
                                        <CourseCard key={course.code} course={course} index={i} />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    ref={ctaRef}
                    className="mt-16 bg-navy-950 rounded-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div>
                        <p className="font-display text-white text-xl font-bold mb-1">
                            Want to see the full Course Learning Outcomes?
                        </p>
                        <p className="font-body text-slate-400 text-sm">
                            Detailed CLO mappings to PLOs are available in the OBE section.
                        </p>
                    </div>
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <Link href="/obe/clos" className="btn-gold shrink-0">
                            View CLOs <ChevronRight size={16} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}