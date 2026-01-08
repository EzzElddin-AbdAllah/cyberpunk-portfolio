import {
  ContactInfo,
  Course,
  Education,
  Experience,
  Project,
  SkillCategory,
} from "@/types";

export const CONTACT_INFO: ContactInfo = {
  phone: "+201119803181",
  email: "ezzelddinabdallah@hotmail.com",
  location: "Maadi, Cairo, Egypt",
  github: "https://github.com/EzzElddin-AbdAllah",
  linkedin: "https://linkedin.com/in/ezzelddin-abdallah-231050170",
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend Core",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "State & Performance",
    skills: [
      "Zustand",
      "React Query",
      "GraphQL / Apollo",
      "SEO",
      "Core Web Vitals",
      "Accessibility (A11y)",
      "IndexedDB (Dexie.js)",
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      "Node.js",
      "Express.js",
      "WebSockets",
      "Prisma / TypeORM",
      "MongoDB",
      "MySQL",
      "Supabase",
    ],
  },
  {
    category: "Engineering Tools",
    skills: [
      "Git / GitHub",
      "Playwright",
      "Docker",
      "Vite",
      "Turborepo",
      "Unit Testing",
      "CI/CD",
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Systel Telecom",
    role: "Front-End Engineer",
    period: "Oct 2024 - Present",
    techStack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Query",
      "WebSockets",
      "IndexedDB (Dexie.js)",
      "Jitsi",
      "Stripe",
      "RAG",
      "Vector Search",
      "Qdrant",
      "Embeddings",
      "LLM",
    ],
    description: [
      "Built a fully responsive Next.js app to connect patients with international doctors and hospitals, featuring multi‑auth (phone OTP, Google, Apple), dynamic listings (infinite scroll, suspense, pagination, virtualization), and online payments (Stripe).",
      "Engineered a robust, real‑time messaging system supporting text, audio, video, images & files and live video meetings (via Jitsi):",
      "  - Integrated a picture-in-picture / modal video‑call system using Jitsi with automated invite-toasts, join-button logic, PiP and modal modes, and draggable/resizable UI.",
      "  - WebSockets for receiving new messages, delivery/read statuses, typing/recording indicators, and dynamic chat room creation.",
      "  - IndexedDB (Dexie.js) for offline-first storage of messages, statuses, media, chat room details, and user data.",
      "  - Custom scroll handling, ordered queueing, unread message counts, and seamless media preview/playback.",
      "Developed role-based dashboards for both doctors and patients:",
      "  - Doctors can manage their profiles, set and update their schedules, and view appointment details with patients.",
      "  - Patients can update personal information, add and manage family members, and track their upcoming and past appointments.",
      "Led advanced frontend performance and SEO optimization, improving Lighthouse results to perfect 100/100 scores across Performance, SEO, Accessibility, and Best Practices. Reduced key rendering metrics to sub-second paint times (FCP & LCP < 1s), eliminated layout instability (CLS 0.00), and significantly lowered main-thread blocking (TBT reduced to low hundreds of milliseconds), delivering a fast, stable, and Core Web Vitals–compliant frontend.",
      "Architected an AI-powered chatbot with an intent-based orchestration layer that dynamically routes user queries between RAG-based vector search (Qdrant + embeddings) and live MongoDB queries with structured filters, then feeds the retrieved data into an LLM to generate coherent, context-aware, and user-friendly responses.",
    ],
  },
  {
    company: "Big Arabian Guild",
    role: "Full-Stack Engineer",
    period: "May 2023 - Oct 2024",
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Figma",
      "Web3",
      "Wagmi",
    ],
    links: [
      { label: "Production", url: "https://bagguild.com/" },
      { label: "DApp", url: "https://dapp.bagguild.com/" },
      {
        label: "Hospital CMS",
        url: "https://hospital-management-app-kappa.vercel.app/",
      },
      {
        label: "Figma Design",
        url: "https://www.figma.com/design/dt0FHgFc4hq9h6J5uc7qqB",
      },
    ],
    description: [
      "Architected and deployed high-performance full-stack applications (bagguild.com, dapp.bagguild.com) with a focus on scalable frontend architecture and complex state management using Next.js and TypeScript.",
      "Led the development of a comprehensive Hospital Management System, transforming intricate Figma designs into accessible, pixel-perfect user interfaces while ensuring robust data flow and sub-second page loads.",
    ],
  },
  {
    company: "BrainWise Inc.",
    role: "Data Scientist / Software Engineer",
    period: "July 2021 - May 2023",
    techStack: ["Python", "Machine Learning", "OCR", "Docker"],
    links: [
      {
        label: "Takka (Play Store)",
        url: "https://play.google.com/store/apps/details?id=takka.me.app",
      },
      {
        label: "Takka (App Store)",
        url: "https://apps.apple.com/eg/app/takka/id1640233224",
      },
    ],
    description: [
      "Designed and implemented a high-performance recommendation system for e-commerce, reducing server execution time by 23.5%.",
      "Developed an automated national ID verification solution using OCR technology, streamlining the onboarding process for financial services.",
      "Contributed to the development of the ‘Takka’ app, an alternative scoring system for Abu Dhabi Bank, published on both Play Store and App Store, reaching 1,000,000 downloads on Google Play Store.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    school: "Faculty of Engineering, Helwan University",
    degree: "Bachelor’s in Computer Engineering",
    period: "2016 - 2021",
  },
];

