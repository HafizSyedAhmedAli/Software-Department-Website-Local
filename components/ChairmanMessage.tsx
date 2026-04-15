import Image from "next/image";
import { Quote } from "lucide-react";

export default function ChairmanMessage() {
  return (
    <section className="py-20 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gold-500 opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

          {/* Photo */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            <div className="relative w-52 h-52 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-sm bg-navy-950 translate-x-3 translate-y-3" />
              <div className="relative rounded-sm overflow-hidden w-full h-full shadow-card-hover">
                <Image
                  src="/images/faculty/chairmainpic.jfif"
                  alt="Prof. Dr. Pardeep Kumar"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-6 text-center lg:text-left">
              <p className="font-display text-navy-950 font-bold text-xl">
                Prof. Dr. Pardeep Kumar
              </p>
              <p className="font-body text-sm text-slate-500 mt-1">
                Chairman, Dept. of Software Engineering
              </p>
              <p className="font-body text-xs text-gold-600 font-semibold uppercase tracking-wider mt-1">
                QUEST Nawabshah
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="lg:col-span-3">
            <span className="gold-rule" />
            <h2 className="section-title mb-6">Chairman&apos;s Message</h2>

            <div className="relative pl-6 border-l-2 border-gold-400">
              <Quote
                size={32}
                className="text-gold-300 absolute -left-4 -top-2 fill-gold-100"
              />
              <div className="space-y-4 font-body text-slate-600 text-base leading-relaxed">
                <p>
                  It gives me immense pleasure to invite you to the website of the
                  Software Engineering Department, QUEST. The department offers Bachelors
                  of Engineering (B.E) and Masters of Engineering (M.E) degrees in
                  Software Engineering.
                </p>
                <p>
                  Our graduates are already serving in reputable public and private sector
                  software organisations both locally and internationally. The department
                  provides a congenial environment for carrying out cutting-edge research
                  and experimental work with modern, state-of-the-art laboratories.
                </p>
                <p>
                  Our faculty is highly qualified and always ready to guide students in
                  any academic-related problems. Please explore the Department of Software
                  Engineering — I am sure you will love to be a part of it.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-0.5 bg-gold-500" />
              <p className="font-body text-sm text-slate-500 italic">
                Prof. Dr. Pardeep Kumar, Chairman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}