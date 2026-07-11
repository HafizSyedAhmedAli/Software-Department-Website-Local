import {
  Course,
  Download,
  FacultyMember,
  NavItem,
  NewsEvent,
  OBE_Course,
  PEO,
  PLO,
  StaffMember,
  VisionMission,
} from "../lib/types";

// ─── Navigation ────────────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
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
      { label: "Courses", href: "/courses" },
    ],
  },
  { label: "Research", href: "/research" },
  { label: "Alumni", href: "/alumni" },
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
  { label: "Core & Elective Courses", value: 50, icon: "book" },
  { label: "Students Enrolled", value: 700, icon: "users" },
  { label: "Modern Computing Labs", value: 12, icon: "flask" },
  { label: "Faculty Members", value: 20, icon: "graduation-cap" },
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
    order: 3,
  },
  {
    name: "Dr. Imtiaz Ali Halepoto",
    designation: "Associate Professor",
    email: "halepoto@quest.edu.pk",
    facebook: "https://www.facebook.com/imtiaz.halepoto",
    linkedin: "https://www.linkedin.com/in/imtiaz-ali-halepoto-604332122/",
    imageUrl: "/images/faculty/dr_imtiaz.jpeg",
    order: 4,
  },
  {
    name: "Dr. Sajida Parveen",
    designation: "Associate Professor",
    email: "sajidaparveen@quest.edu.pk",
    imageUrl: "/images/faculty/dr_sajida.jpeg",
    order: 5,
  },
  {
    name: "Engr. Fiza Siyal",
    designation: "Assistant Professor",
    email: "engr_fizza2001@quest.edu.pk",
    linkedin: "https://www.linkedin.com/in/engr-fiza-8840ba103/",
    imageUrl: "/images/faculty/dr_fiza.jpg",
    order: 6,
  },
  {
    name: "Dr. Ali Raza Bhangwar",
    designation: "Assistant Professor",
    email: "arbaloch@quest.edu.pk",
    imageUrl: "/images/faculty/dr_aliraza.jpg",
    order: 7,
  },
  {
    name: "Dr. Fayaz Ahmed Memon",
    designation: "Professor",
    email: "engr_fayaz@hotmail.com",
    imageUrl: "/images/faculty/dr_fayazmemeon.jpeg",
    order: 2,
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
    name: "Engr. Mir Muhammad Juno",
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
  {
    name: "Engr. Abdul Qadeer Tunio",
    designation: "Lab Engineer",
    imageUrl: "/images/faculty/engr_abdulqadeer.jpg",
    order: 12,
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
    imageUrl:
      "/images/events/Pakistan Engineering Council (PEC) for our first (Full) Accreditation.png",
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

// ─── OBE: Vision & Mission ──────────────────────────────────────────────────
export const VISION_MISSION: VisionMission = {
  vision:
    "To become a nationally and internationally recognized center of excellence in Software Engineering education, research, and innovation by producing competent professionals who contribute to technological advancement and sustainable development.",
  mission: [
    "Delivering quality engineering education aligned with international academic standards.",
    "Developing competent graduates with strong analytical, technical, and professional skills.",
    "Promoting innovative research that addresses industrial and societal challenges.",
    "Strengthening collaboration with industry, academia, and research organizations.",
    "Encouraging ethical practices, leadership, entrepreneurship, and lifelong learning.",
    "Preparing graduates capable of adapting to emerging technologies and global engineering practices.",
  ],
  values: [
    {
      title: "Industry-Relevant Curriculum",
      description:
        "Curricula are regularly updated to meet national and international industry requirements and emerging technological trends.",
    },
    {
      title: "Experienced Faculty",
      description:
        "Qualified faculty members actively engage in teaching, research, consultancy, and professional development.",
    },
    {
      title: "Modern Computing Facilities",
      description:
        "Students have access to well-equipped computer laboratories, high-speed internet, licensed software tools, and research facilities.",
    },
    {
      title: "Research Opportunities",
      description:
        "Students participate in innovative research projects covering Artificial Intelligence, Machine Learning, Software Quality Assurance, Cloud Computing, Cybersecurity, Data Science, IoT, and other emerging domains.",
    },
    {
      title: "Practical Learning",
      description:
        "The department emphasizes project-based learning, internships, industrial visits, software development projects, and collaborative research.",
    },
    {
      title: "Career Development",
      description:
        "Graduates are prepared for careers in software development, research, entrepreneurship, higher education, and multinational technology organizations.",
    },
  ],
};

// ─── OBE: PEOs ─────────────────────────────────────────────────────────────
export const PEOS_DATA: PEO[] = [
  {
    id: "PEO-1",
    title: "Professional Competence",
    description:
      "Graduates will demonstrate strong technical competence and apply software engineering principles, methods, and tools to design, develop, and maintain reliable software systems in professional environments.",
  },
  {
    id: "PEO-2",
    title: "Technical Leadership",
    description:
      "Graduates will assume leadership roles in software projects, effectively managing teams, resources, and timelines to deliver high-quality software products that meet stakeholder requirements.",
  },
  {
    id: "PEO-3",
    title: "Research & Innovation",
    description:
      "Graduates will engage in research activities, contribute to the advancement of software engineering knowledge, and develop innovative solutions that address emerging technological challenges.",
  },
  {
    id: "PEO-4",
    title: "Professional Ethics",
    description:
      "Graduates will uphold professional and ethical responsibilities, demonstrate respect for intellectual property, data privacy, and contribute positively to society through responsible software practice.",
  },
  {
    id: "PEO-5",
    title: "Lifelong Learning",
    description:
      "Graduates will pursue continuous professional development through postgraduate education, certifications, and self-directed learning to remain current with rapidly evolving software technologies.",
  },
];

// ─── OBE: PLOs ─────────────────────────────────────────────────────────────
export const PLOS_DATA: PLO[] = [
  {
    id: "PLO-1",
    attribute: "Engineering Knowledge",
    description:
      "Apply knowledge of mathematics, natural science, computing fundamentals, and a software engineering specialisation to the solution of complex software engineering problems.",
  },
  {
    id: "PLO-2",
    attribute: "Problem Analysis",
    description:
      "Identify, formulate, research literature, and analyse complex software engineering problems, reaching substantiated conclusions using first principles of mathematics and engineering sciences.",
  },
  {
    id: "PLO-3",
    attribute: "Design / Development of Solutions",
    description:
      "Design solutions for complex software engineering problems and design systems, components, or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.",
  },
  {
    id: "PLO-4",
    attribute: "Investigation",
    description:
      "Conduct investigations of complex problems including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.",
  },
  {
    id: "PLO-5",
    attribute: "Modern Tool Usage",
    description:
      "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modelling, to complex engineering activities, with an understanding of the limitations.",
  },
  {
    id: "PLO-6",
    attribute: "The Engineer and Society",
    description:
      "Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues and the consequent responsibilities relevant to professional engineering practice.",
  },
  {
    id: "PLO-7",
    attribute: "Environment and Sustainability",
    description:
      "Understand and evaluate the sustainability and impact of professional engineering work in the solution of complex engineering problems in societal and environmental contexts.",
  },
  {
    id: "PLO-8",
    attribute: "Ethics",
    description:
      "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.",
  },
  {
    id: "PLO-9",
    attribute: "Individual and Team Work",
    description:
      "Function effectively as an individual, and as a member or leader in diverse teams and in multi-disciplinary settings.",
  },
  {
    id: "PLO-10",
    attribute: "Communication",
    description:
      "Communicate effectively on complex engineering activities with the engineering community and with society at large, by being able to comprehend and write effective reports and design documentation.",
  },
  {
    id: "PLO-11",
    attribute: "Project Management",
    description:
      "Demonstrate knowledge and understanding of engineering management principles and economic decision-making, and apply these to one's own work as a member or leader in a team.",
  },
  {
    id: "PLO-12",
    attribute: "Lifelong Learning",
    description:
      "Recognise the need for, and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change.",
  },
];

// ─── OBE: Courses with CLOs ─────────────────────────────────────────────────
export const COURSES_DATA: OBE_Course[] = [
  {
    code: "SW-101",
    name: "Programming Fundamentals",
    creditHours: 3,
    semester: 1,
    type: "Core",
    clos: [
      {
        clo: "CLO-1",
        description:
          "Understand fundamental programming constructs such as variables, data types, and operators.",
        domain: "Cognitive",
        taxonomy: "C2",
        plo: "PLO-1",
      },
      {
        clo: "CLO-2",
        description:
          "Design and implement programs using control structures, loops, and functions.",
        domain: "Cognitive",
        taxonomy: "C3",
        plo: "PLO-3",
      },
      {
        clo: "CLO-3",
        description:
          "Apply debugging techniques to identify and correct program errors.",
        domain: "Cognitive",
        taxonomy: "C4",
        plo: "PLO-5",
      },
    ],
  },
  {
    code: "SW-102",
    name: "Object-Oriented Programming",
    creditHours: 3,
    semester: 2,
    type: "Core",
    clos: [
      {
        clo: "CLO-1",
        description:
          "Explain the principles of object-oriented programming including encapsulation, inheritance, and polymorphism.",
        domain: "Cognitive",
        taxonomy: "C2",
        plo: "PLO-1",
      },
      {
        clo: "CLO-2",
        description:
          "Design and implement class hierarchies to model real-world problems.",
        domain: "Cognitive",
        taxonomy: "C3",
        plo: "PLO-3",
      },
      {
        clo: "CLO-3",
        description: "Develop applications using OOP design patterns.",
        domain: "Cognitive",
        taxonomy: "C6",
        plo: "PLO-5",
      },
    ],
  },
  {
    code: "SW-201",
    name: "Data Structures & Algorithms",
    creditHours: 3,
    semester: 3,
    type: "Core",
    clos: [
      {
        clo: "CLO-1",
        description:
          "Analyse the time and space complexity of algorithms using Big-O notation.",
        domain: "Cognitive",
        taxonomy: "C4",
        plo: "PLO-2",
      },
      {
        clo: "CLO-2",
        description:
          "Implement fundamental data structures including arrays, linked lists, stacks, queues, and trees.",
        domain: "Cognitive",
        taxonomy: "C3",
        plo: "PLO-1",
      },
      {
        clo: "CLO-3",
        description:
          "Select and apply appropriate algorithms to solve computational problems efficiently.",
        domain: "Cognitive",
        taxonomy: "C5",
        plo: "PLO-3",
      },
    ],
  },
  {
    code: "SW-202",
    name: "Database Systems",
    creditHours: 3,
    semester: 3,
    type: "Core",
    clos: [
      {
        clo: "CLO-1",
        description:
          "Design relational database schemas using ER modelling and normalisation.",
        domain: "Cognitive",
        taxonomy: "C3",
        plo: "PLO-3",
      },
      {
        clo: "CLO-2",
        description:
          "Write complex SQL queries for data retrieval and manipulation.",
        domain: "Cognitive",
        taxonomy: "C3",
        plo: "PLO-1",
      },
      {
        clo: "CLO-3",
        description:
          "Implement database applications with proper transaction management.",
        domain: "Cognitive",
        taxonomy: "C6",
        plo: "PLO-5",
      },
    ],
  },
  {
    code: "SW-301",
    name: "Software Requirements Engineering",
    creditHours: 3,
    semester: 5,
    type: "Core",
    clos: [
      {
        clo: "CLO-1",
        description:
          "Elicit, analyse, and document software requirements using structured techniques.",
        domain: "Cognitive",
        taxonomy: "C4",
        plo: "PLO-2",
      },
      {
        clo: "CLO-2",
        description:
          "Create use case diagrams, user stories, and SRS documents.",
        domain: "Cognitive",
        taxonomy: "C3",
        plo: "PLO-10",
      },
      {
        clo: "CLO-3",
        description:
          "Validate requirements through reviews, walkthroughs, and prototyping.",
        domain: "Cognitive",
        taxonomy: "C5",
        plo: "PLO-4",
      },
    ],
  },
  {
    code: "SW-302",
    name: "Software Design & Architecture",
    creditHours: 3,
    semester: 5,
    type: "Core",
    clos: [
      {
        clo: "CLO-1",
        description:
          "Apply architectural patterns such as MVC, layered, and microservices to system design.",
        domain: "Cognitive",
        taxonomy: "C3",
        plo: "PLO-3",
      },
      {
        clo: "CLO-2",
        description:
          "Create UML design diagrams including class, sequence, and component diagrams.",
        domain: "Cognitive",
        taxonomy: "C3",
        plo: "PLO-10",
      },
      {
        clo: "CLO-3",
        description:
          "Evaluate design alternatives using quality attributes such as cohesion and coupling.",
        domain: "Cognitive",
        taxonomy: "C5",
        plo: "PLO-2",
      },
    ],
  },
  {
    code: "SW-303",
    name: "Software Testing & Quality Assurance",
    creditHours: 3,
    semester: 6,
    type: "Core",
    clos: [
      {
        clo: "CLO-1",
        description:
          "Design test cases using black-box and white-box testing techniques.",
        domain: "Cognitive",
        taxonomy: "C3",
        plo: "PLO-4",
      },
      {
        clo: "CLO-2",
        description:
          "Apply automated testing frameworks and continuous integration tools.",
        domain: "Psychomotor",
        taxonomy: "P3",
        plo: "PLO-5",
      },
      {
        clo: "CLO-3",
        description:
          "Evaluate software quality using metrics and define a quality assurance plan.",
        domain: "Cognitive",
        taxonomy: "C5",
        plo: "PLO-2",
      },
    ],
  },
  {
    code: "SW-401",
    name: "Software Project Management",
    creditHours: 3,
    semester: 7,
    type: "Core",
    clos: [
      {
        clo: "CLO-1",
        description:
          "Apply project management methodologies including Agile and SCRUM to software projects.",
        domain: "Cognitive",
        taxonomy: "C3",
        plo: "PLO-11",
      },
      {
        clo: "CLO-2",
        description:
          "Develop project plans, risk registers, and cost-benefit analyses.",
        domain: "Cognitive",
        taxonomy: "C6",
        plo: "PLO-11",
      },
      {
        clo: "CLO-3",
        description:
          "Demonstrate team leadership and communication skills in a project environment.",
        domain: "Affective",
        taxonomy: "A3",
        plo: "PLO-9",
      },
    ],
  },
  {
    code: "SW-402",
    name: "Final Year Project (FYP)",
    creditHours: 6,
    semester: 8,
    type: "Core",
    clos: [
      {
        clo: "CLO-1",
        description:
          "Define a real-world software problem and produce a comprehensive project proposal.",
        domain: "Cognitive",
        taxonomy: "C5",
        plo: "PLO-2",
      },
      {
        clo: "CLO-2",
        description:
          "Design, implement, and test a fully functional software solution.",
        domain: "Psychomotor",
        taxonomy: "P5",
        plo: "PLO-3",
      },
      {
        clo: "CLO-3",
        description:
          "Present project outcomes effectively through technical reports and oral presentations.",
        domain: "Cognitive",
        taxonomy: "C6",
        plo: "PLO-10",
      },
      {
        clo: "CLO-4",
        description:
          "Reflect on professional, ethical, and societal dimensions of the developed software.",
        domain: "Affective",
        taxonomy: "A4",
        plo: "PLO-8",
      },
    ],
  },
];
