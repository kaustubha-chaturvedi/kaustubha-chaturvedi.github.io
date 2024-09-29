import { Experience } from "@/types/portfolioTypes";

export const experiences: Experience[] = [
    {
        title: "Backend Developer",
        company: "Prishni",
        period: "Nov 2023 - Present",
        technologies: "Django, FastAPI, PostgreSQL, Azure, Docker",
        description: [
            "Enhanced significant portions of the backend for the company website, improving load times by 300%.",
            "Led a key project, delivering it ahead of schedule.",
            "Implemented caching strategies that reduced database queries by 40%, enhancing overall system performance."
        ]
    },
    {
        title: "App Development Lead",
        company: "Undigitally",
        period: "Jan - Oct 2023",
        technologies: "Flutter, Firebase, FastAPI, Azure SQL",
        description: [
            "Engineered the app backend, boosting API performance by 30%.",
            "Collaborated with frontend teams to integrate new features, reducing errors by 50%.",
        ]
    },
    {
        title: "Web Development Intern",
        company: "Police HQ, Bhopal",
        period: "Jul - Nov 2021",
        technologies: "Django, MariaDB, Docker, Self-Hosted Server",
        description: [
            "Developed and launched a website for India Covid Help Group, ensuring 100% uptime.",
            "Managed server deployments and database integrations, enhancing operational efficiency by 40%.",
        ]
    }
];
