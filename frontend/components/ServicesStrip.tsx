import { BookOpen, Users, MonitorDot } from "lucide-react";

const SERVICES = [
  {
    icon: BookOpen,
    title: "Learn with Us",
    description:
      "Join us on a transformative educational adventure. Explore new horizons and unlock your potential through our comprehensive learning programmes.",
    color: "bg-navy-950",
  },
  {
    icon: Users,
    title: "Expert Teachers",
    description:
      "Our dedicated team of experienced educators is committed to guiding you towards mastery. Benefit from their deep insights, expertise, and practical wisdom.",
    color: "bg-gold-500",
    textDark: true,
  },
  {
    icon: MonitorDot,
    title: "Best Classrooms",
    description:
      "Step into our state-of-the-art classrooms designed to foster effective learning. Experience an environment that enhances your educational journey.",
    color: "bg-navy-800",
  },
];

export default function ServicesStrip() {
  return (
    <section className="relative -mt-10 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-card-hover rounded-sm overflow-hidden">
          {SERVICES.map(({ icon: Icon, title, description, color, textDark }) => (
            <div
              key={title}
              className={`${color} px-8 py-8 flex gap-5 items-start group transition-all duration-300 hover:brightness-110`}
            >
              <div
                className={`shrink-0 w-12 h-12 rounded-sm flex items-center justify-center ${
                  textDark ? "bg-navy-950/20" : "bg-white/10"
                }`}
              >
                <Icon
                  size={22}
                  className={textDark ? "text-navy-950" : "text-white"}
                />
              </div>
              <div>
                <h3
                  className={`font-display font-bold text-lg mb-2 leading-snug ${
                    textDark ? "text-navy-950" : "text-white"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`font-body text-sm leading-relaxed ${
                    textDark ? "text-navy-800/80" : "text-white/70"
                  }`}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}