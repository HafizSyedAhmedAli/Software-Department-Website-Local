import { Eye, Star, Target } from "lucide-react";
import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import { VISION_MISSION } from "../../../download/data";
import { api } from "../../../lib/api";

export const metadata: Metadata = { title: "Vision & Mission" };

export default async function VisionPage() {
  const vm = await api.visionMission().catch(() => VISION_MISSION) || { vision: '', mission: [], values: [] };

  return (
    <>
      <PageHeader
        title="Vision & Mission"
        subtitle="The guiding principles that shape the Software Engineering Department."
        crumbs={[{ label: "OBE" }, { label: "Vision & Mission" }]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 rounded-sm bg-navy-950 flex items-center justify-center shrink-0">
              <Eye size={24} className="text-gold-400" />
            </div>
            <div>
              <span className="gold-rule" />
              <h2 className="section-title mb-4">Our Vision</h2>
              <p className="font-body text-lg text-slate-600 leading-relaxed border-l-4 border-gold-400 pl-5 italic">
                {vm.vision}
              </p>
            </div>
          </div>
          <hr className="border-slate-100" />
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 rounded-sm bg-navy-950 flex items-center justify-center shrink-0">
              <Target size={24} className="text-gold-400" />
            </div>
            <div className="flex-1">
              <span className="gold-rule" />
              <h2 className="section-title mb-6">Our Mission</h2>
              <div className="space-y-4">
                {vm.mission.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-navy-950 text-gold-400 font-display font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="font-body text-slate-600 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr className="border-slate-100" />
          <div>
            <div className="flex gap-6 items-start mb-8">
              <div className="w-14 h-14 rounded-sm bg-navy-950 flex items-center justify-center shrink-0">
                <Star size={24} className="text-gold-400" />
              </div>
              <div>
                <span className="gold-rule" />
                <h2 className="section-title">Core Values</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {vm.values.map((val) => (
                <div
                  key={val.title}
                  className="bg-slate-50 border border-slate-100 rounded-sm p-5 hover:border-gold-300 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-8 h-1 bg-gold-500 mb-3" />
                  <h3 className="font-display text-navy-950 font-bold text-base mb-2">
                    {val.title}
                  </h3>
                  <p className="font-body text-sm text-slate-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
