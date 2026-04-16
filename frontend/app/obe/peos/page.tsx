import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import { api } from "../../../lib/api";
import { PEOS_DATA } from "../../../download/data";

export const metadata: Metadata = {
  title: "Program Educational Objectives (PEOs)",
};

export default async function PEOsPage() {
  const peos = await api.peos().catch(() => PEOS_DATA);

  return (
    <>
      <PageHeader
        title="Program Educational Objectives"
        subtitle="PEOs describe what graduates are expected to attain within a few years after graduation."
        crumbs={[{ label: "OBE" }, { label: "PEOs" }]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <span className="gold-rule" />
          <h2 className="section-title mb-3">What are PEOs?</h2>
          <p className="font-body text-slate-500 leading-relaxed mb-12 max-w-3xl">
            Program Educational Objectives are broad statements describing the
            career and professional accomplishments the programme prepares
            graduates to achieve.
          </p>
          <div className="space-y-5">
            {peos.map((peo, i) => (
              <div
                key={peo.id}
                className="group flex gap-5 bg-white border border-slate-100 rounded-sm shadow-card hover:shadow-card-hover hover:border-gold-200 transition-all duration-300 p-6"
              >
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-sm bg-navy-950 flex items-center justify-center">
                    <span className="font-mono text-gold-400 font-bold text-xs">
                      {peo.id}
                    </span>
                  </div>
                  {i < peos.length - 1 && (
                    <div className="w-px flex-1 bg-slate-100 group-hover:bg-gold-200 transition-colors" />
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-navy-950 font-bold text-lg mb-2">
                    {peo.title}
                  </h3>
                  <p className="font-body text-slate-500 leading-relaxed text-sm">
                    {peo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
