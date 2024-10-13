import { Position } from "@/types/portfolioTypes";

export const positions: Position[] = [
    {
        name: "Software Engineer",
        skills: [
            { category: "Programming Languages", items: ["Python", "C/C++", "JavaScript", "Golang", "SQL"] },
            { category: "Frameworks & Libraries", items: ["Django", "FastAPI", "Express.js", "Flask", "NextJS", "TensorFlow", "Keras", "Pandas"] },
            { category: "Backend", items: ["RESTful APIs", "GraphQL", "Microservices", "Serverless"] },
            { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis"] },
            { category: "DevOps & Tools", items: ["Git", "Docker", "AWS", "Azure", "Kubernetes"] }
        ],
        cvUrl: "/resume_py.pdf"
    },
    {
        name: "AI / ML Engineer",
        skills: [
            { category: "Programming Languages", items: ["Python", "C/C++", "JavaScript", "Golang", "SQL"] },
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
