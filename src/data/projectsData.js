import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A fully responsive e-commerce platform with product listings, cart functionality, and a seamless checkout experience.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    gradient: "from-brand-blue to-brand-purple",
    color: "brand-blue",
    features: [
      "User authentication & authorization",
      "Product catalog with search & filters",
      "Shopping cart & wishlist",
      "Secure payment integration",
    ],
    live: "https://example.com",
    github: "https://github.com",
    image: "EC",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "Real-time weather dashboard with 5-day forecasts, interactive maps, and location-based weather data visualization.",
    tech: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    gradient: "from-brand-orange to-brand-yellow",
    color: "brand-orange",
    features: [
      "Real-time weather data",
      "5-day forecast charts",
      "Geolocation support",
      "Search by city name",
    ],
    live: "https://example.com",
    github: "https://github.com",
    image: "WD",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A collaborative task management application with drag-and-drop boards, real-time updates, and team workspaces.",
    tech: ["React", "Express", "Socket.io", "PostgreSQL", "Tailwind CSS"],
    gradient: "from-brand-pink to-brand-purple",
    color: "brand-pink",
    features: [
      "Drag-and-drop Kanban boards",
      "Real-time collaboration",
      "Task assignments & deadlines",
      "Activity logs & notifications",
    ],
    live: "https://example.com",
    github: "https://github.com",
    image: "TM",
  },
];

export default projectsData;
