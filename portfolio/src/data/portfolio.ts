export const personalInfo = {
  name: "Valentino Garcia Susini",
  title: "Full-Stack Software Developer",
  tagline: "Building robust systems from low-level C to modern web applications",
  email: "valentinogsusini@gmail.com",
  phone: "+43 676 750 41 83",
  location: "Vienna, Austria",
  citizenship: "Italian & Argentine Citizen",
  github: "https://github.com/ValGSgit",
  linkedin: "https://linkedin.com/in/valentinogs",
  summary: `Dedicated full-stack software developer with comprehensive expertise in systems programming (C, C++), scripting languages (Python, Bash), and web technologies (JavaScript, HTTP/1.1, CGI). Currently completing intensive training at 42 Vienna with hands-on experience in building production-grade software including HTTP servers with epoll-based I/O multiplexing, custom UNIX shells, and OpenGL graphics engines.

Strong problem-solving abilities combined with multilingual communication skills (Spanish native, English C1, German A2/B1) and proven adaptability in international team environments. Seeking software developer role to contribute technical expertise in systems programming, backend development, network programming, or full-stack applications.`,
};

export const skills = {
  programmingLanguages: [
    { name: "C", level: 95, category: "expert" },
    { name: "C++", level: 90, category: "expert" },
    { name: "Python", level: 85, category: "proficient" },
    { name: "JavaScript", level: 80, category: "proficient" },
    { name: "TypeScript", level: 75, category: "proficient" },
    { name: "Bash", level: 85, category: "proficient" },
    { name: "Fortran", level: 60, category: "intermediate" },
    { name: "HTML/CSS", level: 80, category: "proficient" },
    { name: "PHP", level: 65, category: "intermediate" },
  ],
  systemsAndTools: [
    "Linux/Unix Command Line",
    "Git & GitHub",
    "Docker",
    "Virtual Machines",
    "Shell Scripting",
    "Makefile",
    "CMake",
    "GitHub Actions",
    "VS Code",
    "Vim",
  ],
  webAndNetwork: [
    "HTTP/1.1 Protocol",
    "CGI Implementation",
    "RESTful APIs",
    "Network Programming",
    "I/O Multiplexing (epoll)",
    "Socket Programming",
    "Responsive Web Design",
    "Next.js",
    "React",
  ],
  coreCompetencies: [
    "Algorithms & Data Structures",
    "System Programming",
    "Graphics Programming (OpenGL)",
    "Memory Management",
    "Multi-threading",
    "Debugging & Troubleshooting",
    "Software Testing & QA",
    "Agile Methodology",
    "Code Review",
  ],
};

export const education = [
  {
    institution: "42 Vienna",
    degree: "Bachelor/RNCP 6 - Full Stack Software Developer",
    period: "In Progress",
    location: "Vienna, Austria",
    description: `The curriculum at 42 emphasizes peer learning, where students evaluate each other's work, enhancing communication and teamwork skills. It covers a wide array of technical subjects, including programming languages, algorithms, system administration, and cybersecurity.`,
    highlights: [
      "Peer-to-peer learning methodology fostering collaboration",
      "Project-based curriculum with real-world applications",
      "Focus on algorithms, system administration, and cybersecurity",
      "Built HTTP servers, custom shells, and graphics engines from scratch",
    ],
  },
  {
    institution: "Universidad de Palermo",
    degree: "Bachelor in System Analytics",
    period: "2023",
    location: "Buenos Aires, Argentina (Online)",
    description: "Foundation in systems analysis and software development principles.",
    highlights: [],
  },
  {
    institution: "E.S.R.N 123",
    degree: "High School Diploma - Specialized in Natural Sciences",
    period: "2019",
    location: "Bariloche, Patagonia, Argentina",
    description: "Strong foundation in scientific thinking and problem-solving.",
    highlights: [],
  },
];

