import { Info, Position, Experience, Project } from '@/types/portfolioTypes';

export const info: Info = {
    picUrl: "/me.jpg",
    name: "Kaustubha chaturvedi",
    job: "Software Engineer @ Prishni",
    about: "I&apos;m a software engineer with a passion for building scalable and reliable systems.",
    mail: "kaustubhachaturvedi@gmail.com",
    github: "https://github.com/kaustubha-chaturvedi/",
    linkedin: "https://www.linkedin.com/in/kaustubha-chaturvedi/",
};

export const positions: Position[] = [
    {
        name: "Software Engineer",
        skills: [
            { category: "Programming Languages", items: ["Python", "C/C++", "JavaScript", "Golang"] },
            { category: "Frameworks & Libraries", items: ["Django", "FastAPI", "Express.js", "Flask", "NextJS", "TensorFlow", "Keras", "Pandas"] },
            { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis"] },
            { category: "DevOps & Tools", items: ["Git", "Docker", "AWS", "Azure", "Kubernetes"] }
        ],
        cvUrl: "/resume_py.pdf"
    },
    {
        name: "AI / ML Engineer",
        skills: [
            { category: "Programming Languages", items: ["Python", "C/C++", "JavaScript", "Golang", "Java"] },
            { category: "Frameworks & Libraries", items: ["TensorFlow", "Keras", "PyTorch", "CrewAI", "Serper", "Scikit-learn", "FastAPI", "LangChain", "Groq", "Deepgram", "OpenCV"] },
            { category: "AI/ML", items: ["Data Preprocessing", "Feature Engineering", "Model Evaluation", "NLP", "Generative AI", "RAG"] },
            { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis", "ChromaDB"] },
            { category: "DevOps & Tools", items: ["Git", "Docker", "AWS", "Azure", "Kubernetes", "GitLab"] }
        ],
        cvUrl: "/resume_ml.pdf"
    },
    {
        name: "Data Engineer",
        skills: [
            { category: "Programming Languages", items: ["Python", "C/C++", "JavaScript", "Golang", "SQL"] },
            { category: "Frameworks & Libraries", items: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "FastAPI", "Flask", "Pandas"] },
            { category: "Data Tools", items: ["Power BI", "Azure Data Factory", "Azure SQL", "Data Lake", "ETL", "SQL Queries", "Data Warehousing"] },
            { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis", "ChromaDB"] },
            { category: "DevOps & Tools", items: ["Git", "Docker", "AWS", "Azure", "Kubernetes", "Azure Storage Services"] }
        ],
        cvUrl: "/resume_ds.pdf"
    },
];

export const experiences: Experience[] = [
    {
        title: "Backend Developer",
        company: "Prishni",
        period: "Nov 2023 - Present",
        description: "Enhanced significant portions of the backend for the company website, improving load times by 300%. Led a key project, delivering it ahead of schedule. Implemented caching strategies that reduced database queries by 40%, enhancing overall system performance. Tech Stack: Django, FastAPI, PostgreSQL, Azure, Docker."
    },
    {
        title: "App Development Lead",
        company: "Undigitally",
        period: "Jan - Oct 2023",
        description: "Engineered the app backend, boosting API performance by 30%. Collaborated with frontend teams to integrate new features, reducing errors by 50%. Tech Stack: Flutter, Firebase, FastAPI, Azure SQL."
    },
    {
        title: "Web Development Intern",
        company: "Police HQ, Bhopal",
        period: "Jul - Nov 2021",
        description: "Developed and launched a website for India Covid Help Group, ensuring 100% uptime. Managed server deployments and database integrations, enhancing operational efficiency by 40%. Tech Stack: Django, MariaDB, Self-Hosted Server, Docker."
    }
];

export const projects: Project[] = [
    {
        title: "AI-Powered Chatbot",
        technologies: "Python, TensorFlow, FastAPI",
        description: "Developed an intelligent chatbot.",
        githubUrl: "https://github.com/yourusername/ai-chatbot"
    },
    // Other projects...
];
