"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-900 border-t border-zinc-800">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-500 to-amber-500 bg-clip-text text-transparent mb-2"
            >
              VGS
            </motion.div>
            <p className="text-zinc-400 text-sm">
              {personalInfo.title}
            </p>
            <p className="text-zinc-500 text-sm mt-1">
              {personalInfo.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-zinc-400 hover:text-white transition-all"
              aria-label="Back to top"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <p>
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> using Next.js & Three.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
