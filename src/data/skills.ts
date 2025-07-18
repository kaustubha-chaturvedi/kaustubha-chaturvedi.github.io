import { Position } from "@/types/portfolioTypes";

export const positions: Position[] = [
    {
        name: "Software Engineer",
        skills: [
            { category: "Programming Languages", items: ["Golang", "Python", "JavaScript", "C/C++", "SQL"] },
            { category: "Backend Frameworks & Libraries", items: ["FastAPI", "Django", "Express.js", "Flask", "Next.js"] },
            { category: "System Design & Architecture", items: ["RESTful APIs", "GraphQL", "Microservices", "Serverless Architectures"] },
            { category: "Databases & Caching", items: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis"] },
            { category: "Cloud & DevOps", items: ["Docker", "AWS", "Azure", "Kubernetes", "Git"] }
        ],
        cvUrl: "/resume_py.pdf"
    },
    {
        name: "AI / ML Engineer",
        skills: [
            { category: "Programming Languages", items: ["Python", "Golang", "C/C++", "JavaScript", "SQL"] },
            { category: "ML & Deep Learning Frameworks", items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV"] },
            { category: "Generative AI & Tooling", items: ["LangChain", "CrewAI", "RAG", "Deepgram", "Serper", "Groq"] },
            { category: "ML Concepts & Techniques", items: ["NLP", "Generative AI", "Feature Engineering", "Model Evaluation", "Data Preprocessing"] },
            { category: "Databases & Vector Stores", items: ["PostgreSQL", "MongoDB", "DynamoDB", "ChromaDB", "Redis"] },
            { category: "DevOps & MLOps Tools", items: ["Docker", "AWS", "Azure", "Kubernetes", "Git", "GitLab"] }
        ],
        cvUrl: "/resume_ml.pdf"
    }
];
