"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ArrowRight, ArrowLeft } from 'lucide-react';
import { Project } from '@/types/portfolioTypes';
import { Button } from './ui/button';

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;

  const handleNextClick = () => {
    if ((currentPage + 1) * projectsPerPage < projects.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 0) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {currentProjects.map((project, index) => (
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
      
      <div className="flex justify-end mt-4 gap-2">
        {currentPage > 0 && (
          <Button variant="outline" size="icon" onClick={handlePreviousClick}>
            <ArrowLeft/>
          </Button>
        )}
        {(currentPage + 1) * projectsPerPage < projects.length && (
          <Button variant="outline" size="icon" onClick={handleNextClick}>
            <ArrowRight/>
          </Button>
        )}
      </div>
    </div>
  );
}
