"use client";

import { useRef, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MapPin, Globe, Briefcase, Download, ArrowRight, FileText } from "lucide-react";
import dynamic from "next/dynamic";
import { personalInfo } from "@/data/portfolio";
import Typewriter from "@/components/ui/Typewriter";

// Dynamically import Three.js component to avoid SSR issues
const HeroBackground = dynamic(
  () => import("@/components/three/HeroBackground"),
  { ssr: false }
);

const typingTexts = [
  "Building robust systems from low-level C to modern web applications",
  "Crafting HTTP servers with epoll-based I/O multiplexing",
  "Developing custom UNIX shells and graphics engines",
  "Creating elegant solutions for complex problems",
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"
    >
      {/* 3D Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-zinc-950" />}>
        <HeroBackground />
      </Suspense>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        {/* Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-emerald-300">Open to Opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-white">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
            {personalInfo.name.split(" ")[0]}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-medium mb-6"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Tagline with Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto mb-8 h-16 md:h-12"
        >
          <Typewriter 
            texts={typingTexts}
            speed={50}
            deleteSpeed={30}
            pauseTime={3000}
            className="text-zinc-300"
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 backdrop-blur-sm rounded-full text-sm text-zinc-300">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 backdrop-blur-sm rounded-full text-sm text-zinc-300">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>{personalInfo.citizenship}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 backdrop-blur-sm rounded-full text-sm text-zinc-300">
            <Briefcase className="w-4 h-4 text-amber-400" />
            <span>42 Vienna Student</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            View My Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("resume")}
            className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl border border-zinc-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FileText className="w-5 h-5" />
            View Resume
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-transparent hover:bg-zinc-800 text-white font-semibold rounded-xl border border-zinc-600 hover:border-zinc-500 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {["C", "C++", "Python", "JavaScript", "TypeScript", "React"].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              className="px-4 py-2 text-sm bg-zinc-800/50 backdrop-blur-sm text-zinc-300 rounded-lg border border-zinc-700/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}