export const COURSES: Course[] = [
  {
    name: "Mastering Next.js 13, TypeScript",
    url: "https://codewithmosh.com/p/mastering-next-js-13-with-typescript",
  },
  {
    name: "Next.js Projects: Issue Tracker",
    url: "https://codewithmosh.com/p/nextjs-projects-issue-tracker",
  },
  {
    name: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL)",
    url: "https://www.udemy.com/course/nodejs-the-complete-guide",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    url: "https://www.freecodecamp.org/certification/EzzElddin-AbdAllah-Salah/javascript-algorithms-and-data-structures",
  },
  { name: "Advanced CSS: CSS for JS Devs", url: "https://css-for-js.dev/" },
  {
    name: "Data Engineering Nanodegree",
    url: "https://graduation.udacity.com/confirm/6SGCVPKD",
  },
  {
    name: "Advanced Data Analysis Nanodegree",
    url: "https://www.udacity.com/certificate/ZWJYYCKZ",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Threads Clone",
    description:
      "Full-stack social platform mimicking Threads, featuring real-time community engagement and seamless user interaction.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Tailwind CSS"],
    sourceLink: "https://github.com/EzzElddin-AbdAllah/threads",
    liveLink: "https://threads-clone-ezz.vercel.app",
    image: "/threads.png",
  },
  {
    title: "Issue Tracker",
    description:
      "Professional bug tracking system with role-based access control, Google login, and detailed issue management dashboards.",
    techStack: [
      "Next.js",
      "TypeScript",
      "NextAuth.js",
      "Prisma",
      "Tailwind CSS",
    ],
    sourceLink: "https://github.com/EzzElddin-AbdAllah/issue-tracker",
    liveLink: "https://issue-tracker-ezzelddin-abdallahs-projects.vercel.app/",
    image: "/issue-tracker.png",
  },
  {
    title: "Game-Hub",
    description:
      "Dynamic game discovery platform leveraging RAWG API, featuring advanced filtering, sorting, and responsive grid layouts.",
    techStack: [
      "React.js",
      "TypeScript",
      "Vite",
      "Zustand",
      "Chakra UI",
      "React Query",
    ],
    sourceLink: "https://github.com/EzzElddin-AbdAllah/game-hub",
    liveLink: "https://game-hub-ezzelddin-abdallahs-projects.vercel.app",
    image: "/gamehub.png",
  },
  {
    title: "Annotatify",
    description:
      "Specialized image annotation tool for computer vision, built to support OCR and ID verification tasks with React Konva.",
    techStack: ["Next.js", "React Konva", "MUI", "React Query", "React Window"],
    sourceLink: "https://github.com/EzzElddin-AbdAllah/annotatify",
    liveLink: "https://annotatify.vercel.app",
    image: "/annotatify.png",
  },
  {
    title: "Task Management Timer",
    description:
      "Productivity suite combining atomic task unit management with Pomodoro focus timers, built with monorepo architecture.",
    techStack: [
      "Turborepo",
      "Express.js",
      "JWT",
      "Node.js",
      "Docker",
      "MongoDB",
    ],
    sourceLink:
      "https://github.com/EzzElddin-AbdAllah/task-management-app-with-timer",
    image: "/timer.png",
  },
  {
    title: "Cyberpunk Portfolio",
    description:
      "A high-performance, immersive portfolio with hacker aesthetics, custom terminal, and real-time system monitoring.",
    techStack: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Web Audio API"],
    sourceLink: "https://github.com/EzzElddin-AbdAllah/cyberpunk-portfolio.git",
    liveLink: "https://cyberpunk-portfolio-ezz.vercel.app",
    image: "/portfolio.png",
  },
];
