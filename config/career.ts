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
    id: "appice",
    position: "Software Engineer",
    company: "AppICE (Semusi Technologies)",
    location: "Noida, India",
    startDate: new Date("2021-08-01"),
    endDate: "Present",
    description: [
      "Developed a real-time campaign automation and analytics platform to improve user engagement and ROI for IoT and mobile platforms.",
      "Built scalable APIs using Node.js and PostgreSQL to support high-concurrency data ingestion and delivery.",
      "Integrated secure enterprise SSO solutions using LDAP, OKTA, and SAML 2.0 across platforms.",
      "Implemented queue-based microservices using Redis and RabbitMQ for ingesting CSV-based user, behavioral, and transactional data.",
      "Designed a dynamic SQL query builder engine using PostgreSQL JSONB and TypeScript for drill-down analytics dashboards.",
      "Integrated WhatsApp Cloud API webhooks to track message events and trigger workflow updates in real time.",
      "Improved backend performance through intelligent Redis caching and PostgreSQL query optimization."
    ],
    achievements: [
      "Reduced API response time by 35% via Redis caching and optimized PostgreSQL queries.",
      "Engineered a backend pipeline capable of handling over 100K daily users and real-time events.",
      "Led the development of a customizable SQL query builder enabling on-the-fly analytics for marketing teams.",
      "Enhanced campaign engagement tracking with event-driven funnel design for real-time insights.",
      "Delivered secure, seamless authentication across platforms by integrating enterprise-grade SSO systems."
    ],
    skills: [
      "Node.js",
      "Typescript",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "Express.js",
      "SSO (LDAP, OKTA)",
      "SAML 2.0",
      "Express.js"
    ],
    companyUrl: "https://appice.ai/appice-about-us/",
    logo: "/semusi-tech-logo.jpeg"
  }
];

