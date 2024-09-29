"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sun, Moon, Mail, Github, Linkedin } from 'lucide-react';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import { info, positions, experiences, projects } from '@/data/portfolioData';
import Image from 'next/image'

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const storedDarkMode = localStorage.getItem('darkMode') === 'dark';
  const systemPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  useEffect(() => {
    setDarkMode(storedDarkMode || (!localStorage.getItem('darkMode') && systemPrefersDarkMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4 sticky top-5">
          <Button variant="outline" size="icon" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4 text-center md:text-justify">
            {/* Circular Profile Photo */}
            <Image
              src={info.picUrl} // Adjust the image path as needed
              alt="Profile Picture"
              width={1920}
              height={1080}
              className="w-64 h-64 rounded-full object-cover mb-4 mx-auto md:mx-0" // Adjust size as needed
            />
            <h1 className="text-4xl font-bold">{info.name}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">{info.job}</p>
            <div className="flex space-x-4 justify-center md:justify-normal">
              <Button asChild aria-label='Contact Me'>
                <a href={`mailto:${info.mail}`}>
                  <Mail className='h-5 w-5 mr-2' />
                  Contact Me
                </a>
              </Button>
              <Button asChild aria-label='GitHub'>
                <a href={info.github} target='_blank' rel='noreferrer'>
                  <Github className='h-5 w-5' />
                </a>
              </Button>
              <Button asChild aria-label='LinkedIn'>
                <a href={info.linkedin} target='_blank' rel='noreferrer'>
                  <Linkedin className='h-5 w-5' />
                </a>
              </Button>
            </div>
          </div>
          <ExperienceSection experiences={experiences} />
        </div>
        <SkillsSection positions={positions} />
        <ProjectsSection projects={projects} />
      </div>
    </div>
  );
}
