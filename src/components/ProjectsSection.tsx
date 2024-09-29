import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from 'lucide-react';
import { Project } from '@/types/portfolioTypes';

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="dark:bg-gray-800 overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </div>
              <CardDescription className="dark:text-gray-400 text-sm">{project.technologies}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="dark:text-gray-300 text-sm">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
