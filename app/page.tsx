import fs from "fs";
import path from "path";
import HJSON from "hjson";

import TopNavigation from "@/components/TopNavigation";
import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  const filePath = path.join(process.cwd(), "data", "portfolio.hjson");
  const file = fs.readFileSync(filePath, "utf8");
  const portfolioData = HJSON.parse(file);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white overflow-hidden">
      <TopNavigation />

      <main className="blueprint-grid min-h-screen">
        <HeroSection profile={portfolioData.profile} />
        <ExperienceSection experiences={portfolioData.experiences} />
        <TechStackSection
          skills={portfolioData.resumes[0].skills}
        />
        <ProjectsSection projects={portfolioData.personalProjects} />
      </main>

      <Footer />
    </div>
  );
}
