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
            <CardTitle className='flex justify-between flex-wrap'>
              <p>{exp.title} at {exp.company}</p>
              <p className="text-sm dark:text-gray-400">{exp.period}</p>
            </CardTitle>
            <CardDescription className="dark:text-gray-400">{exp.technologies}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 dark:text-gray-300">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
