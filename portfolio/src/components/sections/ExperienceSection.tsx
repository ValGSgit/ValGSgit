"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import { experience, education } from "@/data/portfolio";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-24 bg-gray-900"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My journey through education and professional experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                🎓
              </div>
              Education
            </motion.h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-gray-900" />

                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{edu.institution}</h4>
                    <p className="text-purple-400 font-medium mb-2">{edu.degree}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                    {edu.description && (
                      <p className="text-gray-400 text-sm mb-3">{edu.description}</p>
                    )}
                    {edu.highlights.length > 0 && (
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                            <ChevronRight className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              Work Experience
            </motion.h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-emerald-500 to-transparent" />

              {experience.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.title}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 border-4 border-gray-900" />

                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/30 transition-all">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                        {exp.period}
                      </span>
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{exp.title}</h4>
                    <p className="text-emerald-400 font-medium mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <ul className="space-y-1">
                      {exp.responsibilities.slice(0, 4).map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Languages</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center">
              <span className="text-4xl mb-3 block">🇪🇸</span>
              <h4 className="text-lg font-bold text-white">Spanish</h4>
              <p className="text-blue-400 font-medium">Native</p>
              <p className="text-sm text-gray-500 mt-1">Mother tongue</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center">
              <span className="text-4xl mb-3 block">🇬🇧</span>
              <h4 className="text-lg font-bold text-white">English</h4>
              <p className="text-green-400 font-medium">Advanced (C1)</p>
              <p className="text-sm text-gray-500 mt-1">Professional proficiency</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center">
              <span className="text-4xl mb-3 block">🇩🇪</span>
              <h4 className="text-lg font-bold text-white">German</h4>
              <p className="text-yellow-400 font-medium">Intermediate (A2/B1)</p>
              <p className="text-sm text-gray-500 mt-1">Actively improving</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
