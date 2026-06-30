export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { name: "Full Stack Development – Java", issuer: "Datavalley" },
  { name: "Python Data Analysis", issuer: "Rice University" },
  { name: "Python Essentials", issuer: "ULSA" },
  { name: "Software Testing (Elite)", issuer: "NPTEL" },
  { name: "Java Learning Explorer Skill Badge", issuer: "Oracle" },
];

export const achievements: string[] = [
  "College-level Paper Presentation Winner",
  "Oracle Java Learning Explorer Skill Badge",
  "NPTEL Elite Certification – Software Testing",
];
