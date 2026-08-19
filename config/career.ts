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
  product?: string;
  team?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "wingify-vwo",
    position: "Data Platform Engineer",
    company: "Wingify",
    location: "Delhi, India",
    product: "VWO",
    team: "Data Layer, Engineering",
    startDate: new Date("2025-12-01"),
    endDate: "Present",
    description: [
      "Working at Wingify on VWO, in the Data Layer team under Engineering.",
      "Building the data platform behind VWO Website Optimizer — experiment reporting, visitor analytics, and conversion insights used by product and customer teams.",
      "Designing ETL pipelines and query paths across BigQuery, ClickHouse, and Bigtable to serve high-volume website optimization data.",
      "Operating cloud-native data workflows on GCP, including GCS for pipeline storage and Kafka for real-time event streaming.",
      "Partnering with backend and product engineering to turn campaign, visitor, and conversion events into reliable, low-latency reports.",
      "Improving the reliability and freshness of Website Optimizer dashboards that power A/B tests, funnels, and personalization decisions.",
    ],
    achievements: [
      "Owned query and storage paths across BigQuery, ClickHouse, and Bigtable for VWO experiment reporting at scale.",
      "Built GCS-backed pipelines that land and process website optimizer events for downstream analytics.",
      "Streamed campaign and visitor events through Kafka to keep optimization metrics closer to real time.",
      "Strengthened reporting reliability for VWO Website Optimizer so experiment results stay consistent under high concurrency.",
    ],
    skills: [
      "BigQuery",
      "ClickHouse",
      "Bigtable",
      "GCS",
      "Kafka",
      "GCP",
      "Node.js",
      "Typescript",
      "Java",
    ],
    companyUrl: "https://vwo.com/platform/",
    logo: "/career/wingify-logo.png",
  },
  {
    id: "appice",
    position: "Software Engineer",
    company: "AppICE (Semusi Technologies)",
    location: "Noida, India",
    startDate: new Date("2021-08-01"),
    endDate: new Date("2025-11-30"),
    description: [
      "Developed a real-time campaign automation and analytics platform to improve user engagement and ROI for IoT and mobile platforms.",
      "Built scalable APIs using Node.js and PostgreSQL to support high-concurrency data ingestion and delivery.",
      "Integrated secure enterprise SSO solutions using LDAP, OKTA, and SAML 2.0 across platforms.",
      "Implemented queue-based microservices using Redis and RabbitMQ for ingesting CSV-based user, behavioral, and transactional data.",
      "Designed a dynamic SQL query builder engine using PostgreSQL JSONB and TypeScript for drill-down analytics dashboards.",
      "Integrated WhatsApp Cloud API webhooks to track message events and trigger workflow updates in real time.",
      "Improved backend performance through intelligent Redis caching and PostgreSQL query optimization.",
    ],
    achievements: [
      "Reduced API response time by 35% via Redis caching and optimized PostgreSQL queries.",
      "Engineered a backend pipeline capable of handling over 100K daily users and real-time events.",
      "Led the development of a customizable SQL query builder enabling on-the-fly analytics for marketing teams.",
      "Enhanced campaign engagement tracking with event-driven funnel design for real-time insights.",
      "Delivered secure, seamless authentication across platforms by integrating enterprise-grade SSO systems.",
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
    ],
    companyUrl: "https://appice.ai/",
    logo: "/semusi-tech-logo.jpeg",
  },
];
