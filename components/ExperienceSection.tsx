"use client"

import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Sparkles, ChevronDown, ChevronUp, Briefcase, Target, Zap } from "lucide-react"
import { useState } from "react"

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
  period: string
  location: string
  technologies: string[]
  achievements: string[]
  projects?: Project[]
}

interface ExperienceSectionProps {
  experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)

  const toggleProjects = (expId: string) => {
    setExpandedExperience(expandedExperience === expId ? null : expId)
  }

  return (
    <div className="relative z-10 py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black text-blue-400 bg-gradient-to-r from-blue-400 via-orange-400 to-amber-400 bg-clip-text">
            Journey
          </h2>
        </div>

        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              <div
                className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="lg:w-1/4 flex justify-center">
                  <div
                    className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${
                      index % 2 === 0 ? "from-blue-600/20 to-orange-600/20" : "from-orange-600/20 to-blue-600/20"
                    } flex items-center justify-center transform ${
                      index % 2 === 0 ? "rotate-12" : "-rotate-12"
                    } hover:rotate-0 transition-transform duration-500`}
                  >
                    <div className="text-4xl font-black text-slate-100">{index + 1}</div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent" />
                  </div>
                </div>

                <div className="lg:w-3/4">
                  <div
                    className={`p-8 rounded-3xl backdrop-blur-sm border border-slate-700/50 bg-gradient-to-br ${
                      index % 2 === 0 ? "from-blue-900/30 to-orange-900/20" : "from-orange-900/30 to-blue-900/20"
                    } transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:rotate-0 transition-all duration-500`}
                  >
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-slate-100 mb-2">{exp.title}</h3>
                        <p className="text-xl text-orange-300 font-semibold mb-4">{exp.company}</p>

                        <div className="flex flex-wrap gap-6 text-slate-300 mb-6">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-slate-800/60 text-blue-300 border-blue-400/40 hover:bg-blue-600/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center gap-2 text-lg text-orange-300">
                          <Sparkles className="w-5 h-5" />
                          Key Impact
                        </h4>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-orange-400 mt-3 flex-shrink-0" />
                              <span className="text-slate-200 leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {exp.projects && exp.projects.length > 0 && (
                        <div className="border-t border-slate-600/30 pt-6">
                          <button
                            onClick={() => toggleProjects(exp.id)}
                            className="flex items-center justify-between w-full text-left group hover:text-orange-300 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-5 h-5 text-blue-400" />
                              <span className="font-semibold text-lg text-slate-200 group-hover:text-orange-300">
                                Company Projects ({exp.projects.length})
                              </span>
                            </div>
                            {expandedExperience === exp.id ? (
                              <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-orange-300 transition-colors" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-orange-300 transition-colors" />
                            )}
                          </button>

                          <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                              expandedExperience === exp.id ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="pt-6 space-y-6">
                              {exp.projects.map((project, projectIndex) => (
                                <div
                                  key={projectIndex}
                                  className="p-6 rounded-2xl bg-slate-800/40 border border-slate-600/30 backdrop-blur-sm"
                                >
                                  <div className="space-y-4">
                                    <div>
                                      <h5 className="text-xl font-bold text-slate-100 mb-2">{project.name}</h5>
                                      <p className="text-slate-300 leading-relaxed">{project.description}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                      {project.technologies.map((tech) => (
                                        <Badge
                                          key={tech}
                                          className="bg-slate-700/60 text-blue-300 border-blue-400/30 hover:bg-blue-600/20 transition-colors text-xs"
                                        >
                                          {tech}
                                        </Badge>
                                      ))}
                                    </div>

                                    <div className="space-y-3">
                                      <div className="flex items-start gap-3">
                                        <Target className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                                        <div>
                                          <span className="font-medium text-orange-300">Impact: </span>
                                          <span className="text-slate-200">{project.impact}</span>
                                        </div>
                                      </div>

                                      <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                          <Zap className="w-4 h-4 text-blue-400" />
                                          <span className="font-medium text-blue-300">Key Highlights:</span>
                                        </div>
                                        <div className="ml-6 space-y-2">
                                          {project.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-orange-400 mt-2 flex-shrink-0" />
                                              <span className="text-slate-300 text-sm leading-relaxed">
                                                {highlight}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
