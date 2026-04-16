import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import { PLOS_DATA } from "../../../Download/data";

export const metadata: Metadata = {
  title: "Program Learning Outcomes (PLOs)",
  description: "The 12 Program Learning Outcomes aligned with PEC and Washington Accord Graduate Attributes.",
};

export default function PLOsPage() {
  return (
    <>
      <PageHeader
        title="Program Learning Outcomes"
        subtitle="12 Graduate Attributes aligned with PEC requirements and the Washington Accord."
        crumbs={[{ label: "OBE", href: "#" }, { label: "PLOs" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <span className="gold-rule" />
          <h2 className="section-title mb-3">What are PLOs?</h2>
          <p className="font-body text-slate-500 leading-relaxed mb-12 max-w-3xl">
            Program Learning Outcomes (PLOs) describe the knowledge, skills, and attitudes students
            are expected to have upon graduation. These 12 attributes are aligned with the Pakistan
            Engineering Council (PEC) accreditation requirements and the Washington Accord graduate
            attributes.
          </p>

          {/* Table view */}
          <div className="overflow-x-auto rounded-sm shadow-card mb-12">
            <table className="dept-table">
              <thead>
                <tr>
                  <th className="w-24">PLO</th>
                  <th className="w-56">Graduate Attribute</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {PLOS_DATA.map((plo) => (
                  <tr key={plo.id} className="group">
                    <td>
                      <span className="font-mono font-bold text-navy-950 bg-gold-50 border border-gold-200 px-2 py-0.5 rounded-sm text-xs">
                        {plo.id}
                      </span>
                    </td>
                    <td className="font-semibold text-navy-800 text-sm">{plo.attribute}</td>
                    <td className="text-slate-600 text-sm leading-relaxed">{plo.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards view for mobile / visual presentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PLOS_DATA.map((plo, i) => (
              <div
                key={plo.id}
                className="flex gap-4 bg-slate-50 border border-slate-100 rounded-sm p-5 hover:border-gold-300 hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-navy-950 flex items-center justify-center shrink-0">
                  <span className="font-mono text-gold-400 font-bold text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-navy-950 font-semibold text-sm mb-1">
                    {plo.attribute}
                  </h3>
                  <p className="font-body text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {plo.description}
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
