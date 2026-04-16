import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import { api } from "../../lib/api";
import { STAFF_DATA } from "../../download/data";

export const metadata: Metadata = { title: "Staff" };

export default async function StaffPage() {
  const staff = await api.staff().catch(() => STAFF_DATA);

  return (
    <>
      <PageHeader
        title="Administrative Staff"
        subtitle="The dedicated administrative team that keeps the department running smoothly."
        crumbs={[{ label: "People" }, { label: "Staff" }]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <span className="gold-rule" />
          <h2 className="section-title mb-8">Department Staff</h2>
          <div className="overflow-x-auto rounded-sm shadow-card">
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
                  staff.map((m) => (
                    <tr key={m._id ?? m.sn}>
                      <td className="font-mono text-slate-400 text-center">
                        {m.sn}
                      </td>
                      <td className="font-semibold text-navy-950">{m.name}</td>
                      <td>
                        <span className="inline-block bg-navy-50 text-navy-800 text-xs font-semibold px-2.5 py-1 rounded-sm">
                          {m.designation}
                        </span>
                      </td>
                    </tr>
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
          </div>
        </div>
      </section>
    </>
  );
}
