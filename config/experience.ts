import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
{
  id: "mern-ecommerce",
  companyName: "Personal Project",
  type: "Personal Project",
  category: ["Full Stack", "MERN"],
  shortDescription:
    "Built a full-featured e-commerce web application with cart, authentication, product management, and order tracking.",
  websiteLink: "https://github.com/majidmisger/mern-ecommerce", // replace with actual repo or demo
  techStack: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
  startDate: new Date("2024-06-01"),
  endDate: new Date("2024-08-01"),
  companyLogoImg: "/experience/mern/logo.png",
  pagesInfoArr: [
    {
      title: "Product Listing + Filters",
      description:
        "Responsive product grid with filtering, sorting, and pagination.",
      imgArr: ["/experience/mern/products.webp"],
    },
    {
      title: "Cart & Checkout Flow",
      description:
        "Fully functional shopping cart with add/remove/update, shipping, and checkout forms.",
      imgArr: ["/experience/mern/cart.webp"],
    },
    {
      title: "Admin Dashboard",
      description:
        "Admin portal to manage products, users, and orders with secure role-based access.",
      imgArr: ["/experience/mern/admin.webp"],
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "This project is a complete MERN-stack e-commerce site with features like user authentication, admin product management, cart & checkout functionality, and order tracking.",
      "Authentication is implemented using JWT, and user data is securely stored in MongoDB. State management is handled via Redux. The admin panel allows product CRUD operations and order status updates.",
    ],
    bullets: [
      "Built a full-stack e-commerce platform using the MERN stack.",
      "Implemented secure authentication and protected admin routes using JWT.",
      "Added cart management, order tracking, and payment placeholders.",
      "Used Redux for global state management and Express REST APIs for data flow.",
    ],
  },
},
{
  id: "realtime-notify",
  companyName: "Semusi Technologies",
  type: "Professional",
  category: ["Backend", "Real-Time", "API"],
  shortDescription:
    "Built a backend service to trigger real-time notifications via email, SMS, and push based on user activity.",
  websiteLink: "", // Optional: add GitHub repo or demo link
  techStack: ["Node.js", "Redis", "PostgreSQL", "Express.js", "Typescript"],
  startDate: new Date("2023-04-01"),
  endDate: new Date("2023-08-01"),
  companyLogoImg: "/experience/realtime/logo.png", // Replace if needed
  pagesInfoArr: [],
  descriptionDetails: {
    paragraphs: [
      "Designed and implemented an event-driven backend system to track user activities and send real-time notifications through multiple channels.",
      "Optimized delivery latency using Redis pub/sub and background job queues.",
    ],
    bullets: [
      "Created an event-based trigger system for real-time alerts.",
      "Integrated Redis queues and PostgreSQL for efficient data flow.",
      "Built modular notification services for email, SMS, and push delivery.",
    ],
  },
},
{
  id: "user-behavior-tracker",
  companyName: "Semusi Technologies",
  type: "Professional",
  category: ["Backend", "Analytics", "Data"],
  shortDescription:
    "Developed a backend service to track user actions, analyze funnels, and derive behavioral insights.",
  websiteLink: "", // Optional GitHub link
  techStack: ["Node.js", "PostgreSQL", "Typescript", "Express.js", "Chart.js"],
  startDate: new Date("2022-11-01"),
  endDate: new Date("2023-02-01"),
  companyLogoImg: "/experience/analytics/logo.png",
  pagesInfoArr: [],
  descriptionDetails: {
    paragraphs: [
      "Engineered a data analytics backend for tracking user interactions across key journeys, visualized through funnel metrics.",
      "Wrote dynamic SQL to aggregate multi-event sequences and attribute performance drops.",
    ],
    bullets: [
      "Implemented tracking of click and navigation events across the app.",
      "Generated funnel reports with conversion rates and time-to-complete analysis.",
      "Used SQL builders for flexible event and attribute aggregation.",
    ],
  },
},
{
  id: "dynamic-sql-builder",
  companyName: "Semusi Technologies",
  type: "Professional",
  category: ["Backend", "Analytics", "Data"],
  shortDescription:
    "Built a dynamic SQL builder to power customizable, user-driven analytics dashboards.",
  websiteLink: "", // Optional GitHub or internal link
  techStack: ["Node.js", "PostgreSQL", "Redis", "Typescript"],
  startDate: new Date("2022-01-01"),
  endDate: new Date("2022-09-01"),
  companyLogoImg: "/experience/semusi/sqlbuilder.png",
  pagesInfoArr: [],
  descriptionDetails: {
    paragraphs: [
      "Created a dynamic SQL engine that allowed users to define filters, projections, and events in real-time, powering flexible analytics dashboards.",
      "Handled deeply nested JSONB queries and array filters with PostgreSQL and optimized execution plans.",
    ],
    bullets: [
      "Enabled fully dynamic querying without joins using JSONB path expressions.",
      "Supported real-time filtering, groupings, and aggregations across arbitrary user-defined conditions.",
      "Improved analytics performance with Redis caching and dynamic execution plans.",
    ],
  },
}



];

export const featuredExperiences = Experiences.slice(0, 3);
