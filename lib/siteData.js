// Centralized Site Data & Storage Management
// Allows live management via Admin Dashboard with instant reflection on the website.

export const INITIAL_PROFILE = {
  name: "Gamal Ahmed",
  roleTitle: "Web Developer & Ui/Ux Designer",
  subtitle: "Full Stack Developer",
  shortBio:
    "I'm passionate about modern web technologies and creating fast, seamless, and advanced web applications for a superior user experience.",
  fullBio: [
    "Hello! I'm Gamal Ahmed, a dedicated Full Stack Developer with over 3 years of experience in building modern, scalable, and user-friendly web applications.",
    "I started my journey with front-end development, mastering HTML, CSS, JavaScript, and React. With time, I expanded my expertise to back-end technologies such as Node.js, Express.js, and MongoDB, which enabled me to build complete, end-to-end solutions that deliver real value to users.",
    "I'm passionate about writing clean, maintainable code and crafting seamless digital experiences. My goal is to develop applications that are fast, secure, easy to use, and optimized for performance."
  ],
  yearsExperience: "3+",
  projectsCompleted: "20+",
  clientsSatisfied: "100%",
  email: "gamal.ahmed.dev@gmail.com",
  phone: "+20 128 564 5073",
  whatsapp: "+201285645073",
  location: "Cairo, Egypt",
  avatarImage: "/gamalImage.webp",
  profileImage: "/profile.webp",
  resumeUrl: "/Gamal_Ahmed_Front End_Developer_resume.pdf",
  socials: {
    linkedin: "https://linkedin.com/in/gamal-ahmed--",
    github: "https://github.com/gamal-ahmed",
    twitter: "https://twitter.com/gamalahmed",
    codepen: "https://codepen.io"
  }
};

export const INITIAL_PROJECTS = [
  {
    id: "proj-1",
    title: "VR E-Commerce Platform",
    description:
      "An immersive virtual reality shopping experience where users can browse and interact with products in 3D space. Features real-time product visualization and virtual try-on capabilities.",
    image: "/projectImage/image.webp",
    technologies: ["React", "Three.js", "Node.js", "WebGL"],
    liveLink: "https://vr-store.demo.com",
    githubLink: "https://github.com/gamal-ahmed/vr-ecommerce",
    featured: true,
    category: "VR/3D"
  },
  {
    id: "proj-2",
    title: "AI ChatBot Assistant",
    description:
      "Intelligent conversational agent with natural language understanding, real-time responses, and seamless third-party API integrations.",
    image: "/projectImage/chatBot.webp",
    technologies: ["Next.js", "TypeScript", "Node.js", "Tailwind"],
    liveLink: "https://chatbot.demo.com",
    githubLink: "https://github.com/gamal-ahmed/chat-bot",
    featured: false,
    category: "Web Apps"
  },
  {
    id: "proj-3",
    title: "Pizza Ordering & Delivery App",
    description:
      "Interactive food ordering system with dynamic menu customization, live cart calculation, and responsive checkout workflow.",
    image: "/projectImage/pizza.webp",
    technologies: ["React", "Redux", "Tailwind CSS", "MongoDB"],
    liveLink: "https://pizza-delivery.demo.com",
    githubLink: "https://github.com/gamal-ahmed/pizza-app",
    featured: true,
    category: "Web Apps"
  },
  {
    id: "proj-4",
    title: "JobMatch Career Portal",
    description:
      "Career recruitment platform connecting talented developers with companies. Includes advanced filtering, profile matching, and application tracking.",
    image: "/projectImage/jobMatch.webp",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    liveLink: "https://jobmatch.demo.com",
    githubLink: "https://github.com/gamal-ahmed/job-match",
    featured: false,
    category: "Web Apps"
  },
  {
    id: "proj-5",
    title: "Event Management Dashboard",
    description:
      "Comprehensive administration platform for managing events, ticket reservations, attendees, and real-time revenue analytics.",
    image: "/projectImage/screenshot.webp",
    technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    liveLink: "https://eventy.demo.com",
    githubLink: "https://github.com/gamal-ahmed/event-manager",
    featured: true,
    category: "Web Apps"
  }
];

