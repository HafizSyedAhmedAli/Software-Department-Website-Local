"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { clsx } from "clsx";
import { GalleryItem } from "../../animations/lib/types";
import { GALLERY_CATEGORIES } from "../../Download/data";

// ─── Lightbox ──────────────────────────────────────────────────────────────
function Lightbox({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={20} />
      </button>
      <div
        className="relative max-w-4xl max-h-[85vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video rounded-sm overflow-hidden">
          <Image
            src={item.imageUrl}
            alt={item.title ?? "Gallery image"}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-contain"
          />
        </div>
        {item.title && (
          <p className="text-center text-white font-body text-sm mt-3 text-slate-300">
            {item.title}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Gallery Grid ──────────────────────────────────────────────────────────
export default function GalleryClient({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<"all" | GalleryItem["category"]>("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key as typeof active)}
            className={clsx(
              "px-4 py-2 rounded-sm text-sm font-body font-semibold transition-all duration-200",
              active === cat.key
                ? "bg-navy-950 text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="font-body text-sm text-slate-400 mb-6">
        Showing <span className="font-semibold text-navy-950">{filtered.length}</span> image
        {filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center text-slate-400 font-body">
          No images in this category yet.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightbox(item)}
              className="group relative aspect-square rounded-sm overflow-hidden bg-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
            >
              <Image
                src={item.imageUrl}
                alt={item.title ?? `Gallery item ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/40 transition-all duration-300 flex items-end p-3">
                {item.title && (
                  <p className="text-white text-xs font-body font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left line-clamp-2">
                    {item.title}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
