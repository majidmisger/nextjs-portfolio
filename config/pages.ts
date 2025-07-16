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
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Majid Niyaz's key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "Highlighting career journey and impactful projects.",
    metadata: {
      title: "Experience",
      description: "Majid Niyaz's experience in building web applications.",
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
    description: "Professional journey and experience timeline.",
    metadata: {
      title: "Career Timeline",
      description: "Majid Niyaz's professional journey and career timeline.",
    },
  },
};
