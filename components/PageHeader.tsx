import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  crumbs?: Crumb[];
  subtitle?: string;
}

export default function PageHeader({ title, crumbs, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-navy-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-navy-800 opacity-40" />
        <div className="absolute bottom-0 left-0 w-1 h-full bg-gold-500 opacity-30" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.3) 59px, rgba(255,255,255,0.3) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.3) 59px, rgba(255,255,255,0.3) 60px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <h1 className="font-display text-white text-3xl md:text-4xl font-bold mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-slate-300 text-sm mb-3 max-w-xl">
            {subtitle}
          </p>
        )}
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs font-body">
              <li>
                <Link href="/" className="text-slate-400 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-slate-500" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="text-slate-400 hover:text-gold-400 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gold-400 font-medium">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {/* Gold accent line */}
        <div className="mt-5 w-12 h-1 bg-gold-500" />
      </div>
    </div>
  );
}