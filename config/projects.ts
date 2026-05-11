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

export interface ProjectInterface {
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

export const Projects: ProjectInterface[] = [
  {
    id: "firework-studio",
    companyName: "Firework Studio",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev", "Frontend"],
    shortDescription:
      "An AI powered web based application to manage your social media. Create, schedule, and analyze posts across platforms with AI-driven planning.",
    websiteLink: "https://firework-studio.rookiedev.online",
    githubLink: "https://github.com/AjiNotoKusumo/Firework-Studio",
    techStack: [
      "Next.js",
      "Typescript",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "BetterAuth",
      "Redis",
      "Cloudinary",
      "Gemini API",
      "Vercel",
    ],
    startDate: new Date("2026-03-16"),
    endDate: new Date("2026-04-02"),
    companyLogoImg: "/projects/firework-studio/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "A clean, minimal landing page with sections for features, and login.",
        imgArr: ["/projects/firework-studio/logo.png"],
      },
      {
        title: "Authentication System",
        description:
          "Complete authentication system using BetterAuth that supports multiple social media accounts, including twitter, instagram, and tiktok login.",
        imgArr: ["/projects/firework-studio/authentication.png"],
      },
      {
        title: "Metrics Page",
        description:
          "Dedicated page to show user social media account analytics.",
        imgArr: ["/projects/firework-studio/metrics.png"],
      },
      {
        title: "Trending Page",
        description:
          "See what is currently trending on social media.",
        imgArr: ["/projects/firework-studio/trending.png"],
      },
      {
        title: "Saved Page",
        description:
          "A Page to show all the trending page that have been bookmarked.",
        imgArr: ["/projects/firework-studio/saved-post.png"],
      },
      {
        title: "Post Detail Page",
        description:
          "Post detail that includes media, caption, platform, and metrics.",
        imgArr: ["/projects/firework-studio/post-detail.png"],
      },
      {
        title: "Create Page",
        description:
          "Create and schedule new post and create new storyboard planning.",
        imgArr: ["/projects/firework-studio/create.png"],
      },
      {
        title: "Storyboard Page",
        description:
          "Dedicated page to show all the storyboards that have been created.",
        imgArr: ["/projects/firework-studio/storyboard-page.png"],
      },
      {
        title: "Storyboard",
        description:
          "AI powered storyboard to help user plan their next content.",
        imgArr: ["/projects/firework-studio/storyboard.png"],
      },
      {
        title: "Calendar Page",
        description:
          "Page to show post schedule and reschedule post to another time.",
        imgArr: ["/projects/firework-studio/calendar.png"],
      },
      {
        title: "Profile Page",
        description:
          "See user profile, edit interests, and add new social media accounts.",
        imgArr: ["/projects/firework-studio/profile.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Firework Studio is an AI powered web based application to manage your social media accounts.",
        "The project focuses heavily on providing a seamless experience for managing and analyzing social media content including scheduling, analytics, and AI-driven planning.",
        "Features include"
      ],
      bullets: [
        "Multiple social media account and post metrics.",
        "Post creation for your social media account.",
        "Automatic post scheduler to schedule post on specific days.",
        "Trending page to see and bookmark what is currently trending on social media.",
        "AI powered text and image generation to create script and storyboard.",
        "Retrieval-Augmented Generation (RAG) AI suggestion to improve user suggestion.",
        "Authentication using BetterAuth that supports multiple social media account linking, including twitter, instagram, and tiktok login"
      ],
    },
  },
  {
    id: "HackTube",
    companyName: "HackTube",
    type: "Personal",
    category: ["Full Stack", "Backend", "Frontend", "UI/UX", "Mobile Dev"],
    shortDescription:
      "A mobile based social media platform. Share post, follow users, and engage with content through likes and comments.",
    techStack: ["Javascript", "React Native", "Expo", "MongoDB", "GraphQL", "Redis", "Apollo Server"],
    githubLink: "https://github.com/AjiNotoKusumo/Hack-Tube",
    startDate: new Date("2026-03-02"),
    endDate: new Date("2026-03-08"),
    companyLogoImg: "/projects/hacktube/post-page.jpg",
    pagesInfoArr: [
      {
        title: "Post List and Detail Page",
        description:
          "Browse post from a variety of sources and view detailed information about each post.",
        imgArr: ["/projects/hacktube/post-page.jpg"],
      },
      {
        title: "Authentication System",
        description:
          "Complete authentication system using JWT tokens that through GraphQL API.",
        imgArr: ["/projects/hacktube/auth.jpg"],
      },
      {
        title: "Post Creation Page",
        description:
          "Create and share new posts with your followers and the public.",
        imgArr: ["/projects/hacktube/creation.jpg"],
      },
      {
        title: "Search and Profile Page",
        description:
          "Search for users, view their profiles, and follow each other.",
        imgArr: ["/projects/hacktube/user.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "HackTube is a mobile-based social media platform designed to provide a seamless experience for sharing posts, following users, and engaging with content through likes and comments.",
        "The platform features a modern UI for mobile devices, and a robust backend to support a wide range of social media interactions.",
        "Features include"
      ],
      bullets: [
        "Post creation to create and share new post with followers and public.",
        "Like and comment feature to leave impressions on other people posts.",
        "Search feature to discover new people, and follow feature to make new friends.",
        "a mobile focused user-interface that is responsive on both ios and android."
      ],
    },
  },
  {
    id: "task-master",
    companyName: "Task Master",
    type: "Personal",
    category: ["Full Stack", "Backend", "Frontend", "UI/UX", "Web Dev"],
    shortDescription:
      "An AI powered web based application to track projects and tasks. Create projects, add tasks, and track progress with AI-driven suggestions.",
    websiteLink: "https://task-master-public.vercel.app",
    githubLink: "https://github.com/AjiNotoKusumo/Task-Master",
    techStack: ["React", "Javascript", "Redux", "express.js", "PostgreSQL", "Sequelize", "AWS", "Supabase", "Vercel", "Cloudinary", "Gemini API", "Google Auth"],
    startDate: new Date("2026-02-16"),
    endDate: new Date("2026-02-20"),
    companyLogoImg: "/projects/taskmaster/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "A clean minimal landing page with neo-brutalism style showcasing the application features.",
        imgArr: ["/projects/taskmaster/logo.png"],
      },
      {
        title: "Authentication System",
        description:
          "Complete authentication system using JWT tokens that supports multiple OAuth, such as Google and Github.",
        imgArr: ["/projects/taskmaster/authentication.png"],
      },
      {
        title: "Project List Page",
        description:
          "Place to create new project and manage existing one.",
        imgArr: ["/projects/taskmaster/project-list.png"],
      },
      {
        title: "Project Dashboard Page",
        description:
          "Place to access everything related to the project.",
        imgArr: ["/projects/taskmaster/project-dashboard.png"],
      },
      {
        title: "Project Overview Page",
        description:
          "Overview of a project task, and place to store file related to project.",
        imgArr: ["/projects/taskmaster/project-overview.png"],
      },
      {
        title: "AI Assistant Page",
        description:
          "Create new task that add value to user projects based on AI Suggestion.",
        imgArr: ["/projects/taskmaster/ai-page.png"],
      },
      {
        title: "Tasks Page",
        description:
          "Create Task and group them based on completion level.",
        imgArr: ["/projects/taskmaster/task.png"],
      },
      {
        title: "Timeline Page",
        description:
          "Group Task into bigger milestone for easier tracking.",
        imgArr: ["/projects/taskmaster/timeline.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Task Master is an AI powered web based application to track projects and tasks. The platform allows users to create projects, add tasks, and track progress with AI-driven suggestions.",
        "Features include"
      ],
      bullets: [
        "Create new projects and define deadline, description, and importance.",
        "Create a new task and group them to bigger milestone to manage multiple task at the same time.",
        "Track task progress based on completion level (To Do/ In Progress/Done).",
        "Create task based on AI Suggestion that improves the quality of the users project.",
        "Automatic email reminder for project nearing deadline.",
        "OAuth based authentication using both Google Login and Github Login.",
      ],
    },
  },
  {
    id: "quizzy",
    companyName: "Quizzy",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "Backend", "Frontend"],
    shortDescription:
      "An AI powered dynamic quiz application built with modern web technologies, offering an engaging user experience with real-time scoring and chat.",
    websiteLink: "https://quizzy-989d4.web.app",
    githubLink: "https://github.com/AjiNotoKusumo/Group-Project-Quiz-Phase2",
    techStack: ["React", "Redux", "Socket.io", "express.js", "Sequelize", "PostgreSQL", "Firebase", "Gemini API"],
    startDate: new Date("2026-02-23"),
    endDate: new Date("2026-02-27"),
    companyLogoImg: "/projects/quizzy/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description: "A clean minimal landing page showcasing the application features with theme selection.",
        imgArr: ["/projects/quizzy/logo.png"],
      },
      {
        title: "Start Quiz Page",
        description:
          "Join Quiz by entering an existing room code and nickname.",
        imgArr: ["/projects/quizzy/start-quiz.png"],
      },
      {
        title: "Create Quiz Page",
        description: "Create new quiz as host, pick theme and decide how many participants can join.",
        imgArr: ["/projects/quizzy/create.png"],
      },
      {
        title: "Waiting Room",
        description: "Dedicated space for participants to wait before the quiz begins.",
        imgArr: ["/projects/quizzy/waiting.png"],
      },
      {
        title: "Quiz page",
        description: "A real-time quiz page with AI powered hint, and a live chat feature to talk to other participant.",
        imgArr: ["/projects/quizzy/quiz.png"],
      },
      {
        title: "Leaderboard",
        description: "A speed-based scoring system with final leaderboard to compare score.",
        imgArr: ["/projects/quizzy/leaderboard.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Quizzy is an AI powered web based application to test your knowledge with friends.",
        "The platform allows users to create and join quiz rooms, answer questions in real-time, and engage with other participants through a live chat feature.",
        "Features include"
      ],
      bullets: [
        "Quiz creation with multiple theme that the user can test their knowledge in.",
        "Real-time quiz room with real-time speed-based scoring that supports multiple people.",
        "Live chat features within the quiz room to chat with your friends.",
        "An AI powered hint to help solve difficult questions.",
      ],
    },
  },
  {
    id: "level-up",
    companyName: "LevelUp",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX", "Backend", "Frontend"],
    shortDescription:
      "A web based e-commerce app to discover new and trending games. Track game release date, and bookmark games using the app.",
    techStack: [
      "Next.js",
      "MongoDB",
      "Rest API",
      "Vercel",
    ],
    websiteLink: "https://level-up-public.vercel.app",
    githubLink: "https://github.com/AjiNotoKusumo/LevelUp",
    startDate: new Date("2026-03-09"),
    endDate: new Date("2026-03-15"),
    companyLogoImg: "/projects/level-up/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "A dedicated landing page showcasing the application features.",
        imgArr: ["/projects/level-up/logo.png"],
      },
      {
        title: "Authentication System",
        description:
          "a JWT based authentication to secure user accounts.",
        imgArr: ["/projects/level-up/login.png"],
      },
      {
        title: "Product List Page",
        description:
          "A comprehensive list of available products with search and filter options.",
        imgArr: ["/projects/level-up/product-list.png"],
      },
      {
        title: "Product Detail Page",
        description:
          "A detailed view of each product with specifications, price and previews.",
        imgArr: ["/projects/level-up/product-detail.png"],
      },
      {
        title: "Wishlist Page",
        description:
          "A dedicated page for users to manage their wishlist of favorite games.",
        imgArr: ["/projects/level-up/wishlist.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "LevelUp is a web based e-commerce app to discover new and trending games. Track game release date, and bookmark games using the app.",
        "Features include"
      ],
      bullets: [
        "A JWT based authentication to secure access to user account.",
        "Wishlist to bookmark and saves games that the user wants to play.",
        "a vast video games list with search, sort, and filter capability to discover new games.",
        "Video game detail to see the the detail of each game"
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
