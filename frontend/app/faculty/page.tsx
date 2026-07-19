import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Facebook, Linkedin, Crown } from "lucide-react";
import PageHeader from "../../components/PageHeader";
import SafeEmail from "../../components/SafeEmail";
import { api } from "../../lib/api";
import { FACULTY_DATA } from "../../download/data";
import { FacultyMember } from "../../lib/types";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Meet the faculty of the Software Engineering Department at QUEST Nawabshah.",
};

function cleanEmail(email?: string) {
  if (!email) return undefined;
  // Strip an accidentally-entered "mailto:" prefix so we never render/link it twice.
  return email.replace(/^mailto:/i, "").trim();
}

function FacultyCard({ member }: { member: FacultyMember }) {
  const email = cleanEmail(member.email);

  return (
    <div className="group bg-white rounded-sm shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
      <div className="relative h-56 bg-slate-100 overflow-hidden">
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain object-center p-2 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-navy-100">
            <span className="font-display text-4xl text-navy-300 font-bold">
              {member?.name?.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {email && (
            <SafeEmail
              email={email}
              className="!gap-0 w-9 h-9 rounded-full bg-white/20 hover:bg-gold-500 !text-white justify-center [&>span]:hidden"
            />
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-gold-500 text-white flex items-center justify-center transition-colors"
            >
              <Linkedin size={15} />
            </a>
          )}
          {member.facebook && (
            /* FIXED: Added missing <a tag opening */
            <a
              href={member.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-gold-500 text-white flex items-center justify-center transition-colors"
            >
              <Facebook size={15} />
            </a>
          )}
        </div>
      </div>
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
        {email && (
          <SafeEmail
            email={email}
            className="font-body text-xs text-navy-700 truncate mt-auto"
          />
        )}
      </div>
      <div className="h-0.5 w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

// Hierarchy: Professor > Associate Professor > Assistant Professor > Lecturer > Lab Engineer.
// Chairman is handled separately above and never appears here.
const DESIGNATION_RANK: Record<string, number> = {
  Professor: 1,
  "Associate Professor": 2,
  "Assistant Professor": 3,
  Lecturer: 4,
  "Lab Engineer": 5,
};

// Names that should always be pinned to the very end of the list,
// after everyone else in the hierarchy above (in this order).
const PIN_LAST = ["Muskan", "Kashif"];

function rankOf(member: FacultyMember) {
  const designationRank = DESIGNATION_RANK[member.designation] ?? 99;
  const pinIndex = PIN_LAST.findIndex((n) =>
    member.name.toLowerCase().includes(n.toLowerCase()),
  );
  // Pinned members get pushed past every real designation rank,
  // while still respecting their relative order in PIN_LAST.
  return pinIndex === -1 ? designationRank : 100 + pinIndex;
}

function sortByHierarchy(members: FacultyMember[]) {
  return [...members].sort((a, b) => rankOf(a) - rankOf(b));
}

export default async function FacultyPage() {
  const fetched = await api.faculty().catch(() => FACULTY_DATA);
  // Extra safety: even if the API returns a non-array shape, never crash.
  const faculty = Array.isArray(fetched) ? fetched : FACULTY_DATA;
  const chairman = faculty.find((f) => f.isChairman);
  const rest = sortByHierarchy(faculty.filter((f) => !f.isChairman));

  return (
    <>
      <PageHeader
        title="Our Faculty"
        subtitle="Meet the experienced and highly qualified academic team driving excellence in software engineering education."
        crumbs={[{ label: "People" }, { label: "Faculty" }]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {chairman && (
            <div className="mb-16">
              <span className="gold-rule" />
              <h2 className="section-title mb-8">Department Head</h2>
              <div className="max-w-sm">
                <FacultyCard member={chairman} />
              </div>
            </div>
          )}
          <div>
            <span className="gold-rule" />
            <h2 className="section-title mb-8">Academic Staff</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {rest.map((m) => (
                <FacultyCard key={m._id ?? m.name} member={m} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
