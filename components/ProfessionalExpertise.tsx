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

export default function ProfessionalExpertise({ resumes }: ProfessionalExpertiseProps) {
  return (
    <div className="lg:w-1/2 relative">
      <div className="space-y-6 transform lg:rotate-1 lg:hover:rotate-0 lg:transition-all duration-700">
        <div className="space-y-8">
          {resumes.map((resume, index) => (
            <div
              key={resume.id}
              className={`relative p-8 rounded-3xl backdrop-blur-sm border-2 transition-all duration-500 hover:scale-105 transform ${index === 0 ? "lg:rotate-2 lg:hover:rotate-0" : "lg:-rotate-1 lg:hover:rotate-0"
                } ${index === 0
                  ? "bg-gradient-to-br from-blue-900/50 to-slate-800/30 border-blue-400/30 hover:border-blue-400/60"
                  : "bg-gradient-to-br from-orange-900/50 to-slate-800/30 border-orange-400/30 hover:border-orange-400/60"
                }`}
              style={{
                marginLeft: index === 0 ? "20px" : "-10px",
                marginRight: index === 1 ? "15px" : "0px",
              }}
            >
              <div
                className={`absolute -top-4 -right-4 w-8 h-8 rounded-full ${index === 0 ? "bg-blue-400/20" : "bg-orange-400/20"
                  } blur-sm animate-pulse`}
              />
              <div
                className={`absolute -bottom-2 -left-2 w-6 h-6 rounded-full ${index === 0 ? "bg-orange-400/15" : "bg-blue-400/15"
                  } blur-sm`}
              />

              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className={`text-2xl font-bold mb-2 ${index === 0 ? "text-blue-300" : "text-orange-300"}`}>
                    {resume.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{resume.description}</p>
                </div>
              </div>

              <div className="space-y-4">
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
                  <div key={category} className="space-y-2">
                    <h5
                      className={`text-sm font-semibold uppercase tracking-wider ${index === 0 ? "text-blue-200" : "text-orange-200"
                        }`}
                    >
                      {category}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge
                          key={skill}
                          className={`text-xs font-medium transition-all duration-200 hover:scale-105 ${index === 0
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
