import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, Tag, ChevronRight } from "lucide-react";
import PageHeader from "../../components/PageHeader";
import { api } from "../../lib/api";
import { COURSES_DATA } from "../../download/data";

export const metadata: Metadata = { title: "Courses" };

const SEMESTER_LABELS: Record<number, string> = {
  1: "First Semester",
  2: "Second Semester",
  3: "Third Semester",
  4: "Fourth Semester",
  5: "Fifth Semester",
  6: "Sixth Semester",
  7: "Seventh Semester",
  8: "Eighth Semester",
};

export default async function CoursesPage() {
  const courses = await api.courses().catch(() => COURSES_DATA);
  const bySemester = courses.reduce<Record<number, typeof courses>>(
    (acc, c) => {
      if (!acc[c.semester]) acc[c.semester] = [];
      acc[c.semester].push(c);
      return acc;
    },
    {},
  );
  const semesters = Object.keys(bySemester)
    .map(Number)
    .sort((a, b) => a - b);
  const totalCredits = courses.reduce((s, c) => s + c.creditHours, 0);

  return (
    <>
      <PageHeader
        title="Courses"
        subtitle="A comprehensive 4-year curriculum designed to produce industry-ready software engineers."
        crumbs={[{ label: "Courses" }]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Total Courses", value: `${courses.length}+` },
              { label: "Credit Hours", value: `${totalCredits}+` },
              { label: "Semesters", value: "8" },
              { label: "Duration", value: "4 Years" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-navy-950 text-white rounded-sm px-6 py-5 text-center"
              >
                <p className="font-display text-3xl font-bold text-gold-400 mb-1">
                  {item.value}
                </p>
                <p className="font-body text-xs text-slate-400 uppercase tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-14">
            {semesters.map((sem) => (
              <div key={sem}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="gold-rule mb-0" />
                  <h2 className="font-display text-xl font-bold text-navy-950">
                    {SEMESTER_LABELS[sem] ?? `Semester ${sem}`}
                  </h2>
                  <span className="text-xs text-slate-400 font-body">
                    ({bySemester[sem].length} course
                    {bySemester[sem].length > 1 ? "s" : ""})
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {bySemester[sem].map((course) => (
                    <div
                      key={course.code}
                      className="group bg-white border border-slate-100 rounded-sm shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 p-5"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="w-10 h-10 rounded-sm bg-navy-950 flex items-center justify-center shrink-0">
                          <BookOpen size={18} className="text-gold-400" />
                        </div>
                        <span className="font-mono text-xs bg-gold-50 text-gold-700 border border-gold-200 px-2 py-0.5 rounded-sm font-semibold">
                          {course.code}
                        </span>
                      </div>
                      <h3 className="font-display text-navy-950 font-semibold text-base leading-snug mb-3">
                        {course.name}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-xs font-body text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <Clock size={11} className="text-gold-500" />
                          {course.creditHours} Credit Hours
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Tag size={11} className="text-gold-500" />
                          {course.type}
                        </span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-50">
                        <p className="font-body text-xs text-slate-400 uppercase tracking-wide mb-2">
                          {course.clos?.length} CLOs
                        </p>
                        <div className="flex gap-1 flex-wrap">
                          {course.clos?.map((clo) => (
                            <span
                              key={clo.clo}
                              className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-sm font-mono"
                            >
                              {clo.clo}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-navy-950 rounded-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-display text-white text-xl font-bold mb-1">
                Want to see the full Course Learning Outcomes?
              </p>
              <p className="font-body text-slate-400 text-sm">
                Detailed CLO mappings to PLOs are available in the OBE section.
              </p>
            </div>
            <Link href="/obe/clos" className="btn-gold shrink-0">
              View CLOs <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
