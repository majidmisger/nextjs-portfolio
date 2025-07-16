import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Node.js",
    description: "Backend JavaScript runtime used to build scalable, high-performance APIs.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript improving code quality and maintainability.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "PostgreSQL",
    description: "Advanced relational database used for analytics and high-concurrency APIs.",
    rating: 5,
    icon: Icons.PostgreSQL, 
  },
    {
    name: "MongoDB",
    description: "NoSQL database designed for high availability and scalability with flexible schemas.",
    rating: 4,
    icon: Icons.mongodb, // Ensure this icon exists in Icons
  },
  {
    name: "Redis",
    description: "In-memory datastore used for caching and reducing backend latency.",
    rating: 5,
    icon: Icons.Redis,
  },
  {
    name: "Express.js",
    description: "Minimal and fast Node.js web framework used for REST APIs.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "GraphQL",
    description: "Declarative API query language used to fetch only what you need.",
    rating: 4,
    icon: Icons.graphql,
  },
  {
    name: "React",
    description: "Frontend library for building interactive UIs with components and hooks.",
    rating: 3,
    icon: Icons.react,
  },
  {
    name: "Docker",
    description: "Tool for packaging and deploying containerized applications in all environments.",
    rating: 4,
    icon: Icons.Docker, 
  },
  {
    name: "Jenkins",
    description: "CI/CD tool for automating testing and deployment pipelines.",
    rating: 3,
    icon: Icons.Jenkins,
  },
  {
    name: "Git",
    description: "Version control system for managing and collaborating on codebases.",
    rating: 5,
    icon: Icons.Git, //TODO: Add Git icon,
  },
  {
    name: "HTML5",
    description: "Markup language for structuring content on the web.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS3",
    description: "Styling language for designing responsive and engaging web layouts.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "JWT & SAML",
    description: "Secure authentication systems using JSON Web Tokens and SAML 2.0 protocols.",
    rating: 4,
    icon: Icons.add, //TODO: Add JWT and SAML icons,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
