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
      description: "Aji Noto Kusumo's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Aji Noto Kusumo's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Aji Noto Kusumo's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Aji Noto Kusumo.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Aji Noto Kusumo's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Aji Noto Kusumo's resume.",
    metadata: {
      title: "Resume",
      description: "Aji Noto Kusumo's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Thoughts on AI, software engineering, and building in public.",
    metadata: {
      title: "Blogs",
      description:
        "Aji Noto Kusumo's blog — thoughts on AI, software engineering, and building in public.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Aji Noto Kusumo's professional journey and experience timeline.",
    },
  },
  certifications: {
    title: "Certifications",
    description: "Professional certifications and achievements.",
    metadata: {
      title: "Certifications",
      description:
        "Aji Noto Kusumo's professional certifications and achievements.",
    },
  },
  education: {
    title: "Education",
    description: "Academic background and educational achievements.",
    metadata: {
      title: "Education",
      description:
        "Aji Noto Kusumo's academic background and educational achievements.",
    },
  },
};
