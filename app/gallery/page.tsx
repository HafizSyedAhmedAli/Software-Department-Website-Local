import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import { GalleryItem } from "../../animations/lib/types";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of the Software Engineering Department at QUEST Nawabshah — labs, classrooms, and events.",
};

// Static fallback gallery data
// Replace with Sanity query once CMS is wired up
const GALLERY_ITEMS: GalleryItem[] = [
  { imageUrl: "/images/Gallery/lab1.jpg", category: "lab", title: "Software Engineering Lab" },
  { imageUrl: "/images/Gallery/lab2.jpg", category: "lab", title: "Computer Lab" },
  { imageUrl: "/images/Gallery/lab3.jpg", category: "lab", title: "Hardware Lab" },
  { imageUrl: "/images/Gallery/classroom1.jpg", category: "classroom", title: "Classroom Session" },
  { imageUrl: "/images/Gallery/classroom2.jpg", category: "classroom", title: "Lecture Hall" },
  { imageUrl: "/images/Gallery/20-fyp.jpg", category: "others", title: "FYP Batch 2020" },
  { imageUrl: "/images/Gallery/welcome1.jpg", category: "welcome", title: "Welcome Event" },
  { imageUrl: "/images/Gallery/qses1.jpg", category: "qses", title: "QSES Event" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A glimpse into life at the Software Engineering Department — labs, classrooms, and memorable events."
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="gold-rule" />
          <h2 className="section-title mb-8">Department Photos</h2>
          <GalleryClient items={GALLERY_ITEMS} />
        </div>
      </section>
    </>
  );
}
