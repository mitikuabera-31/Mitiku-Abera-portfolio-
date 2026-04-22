/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { portfolioData } from '../../constants/portfolioData';
import { Download, ExternalLink, Github, Mail, Send, ArrowRight } from 'lucide-react';

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-16">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-4"
    >
      <div className="h-[1px] w-12 bg-sky-500" />
      <span className="text-sky-400 font-bold uppercase tracking-widest text-xs">{subtitle || 'Explore'}</span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-bold tracking-tight text-[#f8fafc]"
    >
      {title}
    </motion.h2>
  </div>
);

export function About() {
  const { bio, location, image } = portfolioData.profile;
  return (
    <section id="about" className="py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="bento-card overflow-hidden aspect-[4/5] relative !p-0">
            <img 
              src={image} 
              alt="Mitiku Abera" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
              }}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bento-card p-4 max-w-[180px] bg-sky-500 text-zinc-950 font-bold">
             <p className="text-xl mb-1">CCI</p>
             <p className="text-[10px] uppercase tracking-wider opacity-80 leading-tight">Information Tech Department</p>
          </div>
        </motion.div>

        <div>
          <SectionHeading title="About Me" subtitle="Biography" />
          <p className="text-lg text-[#94a3b8] leading-relaxed mb-8">
            {bio}
          </p>
          <p className="text-lg text-[#94a3b8] leading-relaxed mb-8">
            Currently based at <span className="text-[#f8fafc] font-semibold">{location}</span>.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bento-card">
               <p className="text-3xl font-black text-[#f8fafc] mb-1">3rd</p>
               <p className="text-[10px] text-[#94a3b8] uppercase tracking-widest font-bold">Year Student</p>
            </div>
            <div className="bento-card">
               <p className="text-3xl font-black text-[#f8fafc] mb-1">5+</p>
               <p className="text-[10px] text-[#94a3b8] uppercase tracking-widest font-bold">Core Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <div className="bento-card h-full">
      <div className="text-[10px] uppercase font-bold tracking-widest text-[#94a3b8] mb-4">Technical Arsenal</div>
      <div className="flex flex-wrap gap-2 mt-4">
        {portfolioData.skills.flatMap(s => s.items).map(skill => (
          <span key={skill} className="px-3 py-1.5 bg-[#020617] border border-[#1e293b] text-[#94a3b8] text-[11px] font-medium rounded-full">
            {skill}
          </span>
        ))}
      </div>
      <button className="mt-8 w-full py-2.5 bg-[#f8fafc] text-[#020617] rounded-xl font-bold text-xs hover:bg-sky-400 transition-all flex items-center justify-center gap-2">
        Download CV <Download size={14} />
      </button>
    </div>
  );
}

export function Projects() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {portfolioData.projects.slice(0, 2).map((project) => (
        <div key={project.title} className="bento-card !flex-row items-center gap-6">
          <div className="flex-1">
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#94a3b8] mb-2">Featured Work</div>
            <h3 className="text-lg font-bold text-[#f8fafc] mb-1">{project.title}</h3>
            <p className="text-xs text-[#94a3b8] line-clamp-2">{project.description}</p>
          </div>
          <div className="w-16 h-16 shrink-0 bg-[#020617] border border-[#1e293b] rounded-2xl flex items-center justify-center text-sky-400">
            {/* Simple representation of project icon or small image */}
            <ArrowRight size={24} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Education() {
  return (
    <section className="py-12">
      <SectionHeading title="Education" subtitle="Journey" />
      <div className="space-y-4 max-w-4xl">
        {portfolioData.education.map((edu) => (
          <div key={edu.school} className="bento-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#94a3b8] mb-1">School</div>
                <h3 className="text-xl font-bold text-[#f8fafc]">{edu.school}</h3>
                <p className="text-sky-400 text-sm font-semibold mt-1">{edu.degree}</p>
              </div>
              <span className="text-xs font-bold text-[#94a3b8] border border-[#1e293b] px-3 py-1 rounded-full whitespace-nowrap self-start md:self-center">
                {edu.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-12">
      <SectionHeading title="Let's Build" subtitle="Contact" />
      <div className="grid lg:grid-cols-2 gap-8 text-left items-stretch">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bento-card"
        >
          <h3 className="text-3xl font-extrabold mb-6 text-[#f8fafc]">Have a project?</h3>
          <p className="text-[#94a3b8] mb-12 leading-relaxed">
            I'm open to discussing software development, distributed systems, or networking solutions.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 bento-card !p-0 flex items-center justify-center text-[#38bdf8] group-hover:border-[#38bdf8] transition-all">
                <Mail size={18} />
              </div>
              <a href={`mailto:${portfolioData.profile.email}`} className="text-[#f8fafc] text-sm font-medium hover:text-[#38bdf8] transition-colors">
                {portfolioData.profile.email}
              </a>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 bento-card !p-0 flex items-center justify-center text-[#38bdf8] group-hover:border-[#38bdf8] transition-all">
                <Github size={18} />
              </div>
              <a href={portfolioData.profile.github} className="text-[#f8fafc] text-sm font-medium hover:text-[#38bdf8] transition-colors">
                github.com/mitiku-abera
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form 
          className="bento-card space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-4">
             <input type="text" placeholder="Name" className="w-full bg-[#020617] border border-[#1e293b] rounded-xl px-4 py-3 text-[#f8fafc] text-sm focus:outline-none focus:border-[#38bdf8] transition-colors" />
             <input type="email" placeholder="Email" className="w-full bg-[#020617] border border-[#1e293b] rounded-xl px-4 py-3 text-[#f8fafc] text-sm focus:outline-none focus:border-[#38bdf8] transition-colors" />
          </div>
          <textarea placeholder="Message" rows={4} className="w-full bg-[#020617] border border-[#1e293b] rounded-xl px-4 py-3 text-[#f8fafc] text-sm focus:outline-none focus:border-[#38bdf8] transition-colors" />
          <button className="w-full py-3 bg-[#f8fafc] text-[#020617] rounded-xl font-black text-sm hover:bg-[#38bdf8] transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            Send Message <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
