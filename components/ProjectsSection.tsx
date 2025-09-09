"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
}

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div className="relative z-10 py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black bg-gradient-to-r from-orange-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">
            Creations
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`break-inside-avoid p-6 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50 transition-all duration-500 group cursor-pointer transform hover:scale-105`}
              style={{ marginBottom: `${Math.random() * 20 + 10}px` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-slate-100 group-hover:text-orange-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {project.github && <a target="_blank" href={project.github}>
                    <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-300 transition-colors" />
                  </a>
                  }
                </div>

                <p className="text-sm text-slate-200 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-slate-800/60 text-orange-300 border-orange-400/40 hover:bg-orange-600/20 transition-colors text-sm font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  {project.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-3 text-xs text-blue-300 hover:bg-blue-600/20"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Code2 className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-3 text-xs text-orange-300 hover:bg-orange-600/20"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