export const experience = [
  {
    title: "Community Host",
    company: "The Social Hub",
    period: "May 2024 - Sep 2024",
    location: "Vienna, Austria",
    type: "Full-Time",
    responsibilities: [
      "Supervised and worked closely with front-of-house staff to deliver exceptional guest experiences",
      "Ensured seamless check-ins, restaurant/bar service, and community engagement",
      "Provided high-quality multilingual service (English, German, Spanish) with consistently positive guest feedback",
      "Effectively managed over 500 guests simultaneously, ensuring smooth operations and high satisfaction",
      "Resolved guest and team issues quickly, maintaining service quality under pressure",
      "Promoted collaborative environment and helped colleagues overcome challenges",
    ],
  },
  {
    title: "Bartender - Barista - Cook - Waiter",
    company: "DIE SCHANKWIRTSCHAFT im AUGARTEN",
    period: "Apr 2022 - Sep 2023",
    location: "Vienna, Austria",
    type: "Part-Time",
    responsibilities: [
      "Clear and uninterrupted process handling in fast-paced environment",
      "Preparing drinks and food on demand with attention to quality",
      "Managing set up, cleaning, and restocking operations",
      "Handling account closing at end of day with accuracy",
    ],
  },
  {
    title: "Food Delivery Courier",
    company: "Takeaway.at",
    period: "Sep 2021 - Nov 2022",
    location: "Vienna, Austria",
    type: "Part-Time",
    responsibilities: [
      "Developed excellent time management and route optimization skills",
      "Provided outstanding customer service in diverse situations",
      "Enhanced problem-solving abilities through real-time challenges",
      "Built physical stamina and organizational capabilities",
    ],
  },
];

export const projects = [
  {
    name: "webserv",
    description: "HTTP/1.1 compliant web server built from scratch in C++, featuring epoll-based I/O multiplexing for handling concurrent connections, CGI support, and configuration file parsing.",
    technologies: ["C++", "HTTP", "CGI", "epoll", "Socket Programming"],
    highlights: ["Production-grade architecture", "Multi-client handling", "Custom configuration system"],
    github: "https://github.com/ValGSgit/webserv",
    featured: true,
  },
  {
    name: "minishell",
    description: "Feature-rich UNIX shell implementation with support for pipes, redirections, environment variables, signal handling, and built-in commands.",
    technologies: ["C", "UNIX", "Shell", "Process Management", "Signals"],
    highlights: ["Readline integration", "Advanced parsing", "Error handling"],
    github: "https://github.com/ValGSgit/minishell",
    featured: true,
  },
  {
    name: "miniRT",
    description: "Ray tracing graphics engine with support for multiple geometric shapes, lighting, shadows, and reflections using OpenGL and custom mathematics library.",
    technologies: ["C", "OpenGL", "Ray Tracing", "Linear Algebra", "Graphics"],
    highlights: ["Real-time rendering", "Multiple light sources", "Material properties"],
    github: "https://github.com/ValGSgit/miniRT",
    featured: true,
  },
  {
    name: "philosophers",
    description: "Multi-threaded dining philosophers problem solution demonstrating mutex locks, deadlock prevention, and resource management.",
    technologies: ["C", "Threads", "Mutex", "Concurrency"],
    highlights: ["Deadlock-free design", "Resource optimization", "Thread safety"],
    github: "https://github.com/ValGSgit/philosophers",
    featured: false,
  },
  {
    name: "ft_printf",
    description: "Custom implementation of the printf function with support for various format specifiers and flags.",
    technologies: ["C", "Variadic Functions", "String Formatting"],
    highlights: ["Full format support", "Memory efficient", "Edge case handling"],
    github: "https://github.com/ValGSgit/ft_printf",
    featured: false,
  },
  {
    name: "push_swap",
    description: "Sorting algorithm implementation using two stacks with optimized operations for minimal moves.",
    technologies: ["C", "Algorithms", "Data Structures", "Optimization"],
    highlights: ["Efficient sorting", "Stack operations", "Algorithm design"],
    github: "https://github.com/ValGSgit/push_swap",
    featured: false,
  },
];

export const languages = [
  { name: "Spanish", level: "Native", description: "Mother tongue" },
  { name: "English", level: "Advanced (C1)", description: "Professional working proficiency" },
  { name: "German", level: "Intermediate (A2/B1)", description: "Actively improving" },
];

export const interests = [
  { icon: "🔒", name: "Cybersecurity", description: "Passionate about secure systems and ethical hacking" },
  { icon: "🌐", name: "Network Programming", description: "Building robust networked applications" },
  { icon: "🎮", name: "Graphics Programming", description: "Creating visual experiences with OpenGL" },
  { icon: "⚙️", name: "System Programming", description: "Low-level optimization and OS internals" },
  { icon: "🚀", name: "Backend Development", description: "Scalable server-side solutions" },
  { icon: "💻", name: "Full-Stack Development", description: "End-to-end application development" },
];

export const softSkills = [
  "Continuous and Self-Directed Learning",
  "Time Management & Organization",
  "Critical Thinking & Problem Solving",
  "Adaptability to New Technologies",
  "Project Planning & Execution",
  "Resilience and Perseverance",
  "Effective Multilingual Communication",
  "Team Collaboration & Conflict Resolution",
  "Attention to Detail & Code Quality",
];

export const certifications = [
  {
    name: "IBA Certificate",
    issuer: "International Bartender Association",
    year: "2019",
    description: "Professional bartending certification recognized internationally",
  },
];
