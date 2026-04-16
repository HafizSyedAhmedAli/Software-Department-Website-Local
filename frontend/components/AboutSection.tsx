import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const HIGHLIGHTS = [
  "PEC Accredited Bachelor of Engineering programme",
  "Introduced in 2020 — first batch graduated 2024",
  "State-of-the-art laboratories & infrastructure",
  "Highly qualified faculty & technical staff",
];

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden aspect-[4/3] shadow-card-hover">
              <Image
                src="/images/swdept.jpeg"
                alt="Software Engineering Department QUEST"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-gold-500 text-navy-950 p-5 rounded-sm shadow-lg hidden md:block">
              <p className="font-display font-bold text-2xl leading-none">2020</p>
              <p className="font-body text-xs font-semibold uppercase tracking-wide mt-0.5">
                Established
              </p>
            </div>
            {/* Gold line accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-gold-500 rounded-sm opacity-30 hidden md:block" />
          </div>

          {/* Content */}
          <div>
            <span className="gold-rule" />
            <h2 className="section-title mb-5">About the Department</h2>
            <div className="space-y-4 font-body text-slate-600 text-base leading-relaxed mb-7">
              <p>
                The Software Engineering Department&apos;s key objective is to provide
                state-of-the-art education to undergraduates, enabling them to master the
                creation, design, development, debugging, and delivery of reliable,
                cost-effective software systems.
              </p>
              <p>
                Recognising the field&apos;s significance, QUEST introduced the Software
                Engineering programme in 2020, conferring a{" "}
                <strong className="text-navy-950">Bachelor of Engineering (BE)</strong> degree
                upon successful completion of 4 years (8 semesters) of study.
              </p>
              <p>
                Accredited by the{" "}
                <strong className="text-navy-950">Pakistan Engineering Council (PEC)</strong>,
                the curriculum harmonises theoretical foundations with essential practical
                engineering knowledge.
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-2.5 mb-8">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle
                    size={17}
                    className="text-gold-500 shrink-0 mt-0.5"
                  />
                  <span className="font-body text-sm text-slate-600">{h}</span>
                </li>
              ))}
            </ul>

            <Link href="/courses" className="btn-primary">
              View Courses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}