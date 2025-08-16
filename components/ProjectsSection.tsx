"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Activity } from "lucide-react"

interface PersonalProject {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  status: string
}

interface ProjectsSectionProps {
  projects: PersonalProject[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "completed":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "archived":
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30"
    }
  }

  return (
    <div className="space-y-6">
      {/* Removed heading */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors h-full">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white flex-1">{project.title}</h3>
                  <Badge variant="outline" className={`text-xs ${getStatusColor(project.status)}`}>
                    <Activity className="w-3 h-3 mr-1" />
                    {project.status}
                  </Badge>
                </div>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-slate-800 text-slate-200 text-xs border border-slate-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-700 bg-transparent text-slate-300 hover:text-white hover:bg-slate-800 flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-700 bg-transparent text-slate-300 hover:text-white hover:bg-slate-800 flex-1"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
