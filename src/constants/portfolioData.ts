/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Github, 
  Linkedin, 
  Mail, 
  Globe, 
  Code2, 
  Database, 
  Network, 
  Briefcase, 
  GraduationCap, 
  Cpu,
  Monitor,
  Layout,
  Server
} from 'lucide-react';

export const portfolioData = {
  profile: {
    name: "Mitiku Abera",
    title: "Information Technology Student | Developer",
    tagline: "Building scalable and efficient digital solutions for the physical and digital world.",
    bio: "I am a passionate Information Technology student at Haramaya University with a deep interest in software development, distributed systems, and networking. I love solving complex problems and turning ideas into functional digital realities.",
    location: "Haramaya University, Ethiopia",
    email: "mitikuabuye633@gmail.com",
    image: "/profile.jpg", // Placeholder for uploaded image
    github: "https://github.com/mitiku-abera", // Placeholder - adjust if real URL provided
    linkedin: "https://linkedin.com/in/mitiku-abera", // Placeholder
    cvUrl: "#", // Placeholder
  },
  skills: [
    {
      category: "Programming",
      icon: Code2,
      items: ["Python", "JavaScript", "PHP"]
    },
    {
      category: "Web Development",
      icon: Globe,
      items: ["React", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      category: "Databases",
      icon: Database,
      items: ["MySQL"]
    },
    {
      category: "Networking & Systems",
      icon: Network,
      items: ["Networking Solutions", "Distributed Systems"]
    },
    {
      category: "Tools",
      icon: Cpu,
      items: ["Git", "GitHub", "VS Code"]
    }
  ],
  projects: [
    {
      title: "Online Vacancy Recruitment System",
      description: "A comprehensive platform designed to streamline the hiring process, connecting job seekers with recruiters efficiently.",
      tech: ["PHP", "MySQL", "JavaScript", "CSS"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "PC Storage",
      description: "An E-commerce system designed for hardware components and PC retail management with inventory tracking.",
      tech: ["React", "CSS", "MySQL"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Distributed Systems Assignments",
      description: "A series of academic projects implementing core distributed systems concepts and communication protocols.",
      tech: ["Python", "Network Protocols"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop"
    }
  ],
  education: [
    {
      school: "Haramaya University",
      degree: "B.Sc. in Information Technology",
      department: "CCI | Department of Information Technology",
      period: "2021 - Present",
      description: "Focusing on software development, database systems, and networking security."
    }
  ],
  services: [
    {
      title: "Web Development",
      icon: Layout,
      description: "Creating modern, responsive, and performance-optimized web applications."
    },
    {
      title: "System Design",
      icon: Monitor,
      description: "Architecting scalable and efficient backend systems and database structures."
    },
    {
      title: "Networking Solutions",
      icon: Server,
      description: "Implementing and configuring secure network infrastructures."
    }
  ],
  socials: [
    { name: "GitHub", icon: Github, url: "https://github.com/mitiku-abera" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/mitiku-abera" },
    { name: "Email", icon: Mail, url: "mailto:mitikuabuye633@gmail.com" }
  ]
};
