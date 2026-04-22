/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../../constants/portfolioData';

export default function Hero() {
  const { name, tagline } = portfolioData.profile;

  return (
    <div className="bento-card hero-gradient h-full !p-8">
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-2">
          {name}
        </div>
        <h1 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-4 text-[#f8fafc]">
          Information Technology <br />
          <span className="text-[#38bdf8]">Student</span>
        </h1>
        <p className="text-sm text-[#94a3b8] max-w-md leading-relaxed">
          {tagline}
        </p>
      </div>

      <div className="flex gap-3 mt-8">
        <button className="px-5 py-2.5 bg-white text-zinc-950 rounded-xl font-bold text-sm hover:bg-[#38bdf8] transition-all active:scale-95">
          View Projects
        </button>
        <button className="px-5 py-2.5 bg-transparent border border-[#1e293b] text-white rounded-xl font-bold text-sm hover:bg-[#1e293b] transition-all active:scale-95">
          Contact Me
        </button>
      </div>
    </div>
  );
}
