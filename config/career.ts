import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
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

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "ubs",
    position: "Software Development II",
    company: "Semusi Technologies",
    location: "Noida, India",
    startDate: new Date("2021-08-01"),
    endDate: "Present",
 description: [
      "Developing and maintaining a real-time campaign automation and analytics platform to enhance user engagement and ROI.",
      "Building scalable APIs for high-concurrency use cases across IoT and mobile platforms.",
      "Integrating enterprise-grade SSO systems such as LDAP and OKTA using SAML 2.0 for secure access.",
      "Creating a dynamic SQL query builder to support customizable analytics dashboards.",
      "Optimizing backend performance using Redis caching and advanced PostgreSQL techniques.",
    ],
    achievements: [
      "Successfully reduced API response times by 35% through Redis-based caching and query optimization.",
      "Engineered a scalable backend that supports 100K+ daily users for real-time data ingestion and delivery.",
      "Led the development of a dynamic SQL builder that powers real-time, user-defined analytics dashboards.",
      "Enabled secure cross-platform login by integrating SSO using LDAP and OKTA (SAML 2.0).",
      "Improved campaign performance tracking by designing an event-driven analytics system for user behavior.",
    ],
    skills: ["Node.js", "Typescript", "PostgreSQL", "Redis", "Express.js", "SSO (LDAP, OKTA)", "SAML 2.0"],
    companyUrl: "https://appice.ai/appice-about-us/",
    logo: "/semusi-tech-logo.jpeg",
  }
];
