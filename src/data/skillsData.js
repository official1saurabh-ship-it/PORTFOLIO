import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { VscJson } from "react-icons/vsc";

export const skillsData = [
  { name: "HTML", icon: FaHtml5, level: 95, color: "brand-orange" },
  { name: "CSS", icon: FaCss3Alt, level: 90, color: "brand-blue" },
  { name: "JavaScript", icon: FaJs, level: 85, color: "brand-yellow" },
  { name: "React", icon: FaReact, level: 82, color: "brand-blue" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 88, color: "brand-blue" },
  { name: "Responsive Design", icon: MdOutlineDesignServices, level: 90, color: "brand-purple" },
  { name: "REST APIs", icon: VscJson, level: 78, color: "brand-green" },
  { name: "Node.js", icon: FaNodeJs, level: 70, color: "brand-green" },
  { name: "Express", icon: SiExpress, level: 68, color: "brand-green" },
  { name: "MongoDB", icon: SiMongodb, level: 65, color: "brand-green" },
  { name: "Git", icon: FaGitAlt, level: 85, color: "brand-orange" },
  { name: "GitHub", icon: FaGithub, level: 85, color: "brand-text" },
];
