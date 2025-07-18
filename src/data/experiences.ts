import { Experience } from "@/types/portfolioTypes";

export const experiences: Experience[] = [
  {
    title: "Software Development Engineer II",
    company: "WebCue",
    period: "Jan 2025 - Present",
    technologies: "GoLang, FastAPI, NodeJS, NextJS, PostgreSQL, MongoDB",
    description: [
      "Architected and developed scalable products for ad tracking and revenue analytics, supporting high-throughput data pipelines.",
      "Led a team of 3+ engineers, collaborating with cross-functional stakeholders to deliver features on time with high code quality.",
      "Designed and implemented an AI-driven video and image generation system using fine-tuned in-house models and third-party APIs, reducing manual ad creation efforts by 80%."
    ]
  },
  {
    title: "Backend Developer",
    company: "Prishni",
    period: "Nov 2023 - Dec 2024",
    technologies: "Django, FastAPI, PostgreSQL, Azure, Docker",
    description: [
      "Refactored critical backend services, reducing page load times by 3x and improving backend response time under high concurrency.",
      "Owned the lifecycle of a key internal platform, delivering it ahead of schedule with high stability and 100% uptime post-deployment.",
      "Introduced advanced caching and query optimization strategies, cutting DB queries by 40% and enhancing system scalability."
    ]
  },
  {
    title: "App Development Lead",
    company: "Undigitally",
    period: "Jan - Oct 2023",
    technologies: "Flutter, Firebase, FastAPI, Azure SQL",
    description: [
      "Led backend development for a cross-platform mobile app, improving API latency by 30% through architectural improvements.",
      "Streamlined integration with frontend and QA teams, cutting production bugs related to API contracts by 50%."
    ]
  },
  {
    title: "Web Development Intern",
    company: "Police HQ, Bhopal",
    period: "Jul - Nov 2021",
    technologies: "Django, MariaDB, Docker, Self-Hosted Server",
    description: [
      "Designed, developed, and deployed a high-availability web portal for the India Covid Help Group with 0% downtime during peak usage.",
      "Automated server deployments and managed self-hosted infrastructure, improving deployment speed and stability by 40%."
    ]
  }
];
