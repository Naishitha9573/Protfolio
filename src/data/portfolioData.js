import resumePdf from "../Naishitha_Resume (6).pdf";
import {
  FaAward,
  FaCloud,
  FaCode,
  FaDatabase,
  FaDocker,
  FaEnvelope,
  FaGraduationCap,
  FaJava,
  FaLaptopCode,
  FaPhone,
  FaRobot,
  FaToolbox,
  FaBrain,
} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import {
  SiCisco,
  SiGeeksforgeeks,
  SiGithub,
  SiGooglecloud,
  SiJavascript,
  SiJupyter,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiReact,
  SiScikitlearn,
  SiSpringboot,
  SiFastapi,
  SiPython,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const resumeAsset = resumePdf;

export const personalInfo = {
  name: "Naishitha Kandukuri",
  headline:
    "Computer Science and Business Systems undergraduate | Machine Learning | Full-Stack Development | Cloud Technologies",
  subtitle:
    "Experienced in building AI-powered web applications using React.js, FastAPI, Spring Boot, MySQL, Docker, and Generative AI.",
  location: "Vizianagaram, Andhra Pradesh",
  email: "naishithakandukuri2007@gmail.com",
  phone: "+91 9573424168",
  resume: resumePdf,
  github: "https://github.com/Naishitha9573",
  linkedin: "https://www.linkedin.com/in/naishitha-kandukuri",
};

export const careerObjective =
  "Computer Science and Business Systems undergraduate (CGPA: 8.9) with strong foundations in Machine Learning, Full-Stack Development, and Cloud Technologies. Experienced in building AI-powered web applications using React.js, FastAPI, Spring Boot, MySQL, Docker, and Generative AI. Passionate about developing scalable software solutions and Seeking a Software Development, Backend Development, or Machine Learning Internship where I can apply my technical skills to build scalable and impactful software solutions.";

export const education = {
  college: "SRKR Engineering College",
  degree: "B.Tech in Computer Science and Business Systems",
  duration: "2024–2028",
  cgpa: "8.9/10.0",
};

export const skills = [
  {
    title: "Programming Languages",
    icon: FaCode,
    items: ["Python", "Java", "C"],
  },
  {
    title: "Web Development",
    icon: FaLaptopCode,
    items: ["React.js", "FastAPI", "Spring Boot", "HTML", "CSS", "JavaScript", "REST APIs"],
  },
  {
    title: "Machine Learning",
    icon: FaBrain,
    items: ["Pandas", "NumPy", "Scikit-learn", "NLP", "TF-IDF", "SMOTE", "TensorFlow"],
  },
  {
    title: "AI & Generative AI",
    icon: FaRobot,
    items: ["Gemini API", "Generative AI"],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    items: ["MySQL", "SQL", "JDBC"],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    items: ["Docker", "Google Cloud Platform", "Git", "GitHub"],
  },
  {
    title: "Core Subjects",
    icon: FaGraduationCap,
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"],
  },
  {
    title: "Development Tools",
    icon: VscVscode,
    items: ["VS Code", "Jupyter Notebook", "Google Colab"],
  },
];

export const experiences = [
  {
    company: "Miracle Software Systems",
    role: "AI Summer Internship / Software Development Intern",
    duration: "May 2026",
    responsibilities: [
      "Developed full-stack applications using Java, Spring Boot, Python, FastAPI, React.js, and MySQL.",
      "Designed REST APIs and implemented CRUD operations.",
      "Integrated frontend applications with backend services.",
      "Implemented JWT authentication and worked on application performance optimization.",
      "Containerized applications using Docker and gained exposure to Google Cloud Platform (AWS).",
      "Tested, debugged, and optimized software modules to improve application performance and reliability.",
    ],
    technologies: ["Java", "Spring Boot", "Python", "FastAPI", "React.js", "MySQL", "REST APIs", "JWT", "Docker"],
  },
  {
    company: "Infosys Springboard",
    role: "Virtual Internship",
    duration: "8 Weeks",
    responsibilities: [
      "Developing an AI-powered Textile Waste Intelligence Platform.",
      "Building backend APIs and AI modules using Python, FastAPI, MySQL, JWT, and Machine Learning.",
      "Working on material classification, recyclability prediction, sustainability analytics, and Docker deployment.",
    ],
    technologies: ["Python", "FastAPI", "MySQL", "JWT", "Machine Learning", "Docker"],
  },
  {
    company: "Swecha",
    role: "Full Stack Vibe Coding Intern",
    duration: "2026",
    responsibilities: [
      "Developed responsive full-stack web applications using React.js, FastAPI, HTML, CSS, and JavaScript.",
      "Integrated frontend and backend modules and implemented REST APIs and application workflows.",
      "Used Git, GitHub, Docker, and AI-assisted development tools for collaborative development and containerized deployment.",
    ],
    technologies: ["React.js", "FastAPI", "HTML", "CSS", "JavaScript", "REST APIs", "Git", "GitHub", "Docker", "AI-assisted development"],
  },
];

export const projects = [
  {
    title: "Textile Waste Intelligence Platform",
    summary: "An AI-powered textile waste management platform for material intelligence, recyclability, and sustainability analytics.",
    features: [
      "Computer vision based textile/material classification and fabric type identification.",
      "Secure FastAPI REST APIs with JWT authentication.",
      "MySQL integration for users, inventory, and waste management.",
      "Recyclability prediction and AI-powered recycling recommendations.",
      "Sustainability scoring, waste analytics dashboard, and environmental impact assessment.",
    ],
    technologies: ["Python", "FastAPI", "React.js", "TensorFlow", "MySQL", "JWT", "Docker"],
    github: "https://github.com/Naishitha9573/TextileWasteManagement",
    githubPlaceholder: "Repository ",
    demo: null,
  },
  {
    title: "Smart Learning Platform",
    summary:
      "An AI-powered personalized learning platform built using React.js, FastAPI, MySQL, Gemini API, JWT, and Docker.",
    features: [
      "Secure authentication and course management.",
      "Integrated Gemini API for AI-generated learning content, quizzes, summaries, and explanations.",
      "Implemented FastAPI REST APIs and JWT authentication.",
      "Added MySQL-based progress tracking and Docker containerization.",
    ],
    technologies: ["React.js", "FastAPI", "MySQL", "Gemini API", "JWT", "Docker"],
    github: "https://github.com/Naishitha9573/SmartLearningPlatform",
    githubPlaceholder: "Repository URL needed",
    demo: null,
  },
  {
    title: "Fake News Detection Using Machine Learning",
    summary:
      "A machine learning project for fake news detection using Python, TF-IDF, Scikit-learn, and Logistic Regression.",
    features: [
      "Built an NLP-based fake news detection system using Python, TF-IDF, Scikit-learn, and Logistic Regression.",
      "Processed 40,000+ news articles.",
      "Achieved 92% classification accuracy.",
      "Implemented preprocessing, feature extraction, training, and evaluation.",
    ],
    technologies: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Logistic Regression"],
    github: "https://github.com/Naishitha9573/FakeNewsDetection",
    githubPlaceholder: "Repository URL needed",
    demo: null,
  },
];

export const certifications = [
  {
    title: "Amazon Future Engineer (AFE) Bootcamp",
    issuer: "Zuvy NavGurukul",
    note: "Top Performer",
    icon: FaAward,
  },
  {
    title: "Machine Learning Fundamentals",
    issuer: "GeeksforGeeks",
    icon: SiGeeksforgeeks,
  },
  {
    title: "Campus Mantri",
    issuer: "GeeksforGeeks",
    icon: SiGeeksforgeeks,
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "GeeksforGeeks",
    icon: FaJava,
  },
  {
    title: "Programming Essentials in Python",
    issuer: "Cisco",
    icon: SiPython,
  },
  {
    title: "Programming Essentials in C",
    issuer: "Cisco",
    icon: SiCisco,
  },
  {
    title: "Quantum Fundamentals",
    issuer: "WISER",
    icon: FaAward,
  },
];

export const contactLinks = [
  { label: "Email", value: personalInfo.email, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`, icon: FaEnvelope },
  { label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}`, icon: FaPhone },
  { label: "Location", value: personalInfo.location, href: null, icon: FaCloud },
  { label: "GitHub", value: personalInfo.github, href: personalInfo.github, icon: SiGithub },
  { label: "LinkedIn", value: personalInfo.linkedin, href: personalInfo.linkedin, icon: FaLinkedin },
];

export const socialIcons = [
  { label: "Email", icon: FaEnvelope, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}` },
  { label: "GitHub", icon: SiGithub, href: personalInfo.github },
  { label: "LinkedIn", icon: FaLinkedin, href: personalInfo.linkedin },
];
