import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "gaya-green",
    position: "Automation Engineering Intern",
    company: "PT Gaya Green",
    location: "Cianjur, Indonesia",
    startDate: new Date("2023-02-10"),
    endDate: new Date("2023-09-08"),
    description: [
      "Developed an Internet of Things based measurement system using Arduino Nano 33 IoT to measure weight and moisture level of the planting media soil.",
      "Conducted research to gain insight into the efficiency of the company production system based on the collected data.",
      "Created a dashboard using Arduino IoT Cloud to help visualize data that are collected.",
    ],
    achievements: [
      "Helped company reduce measurement errors to 3% through the implementation of the IoT system.",
      "Helped company calculate production system efficiency which was found to be around 85%."
    ],
    skills: ["Statistics", "Arduino", "IoT", "Microsoft Excel", "PowerPoint"],
    logo: "/experience/gaya-green.jpg",
  },
  {
    id: "japfa",
    position: "Production Planning Control Intern",
    company: "Japfa",
    location: "Bogor, Indonesia",
    startDate: new Date("2022-06-01"),
    endDate: new Date("2022-07-01"),
    description: [
      "Conducted research to determine the optimal ordering point and ordering amount to supplier using Q model to cover the demands for supporting material.",
      "Created daily reports using Microsoft Excel to monitor the stock level of the company storage.",
      "Conducted research to improve forecasting process using linear regression to estimate the demand for support material.",
    ],
    achievements: [
      "Helped reduce forecasting errors to 7.5% through the implementation of linear regression.",
      "Helped company reduce overstocking by 24% through the implementation of Q model.",
    ],
    skills: ["Statistics", "Data Cleaning", "Microsoft Excel", "PowerPoint"],
    logo: "/experience/japfa.png",
  },
];
