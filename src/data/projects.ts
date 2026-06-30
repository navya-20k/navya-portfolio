export interface Project {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    name: "ATM Management System",
    description:
      "A secure ATM management application supporting deposits, withdrawals, transaction history, and PIN authentication with Twilio OTP verification.",
    stack: ["Spring Boot", "MySQL", "Twilio"],
    github: "#",
    demo: "#",
  },
  {
    name: "AquaPulse – Preserving Marine Life",
    description:
      "A web-based project focused on monitoring water quality using IoT concepts to support marine ecosystem conservation and reduce data latency through optimized sensor-node integration.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
];
