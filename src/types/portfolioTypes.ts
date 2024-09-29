export type Info = {
    picUrl: string;
    name: string;
    job: string;
    about: string;
    mail: string;
    github: string;
    linkedin: string;
};

export type Skill = {
    category: string;
    items: string[];
};

export type Position = {
    name: string;
    skills: Skill[];
    cvUrl: string;
};

export type Experience = {
    title: string;
    company: string;
    period: string;
    description: string;
};

export type Project = {
    title: string;
    technologies: string;
    description: string;
    githubUrl: string;
};
