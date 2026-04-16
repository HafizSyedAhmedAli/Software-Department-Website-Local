import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Facebook, Linkedin, Crown } from "lucide-react";
import PageHeader from "../../components/PageHeader";
import { FACULTY_DATA } from "../../download/data";
import { FacultyMember } from "../../lib/types";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Meet the dedicated faculty members of the Software Engineering Department at QUEST Nawabshah.",
};

function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <div className="group bg-white rounded-sm shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
      {/* Photo */}
      <div className="relative h-56 bg-slate-100 overflow-hidden">
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-navy-100">
            <span className="font-display text-4xl text-navy-300 font-bold">
              {member.name.charAt(0)}
            </span>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-gold-500 text-white flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-gold-500 text-white flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
          )}
          {member.facebook && (
            <a
              href={member.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-gold-500 text-white flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display text-navy-950 font-semibold text-base leading-snug">
            {member.name}
          </h3>
          {member.isChairman && (
            <Crown size={15} className="text-gold-500 shrink-0 mt-0.5" />
          )}
        </div>
        <p className="font-body text-sm text-slate-500 mb-3">
          {member.designation}
        </p>
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="font-body text-xs text-navy-700 hover:text-gold-600 transition-colors truncate mt-auto"
          >
            {member.email}
          </a>
        )}
      </div>

      {/* Gold bottom accent */}
      <div className="h-0.5 w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

export default function FacultyPage() {
  const chairman = FACULTY_DATA.find((f) => f.isChairman);
  const rest = FACULTY_DATA.filter((f) => !f.isChairman);

  return (
    <>
      <PageHeader
        title="Our Faculty"
        subtitle="Meet the experienced and highly qualified academic team driving excellence in software engineering education."
        crumbs={[{ label: "People" }, { label: "Faculty" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Chairman spotlight */}
          {chairman && (
            <div className="mb-16">
              <span className="gold-rule" />
              <h2 className="section-title mb-8">Department Head</h2>
              <div className="max-w-sm">
                <FacultyCard member={chairman} />
              </div>
            </div>
          )}

          {/* Rest of faculty */}
          <div>
            <span className="gold-rule" />
            <h2 className="section-title mb-8">Academic Staff</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {rest.map((member) => (
                <FacultyCard key={member._id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
