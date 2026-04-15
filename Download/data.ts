import { Download, FacultyMember, NavItem, NewsEvent, StaffMember } from "../animations/lib/types";

// ─── Navigation ────────────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  {
    label: "People",
    href: "#",
    children: [
      { label: "Faculty", href: "/faculty" },
      { label: "Staff", href: "/staff" },
    ],
  },
  {
    label: "OBE",
    href: "#",
    children: [
      { label: "Vision & Mission", href: "/obe/vision" },
      { label: "PEOs", href: "/obe/peos" },
      { label: "PLOs", href: "/obe/plos" },
      { label: "CLOs", href: "/obe/clos" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Downloads", href: "/downloads" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

// ─── Contact Info ──────────────────────────────────────────────────────────
export const CONTACT = {
  email: "chairman.swe@quest.edu.pk",
  phone: "0244-9370357",
  phone2: "0244-9370381 (Ext.3244/2640)",
  address:
    "Quaid-e-Awam University of Engineering, Science & Technology, Nawabshah, Sindh, Pakistan",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.214757708701!2d68.3889065!3d26.2318164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394bb36f65c91029%3A0x2709fed1ec335c17!2sDepartment%20of%20Computer%20Systems%20Engineering%2CQUEST%20Nawabshah!5e0!3m2!1sen!2sbd!4v1464270878470",
  facebook: "https://www.facebook.com/softwaredepartmentquest/",
  twitter: "https://twitter.com/QUEST_SWE",
  linkedin:
    "https://www.linkedin.com/in/software-engineering-quest-nawabshah-0b87a7245",
};

// ─── Stats ─────────────────────────────────────────────────────────────────
export const STATS = [
  { label: "Subjects", value: 42, icon: "book" },
  { label: "Students", value: 500, icon: "users" },
  { label: "Modern Labs", value: 10, icon: "flask" },
  { label: "Faculty Members", value: 15, icon: "graduation-cap" },
];

// ─── Faculty (static fallback — will be replaced by Sanity data) ──────────
export const FACULTY_DATA: FacultyMember[] = [
  {
    name: "Prof. Dr. Pardeep Kumar",
    designation: "Chairman",
    email: "pardeep.kumar@quest.edu.pk",
    facebook: "https://www.facebook.com/kumar.pardeep",
    linkedin: "https://www.linkedin.com/in/drpkumar/",
    imageUrl: "/images/faculty/chairman.jpg",
    isChairman: true,
    order: 1,
  },
  {
    name: "Dr. Rafia Naz Memon",
    designation: "Associate Professor",
    imageUrl: "/images/faculty/dr_rafia.jpg",
    order: 2,
  },
  {
    name: "Dr. Imtiaz Ali Halepoto",
    designation: "Associate Professor",
    email: "halepoto@quest.edu.pk",
    facebook: "https://www.facebook.com/imtiaz.halepoto",
    linkedin: "https://www.linkedin.com/in/imtiaz-ali-halepoto-604332122/",
    imageUrl: "/images/faculty/dr_imtiaz.jpeg",
    order: 3,
  },
  {
    name: "Dr. Sajida Parveen",
    designation: "Associate Professor",
    email: "sajidaparveen@quest.edu.pk",
    imageUrl: "/images/faculty/dr_sajida.jpeg",
    order: 4,
  },
  {
    name: "Engr. Fiza Siyal",
    designation: "Assistant Professor",
    email: "engr_fizza2001@quest.edu.pk",
    linkedin: "https://www.linkedin.com/in/engr-fiza-8840ba103/",
    imageUrl: "/images/faculty/dr_fiza.jpg",
    order: 5,
  },
  {
    name: "Dr. Ali Raza Bhangwar",
    designation: "Assistant Professor",
    email: "arbaloch@quest.edu.pk",
    imageUrl: "/images/faculty/dr_aliraza.jpg",
    order: 6,
  },
  {
    name: "Dr. Fayaz Ahmed Memon",
    designation: "Assistant Professor",
    email: "engr_fayaz@hotmail.com",
    imageUrl: "/images/faculty/dr_fayazmemeon.jpeg",
    order: 7,
  },
  {
    name: "Engr. Muhammad Aamir Bhutto",
    designation: "Assistant Professor",
    email: "aamirbhutto@quest.edu.pk",
    facebook: "https://www.facebook.com/engrmaamir.bhutto",
    imageUrl: "/images/faculty/engr_aamirbhutto.jpeg",
    order: 8,
  },
  {
    name: "Engr. Fozia Noureen Shaikh",
    designation: "Assistant Professor",
    email: "noureen-faster@hotmail.com",
    imageUrl: "/images/faculty/engr_fozia.jpg",
    order: 9,
  },
  {
    name: "Engr. Mir Mohammad Jono",
    designation: "Lecturer",
    email: "mir.juno@quest.edu.pk",
    imageUrl: "/images/faculty/mir_Mohammad.png",
    order: 10,
  },
  {
    name: "Mr. Zuhaib Ahmed Dahri",
    designation: "Lecturer",
    email: "zohaibquest22@gmail.com",
    imageUrl: "/images/faculty/mr.zohaib.png",
    order: 11,
  },
];

// ─── Staff ─────────────────────────────────────────────────────────────────
export const STAFF_DATA: StaffMember[] = [
  { sn: 1, name: "Mr. Naveed Ali Dehraj", designation: "Superintendent" },
  { sn: 2, name: "Ms. Farhana Bilqees Shaikh", designation: "Superintendent" },
  { sn: 3, name: "Ms. Murk Memon", designation: "Clerk" },
];

// ─── Events / News ─────────────────────────────────────────────────────────
export const EVENTS_DATA: NewsEvent[] = [
  {
    title: "(PEC) Accreditation Visit ⏳",
    summary:
      "We are thrilled to welcome the Pakistan Engineering Council (PEC) for our first Full Accreditation visit on October 10-11! This is a pivotal moment for the Software Engineering Department.",
    imageUrl: "/images/events/Pakistan Engineering Council (PEC) for our first (Full) Accreditation.png",
    date: "2024-10-10",
  },
  {
    title: "FYP-II of Founding SE Batch (2020)",
    summary:
      "Celebrating the Final Year Projects of our First Founding Software Engineering Batch (2020)! From innovative solutions to poster presentations, they've set the bar high.",
    imageUrl: "/images/Gallery/20-fyp.jpg",
    date: "2024-06-01",
  },
  {
    title: "Chairman Elected as PEC Member",
    summary:
      "Congratulations to the respected Chairman of the Software Engineering Department for being elected as a Member of the PEC Governing Body! Proudly receiving the highest number of votes across Pakistan.",
    imageUrl: "/images/events/PEC-elect.jpg",
    date: "2024-04-01",
  },
  {
    title: "Farewell Event for 20SW Batch",
    summary:
      "Celebrating the remarkable journey of our pioneering 20SW Batch, the first to graduate from the Software Engineering department! A heartfelt farewell organised by their juniors.",
    imageUrl: "/images/events/20-farewell.jpg",
    date: "2024-05-15",
  },
  {
    title: "Admissions Open for ME & PhD",
    summary:
      "Exciting news! The Department of Software Engineering at QUEST Nawabshah is now accepting applications for ME and PhD programs. Forms available from August 8th, 2024.",
    imageUrl: "/images/events/me-admission.jpg",
    date: "2024-08-08",
  },
  {
    title: "iCreativez Technologies Opening Ceremony",
    summary:
      "iCreativez Technologies has officially opened its branch at the Software Technology Park (STP) in the Software Engineering Department of QUEST Nawabshah! A significant milestone.",
    imageUrl: "/images/events/icreatives1.jpg",
    date: "2024-03-01",
  },
];

// ─── Downloads ─────────────────────────────────────────────────────────────
export const DOWNLOADS_DATA: Download[] = [
  {
    description: "OBE Results Template",
    date: "16-03-2018",
    fileType: "XLSX",
    fileUrl: "/downloads/OBE Results Template.xlsx",
  },
  {
    description: "CQI Feedback Form",
    date: "01-01-2019",
    fileType: "DOC",
    fileUrl: "/downloads/CQI_Feedback.doc",
  },
  {
    description: "FYP Guidelines",
    date: "15-09-2020",
    fileType: "PDF",
    fileUrl: "/downloads/SWE - F16SW FYP Guidelines.pdf",
  },
  {
    description: "QUEST Online Classes Policy",
    date: "31-03-2021",
    fileType: "PDF",
    fileUrl: "/downloads/MUET - Online Classes Policy.pdf",
  },
  {
    description: "QUEST Online Examination Policy",
    date: "31-03-2021",
    fileType: "PDF",
    fileUrl: "/downloads/MUET - Online Examination Policy.pdf",
  },
  {
    description: "SWE Quality of Question Paper",
    date: "17-03-2022",
    fileType: "DOCX",
    fileUrl: "/downloads/SWE - Quality of Question Paper.docx",
  },
  {
    description: "OBE Final Semester Question Paper",
    date: "17-03-2022",
    fileType: "DOCX",
    fileUrl: "/downloads/OBE Final semester question paper.docx",
  },
  {
    description: "OBE Mid Semester Question Paper",
    date: "17-03-2022",
    fileType: "DOCX",
    fileUrl: "/downloads/OBE Mid semester question paper.docx",
  },
  {
    description: "SWE Course Review Report",
    date: "17-03-2022",
    fileType: "DOCX",
    fileUrl: "/downloads/SWE - Course_Review_Report.docx",
  },
  {
    description: "SWE Quality Assessment Proforma",
    date: "17-03-2022",
    fileType: "DOCX",
    fileUrl: "/downloads/SWE - Quality Assessment Proforma_.docx",
  },
  {
    description: "SWE Lab Rubrics (Revised)",
    date: "17-03-2022",
    fileType: "DOCX",
    fileUrl: "/downloads/SWE- Lab Rubrics (Revised).docx",
  },
  {
    description: "SWE Internship Process",
    date: "17-03-2022",
    fileType: "DOCX",
    fileUrl: "/downloads/SWE-Internship Process.docx",
  },
  {
    description: "Attendance Sheet Template for Summer Classes 2022",
    date: "13-06-2022",
    fileType: "XLSX",
    fileUrl: "/downloads/Attendance_Template.xlsx",
  },
];

// ─── Gallery Categories ─────────────────────────────────────────────────────
export const GALLERY_CATEGORIES = [
  { key: "all", label: "All" },
  { key: "lab", label: "Lab" },
  { key: "classroom", label: "Class Room" },
  { key: "welcome", label: "Welcome Events" },
  { key: "qses", label: "QSES Events" },
  { key: "others", label: "Others" },
] as const;