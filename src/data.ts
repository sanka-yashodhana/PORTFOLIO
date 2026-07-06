import { Project, ServiceItem, EducationItem } from "./types";

export const MARQUEE_GIFS: string[] = [
  "https://i.postimg.cc/g0QNNbGs/Recording2026-07-05042507-ezgif-com-video-to-gif-converter.gif",
  "https://i.postimg.cc/pdJKnNyw/Recording2026-07-05044217edit-ezgif-com-video-to-gif-converter.gif",
  "https://i.postimg.cc/DwqXtVQL/Recording2026-07-05edit-ezgif-com-video-to-gif-converter.gif",
  "https://i.postimg.cc/G2z9bd90/Screen-Recording2026-07-05043536-ezgif-com-video-to-gif-converter.gif",
  "https://i.postimg.cc/G2z9bd90/Screen-Recording2026-07-05043536-ezgif-com-video-to-gif-converter.gif",
  "https://i.postimg.cc/0jGXHXNn/Screenshot-2026-07-05-034437.png",
  "https://i.postimg.cc/YCDnVWtb/Screenshot-2026-07-05-034455.png",
  "https://i.postimg.cc/q7YFtCYK/Screenshot-2026-07-05-034342.png",
  "https://i.postimg.cc/tTdB6dXR/Screen-Recording2026-07-05230905-ezgif-com-video-to-gif-converter.gif",
  "https://i.postimg.cc/tTdB6dXR/Screen-Recording2026-07-05230905-ezgif-com-video-to-gif-converter.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://i.postimg.cc/zvS4JZLn/Screen-Recording2026-07-05230732-ezgif-com-video-to-gif-converter.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
];

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    number: "01",
    name: "Full-Stack Architecture",
    description:
      ".Shipping robust, end-to-end applications with a strong product sense, efficient data flow, and secure execution.",
    tags: ["MERN Stack", "RESTful APIs", "Authentication"],
  },
  {
    id: "s2",
    number: "02",
    name: "High-Performance Frontend",
    description:
      "Crafting modern interfaces that feel highly intentional in spacing, micro-interactions, layout hierarchy, and speed.",
    tags: ["Next.js", "Tailwind CSS", "UI Systems"],
  },
  {
    id: "s3",
    number: "03",
    name: "Interactive UI Labs",
    description:
      "Building custom browser animations, scroll-driven storytelling, and fluid micro-interactions that elevate standard web carousels.",
    tags: ["Swiper.js", "Motion Design", "UX Mechanics"],
  },
  {
    id: "s4",
    number: "04",
    name: "Backend Engineering",
    description:
      "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presenceDeveloping secure, high-performance server-side architectures, custom RESTful endpoints, and structured application logic..",
    tags: ["Node.js", "Express.js", "JWT Authentication"],
  },
  {
    id: "s5",
    number: "05",
    name: "Database & Systems Design",
    description:
      "Designing reliable foundations for data persistence, schema relations, and secure third-party payment integrations.",
    tags: ["MongoDB Atlas", "SQL", "Prisma", "Stripe API"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    number: "01",
    category: "swiper js, javascript, tailwind css",
    name: "Swiper js UI Showcase",
    col1_1:
      "https://i.postimg.cc/tTdrvV10/Screenshot-2026-07-05-015534.png",
    col1_2:
      "https://i.postimg.cc/wj3GxvrL/Screenshot-2026-07-05-015745.png",
    col2: "https://i.postimg.cc/Wpgjj9k9/Screenshot-2026-07-05-015856.png",
    liveUrl: "https://coverflow-swiperjs-ui-showcase.vercel.app/",
    liveUr2: "https://parallax-swiperjs-ui-showcase.vercel.app/",
    liveUr3: "https://autoplay-slider-swiperjs-ui-showcas.vercel.app/",
    detailedDescription:
      "Built with JavaScript, Swiper.js, and Tailwind CSS, this project is a curated collection of high-performance front-end components designed to elevate standard user experiences. It features a 3D Coverflow Deck with immersive depth scaling and real-time shadow effects, a cinematic Parallax & Scale Slider utilizing multi-layered, variable-speed transitions, and an Infinite Marquee with Hover-Lock engineered for stutter-free continuous looping that smoothly pauses on user interaction. Across all three components, the focus is on deep custom Swiper configurations, fluid utility-first responsiveness, and hardware-accelerated micro-interactions that deliver a premium, polished feel.",
  },
  {
    id: "p2",
    number: "02",
    category: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Stripe",
    name: "Novus: Full-Stack MERN eCommerce Platform",
    col1_1:
      "https://i.postimg.cc/N0r9c3wg/Screenshot-2026-07-05-033256.png",
    col1_2:
      "https://i.postimg.cc/3xxmPfwz/Screenshot-2026-07-05-032734.png",
    col2: "https://i.postimg.cc/Gp9Psgwk/Screenshot-2026-07-05-032712.png",
    liveUrl: "https://mern-store-app-kohl.vercel.app/",
    detailedDescription:
      "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Stripe (Deployed via Vercel) a comprehensive, end-to-end web application featuring a mobile-first responsive storefront backed by a robust, secure architecture capable of handling real-world transactions. The platform integrates dynamic product filtering, variation-specific cart logic, a multi-option checkout flow combining Stripe API and Cash on Delivery (COD), and a secure role-based admin dashboard for full CRUD inventory control and order tracking. Built with optimized RESTful APIs and clean state management, it balances seamless client-side user experience with efficient database operations.",
  },
  {
    id: "p3",
    number: "03",
    category: "React.js, Node.js, Express.js, MongoDB Atlas, Tailwind CSS, JWT",
    name: "Full-Stack MERN Notes Application",
    detailedDescription:
      "A secure, responsive personal productivity web application built from scratch to streamline digital note management. The application features robust user authentication via JSON Web Tokens (JWT), full CRUD functionality for dynamic data handling, and an optimized mobile-first UI. Developed with a strong focus on production-ready architecture, the project demonstrates seamless asynchronous operations, cross-origin resource sharing (CORS) management, and fluid state persistence across devices.",
    col1_1:
      "https://i.postimg.cc/0jGXHXNn/Screenshot-2026-07-05-034437.png",
    col1_2:"https://i.postimg.cc/YCDnVWtb/Screenshot-2026-07-05-034455.png",
    col2: "https://i.postimg.cc/q7YFtCYK/Screenshot-2026-07-05-034342.png",
    liveUrl: "https://notes-app-frontend-psi-livid.vercel.app/dashboard",
  },
  {
    id: "p4",
    number: "04",
    category: "HTML, CSS,JavaScript,PHP",
    name: "Hotel Food, Beverage, & Kitchen POS Management System",
    detailedDescription:
      "A comprehensive multi-user web platform designed to streamline restaurant operations by seamlessly connecting customers, cashiers, kitchen staff, delivery riders, and administrators. Developed as a collaborative university project, the system features dedicated role-based dashboards, secure server-side processing, and real-time coordination workflows to handle orders from placement to delivery. The project demonstrates strong core competencies in full-system design, asynchronous state updates, and secure database handling.",
    col1_1:
      "https://i.postimg.cc/9fhT76zq/Screenshot-2026-07-05-231212.png",
    col1_2:"https://i.postimg.cc/26HBg3GW/Screenshot-2026-07-05-231258.png",
    col2: "https://i.postimg.cc/Hx3QH6YK/Screenshot-2026-07-05-231229.png",
    liveUrl: "https://flavour.akaigen.online/",
  },
  {
    id: "p5",
    number: "05",
    category: "Next.js, TypeScript, Tailwind CSS, MongoDB, Axios",
    name: "Next.js Contact Management Application",
    detailedDescription:
      "A high-performance, type-safe contact management system designed for seamless relationship tracking and fluid data manipulation. Built using Next.js for optimized client-server rendering, the application features an intuitive user interface, dynamic search filtering, and robust CRUD functionality. Developed with a strict focus on data integrity and clean code architecture, the project utilizes TypeScript for end-to-end type safety, Tailwind CSS for sleek responsive design, and an optimized API layout for rapid, low-latency database transactions.",
    col1_1:
      "https://i.postimg.cc/SQt5KNRY/Screenshot-2026-07-06-182450.png",
    col1_2:"https://i.postimg.cc/W35ygs7B/Screenshot-2026-07-06-182437.png",
    col2: "https://i.postimg.cc/P58kHvMd/Screenshot-2026-07-06-182417.png",
    liveUrl: "https://contact-management-system-green.vercel.app/",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "e1",
    school: "University of Kelaniya(Faculty of Computing and Technology)",
    degree: "BICT (Hons) in Information and Communication Technology",
    year: "2023-2027",
  },
  {
    id: "e2",
    school: "A/L Technology Stream",
    degree: `Information and Communication Technology - A/ Science for Technology - A/ Engineering Technology - C`, 
    year: "2021",
  },
  {
    id: "e3",
    school: "Mahinda Rajapaksha College Homagama",
    degree: "",
    year: "2011-2021",
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: "🌐 Frontend",
    skills: ["React", "Next.js", "Tailwind", "Axios", "HTML", "CSS"],
  },
  {
    category: "⚙️ Backend & Database",
    skills: ["Node.js", "Express", "MongoDB", "SQL", "Prisma", "RestAPI"],
  },
  {
    category: "💻 Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C"],
  },
  {
    category: "🛠️ Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Vercel", "JWT", "CORS"],
  },
];
