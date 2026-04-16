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

export interface NewsEvent {
  _id?: string;
  title: string;
  summary: string;
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
