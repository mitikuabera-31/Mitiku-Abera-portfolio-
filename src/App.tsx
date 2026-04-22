/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import { About, Skills, Projects, Education, Contact } from './components/sections/CombinedSections';
import Footer from './components/layout/Footer';
import { motion, useScroll, useSpring } from 'motion/react';
import { portfolioData } from './constants/portfolioData';
import { ArrowRight } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-sky-500/30">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left" 
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-auto gap-4">
          {/* Hero Section - Spans 2x2 on Desktop */}
          <div className="md:col-span-2 md:row-span-2">
            <Hero />
          </div>

          {/* About Quick View / Education - Spans 1x1 or 1x2 */}
          <div className="md:col-span-1 md:row-span-1">
            <EducationInBento />
          </div>

          {/* Skills - Spans 1x2 */}
          <div className="md:col-span-1 md:row-span-2">
            <Skills />
          </div>

          {/* Contact Quick - Spans 1x1 */}
          <div className="md:col-span-1 md:row-span-1">
            <ContactInfoBento />
          </div>

          {/* Projects - Spans 4 on Desktop (or custom grid) */}
          <div className="md:col-span-4">
            <Projects />
          </div>

          {/* Full Sections Below for detailed view if needed, or keeping it strictly Bento */}
          <div className="md:col-span-2">
            <About />
          </div>
          
          <div className="md:col-span-2">
            <Contact />
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Background elements updated for Bento feel */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-500/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}

// Quick component variants for Bento grid integration
function EducationInBento() {
  const edu = portfolioData.education[0];
  return (
    <div className="bento-card h-full">
      <div className="text-[10px] uppercase font-bold tracking-widest text-[#94a3b8] mb-4">Education</div>
      <div>
        <h3 className="text-lg font-bold text-[#f8fafc] mb-1">{edu.school}</h3>
        <p className="text-xs text-[#38bdf8] font-medium">{edu.degree}</p>
        <p className="text-[11px] text-[#94a3b8] mt-2 italic">{edu.period}</p>
      </div>
    </div>
  );
}

function ContactInfoBento() {
  return (
    <div className="bento-card h-full bg-[#38bdf8] !text-[#020617] group cursor-pointer hover:bg-sky-300">
      <div className="text-[10px] uppercase font-bold tracking-widest opacity-80 mb-4">Get in touch</div>
      <div>
        <h3 className="text-xl font-extrabold mb-1">Let's build together</h3>
        <p className="text-sm font-semibold flex items-center gap-1">
          Contact Me <ArrowRight size={16} />
        </p>
      </div>
    </div>
  );
}
