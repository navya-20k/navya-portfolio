import {
  Code2,
  Braces,
  Terminal,
  FileCode,
  Palette,
  Globe,
  Server,
  Leaf,
  Database,
  Cylinder,
  TableProperties,
  Github,
  CodeXml,
  MessagesSquare,
  Crown,
  Users,
  Presentation,
  type LucideIcon,
} from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: Code2 },
      { name: "Python", icon: Braces },
      { name: "C", icon: Terminal },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: FileCode },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "React", icon: Globe },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Spring Boot", icon: Leaf },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "MongoDB", icon: Cylinder },
      { name: "SQL", icon: TableProperties },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "GitHub", icon: Github },
      { name: "VS Code", icon: CodeXml },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", icon: MessagesSquare },
      { name: "Leadership", icon: Crown },
      { name: "Collaboration", icon: Users },
      { name: "Presentation", icon: Presentation },
    ],
  },
];
