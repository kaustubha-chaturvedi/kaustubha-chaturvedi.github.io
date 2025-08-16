"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, MapPin, Calendar, Star, Code, TrendingUp, Eye, EyeOff } from "lucide-react"

interface Project {
  name: string
  description: string
  technologies: string[]
  impact: string
  highlights: string[]
}

interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  type: string
  technologies: string[]
  achievements: string[]
  projects: Project[]
}

interface ExperienceSectionProps {
  experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({})

  const toggleProject = (experienceId: string, projectName: string) => {
    const key = `${experienceId}-${projectName}`
    setExpandedProjects((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="space-y-6">
      {/* Removed heading */}
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <div className="flex items-center text-blue-400 mb-2">
                    <Building className="w-4 h-4 mr-2" />
                    {exp.company}
                    <Badge variant="outline" className="ml-2 border-slate-600 text-slate-300 text-xs">
                      {exp.type}
                    </Badge>
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="mr-4">{exp.location}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-slate-700 text-slate-200">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-slate-300 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start text-slate-200">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.projects && exp.projects.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-slate-300 mb-3 flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    Key Projects ({exp.projects.length})
                  </h4>
                  <div className="space-y-4">
                    {exp.projects.map((project, projectIndex) => {
                      const projectKey = `${exp.id}-${project.name}`
                      const isExpanded = expandedProjects[projectKey]

                      return (
                        <div key={projectIndex} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h5 className="font-medium text-white mb-1">{project.name}</h5>
                              <p className="text-sm text-slate-300 mb-2">{project.description}</p>
                              <div className="flex items-center text-xs text-green-400 mb-2">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                {project.impact}
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleProject(exp.id, project.name)}
                              className="text-slate-400 hover:text-white hover:bg-slate-700"
                            >
                              {isExpanded ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </Button>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-3">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-200 text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="border-t border-slate-700 pt-3">
                                <h6 className="text-xs font-medium text-slate-300 mb-2">Technical Highlights</h6>
                                <ul className="space-y-1">
                                  {project.highlights.map((highlight, highlightIndex) => (
                                    <li key={highlightIndex} className="flex items-start text-xs text-slate-200">
                                      <div className="w-1 h-1 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                                      {highlight}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
