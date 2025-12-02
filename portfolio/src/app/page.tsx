"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";

// Dynamically import the chatbot to avoid SSR issues
const AIChatbot = dynamic(() => import("@/components/ui/AIChatbot"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <AIChatbot />
    </main>
  );
}
