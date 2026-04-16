import {
  FacultyMember,
  StaffMember,
  NewsEvent,
  Download,
  GalleryItem,
  OBE_Course,
  PEO,
  PLO,
  VisionMission,
  SiteSettings,
} from "./types";

const API_URL = process.env.API_URL ?? "http://localhost:5000";

async function apiFetch<T>(
  endpoint: string,
  tags: string[],
  revalidate = 3600,
): Promise<T> {
  const res = await fetch(`${API_URL}/api${endpoint}`, {
    next: { revalidate, tags },
  });
  if (!res.ok) throw new Error(`API ${endpoint} failed: ${res.status}`);
  const json = await res.json();
  return json.data as T;
}

export const api = {
  faculty: () => apiFetch<FacultyMember[]>("/faculty", ["faculty"]),
  staff: () => apiFetch<StaffMember[]>("/staff", ["staff"]),
  events: () => apiFetch<NewsEvent[]>("/events", ["events"]),
  latestEvents: () => apiFetch<NewsEvent[]>("/events/latest", ["events"]),
  downloads: () => apiFetch<Download[]>("/downloads", ["downloads"]),
  gallery: () => apiFetch<GalleryItem[]>("/gallery", ["gallery"]),
  courses: () => apiFetch<OBE_Course[]>("/courses", ["courses"]),
  peos: () => apiFetch<PEO[]>("/obe/peos", ["obe"]),
  plos: () => apiFetch<PLO[]>("/obe/plos", ["obe"]),
  visionMission: () => apiFetch<VisionMission>("/obe/vision-mission", ["obe"]),
  settings: () => apiFetch<SiteSettings>("/settings", ["settings"]),
};
