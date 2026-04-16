import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import { COURSES_DATA } from "../../../download/data";

export const metadata: Metadata = {
  title: "Course Learning Outcomes (CLOs)",
  description:
    "Course Learning Outcomes for all Software Engineering courses at QUEST Nawabshah.",
};

const DOMAIN_COLORS: Record<string, string> = {
  Cognitive: "bg-blue-50 text-blue-700 border-blue-200",
  Psychomotor: "bg-green-50 text-green-700 border-green-200",
  Affective: "bg-purple-50 text-purple-700 border-purple-200",
};

export default function CLOsPage() {
  return (
    <>
      <PageHeader
        title="Course Learning Outcomes"
        subtitle="Per-course CLOs mapped to Program Learning Outcomes (PLOs) with Bloom's Taxonomy levels."
        crumbs={[{ label: "OBE" }, { label: "CLOs" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <span className="gold-rule" />
          <h2 className="section-title mb-3">CLO–PLO Mapping</h2>
          <p className="font-body text-slate-500 leading-relaxed mb-12 max-w-3xl">
            Each Course Learning Outcome (CLO) is mapped to a corresponding
            Program Learning Outcome (PLO) and classified by learning domain and
            Bloom&apos;s Taxonomy level to ensure comprehensive coverage of
            graduate attributes.
          </p>

          <div className="space-y-10">
            {COURSES_DATA.filter((course) => course.clos?.length).map(
              (course) => (
                <div
                  key={course.code}
                  className="border border-slate-100 rounded-sm overflow-hidden shadow-card"
                >
                  {/* Course header */}
                  <div className="bg-navy-950 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span className="font-mono text-gold-400 text-xs font-semibold mr-3">
                        {course.code}
                      </span>
                      <span className="font-display text-white font-semibold text-base">
                        {course.name}
                      </span>
                    </div>
                    <div className="flex gap-3 text-xs font-body text-slate-300">
                      <span>Semester {course.semester}</span>
                      <span className="text-slate-500">•</span>
                      <span>{course.creditHours} CH</span>
                      <span className="text-slate-500">•</span>
                      <span>{course.type}</span>
                    </div>
                  </div>

                  {/* CLOs table */}
                  <div className="overflow-x-auto">
                    <table className="dept-table">
                      <thead>
                        <tr>
                          <th className="w-20">CLO</th>
                          <th>Description</th>
                          <th className="w-28">Domain</th>
                          <th className="w-28">Taxonomy</th>
                          <th className="w-24">PLO</th>
                        </tr>
                      </thead>
                      <tbody>
                        {course.clos.map((clo) => (
                          <tr key={clo.clo}>
                            <td>
                              <span className="font-mono font-bold text-navy-950 text-xs">
                                {clo.clo}
                              </span>
                            </td>
                            <td className="text-sm leading-relaxed">
                              {clo.description}
                            </td>
                            <td>
                              <span
                                className={`text-xs font-semibold px-2 py-0.5 rounded-sm border ${
                                  DOMAIN_COLORS[clo.domain] ??
                                  "bg-slate-50 text-slate-600 border-slate-200"
                                }`}
                              >
                                {clo.domain}
                              </span>
                            </td>
                            <td>
                              <span className="font-mono text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded-sm">
                                {clo.taxonomy}
                              </span>
                            </td>
                            <td>
                              <span className="font-mono text-xs font-bold text-navy-700 bg-navy-50 border border-navy-100 px-2 py-0.5 rounded-sm">
                                {clo.plo}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Legend */}
          <div className="mt-12 bg-slate-50 border border-slate-100 rounded-sm p-6">
            <h3 className="font-display text-navy-950 font-semibold text-sm mb-4 uppercase tracking-wide">
              Taxonomy Legend
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-body text-slate-600">
              <div>
                <p className="font-semibold text-navy-800 mb-1">
                  Cognitive (C)
                </p>
                <p>C1: Remember · C2: Understand · C3: Apply</p>
                <p>C4: Analyse · C5: Evaluate · C6: Create</p>
              </div>
              <div>
                <p className="font-semibold text-navy-800 mb-1">
                  Psychomotor (P)
                </p>
                <p>P1: Imitation · P2: Manipulation · P3: Precision</p>
                <p>P4: Articulation · P5: Naturalisation</p>
              </div>
              <div>
                <p className="font-semibold text-navy-800 mb-1">
                  Affective (A)
                </p>
                <p>A1: Receiving · A2: Responding · A3: Valuing</p>
                <p>A4: Organising · A5: Internalising</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
