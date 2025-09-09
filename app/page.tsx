import fs from "fs";
import path from "path";
import HJSON from "hjson";

import BackgroundEffectsWrapper from "@/components/BackgroundEffectsWrapper";
import HeroSection from "@/components/HeroSection";
import ProfessionalExpertise from "@/components/ProfessionalExpertise";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Portfolio() {
  const filePath = path.join(process.cwd(), "data", "portfolio.hjson");
  const file = fs.readFileSync(filePath, "utf8");
  const portfolioData = HJSON.parse(file);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden relative">
      <BackgroundEffectsWrapper />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <div className="relative pt-16">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                  <HeroSection profile={portfolioData.profile} />
                  <ProfessionalExpertise resumes={portfolioData.resumes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExperienceSection experiences={portfolioData.experiences} />
      <ProjectsSection projects={portfolioData.personalProjects} />
    </div>
  );
}
