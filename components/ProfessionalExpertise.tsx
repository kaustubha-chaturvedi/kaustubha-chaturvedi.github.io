"use client"

import { Badge } from "@/components/ui/badge"

interface Resume {
  id: string
  title: string
  description: string
  skills: Array<{ name: string; category: string }>
}

interface ProfessionalExpertiseProps {
  resumes: Resume[]
}

import React, { useEffect, useState } from "react"

export default function ProfessionalExpertise({ resumes }: ProfessionalExpertiseProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="lg:w-1/2 relative">
      <div className="space-y-4 lg:space-y-6 lg:transform lg:rotate-1 lg:hover:rotate-0 transition-all duration-700">
        <div className="space-y-4 lg:space-y-8">
          {resumes.map((resume, index) => (
            <div
              key={resume.id}
              className={`relative p-4 lg:p-8 rounded-2xl lg:rounded-3xl backdrop-blur-sm border-2 transition-all duration-500 lg:hover:scale-105 lg:transform ${
                index === 0 ? "lg:rotate-2 lg:hover:rotate-0" : "lg:-rotate-1 lg:hover:rotate-0"
              } ${
                index === 0
                  ? "bg-gradient-to-br from-blue-900/50 to-slate-800/30 border-blue-400/30 hover:border-blue-400/60"
                  : "bg-gradient-to-br from-orange-900/50 to-slate-800/30 border-orange-400/30 hover:border-orange-400/60"
              }`}
              style={{
                marginLeft: isLargeScreen ? (index === 0 ? "20px" : "-10px") : "0px",
                marginRight: isLargeScreen ? (index === 1 ? "15px" : "0px") : "0px",
              }}
            >
              <div
                className={`absolute -top-2 lg:-top-4 -right-2 lg:-right-4 w-4 h-4 lg:w-8 lg:h-8 rounded-full ${
                  index === 0 ? "bg-blue-400/20" : "bg-orange-400/20"
                } blur-sm animate-pulse`}
              />
              <div
                className={`absolute -bottom-1 lg:-bottom-2 -left-1 lg:-left-2 w-3 h-3 lg:w-6 lg:h-6 rounded-full ${
                  index === 0 ? "bg-orange-400/15" : "bg-blue-400/15"
                } blur-sm`}
              />

              <div className="flex justify-between items-start mb-4 lg:mb-6">
                <div className="flex-1 pr-2">
                  <h4
                    className={`text-lg lg:text-2xl font-bold mb-1 lg:mb-2 ${index === 0 ? "text-blue-300" : "text-orange-300"}`}
                  >
                    {resume.title}
                  </h4>
                  <p className="text-slate-300 text-xs lg:text-sm leading-relaxed">{resume.description}</p>
                </div>
              </div>

              <div className="space-y-3 lg:space-y-4">
                {Object.entries(
                  resume.skills.reduce(
                    (acc, skill) => {
                      if (!acc[skill.category]) acc[skill.category] = []
                      acc[skill.category].push(skill.name)
                      return acc
                    },
                    {} as Record<string, string[]>,
                  ),
                ).map(([category, skills]) => (
                  <div key={category} className="space-y-1 lg:space-y-2">
                    <h5
                      className={`text-xs lg:text-sm font-semibold uppercase tracking-wider ${
                        index === 0 ? "text-blue-200" : "text-orange-200"
                      }`}
                    >
                      {category}
                    </h5>
                    <div className="flex flex-wrap gap-1 lg:gap-2">
                      {skills.map((skill) => (
                        <Badge
                          key={skill}
                          className={`text-xs font-medium transition-all duration-200 lg:hover:scale-105 px-2 py-1 ${
                            index === 0
                              ? "bg-blue-800/40 text-blue-200 border-blue-400/40 hover:bg-blue-600/30"
                              : "bg-orange-800/40 text-orange-200 border-orange-400/40 hover:bg-orange-600/30"
                          }`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
