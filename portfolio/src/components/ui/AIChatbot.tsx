"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, Loader2 } from "lucide-react";
import { personalInfo, skills, education, experience, projects } from "@/data/portfolio";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "What are your main technical skills?",
  "Tell me about your projects",
  "What is your educational background?",
  "What languages do you speak?",
  "How can I contact you?",
];

// Simple AI response generator based on keywords
function generateResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  // Skills related
  if (message.includes("skill") || message.includes("technology") || message.includes("tech stack") || message.includes("programming")) {
    const topSkills = skills.programmingLanguages.slice(0, 5).map(s => s.name).join(", ");
    return `I have expertise in several programming languages and technologies! My strongest skills include **${topSkills}**.\n\nFor systems programming, I work extensively with C and C++. I've built HTTP servers, custom shells, and graphics engines. For web development, I use JavaScript/TypeScript, React, and Next.js.\n\nI'm also proficient with tools like Git, Docker, Linux, and various build systems like Make and CMake.`;
  }
  
  // Projects related
  if (message.includes("project") || message.includes("portfolio") || message.includes("work") || message.includes("built")) {
    const featuredProjects = projects.filter(p => p.featured);
    let response = "I've worked on several exciting projects! Here are my featured ones:\n\n";
    featuredProjects.forEach(p => {
      response += `**${p.name}**: ${p.description}\n\n`;
    });
    response += "Would you like to know more about any specific project?";
    return response;
  }
  
  // Education related
  if (message.includes("education") || message.includes("study") || message.includes("school") || message.includes("university") || message.includes("42") || message.includes("degree")) {
    return `I'm currently completing my studies at **42 Vienna**, pursuing a Bachelor/RNCP 6 in Full Stack Software Development. The 42 curriculum is unique - it's entirely project-based with peer-to-peer learning.\n\nI also have a Bachelor in System Analytics from **Universidad de Palermo** (2023) and completed my high school with a specialization in Natural Sciences in **Patagonia, Argentina**.`;
  }
  
  // Contact related
  if (message.includes("contact") || message.includes("email") || message.includes("reach") || message.includes("hire") || message.includes("phone")) {
    return `I'd love to connect! Here's how you can reach me:\n\n📧 **Email**: ${personalInfo.email}\n📱 **Phone**: ${personalInfo.phone}\n💼 **LinkedIn**: linkedin.com/in/valentinogs\n🐙 **GitHub**: github.com/ValGSgit\n📍 **Location**: ${personalInfo.location}\n\nFeel free to reach out for opportunities, collaborations, or just to say hello!`;
  }
  
  // Languages related
  if (message.includes("language") || message.includes("speak") || message.includes("spanish") || message.includes("english") || message.includes("german")) {
    return `I'm multilingual! 🌍\n\n🇪🇸 **Spanish**: Native speaker (mother tongue)\n🇬🇧 **English**: Advanced (C1) - Professional working proficiency\n🇩🇪 **German**: Intermediate (A2/B1) - Actively improving\n\nThis helps me work effectively in international teams and communicate with diverse clients.`;
  }
  
  // Experience related
  if (message.includes("experience") || message.includes("job") || message.includes("work experience") || message.includes("career")) {
    const latestExp = experience[0];
    return `While building my software development career, I've gained valuable professional experience:\n\n**${latestExp.title}** at ${latestExp.company} (${latestExp.period})\n${latestExp.responsibilities.slice(0, 3).map(r => `• ${r}`).join('\n')}\n\nThese roles developed my communication, problem-solving, and time management skills - all essential for software development!`;
  }
  
  // About/Introduction
  if (message.includes("about") || message.includes("who are you") || message.includes("introduce") || message.includes("tell me about yourself")) {
    return `Hi! I'm **${personalInfo.name}**, a ${personalInfo.title} based in ${personalInfo.location}.\n\n${personalInfo.summary.split('.').slice(0, 2).join('.')}.\n\nI'm passionate about building robust software, from low-level systems to modern web applications. Currently seeking opportunities to contribute and grow in a professional development environment!`;
  }
  
  // Location related
  if (message.includes("where") || message.includes("location") || message.includes("vienna") || message.includes("live")) {
    return `I'm based in **${personalInfo.location}** 🇦🇹\n\nI hold dual citizenship (Italian & Argentine), which allows me to work anywhere in the EU. I moved to Vienna to pursue my software development career and complete my studies at 42 Vienna.`;
  }
  
  // Interests
  if (message.includes("interest") || message.includes("passion") || message.includes("hobby") || message.includes("like")) {
    return `I'm passionate about several areas in tech:\n\n🔒 **Cybersecurity** - Secure systems and ethical hacking\n🌐 **Network Programming** - Building networked applications\n🎮 **Graphics Programming** - Creating visual experiences with OpenGL\n⚙️ **System Programming** - Low-level optimization\n🚀 **Backend Development** - Scalable server solutions\n\nI love tackling complex problems and learning new technologies!`;
  }
  
  // Greeting
  if (message.includes("hello") || message.includes("hi") || message.includes("hey") || message === "hi" || message === "hello") {
    return `Hello! 👋 I'm Valentino's AI assistant. I can tell you about:\n\n• Technical skills and technologies\n• Projects and portfolio\n• Education and background\n• Professional experience\n• Contact information\n\nWhat would you like to know?`;
  }
  
  // Thanks
  if (message.includes("thank") || message.includes("thanks")) {
    return `You're welcome! 😊 Is there anything else you'd like to know about Valentino's skills, projects, or experience?`;
  }
  
  // Default response
  return `I'd be happy to help you learn more about Valentino! I can tell you about:\n\n• **Skills** - Programming languages and technologies\n• **Projects** - Featured work and portfolio\n• **Education** - Academic background and 42 Vienna\n• **Experience** - Professional history\n• **Contact** - How to get in touch\n\nWhat interests you most?`;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `Hi! 👋 I'm Valentino's AI assistant. I can help you learn about his skills, projects, experience, and more. What would you like to know?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 700));

    const response = generateResponse(userMessage.content);

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, assistantMessage]);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    setTimeout(() => {
      handleSend();
    }, 100);
  };

  // Format message content (basic markdown support) - safe approach
  const formatMessage = (content: string): React.ReactNode[] => {
    const lines = content.split('\n');
    const result: React.ReactNode[] = [];
    
    lines.forEach((line, lineIndex) => {
      if (lineIndex > 0) {
        result.push(<br key={`br-${lineIndex}`} />);
      }
      
      // Parse bold text safely using regex split
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const lineElements = parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const boldText = part.slice(2, -2);
          return (
            <strong key={`${lineIndex}-${partIndex}`} className="font-semibold text-emerald-400">
              {boldText}
            </strong>
          );
        }
        return <span key={`${lineIndex}-${partIndex}`}>{part}</span>;
      });
      
      result.push(<span key={`line-${lineIndex}`}>{lineElements}</span>);
    });
    
    return result;
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6 text-white" />
              <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[600px] bg-zinc-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zinc-700/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-emerald-600 to-cyan-600 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">AI Portfolio Assistant</h3>
                <p className="text-xs text-white/80">Ask me about Valentino</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[350px]">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === "user"
                        ? "bg-emerald-500"
                        : "bg-gradient-to-br from-cyan-500 to-emerald-500"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      message.role === "user"
                        ? "bg-emerald-500 text-white rounded-tr-sm"
                        : "bg-zinc-800 text-zinc-100 rounded-tl-sm"
                    }`}
                  >
                    {formatMessage(message.content)}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-sm">
                    <Loader2 className="w-5 h-5 text-emerald-400 animate-spin" />
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-zinc-500 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.slice(0, 3).map((question, i) => (
                    <button
                      key={i}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="text-xs px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-full transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-zinc-700/50">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about skills, projects, experience..."
                  className="flex-1 bg-zinc-800 text-white text-sm px-4 py-2.5 rounded-xl border border-zinc-700 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder-zinc-500"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="p-2.5 bg-emerald-500 hover:bg-emerald-600 disabled:bg-zinc-700 disabled:cursor-not-allowed rounded-xl transition-colors"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