export const INITIAL_SKILLS = [
  { id: "sk-1", name: "React", level: 95, category: "frontend", experience: "3+ years", color: "from-cyan-500 to-blue-500" },
  { id: "sk-2", name: "Next.js", level: 92, category: "frontend", experience: "2+ years", color: "from-gray-700 to-gray-900" },
  { id: "sk-3", name: "TypeScript", level: 88, category: "frontend", experience: "3 years", color: "from-blue-600 to-indigo-700" },
  { id: "sk-4", name: "JavaScript (ES6+)", level: 94, category: "frontend", experience: "4+ years", color: "from-yellow-500 to-amber-600" },
  { id: "sk-5", name: "Tailwind CSS", level: 95, category: "frontend", experience: "3 years", color: "from-teal-500 to-cyan-500" },
  { id: "sk-6", name: "Material UI", level: 90, category: "frontend", experience: "2 years", color: "from-blue-500 to-cyan-600" },
  { id: "sk-7", name: "Node.js", level: 86, category: "backend", experience: "2+ years", color: "from-green-500 to-emerald-600" },
  { id: "sk-8", name: "Express.js", level: 88, category: "backend", experience: "2+ years", color: "from-gray-600 to-gray-800" },
  { id: "sk-9", name: "MongoDB", level: 84, category: "backend", experience: "2+ years", color: "from-green-600 to-emerald-700" },
  { id: "sk-10", name: "Git & GitHub", level: 92, category: "tools", experience: "4 years", color: "from-orange-500 to-red-600" },
  { id: "sk-11", name: "Figma (UI/UX)", level: 85, category: "tools", experience: "2 years", color: "from-purple-500 to-pink-500" },
  { id: "sk-12", name: "Three.js / WebGL", level: 75, category: "frontend", experience: "1.5 years", color: "from-purple-600 to-blue-600" }
];

export const INITIAL_SERVICES = [
  {
    id: "srv-1",
    title: "Web Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies (Next.js, React, Node.js) for optimal performance and user experience.",
    features: [
      "Custom React & Next.js Applications",
      "Progressive Web Apps (PWA)",
      "High-Performance API Integrations",
      "E-commerce & Custom CMS Solutions",
      "SEO & Mobile-First Optimization"
    ],
    pricing: { basic: "$500+", standard: "$1,200+", premium: "$2,500+" }
  },
  {
    id: "srv-2",
    title: "UI / UX Design",
    description:
      "Intuitive, engaging user interfaces designed in Figma with comprehensive design systems, high-fidelity prototypes, and sleek modern aesthetics.",
    features: [
      "User Journey & Wireframing",
      "Interactive High-Fidelity Prototypes",
      "Design Systems & Component Libraries",
      "Design-to-Code Implementation"
    ],
    pricing: { basic: "$300+", standard: "$700+", premium: "$1,500+" }
  },
  {
    id: "srv-3",
    title: "Full-Stack & API Architecture",
    description:
      "End-to-end web applications with secure REST/GraphQL APIs, database modeling, authentication systems, and cloud deployment.",
    features: [
      "RESTful API & Database Architecture",
      "JWT & Secure Authentication",
      "MongoDB & Cloud Database Modeling",
      "Vercel / Cloud Deployment & CI/CD"
    ],
    pricing: { basic: "$600+", standard: "$1,500+", premium: "$3,000+" }
  }
];

export const STORAGE_KEYS = {
  PROFILE: "gamal_site_profile",
  PROJECTS: "gamal_site_projects",
  SKILLS: "gamal_site_skills",
  SERVICES: "gamal_site_services",
  APPOINTMENTS: "gamal_site_appointments",
  MESSAGES: "gamal_site_messages",
  AUTH: "gamal_site_auth"
};

// Helper to safely access localStorage in Next.js SSR/Client
export const getStoredItem = (key, fallback) => {
  if (typeof window === "undefined") return fallback;
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.error(`Error reading ${key} from localStorage:`, e);
    return fallback;
  }
};

export const setStoredItem = (key, value) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event("siteDataUpdated"));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage:`, e);
  }
};

