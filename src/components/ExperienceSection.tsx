import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Experience } from '@/types/portfolioTypes';

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      {experiences.map((exp, index) => (
        <Card key={index} className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle>{exp.title} at {exp.company}</CardTitle>
            <CardDescription className="dark:text-gray-400">{exp.period}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="dark:text-gray-300">{exp.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
