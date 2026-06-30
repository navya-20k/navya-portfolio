export interface Education {
  degree: string;
  school: string;
  period: string;
  detail?: string;
}

export const education: Education[] = [
  {
    degree: "B.Tech, Computer Science",
    school: "Vignan's Institute of Engineering for Women",
    period: "2023 – 2027",
    detail: "CGPA: 7.92",
  },
  {
    degree: "Intermediate",
    school: "Narayana Junior College",
    period: "2023",
  },
  {
    degree: "ICSE",
    school: "De Paul School",
    period: "2021",
  },
];
