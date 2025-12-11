"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Download, 
  Printer, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Languages,
  Code,
  ChevronRight,
  ExternalLink,
  MapPin,
  Calendar,
  Star,
  LucideIcon
} from "lucide-react";
import { personalInfo, education, experience, certifications, languages, skills } from "@/data/portfolio";

type TabId = "overview" | "experience" | "education" | "skills";

interface Tab {
  id: TabId;
  name: string;
  icon: LucideIcon;
}

const tabs: Tab[] = [
  { id: "overview", name: "Overview", icon: Star },
  { id: "experience", name: "Experience", icon: Briefcase },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "skills", name: "Skills", icon: Code },
];

// Color styles moved outside component for performance optimization
const colorStyles = {
  emerald: {
    gradient: "from-emerald-500 to-cyan-600",
    border: "border-emerald-500/30",
    hoverBorder: "hover:border-emerald-500/50",
    badgeBg: "bg-emerald-500/20",
    text: "text-emerald-400",
  },
  green: {
    gradient: "from-green-500 to-emerald-600",
    border: "border-green-500/30",
    hoverBorder: "hover:border-green-500/50",
    badgeBg: "bg-green-500/20",
    text: "text-green-400",
  },
  cyan: {
    gradient: "from-cyan-500 to-blue-600",
    border: "border-cyan-500/30",
    hoverBorder: "hover:border-cyan-500/50",
    badgeBg: "bg-cyan-500/20",
    text: "text-cyan-400",
  },
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(barRef, { once: true });
  
  const getColor = (level: number) => {
    if (level >= 90) return "from-emerald-500 to-cyan-400";
    if (level >= 80) return "from-green-500 to-emerald-400";
    if (level >= 70) return "from-yellow-500 to-amber-400";
    return "from-orange-500 to-amber-400";
  };

  return (
    <div ref={barRef} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-zinc-300">{name}</span>
        <span className="text-sm text-zinc-500">{level}%</span>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${getColor(level)} rounded-full relative`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: [0, 1, 0] } : {}}
            transition={{ duration: 0.5, delay: delay + 0.8 }}
            className="absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-white/30"
          />
        </motion.div>
      </div>
    </div>
  );
};

const TimelineItem = ({ 
  title, 
  subtitle, 
  period, 
  location, 
  description, 
  highlights, 
  index,
  color = "emerald"
}: { 
  title: string; 
  subtitle: string; 
  period: string; 
  location: string; 
  description?: string; 
  highlights: string[]; 
  index: number;
  color?: "emerald" | "green" | "cyan";
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: "-50px" });

  // Use the shared colorStyles object
  const styles = colorStyles[color];

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className={`absolute left-[11px] top-8 bottom-0 w-px bg-gradient-to-b ${styles.gradient} opacity-30 group-last:hidden`} />
      
      {/* Timeline dot */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        className={`absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-to-r ${styles.gradient} flex items-center justify-center`}
      >
        <div className="w-2 h-2 rounded-full bg-zinc-950" />
      </motion.div>

      <div className={`bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border ${styles.border} ${styles.hoverBorder} transition-all duration-300 hover:transform hover:translate-x-2`}>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`inline-flex items-center gap-1 px-3 py-1 ${styles.badgeBg} ${styles.text} text-xs font-medium rounded-full`}>
            <Calendar className="w-3 h-3" />
            {period}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-700/50 text-zinc-400 text-xs font-medium rounded-full">
            <MapPin className="w-3 h-3" />
            {location}
          </span>
        </div>
        
        <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
        <p className={`${styles.text} font-medium mb-3`}>{subtitle}</p>
        
        {description && (
          <p className="text-zinc-400 text-sm mb-3 leading-relaxed">{description}</p>
        )}
        
        {highlights.length > 0 && (
          <ul className="space-y-2">
            {highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                <ChevronRight className={`w-4 h-4 ${styles.text} flex-shrink-0 mt-0.5`} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default function ResumeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      ref={containerRef}
      id="resume"
      className="relative py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interactive <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Explore my professional journey with this interactive resume
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.a
            href="https://valgsgi.github.io/assets/documents/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all"
          >
            <Download className="w-5 h-5" />
            Download PDF
            <ExternalLink className="w-4 h-4 opacity-70" />
          </motion.a>
          
          <motion.button
            onClick={handlePrint}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl border border-zinc-700 transition-all"
          >
            <Printer className="w-5 h-5" />
            Print Resume
          </motion.button>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-white border border-zinc-700/50"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{tab.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Personal Info Card */}
              <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Avatar/Initials */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-emerald-500/30">
                    VGS
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h3>
                    <p className="text-xl text-emerald-400 font-medium mb-4">{personalInfo.title}</p>
                    <p className="text-zinc-400 leading-relaxed mb-6">{personalInfo.summary.split('\n\n')[0]}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <MapPin className="w-5 h-5 text-emerald-400" />
                        <span>{personalInfo.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <Languages className="w-5 h-5 text-cyan-400" />
                        <span>{personalInfo.citizenship}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Programming Languages", value: "9+", icon: Code, colorClass: "text-emerald-400" },
                  { label: "Years at 42 Vienna", value: "2+", icon: GraduationCap, colorClass: "text-cyan-400" },
                  { label: "Languages Spoken", value: "3", icon: Languages, colorClass: "text-amber-400" },
                  { label: "Projects Completed", value: "10+", icon: Briefcase, colorClass: "text-green-400" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50 text-center hover:border-emerald-500/30 transition-all"
                  >
                    <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.colorClass}`} />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-zinc-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Languages */}
              <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Languages className="w-6 h-6 text-amber-400" />
                  Languages
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="text-center p-4 bg-zinc-700/30 rounded-xl"
                    >
                      <div className="text-3xl mb-2">
                        {lang.name === "Spanish" ? "🇪🇸" : lang.name === "English" ? "🇬🇧" : "🇩🇪"}
                      </div>
                      <h5 className="font-semibold text-white">{lang.name}</h5>
                      <p className={`text-sm ${
                        lang.level.includes("Native") ? "text-emerald-400" : 
                        lang.level.includes("C1") ? "text-green-400" : "text-yellow-400"
                      }`}>{lang.level}</p>
                      <p className="text-xs text-zinc-500 mt-1">{lang.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-400" />
                  Certifications
                </h4>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-zinc-700/30 rounded-xl"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">{cert.name}</h5>
                        <p className="text-sm text-amber-400">{cert.issuer}</p>
                        <p className="text-xs text-zinc-500">{cert.year}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-3xl mx-auto">
                {experience.map((exp, index) => (
                  <TimelineItem
                    key={`${exp.company}-${exp.title}`}
                    title={exp.title}
                    subtitle={exp.company}
                    period={exp.period}
                    location={exp.location}
                    highlights={exp.responsibilities}
                    index={index}
                    color="green"
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-3xl mx-auto">
                {education.map((edu, index) => (
                  <TimelineItem
                    key={edu.institution}
                    title={edu.degree}
                    subtitle={edu.institution}
                    period={edu.period}
                    location={edu.location}
                    description={edu.description}
                    highlights={edu.highlights}
                    index={index}
                    color="emerald"
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Programming Languages */}
                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Code className="w-5 h-5 text-emerald-400" />
                    Programming Languages
                  </h4>
                  {skills.programmingLanguages.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={index * 0.1}
                    />
                  ))}
                </div>

                {/* Other Skills */}
                <div className="space-y-6">
                  {/* Systems & Tools */}
                  <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
                    <h4 className="text-lg font-bold text-white mb-4">Systems & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.systemsAndTools.map((tool, index) => (
                        <motion.span
                          key={tool}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className="px-3 py-1.5 bg-zinc-700/50 text-zinc-300 rounded-lg text-sm hover:bg-emerald-500/20 hover:text-emerald-400 transition-all cursor-default"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Web & Network */}
                  <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
                    <h4 className="text-lg font-bold text-white mb-4">Web & Network</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.webAndNetwork.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className="px-3 py-1.5 bg-zinc-700/50 text-zinc-300 rounded-lg text-sm hover:bg-cyan-500/20 hover:text-cyan-400 transition-all cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Core Competencies */}
                  <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
                    <h4 className="text-lg font-bold text-white mb-4">Core Competencies</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.coreCompetencies.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className="px-3 py-1.5 bg-zinc-700/50 text-zinc-300 rounded-lg text-sm hover:bg-green-500/20 hover:text-green-400 transition-all cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume, #resume * {
            visibility: visible;
          }
          #resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
          }
          .bg-zinc-800\\/50,
          .bg-zinc-700\\/50,
          .bg-zinc-700\\/30 {
            background: #f5f5f5 !important;
            border-color: #e5e5e5 !important;
          }
          .text-white { color: black !important; }
          .text-zinc-400, .text-zinc-500 { color: #666 !important; }
          .text-emerald-400, .text-cyan-400, .text-green-400 { color: #059669 !important; }
          button, a[href*="pdf"] { display: none !important; }
        }
      `}</style>
    </section>
  );
}
