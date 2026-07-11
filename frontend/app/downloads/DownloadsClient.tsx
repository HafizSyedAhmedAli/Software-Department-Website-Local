"use client";

import { Download, FileText, FileSpreadsheet, File } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

interface DownloadItem {
    _id?: string;
    description: string;
    date: string;
    fileType: string;
    fileUrl: string;
}

export default function DownloadsClient({ downloads }: { downloads: DownloadItem[] }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section className="py-16 md:py-24 bg-white" ref={ref}>
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <span className="gold-rule" />
                    <h2 className="section-title mb-8">Available Documents</h2>
                </motion.div>

                {/* Desktop table */}
                <motion.div
                    className="hidden md:block overflow-x-auto rounded-sm shadow-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.15 }}
                >
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
                            {downloads.map((item, i) => (
                                <motion.tr
                                    key={item._id ?? item.fileUrl}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.35, delay: 0.2 + i * 0.04 }}
                                >
                                    <td className="text-slate-400 font-mono text-center">{i + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            {FILE_ICONS[item.fileType] ?? <File size={16} className="text-slate-400" />}
                                            <span className="font-medium text-navy-950">{item.description}</span>
                                        </div>
                                    </td>
                                    <td className="text-slate-500 text-xs">{item.date}</td>
                                    <td>
                                        <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-sm border ${FILE_BADGE[item.fileType] ?? "bg-slate-50 text-slate-600 border-slate-200"}`}>
                                            {item.fileType}
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <motion.a
                                            href={item.fileUrl} download
                                            className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-navy-950 hover:text-gold-600 transition-colors group/dl"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Download size={13} className="transition-transform group-hover/dl:translate-y-0.5" />
                                            Download
                                        </motion.a>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Mobile cards */}
                <div className="md:hidden space-y-3">
                    {downloads.map((item, i) => (
                        <motion.div
                            key={i}
                            className="bg-white border border-slate-100 rounded-sm shadow-card p-4 flex items-start gap-3"
                            initial={{ opacity: 0, y: 24 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                            whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,23,48,0.12)" }}
                        >
                            <div className="w-10 h-10 rounded-sm bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                                {FILE_ICONS[item.fileType] ?? <File size={16} className="text-slate-400" />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-body font-semibold text-navy-950 text-sm truncate">{item.description}</p>
                                <p className="font-body text-xs text-slate-400 mt-0.5">{item.date}</p>
                            </div>
                            <motion.a
                                href={item.fileUrl} download
                                className="shrink-0 w-9 h-9 rounded-sm bg-navy-950 hover:bg-gold-500 text-white flex items-center justify-center transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Download size={15} />
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}