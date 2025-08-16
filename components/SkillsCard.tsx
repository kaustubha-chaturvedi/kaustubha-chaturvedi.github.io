"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

interface Skill {
  name: string
  category: string
  level: number
}

interface SkillsCardProps {
  skills: Skill[]
  onDownloadResume: () => void // Added prop for download action
}

export default function SkillsCard({ skills, onDownloadResume }: SkillsCardProps) {
  // Get unique categories from skills
  const categories = [...new Set(skills.map((skill) => skill.category))]

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <h3 className="text-lg font-semibold text-white">Skills</h3>
        <Button
          variant="ghost"
          size="sm"
          className="text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700"
          onClick={onDownloadResume}
          title="Download Resume"
        >
          <FileText className="w-4 h-4" />
          Resume
        </Button>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        {/* Skills by Category */}
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-slate-300 mb-2">{category}</h4>
              <div className="flex flex-wrap gap-1">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs border border-slate-700"
                      title={`${skill.level}% proficiency`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
