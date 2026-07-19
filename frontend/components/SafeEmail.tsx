"use client";

import { useState, useEffect } from "react";
import { Mail } from "lucide-react";

/**
 * Bot-proof email display.
 * The full address NEVER appears in the server-rendered HTML — it is split
 * into parts and only assembled by JavaScript in a real browser, after mount.
 * Scrapers reading the page source (or non-JS crawlers) find nothing to harvest.
 */
export default function SafeEmail({
  email,
  className = "",
}: {
  email?: string;
  className?: string;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  if (!email) return null;
  const clean = email.replace(/^mailto:/i, "").trim();
  const at = clean.indexOf("@");
  if (at < 1) return null;
  const user = clean.slice(0, at);
  const domain = clean.slice(at + 1);

  // Before JS runs (and for all bots): show a harmless placeholder
  if (!ready) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 text-slate-400 ${className}`}
      >
        <Mail size={12} className="shrink-0" />
        <span aria-hidden>email hidden — enable JavaScript</span>
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = `mailto:${user}@${domain}`;
      }}
      className={`inline-flex items-center gap-1.5 hover:text-gold-600 transition-colors cursor-pointer bg-transparent border-0 p-0 font-inherit text-inherit ${className}`}
      aria-label="Send email"
    >
      <Mail size={12} className="shrink-0" />
      <span>
        {user}
        <span aria-hidden>&#64;</span>
        {domain}
      </span>
    </button>
  );
}
