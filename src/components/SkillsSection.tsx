'use client';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Position } from '@/types/portfolioTypes';
import { DownloadIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

function SkillsDisplay({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span
          key={skill}
          className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-gray-800 dark:bg-primary/20 dark:text-gray-100 hover:bg-primary/20 dark:hover:bg-primary/30">
          {skill}
        </span>
      ))}
    </div>
  );
}

export default function SkillsSection({ positions }: { positions: Position[] }) {
  const [activeTab, setActiveTab] = useState(positions[0]?.name);

  return (
    <div className="mb-12 relative">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="overflow-auto">
          <TabsList className="mb-4">
            {positions.map((position) => (
              <TabsTrigger className='overflow-auto' key={position.name} value={position.name} onClick={() => setActiveTab(position.name)}>
                {position.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {positions.map((position) => (
          <TabsContent key={position.name} value={position.name} className={`tab-content ${activeTab === position.name ? "tab-content-active" : ""}`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{position.name}</h3>
              <Button asChild aria-label='Download Resume'>
                <a href={position.cvUrl} target='_blank' rel='noreferrer'>
                  <DownloadIcon className="h-4 w-4 mr-2" /> Resume
                </a>
              </Button>
            </div>
            {position.skills.map((skillCategory) => (
              <div key={skillCategory.category} className="mb-4">
                <h4 className="text-lg font-medium mb-2">{skillCategory.category}</h4>
                <SkillsDisplay skills={skillCategory.items} />
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
