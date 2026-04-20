"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StaffMember {
  _id?: string;
  sn: number;
  name: string;
  designation: string;
}

export default function StaffClient({ staff }: { staff: StaffMember[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="gold-rule" />
          <h2 className="section-title mb-8">Department Staff</h2>
        </motion.div>

        <motion.div
          className="overflow-x-auto rounded-sm shadow-card"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <table className="dept-table">
            <thead>
              <tr>
                <th className="w-16">S.No</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {staff.length > 0 ? (
                staff.map((m, i) => (
                  <motion.tr
                    key={m._id ?? m.sn}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  >
                    <td className="font-mono text-slate-400 text-center">
                      {m.sn}
                    </td>
                    <td className="font-semibold text-navy-950">{m.name}</td>
                    <td>
                      <motion.span
                        className="inline-block bg-navy-50 text-navy-800 text-xs font-semibold px-2.5 py-1 rounded-sm"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#d9a128",
                          color: "#002147",
                        }}
                        transition={{ duration: 0.15 }}
                      >
                        {m.designation}
                      </motion.span>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center text-slate-400 py-8">
                    No staff members to display.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
