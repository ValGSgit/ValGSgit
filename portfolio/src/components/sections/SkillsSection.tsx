"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Globe, Cpu, Terminal } from "lucide-react";
import { skills } from "@/data/portfolio";

const categories = [
  { id: "languages", name: "Languages", icon: Code },
  { id: "systems", name: "Systems & Tools", icon: Terminal },
  { id: "web", name: "Web & Network", icon: Globe },
  { id: "core", name: "Core Skills", icon: Cpu },
];

const getLevelColor = (level: number) => {
  if (level >= 90) return "from-emerald-500 to-cyan-400";
  if (level >= 80) return "from-green-500 to-emerald-400";
  if (level >= 70) return "from-yellow-500 to-amber-400";
  return "from-orange-500 to-red-400";
};

const getLevelLabel = (category: string) => {
  switch (category) {
    case "expert":
      return { label: "Expert", color: "bg-emerald-500/20 text-emerald-400" };
    case "proficient":
      return { label: "Proficient", color: "bg-green-500/20 text-green-400" };
    case "intermediate":
      return { label: "Intermediate", color: "bg-yellow-500/20 text-yellow-400" };
    default:
      return { label: "Learning", color: "bg-cyan-500/20 text-cyan-400" };
  }
};

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("languages");

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative py-24 bg-zinc-900"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-zinc-800 text-zinc-400 hover:bg-gray-750 hover:text-white"
              }`}
            >
              <cat.icon className="w-5 h-5" />
              <span>{cat.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Programming Languages with Progress Bars */}
          {activeCategory === "languages" && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {skills.programmingLanguages.map((skill, index) => {
                  const levelInfo = getLevelLabel(skill.category);
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-semibold text-white">{skill.name}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${levelInfo.color}`}>
                            {levelInfo.label}
                          </span>
                        </div>
                        <span className="text-sm text-zinc-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                          className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Systems & Tools */}
          {activeCategory === "systems" && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.systemsAndTools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-zinc-800/50 backdrop-blur-sm p-4 rounded-xl border border-zinc-700/50 hover:border-cyan-500/50 transition-all cursor-default text-center"
                  >
                    <Terminal className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <span className="text-sm text-zinc-300">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Web & Network */}
          {activeCategory === "web" && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.webAndNetwork.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-zinc-800/50 backdrop-blur-sm p-4 rounded-xl border border-zinc-700/50 hover:border-emerald-500/50 transition-all cursor-default text-center"
                  >
                    <Globe className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                    <span className="text-sm text-zinc-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Core Competencies */}
          {activeCategory === "core" && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.coreCompetencies.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-zinc-800/50 backdrop-blur-sm p-4 rounded-xl border border-zinc-700/50 hover:border-green-500/50 transition-all cursor-default text-center"
                  >
                    <Cpu className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <span className="text-sm text-zinc-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Skills Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-sm text-zinc-400">Expert (90%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm text-zinc-400">Proficient (80%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-sm text-zinc-400">Intermediate (70%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span className="text-sm text-zinc-400">Learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
