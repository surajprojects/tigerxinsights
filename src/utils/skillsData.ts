import type { JSX } from "react";
import ToolIcon from "../components/icons/Tool";
import CodeIcon from "../components/icons/Code";
import RocketIcon from "../components/icons/Rocket";
import DatabaseIcon from "../components/icons/Database";
import type { SkillCardTypeList } from "../components/cards/SkillCard";

export const skillsDataIcons: JSX.Element[] = [
  CodeIcon(),
  DatabaseIcon(),
  RocketIcon(),
  ToolIcon(),
];

export const skillsData: SkillCardTypeList = [
  {
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    primaryColor: "#8040ed",
    secondaryColor: "#a57aee",
  },
  {
    title: "Backend Development",
    description: "Node.js, Prisma, PostgreSQL, tRPC",
    primaryColor: "#4388f7",
    secondaryColor: "#6fa4f9",
  },
  {
    title: "DevOps & Deployment",
    description: "Docker, AWS EC2, CI/CD, GitHub Workflows",
    primaryColor: "#ab5af8",
    secondaryColor: "#be7ffc",
  },
  {
    title: "Tools & Practices",
    description: "TurboRepo, Hoppscotch, VS Code, System Design",
    primaryColor: "#14bc83",
    secondaryColor: "#30d097",
  },
];
