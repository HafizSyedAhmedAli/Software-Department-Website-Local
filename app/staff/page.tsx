import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import { STAFF_DATA } from "../../Download/data";

export const metadata: Metadata = {
  title: "Staff",
  description:
    "Administrative and support staff of the Software Engineering Department at QUEST Nawabshah.",
};

export default function StaffPage() {
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
                {STAFF_DATA.map((member) => (
                  <tr key={member.sn}>
                    <td className="font-mono text-slate-400 text-center">
                      {member.sn}
                    </td>
                    <td className="font-semibold text-navy-950">
                      {member.name}
                    </td>
                    <td>
                      <span className="inline-block bg-navy-50 text-navy-800 text-xs font-semibold px-2.5 py-1 rounded-sm">
                        {member.designation}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-body text-sm text-slate-400 mt-6 text-center">
            For administrative inquiries, please contact the department office
            directly.
          </p>
        </div>
      </section>
    </>
  );
}
