import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Majid Niyaz's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Data platform and backend skills I use to build analytics systems at scale.",
    metadata: {
      title: "Skills",
      description:
        "Majid Niyaz's data platform skills — BigQuery, ClickHouse, Bigtable, GCS, Kafka, and Node.js.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional work across data platforms, analytics systems, and backend products.",
    metadata: {
      title: "Experience",
      description:
        "Majid Niyaz's experience building data platforms and backend systems, including VWO Website Optimizer.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Majid Niyaz.",
    },
  },
  // contributions: {
  //   title: "Contributions",
  //   description: "Open-source contributions and community involvement.",
  //   metadata: {
  //     title: "Contributions",
  //     description:
  //       "Majid Niyaz's open-source contributions and community involvement.",
  //   },
  // },
  resume: {
    title: "Resume",
    description: "Majid Niyaz's resume.",
    metadata: {
      title: "Resume",
      description: "Majid Niyaz's resume.",
    },
  },
  career: {
    title: "Career Timeline",
    description: "Roles and impact across data platforms and product engineering.",
    metadata: {
      title: "Career Timeline",
      description:
        "Majid Niyaz's career timeline — Data Platform Engineer at Wingify, working on VWO with the Data Layer team in Engineering.",
    },
  },
};
