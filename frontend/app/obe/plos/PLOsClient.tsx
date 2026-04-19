"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../../../components/FadeIn";
import { PLO } from "../../../lib/types";

export default function PLOsClient({ plos }: { plos: PLO[] }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="gold-rule" />
          <h2 className="section-title mb-3">What are PLOs?</h2>
          <p className="font-body text-slate-500 leading-relaxed mb-12 max-w-3xl">
            PLOs describe the knowledge, skills, and attitudes students are
            expected to have upon graduation, aligned with PEC accreditation
            requirements.
          </p>
        </motion.div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-sm shadow-card mb-12">
          <table className="dept-table">
            <thead>
              <tr>
                <th className="w-24">PLO</th>
                <th className="w-56">Graduate Attribute</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {plos.map((plo, i) => (
                <motion.tr
                  key={plo.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <td>
                    <span className="font-mono font-bold text-navy-950 bg-gold-50 border border-gold-200 px-2 py-0.5 rounded-sm text-xs">
                      {plo.id}
                    </span>
                  </td>
                  <td className="font-semibold text-navy-800 text-sm">
                    {plo.attribute}
                  </td>
                  <td className="text-slate-600 text-sm leading-relaxed">
                    {plo.description}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <StaggerContainer className="grid grid-cols-1 gap-4 md:hidden">
          {plos.map((plo, i) => (
            <StaggerItem key={plo.id}>
              <motion.div
                className="flex gap-4 bg-slate-50 border border-slate-100 rounded-sm p-5 hover:border-gold-300 hover:bg-white hover:shadow-card transition-all duration-300"
                whileHover={{ y: -2 }}
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
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
