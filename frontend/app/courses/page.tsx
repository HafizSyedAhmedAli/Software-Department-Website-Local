import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import { api } from "../../lib/api";
import { COURSES_DATA } from "../../download/data";
import type { OBE_Course } from "../../lib/types";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = { title: "Courses" };

/**
 * Course codes are DISPLAY-ONLY reference text for visitors — they are never
 * used as identity, keys, or merge logic. Every course from the CMS is shown,
 * and the full local curriculum is always shown too. The only de-duplication
 * is by course NAME within the same semester (case-insensitive), where the
 * CMS version wins so edits made in the Studio are reflected.
 */
function combineCourses(local: OBE_Course[], remote: unknown): OBE_Course[] {
  if (!Array.isArray(remote) || remote.length === 0) return local;

  const cms = (remote as OBE_Course[]).filter(
    (c) => c && typeof c.name === "string" && typeof c.semester === "number",
  );

  const cmsNameKeys = new Set(
    cms.map((c) => `${c.semester}::${c.name.trim().toLowerCase()}`),
  );

  // Keep every local course whose (semester, name) wasn't re-entered in the CMS
  const localKept = local.filter(
    (c) => !cmsNameKeys.has(`${c.semester}::${c.name.trim().toLowerCase()}`),
  );

  return [...localKept, ...cms];
}

export default async function CoursesPage() {
  const fetched = await api.courses().catch(() => null);
  const courses = combineCourses(COURSES_DATA, fetched);

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