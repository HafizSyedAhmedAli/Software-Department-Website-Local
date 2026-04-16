import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import GalleryClient from "./GalleryClient";
import { api } from "../../lib/api";
import { GalleryItem } from "../../lib/types";

export const metadata: Metadata = { title: "Gallery" };

const STATIC_FALLBACK: GalleryItem[] = [
  {
    imageUrl: "/images/Gallery/lab1.jpg",
    category: "lab",
    title: "Software Engineering Lab",
  },
  {
    imageUrl: "/images/Gallery/lab2.jpg",
    category: "lab",
    title: "Computer Lab",
  },
  {
    imageUrl: "/images/Gallery/classroom1.jpg",
    category: "classroom",
    title: "Classroom Session",
  },
  {
    imageUrl: "/images/Gallery/20-fyp.jpg",
    category: "others",
    title: "FYP Batch 2020",
  },
  {
    imageUrl: "/images/Gallery/welcome1.jpg",
    category: "welcome",
    title: "Welcome Event",
  },
  {
    imageUrl: "/images/Gallery/qses1.jpg",
    category: "qses",
    title: "QSES Event",
  },
];

export default async function GalleryPage() {
  const items = await api.gallery().catch(() => STATIC_FALLBACK);

  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A glimpse into life at the Software Engineering Department."
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="gold-rule" />
          <h2 className="section-title mb-8">Department Photos</h2>
          <GalleryClient items={items} />
        </div>
      </section>
    </>
  );
}
