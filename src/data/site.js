export const heroPills = [
  "MERN Stack",
  "Real-Time Apps",
  "3D Interfaces",
  "JWT Auth",
];

export const aboutCards = [
  {
    title: "Full Stack Delivery",
    description:
      "From polished frontends to scalable APIs, I build complete products that feel fast, modern, and production-ready.",
  },
  {
    title: "Design Meets Engineering",
    description:
      "I care about motion, hierarchy, and clarity so the experience feels premium instead of just functional.",
  },
  {
    title: "Rapid Collaboration",
    description:
      "Hackathons, startup work, and team builds shaped how I move quickly, communicate clearly, and ship under pressure.",
  },
];

export const skills = [
  {
    title: "Frontend Craft",
    value: 92,
    items: ["React", "JavaScript", "Tailwind CSS", "GSAP", "Three.js"],
  },
  {
    title: "Backend Systems",
    value: 88,
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.IO"],
  },
  {
    title: "Data & Delivery",
    value: 84,
    items: ["MongoDB", "MySQL", "Git", "GitHub", "Responsive Design"],
  },
];

export const projects = [
  {
    title: "Real-Time WebChat Application",
    subtitle: "Messaging platform with secure auth and live interactions",
    description:
      "Built a real-time MERN chat app with JWT authentication, instant messaging, user presence tracking, and scalable backend flows with Socket.IO and MongoDB.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "JWT"],
    links: [
      {
        label: "Live Demo",
        href: "https://web-chat-frontend-azure.vercel.app",
        external: true,
      },
      {
        label: "Source Code",
        href: "https://github.com/Yashwant1107/WebChat-frontend",
        external: true,
      },
    ],
    image: "/images/webchat.webp",
    imageHref: "https://web-chat-frontend-azure.vercel.app",
    preview: "Realtime | Presence | Conversations",
    color:
      "from-violet-500/30 via-fuchsia-500/10 to-cyan-400/10",
  },
  {
    title: "3D Interactive Scroll Animation Website",
    subtitle: "Immersive storytelling with motion-driven 3D scenes",
    description:
      "Designed a scroll-driven 3D experience using React Three Fiber and GSAP ScrollTrigger, optimized GLTF assets, and tuned lighting, camera, and tone mapping for a richer visual feel.",
    stack: ["React Three Fiber", "GSAP", "GLTF", "Lighting", "ScrollTrigger"],
    links: [
      {
        label: "Live Demo",
        href: "https://react-dog-one.vercel.app/",
        external: true,
      },
      {
        label: "Source Code",
        href: "https://github.com/Yashwant1107/react-dog",
        external: true,
      },
    ],
    image: "/images/project-3d.png",
    imageHref: "https://react-dog-one.vercel.app/",
    preview: "3D | Scroll | Motion",
    color:
      "from-cyan-400/25 via-violet-500/10 to-fuchsia-500/20",
  },
  {
    title: "E-Commerce Web Application",
    subtitle: "Responsive storefront with secure flows and API-driven UX",
    description:
      "Built an e-commerce app with React, Node.js, Express.js, and MongoDB/MySQL, covering product APIs, authentication, CRUD operations, payment-flow logic, and mobile-first interface polish.",
    stack: ["React", "Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
    links: [
      { label: "Case Study", href: "#contact" },
      { label: "Let's Talk", href: "#contact" },
    ],
    preview: "Commerce | Cart | Payments",
    color:
      "from-fuchsia-500/30 via-violet-500/15 to-cyan-400/10",
  },
];

export const contactCards = [
  {
    label: "Email",
    value: "yashwantverma1107@gmail.com",
    href: "mailto:yashwantverma1107@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 8817351941",
    href: "tel:+918817351941",
  },
  {
    label: "Based In",
    value: "India",
    href: "#home",
  },
];
