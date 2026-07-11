// ─── Site-wide types ───────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FacultyMember {
  _id?: string;
  name: string;
  designation: string;
  email?: string;
  facebook?: string;
  linkedin?: string;
  imageUrl?: string;
  image?: {
    asset: { _ref: string };
    alt?: string;
  };
  isChairman?: boolean;
  order?: number;
}

export interface StaffMember {
  _id?: string;
  sn: number;
  name: string;
  designation: string;
}

export interface ResearchItem {
  _id?: string;
  title: string;
  kind: "journal" | "conference" | "project" | "book";
  authors: string;
  venue?: string;
  year: number;
  area?: string;
  link?: string;
}

export interface AlumnusProfile {
  _id?: string;
  name: string;
  batch: string;
  designation: string;
  company?: string;
  location?: string;
  quote?: string;
  linkedin?: string;
  order?: number;
  photoUrl?: string;
}

export interface HeroSlide {
  _id?: string;
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  order?: number;
  imageUrl?: string;
}

export interface NewsEvent {
  _id?: string;
  title: string;
  summary: string;
  description?: string;
  images?: string[];
  imageUrl?: string;
  image?: {
    asset: { _ref: string };
    alt?: string;
  };
  date?: string;
  slug?: string;
}

export interface Download {
  _id?: string;
  description: string;
  date: string;
  fileType: string;
  fileUrl: string;
}

export interface GalleryItem {
  _id?: string;
  title?: string;
  category: "lab" | "classroom" | "welcome" | "qses" | "others";
  imageUrl: string;
  image?: {
    asset: { _ref: string };
    alt?: string;
  };
}

export interface CourseCLO {
  clo: string;
  description: string;
  domain: string;
  taxonomy: string;
  plo: string;
}

export interface Course {
  _id?: string;
  name: string;
  clos: CourseCLO[];
}

export interface SiteSettings {
  email: string;
  phone: string;
  phone2?: string;
  address: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

export interface VisionMission {
  vision: string;
  mission: string[];
  values: { title: string; description: string }[];
}

export interface PEO {
  id: string;
  title: string;
  description: string;
}

export interface PLO {
  id: string;
  attribute: string;
  description: string;
}

export interface CLO {
  clo: string;
  description: string;
  domain: string;
  taxonomy: string;
  plo: string;
}

export interface OBE_Course {
  code: string;
  name: string;
  creditHours: number;
  semester: number;
  type: string;
  clos: CLO[];
}

export type GalleryCategory =
  | "all"
  | "lab"
  | "classroom"
  | "welcome"
  | "qses"
  | "others";
