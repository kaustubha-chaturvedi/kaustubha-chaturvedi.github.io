"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, Map, MapPin } from "lucide-react"

interface HeroSectionProps {
  profile: {
    picture: string
    name: string
    title: string
    titleShort: string
    location: string
    company: string
    bio: string
    email: string
    github: string
    linkedin: string
    resume: string
  }
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <div className="lg:w-1/2 space-y-8">
      <div className="flex flex-col items-center gap-8 mb-8">
        <div className="relative">
      <div className="w-44 h-44 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-600/30 to-slate-700/30 border-4 border-blue-500/60 overflow-hidden shadow-2xl shadow-blue-600/40 hover:shadow-orange-500/40 transition-all duration-500">
            <img
              src={profile.picture}
              alt={profile.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <div className="relative text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
          <span className="block text-slate-100">{profile.name.split(" ")[0]}</span>
          <span className="block text-blue-400 bg-gradient-to-r from-blue-400 via-orange-400 to-amber-400 bg-clip-text">
            {profile.name.split(" ")[1]}
          </span>
        </h1>

        <div className="absolute -right-4 md:-right-8 top-4 md:top-8 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-br from-blue-600/20 to-orange-600/20 rounded-full blur-xl animate-pulse" />
      </div>

      <div className="space-y-6 text-center">
        <p className="text-2xl text-orange-300 font-light tracking-wide flex justify-center gap-3">
          {profile.titleShort}
        </p>
        <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">{profile.bio}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button
          className="bg-slate-700 hover:bg-slate-600 text-white border-0 shadow-lg hover:shadow-slate-600/25 transition-all duration-300"
          onClick={() => window.open(`mailto:${profile.email}`, "_blank")}
        >
          <Mail className="w-5 h-5" />
          Connect
        </Button>
        <Button
          variant="outline"
          className="border-blue-400/50 text-blue-300 hover:bg-blue-600/20 bg-slate-900/50 hover:text-blue-200"
          onClick={() => window.open(profile.github, "_blank")}
        >
          <Github className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          className="border-orange-400/50 text-orange-300 hover:bg-orange-600/20 bg-slate-900/50 hover:text-orange-200"
          onClick={() => window.open(profile.linkedin, "_blank")}
        >
          <Linkedin className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          className="border-pink-400/50 text-pink-300 hover:bg-pink-600/20 bg-slate-900/50 hover:text-pink-200"
          onClick={() => window.open(profile.resume, "_blank")}
        >
          <Download className="w-5 h-5" />
          Resume
        </Button>
      </div>
    </div>
  )
}
