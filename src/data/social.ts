import { Github, Linkedin, Code2, type LucideIcon } from "lucide-react";

export interface Social {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socials: Social[] = [
  { name: "GitHub", url: "https://github.com/", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com/", icon: Linkedin },
  { name: "LeetCode", url: "https://leetcode.com/", icon: Code2 },
];
