export const siteConfig = {
  name: "Kazi Sourav",
  title: "Frontend Developer",
  tagline: "Building beautiful, performant web experiences with React, Vue & modern frontend tools.",
  email: "khmsourav@gmail.com",
  location: "Bangladesh",
  available: true,
  resumeUrl: "#",
  social: {
    github: "https://github.com/khmsourav",
    linkedin: "https://linkedin.com/in/khmsourav",
    twitter: "https://twitter.com/khmsourav",
  },
};

export const skills = [
  { name: "React.js", category: "framework", level: 80, icon: "⚛️" },
  { name: "Vue.js", category: "framework", level: 75, icon: "💚" },
  { name: "TypeScript", category: "language", level: 80, icon: "🔷" },
  { name: "JavaScript", category: "language", level: 85, icon: "🟡" },
  { name: "HTML5", category: "core", level: 95, icon: "🧱" },
  { name: "CSS3", category: "core", level: 95, icon: "🎨" },
  { name: "Tailwind CSS", category: "styling", level: 90, icon: "🌊" },
  { name: "Shopify Polaris", category: "ecosystem", level: 75, icon: "🛍️" },
  { name: "Git / GitHub", category: "tooling", level: 90, icon: "🐙" },
  { name: "AI Integration", category: "emerging", level: 85, icon: "🤖" },
  { name: "Next.js", category: "framework", level: 80, icon: "▲" },
  { name: "SCSS / Sass", category: "styling", level: 88, icon: "💅" },
];

export const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Software Company",
    period: "2021 – Present",
    type: "Full-time",
    description:
      "Building scalable frontend applications using React.js and Vue.js. Working on Shopify Polaris-based admin interfaces, SaaS dashboards, and modern web products.",
    achievements: [
      "Developed Shopify Polaris app interfaces with complex data tables and form workflows",
      "Built real-time dashboard UIs consuming REST and WebSocket APIs",
      "Integrated AI-powered features (autocomplete, smart suggestions) into frontend applications",
      "Implemented upload systems handling large file batches with progress tracking",
      "Improved core web vitals scores by optimizing bundle size and lazy loading strategies",
    ],
    tech: ["React.js", "Vue.js", "TypeScript", "Shopify Polaris", "Tailwind CSS"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Shopify Polaris Admin App",
    description:
      "A full-featured Shopify admin application built with Polaris design system. Includes product management, order tracking, analytics dashboard, and bulk action workflows.",
    tech: ["React.js", "Shopify Polaris", "TypeScript", "GraphQL"],
    category: "Shopify",
    featured: true,
    color: "#5b47e0",
    icon: "🛍️",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    description:
      "Premium analytics dashboard with real-time data visualization, customizable widgets, role-based access, and dark/light mode. Built for B2B SaaS platforms.",
    tech: ["Vue.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    category: "Dashboard",
    featured: true,
    color: "#06b6d4",
    icon: "📊",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "AI-Powered Chat Interface",
    description:
      "Modern conversational UI with streaming responses, markdown rendering, conversation history, and AI model switching. Inspired by leading AI product interfaces.",
    tech: ["React.js", "Next.js", "OpenAI API", "SCSS"],
    category: "AI",
    featured: true,
    color: "#7c3aed",
    icon: "🤖",
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Smart File Upload System",
    description:
      "Drag-and-drop upload system supporting bulk uploads, progress tracking, image previews, file validation, and S3 integration for enterprise applications.",
    tech: ["React.js", "TypeScript", "AWS S3", "Tailwind CSS"],
    category: "Tool",
    featured: false,
    color: "#10b981",
    icon: "📁",
    github: "#",
    live: "#",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    avatar: "SJ",
    content:
      "Kazi delivered exceptional work on our Shopify admin dashboard. His attention to detail, clean code, and proactive communication made the project a success. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupHub",
    avatar: "MC",
    content:
      "One of the best frontend developers I've worked with. Kazi has a strong grasp of UI/UX principles and always delivers pixel-perfect, responsive interfaces on time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ayesha Rahman",
    role: "Lead Developer",
    company: "DigitalAgency",
    avatar: "AR",
    content:
      "Kazi's expertise in React and TypeScript is impressive. He integrated AI features into our platform seamlessly and his documentation was thorough and professional.",
    rating: 4.5,
  },
];

export const interests = [
  {
    icon: "🏏",
    title: "Cricket",
    description: "Passionate about cricket — love playing and following international matches.",
  },
  {
    icon: "⚽",
    title: "Football",
    description: "Enjoy weekend football sessions and following the beautiful game.",
  },
  {
    icon: "🏸",
    title: "Badminton",
    description: "Regular badminton player — great for focus, reflexes, and staying active.",
  },
  {
    icon: "✈️",
    title: "Traveling",
    description: "Exploring new places, cultures, and perspectives fuels creativity.",
  },
];

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "35+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "99%", label: "On-time Delivery" },
];
