export interface FacultyMember {
  _id: string;
  name: string;
  designation: string;
  email?: string;
  facebook?: string;
  linkedin?: string;
  imageUrl?: string;
  isChairman?: boolean;
  order?: number;
}

export interface StaffMember {
  _id: string;
  sn: number;
  name: string;
  designation: string;
}

export interface NewsEvent {
  _id: string;
  title: string;
  summary: string;
  description?: string;
  images?: string[];
  imageUrl?: string;
  date?: string;
}

export interface Download {
  _id: string;
  description: string;
  date: string;
  fileType: string;
  fileUrl: string;
}

export interface GalleryItem {
  _id: string;
  title?: string;
  category: "lab" | "classroom" | "welcome" | "qses" | "others";
  imageUrl: string;
}

export interface CourseCLO {
  clo: string;
  description: string;
  domain: string;
  taxonomy: string;
  plo: string;
}

export interface Course {
  _id: string;
  code: string;
  name: string;
  creditHours: number;
  semester: number;
  type: string;
  clos: CourseCLO[];
}

export interface PEO {
  _id: string;
  id: string;
  title: string;
  description: string;
}

export interface PLO {
  _id: string;
  id: string;
  attribute: string;
  description: string;
}

export interface VisionMission {
  vision: string;
  mission: string[];
  values: { title: string; description: string }[];
}

export interface SiteSettings {
  email: string;
  phone: string;
  phone2?: string;
  address: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  mapEmbed?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}