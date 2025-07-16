import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  // imgArr: string[];
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
  companyName: "E-commerce",
  type: "Personal Project",
  category: ["Full Stack", "MERN"],
  shortDescription:
    "Built a full-featured e-commerce web application with cart, authentication, product management, and order tracking.",
  websiteLink: "https://github.com/majidmisger/Ecommerce_MERN_STACK", // replace with actual repo or demo
  techStack: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
  startDate: new Date("2024-06-01"),
  endDate: new Date("2024-08-01"),
  companyLogoImg: "/experience/mern/logo.png",
  pagesInfoArr: [
    {
      title: "Product Listing + Filters",
      description:
        "Responsive product grid with filtering, sorting, and pagination.",
      // imgArr: ["/experience/mern/products.webp"],
    },
    {
      title: "Cart & Checkout Flow",
      description:
        "Fully functional shopping cart with add/remove/update, shipping, and checkout forms.",
      // imgArr: ["/experience/mern/cart.webp"],
    },
    {
      title: "Admin Dashboard",
      description:
        "Admin portal to manage products, users, and orders with secure role-based access.",
      // imgArr: ["/experience/mern/admin.webp"],
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
  id: "graphql-marketplace",
  companyName: "GraphQL Marketplace",
  type: "Personal Project",
  category: ["Full Stack", "GraphQL", "API"],
  shortDescription:
    "Developed a full-stack marketplace API using GraphQL, Node.js, and MongoDB, enabling efficient querying and modular schema design.",
  websiteLink: "https://github.com/majidmisger/graphql-node-react-mongo",
  techStack: ["Node.js", "GraphQL", "Express.js", "MongoDB", "React", "Apollo Server"],
  startDate: new Date("2022-01-01"),
  endDate: new Date("2022-09-01"),
  companyLogoImg: "/experience/semusi/graphql-marketplace.png", // optional custom logo path
  pagesInfoArr: [],
  descriptionDetails: {
    paragraphs: [
      "Designed and built a full-stack GraphQL API for a marketplace platform, supporting modular schema development, efficient data fetching, and client-side integration using Apollo.",
      "Implemented reusable resolvers and context-based authentication to handle user, product, and order flows with role-based access control.",
    ],
    bullets: [
      "Created a modular GraphQL schema for products, users, orders, and categories.",
      "Integrated MongoDB for flexible and scalable data modeling of marketplace entities.",
      "Used Apollo Client and Server for seamless data fetching between React frontend and Node.js backend.",
      "Implemented JWT-based authentication and authorization at the resolver level.",
      "Built custom directives and middleware for cleaner permission handling.",
    ],
  },
},

{
  id: "realtime-notify",
  companyName: "Realtime-notify",
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
  companyName: "user-behavior-tracker",
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
}



];

export const featuredExperiences = Experiences.slice(0, 3);
