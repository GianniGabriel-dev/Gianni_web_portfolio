import {
  SiHtml5,
  SiCss,
  SiTypescript,
  SiJavascript,
  SiGo,
  SiPython,
  SiReact,
  SiTanstack,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiPrisma,
  SiTailwindcss,
  SiMysql,
  SiGithub,
  SiCloudinary,
  SiLinux,
  SiRender,
  SiVercel,
} from "@icons-pack/react-simple-icons";
import { awsIcon } from "../assets/awsIcon";

export const stack = [
  {
    name: "HTML5",
    icon: SiHtml5,
    type: "frontend",
  },
  {
    name: "CSS",
    icon: SiCss,
    type: "frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    type: ["frontend", "backend"],
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    type: ["frontend", "backend"],
  },
  {
    name: "Go",
    icon: SiGo,
    type: "backend",
  },
  {
    name: "Python",
    icon: SiPython,
    type: "backend",
  },
  {
    name: "React",
    icon: SiReact,
    type: "frontend",
  },
  {
    name: "TanStack",
    icon: SiTanstack,
    type: "frontend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    type: "frontend",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    type: "backend",
  },
  {
    name: "Express",
    icon: SiExpress,
    type: "backend",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    type: "database",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    type: "database",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    type: "database",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    type: "frontend",
  },
  {
    name: "Git",
    icon: SiGit,
    type: "tools",
  },
  {
    name: "Docker",
    icon: SiDocker,
    type: "devops",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    type: "tools",
  },
  {
    name: "Cloudinary",
    icon: SiCloudinary,
    type: "tools",
  },
  {
    name: "AWS",
    icon: awsIcon,
    type: "devops",
  },
  {
    name: "Linux",
    icon: SiLinux,
    type: "devops",
  },
  {
    name: "Render",
    icon: SiRender,
    type: "devops",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    type: "devops",
  }
];
