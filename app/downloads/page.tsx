import type { Metadata } from "next";
import { Download, FileText, FileSpreadsheet, File } from "lucide-react";
import PageHeader from "../../components/PageHeader";
import { DOWNLOADS_DATA } from "../../Download/data";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Download academic forms, templates, policies, and guidelines from the Software Engineering Department.",
};

const FILE_ICONS: Record<string, React.ReactNode> = {
  PDF: <FileText size={16} className="text-red-500" />,
  XLSX: <FileSpreadsheet size={16} className="text-green-600" />,
  DOCX: <FileText size={16} className="text-blue-600" />,
  DOC: <FileText size={16} className="text-blue-500" />,
};

const FILE_BADGE: Record<string, string> = {
  PDF: "bg-red-50 text-red-700 border-red-200",
  XLSX: "bg-green-50 text-green-700 border-green-200",
  DOCX: "bg-blue-50 text-blue-700 border-blue-200",
  DOC: "bg-blue-50 text-blue-600 border-blue-200",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        title="Downloads"
        subtitle="Academic forms, templates, policies, and guidelines available for download."
        crumbs={[{ label: "Downloads" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <span className="gold-rule" />
          <h2 className="section-title mb-8">Available Documents</h2>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto rounded-sm shadow-card">
            <table className="dept-table">
              <thead>
                <tr>
                  <th className="w-10">#</th>
                  <th>Description</th>
                  <th className="w-32">Date</th>
                  <th className="w-24">Type</th>
                  <th className="w-28 text-center">Download</th>
                </tr>
              </thead>
              <tbody>
                {DOWNLOADS_DATA.map((item, i) => (
                  <tr key={i} className="group">
                    <td className="text-slate-400 font-mono text-center">{i + 1}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        {FILE_ICONS[item.fileType] ?? <File size={16} className="text-slate-400" />}
                        <span className="font-medium text-navy-950">{item.description}</span>
                      </div>
                    </td>
                    <td className="text-slate-500 text-xs">{item.date}</td>
                    <td>
                      <span
                        className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-sm border ${
                          FILE_BADGE[item.fileType] ?? "bg-slate-50 text-slate-600 border-slate-200"
                        }`}
                      >
                        {item.fileType}
                      </span>
                    </td>
                    <td className="text-center">
                      <a
                        href={item.fileUrl}
                        download
                        className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-navy-950 hover:text-gold-600 transition-colors group/dl"
                      >
                        <Download
                          size={13}
                          className="transition-transform group-hover/dl:translate-y-0.5"
                        />
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {DOWNLOADS_DATA.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-100 rounded-sm shadow-card p-4 flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-sm bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  {FILE_ICONS[item.fileType] ?? <File size={16} className="text-slate-400" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body font-semibold text-navy-950 text-sm truncate">
                    {item.description}
                  </p>
                  <p className="font-body text-xs text-slate-400 mt-0.5">{item.date}</p>
                </div>
                <a
                  href={item.fileUrl}
                  download
                  className="shrink-0 w-9 h-9 rounded-sm bg-navy-950 hover:bg-navy-700 text-white flex items-center justify-center transition-colors"
                  aria-label={`Download ${item.description}`}
                >
                  <Download size={15} />
                </a>
              </div>
            ))}
          </div>

          <p className="font-body text-sm text-slate-400 mt-8 text-center">
            Having trouble downloading? Contact us at{" "}
            <a
              href="mailto:chairman.swe@quest.edu.pk"
              className="text-navy-700 hover:text-gold-600 transition-colors underline"
            >
              chairman.swe@quest.edu.pk
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
