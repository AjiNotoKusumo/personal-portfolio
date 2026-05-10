import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Python",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "PostgreSQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Redux",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    rating: 5,
    icon: Icons.redux,
  },
  {
    name: "React Native",
    description:
      "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "GraphQL",
    description:
      "Fetch data precisely with a powerful query language for APIs and runtime execution.",
    rating: 5,
    icon: Icons.graphql,
  },
  {
    name: "Apollo",
    description:
      "Fetch data precisely with a powerful query language for APIs and runtime execution.",
    rating: 5,
    icon: Icons.apollo,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Redis",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.redis,
  },
  {
    name: "Prisma",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.prisma,
  },
  {
    name: "Sequelize",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.sequelize,
  },
  {
    name: "Socket.io",
    description:
      "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    rating: 5,
    icon: Icons.socketio,
  },
  {
    name: "Supabase",
    description:
      "Utilize Supabase to build and deploy scalable, reliable, and secure applications.",
    rating: 5,
    icon: Icons.supabase,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 5,
    icon: Icons.css3,
  },
  {
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 5,
    icon: Icons.amazonaws,
  },
  {
    name: "Firebase",
    description:
      "Utilize Firebase to build and deploy scalable, reliable, and secure applications.",
    rating: 5,
    icon: Icons.firebase,
  },
  {
    name: "Git",
    description:
      "Utilize Git for version control and collaborative development.",
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "Vercel",
    description:
      "Deploy and host web applications with ease using Vercel's seamless integration.",
    rating: 5,
    icon: Icons.vercel,
  },
  {
    name: "Jest",
    description:
      "Test JavaScript code with confidence using Jest, a delightful testing framework.",
    rating: 5,
    icon: Icons.jest,
  },
  {
    name: "Gemini API",
    description:
      "Deploy and host web applications with ease using Vercel's seamless integration.",
    rating: 5,
    icon: Icons.gemini,
  },
  {
    name: "OpenAI API",
    description:
      "Deploy and host web applications with ease using Vercel's seamless integration.",
    rating: 5,
    icon: Icons.openai,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 5,
    icon: Icons.bootstrap,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 12);
