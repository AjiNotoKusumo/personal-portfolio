export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "React (Basic)",
    contibutionDescription:
      "Covers topics like Basic Routing, Rendering Elements,State Management, Handling Events, ES6 JavaScript and Form Validation.",
    repoOwner: "HackerRank",
    link: "https://www.hackerrank.com/certificates/86402d6d05c0",
  },
  {
    repo: "JavaScript (Basic)",
    contibutionDescription:
      "Covers topics like Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.",
    repoOwner: "HackerRank",
    link: "https://www.hackerrank.com/certificates/9f3fb06242c7",
  },
  {
    repo: "Software Engineer Intern",
    contibutionDescription:
      "Covers topics like Problem solving and SQL.",
    repoOwner: "HackerRank",
    link: "https://www.hackerrank.com/certificates/f0422a47e2ff",
  },
  {
    repo: "Problem Solving (Basic)",
    contibutionDescription:
      "Covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).",
    repoOwner: "HackerRank",
    link: "https://www.hackerrank.com/certificates/6cea336d022c",
  },
  {
    repo: "CSS (Basic)",
    contibutionDescription:
      "Covers topics like Cascading and Inheritance, text styling fundamentals, layouts in CSS, understand the boxing of elements in CSS.",
    repoOwner: "HackerRank",
    link: "https://www.hackerrank.com/certificates/9a51fa31884f",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
