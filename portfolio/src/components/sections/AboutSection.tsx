"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Wrench, Shield, Users, Lightbulb, Globe } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const highlights = [
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Committed to completing my 42 Vienna curriculum and launching my professional development career.",
    color: "blue",
  },
  {
    icon: Wrench,
    title: "Technical Depth",
    description: "From low-level C/C++ systems programming to modern web development with React and Next.js.",
    color: "purple",
  },
  {
    icon: Shield,
    title: "Problem Solver",
    description: "Tackling complex challenges from HTTP server implementation to ray tracing graphics engines.",
    color: "green",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Experience in peer-to-peer learning and collaborative development at 42 Vienna.",
    color: "orange",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learner",
    description: "Self-directed learning across multiple programming paradigms and technologies.",
    color: "pink",
  },
  {
    icon: Globe,
    title: "Multilingual",
    description: "Fluent in Spanish, English, and German - enabling effective international collaboration.",
    color: "cyan",
  },
];

const colorClasses = {
  blue: "from-emerald-500 to-emerald-600",
  purple: "from-cyan-500 to-cyan-600",
  green: "from-green-500 to-green-600",
  orange: "from-orange-500 to-orange-600",
  pink: "from-pink-500 to-pink-600",
  cyan: "from-cyan-500 to-cyan-600",
};

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-24 bg-zinc-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A dedicated developer with a passion for building robust systems and solving complex problems
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl" />
            <div className="relative bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  I&apos;m <span className="text-emerald-400 font-semibold">{personalInfo.name}</span>, a dedicated full-stack software developer from Argentina, now building my career in Vienna, Austria.
                </p>
                <p>
                  Through the rigorous peer-to-peer learning methodology at <span className="text-cyan-400 font-semibold">42 Vienna</span>, I&apos;ve developed strong programming skills across multiple domains—from low-level system programming to web development and graphics.
                </p>
                <p>
                  My hands-on experience includes building HTTP servers from scratch, implementing custom shells with advanced features, and creating 3D graphics engines with OpenGL.
                </p>
                <p>
                  I&apos;m actively seeking opportunities to contribute my diverse skill set to innovative teams building impactful software solutions.
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-zinc-800">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                    9+
                  </div>
                  <div className="text-sm text-zinc-500">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                    20+
                  </div>
                  <div className="text-sm text-zinc-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                    3
                  </div>
                  <div className="text-sm text-zinc-500">Spoken Languages</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${colorClasses[item.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-2xl p-8 border border-emerald-500/30"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            🎯 Current Focus
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white">Completing 42 Curriculum</h4>
                <p className="text-sm text-zinc-400">Building expertise in full-stack development</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white">Seeking Opportunities</h4>
                <p className="text-sm text-zinc-400">Ready to contribute in a professional environment</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white">Exploring New Tech</h4>
                <p className="text-sm text-zinc-400">Cybersecurity & emerging technologies</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
