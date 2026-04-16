import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import { PEOS_DATA } from "../../../Download/data";

export const metadata: Metadata = {
  title: "Program Educational Objectives (PEOs)",
  description: "The Program Educational Objectives of the Software Engineering Department at QUEST Nawabshah.",
};

export default function PEOsPage() {
  return (
    <>
      <PageHeader
        title="Program Educational Objectives"
        subtitle="PEOs describe what graduates are expected to attain within a few years after graduation."
        crumbs={[{ label: "OBE", href: "#" }, { label: "PEOs" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <span className="gold-rule" />
          <h2 className="section-title mb-3">What are PEOs?</h2>
          <p className="font-body text-slate-500 leading-relaxed mb-12 max-w-3xl">
            Program Educational Objectives (PEOs) are broad statements that describe the career
            and professional accomplishments that the programme is preparing graduates to achieve.
            They are aligned with the mission of the department and the needs of stakeholders.
          </p>

          <div className="space-y-5">
            {PEOS_DATA.map((peo, i) => (
              <div
                key={peo.id}
                className="group flex gap-5 bg-white border border-slate-100 rounded-sm shadow-card hover:shadow-card-hover hover:border-gold-200 transition-all duration-300 p-6"
              >
                {/* ID badge */}
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-sm bg-navy-950 flex items-center justify-center">
                    <span className="font-mono text-gold-400 font-bold text-xs">{peo.id}</span>
                  </div>
                  {i < PEOS_DATA.length - 1 && (
                    <div className="w-px flex-1 bg-slate-100 group-hover:bg-gold-200 transition-colors" />
                  )}
                </div>
                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-display text-navy-950 font-bold text-lg mb-2 group-hover:text-navy-700 transition-colors">
                    {peo.title}
                  </h3>
                  <p className="font-body text-slate-500 leading-relaxed text-sm">
                    {peo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 bg-navy-50 border border-navy-100 rounded-sm p-5">
            <p className="font-body text-sm text-navy-800 leading-relaxed">
              <strong className="text-navy-950">Note:</strong> These Program Educational Objectives
              have been developed in consultation with industry partners, alumni, and faculty, and
              are reviewed periodically as part of the Continuous Quality Improvement (CQI) process.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
