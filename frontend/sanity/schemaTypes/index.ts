import { facultySchema } from "./faculty";
import { staffSchema } from "./staff";
import { eventSchema } from "./event";
import { downloadSchema } from "./download";
import { galleryItemSchema } from "./gallery";
import { courseSchema } from "./course";
import { peoSchema, ploSchema, visionMissionSchema } from "./obe";
import { siteSettingsSchema } from "./siteSettings";
import { heroSlideSchema } from "./heroSlide";
import { researchItemSchema } from "./research";
import { alumniSchema } from "./alumni";

export const schemaTypes = [
  // Homepage
  heroSlideSchema,

  // People
  facultySchema,
  staffSchema,

  // Content
  eventSchema,
  downloadSchema,
  galleryItemSchema,

  // Community
  researchItemSchema,
  alumniSchema,

  // Academic
  courseSchema,
  peoSchema,
  ploSchema,

  // Singletons
  visionMissionSchema,
  siteSettingsSchema,
];
