import { ValidSkills } from "./constants";

export interface EducationInterface {
  id: string;
  degree: string;
  company: string;
  location: string;
  score?: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const educations: EducationInterface[] = [
    {
        id: "hacktiv-8",
        degree: "Full stack Javascript Immersive",
        company: "Hacktiv8",
        location: "Jakarta, Indonesia",
        score: "Score: 99/100",
        startDate: new Date("2025-11-03"),
        endDate: new Date("2026-04-02"),
        description: [
            "Completed an intensive full-stack software engineering bootcamp focused on modern web development, backend systems, databases, and collaborative project development.",
        ],
        achievements: [
            "Helped reduce forecasting errors to 7.5% through the implementation of linear regression.",
            "Helped company reduce overstocking by 24% through the implementation of Q model.",
        ],
        skills: ["Javascript", "React", "Node.js"],
        logo: "/education/hacktiv8.png",
    },
    {
        id: "itb",
        degree: "Industrial Engineer",
        company: "ITB",
        location: "Bandung, Indonesia",
        score: "GPA: 3.25/4.00",
        startDate: new Date("2019-08-05"),
        endDate: new Date("2023-09-26"),
        description: [
            "Built a strong foundation in systems thinking, analytics, process optimization, and problem-solving through engineering coursework and research projects.",
        ],
        achievements: [
            "Helped company reduce measurement errors to 3% through the implementation of the IoT system.",
            "Helped company calculate production system efficiency which was found to be around 85%."
        ],
        skills: ["Statistics", "Problem Solving", "System Design"],
        logo: "/education/itb.webp",
    },
];
