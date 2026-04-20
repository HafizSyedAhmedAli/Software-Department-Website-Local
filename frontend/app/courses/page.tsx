import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageHeader from "../../components/PageHeader";
import { api } from "../../lib/api";
import { COURSES_DATA } from "../../download/data";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = { title: "Courses" };

export default async function CoursesPage() {
  const courses = await api.courses().catch(() => COURSES_DATA);
  return (
    <>
      <PageHeader
        title="Courses"
        subtitle="A comprehensive 4-year curriculum designed to produce industry-ready software engineers."
        crumbs={[{ label: "Courses" }]}
      />
      <CoursesClient courses={courses} />
    </>
  );
}