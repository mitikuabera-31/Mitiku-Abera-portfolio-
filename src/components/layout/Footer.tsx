/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { portfolioData } from '../../constants/portfolioData';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
           <p className="text-xl font-bold tracking-tight text-white mb-2">
            Mitiku Abera<span className="text-cyan-400">.</span>
          </p>
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Mitiku Abera. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          {portfolioData.socials.map((social) => (
            <a 
              key={social.name}
              href={social.url}
              className="text-zinc-400 hover:text-cyan-400 transition-colors"
              aria-label={social.name}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-sm text-zinc-500 font-mono">
           Designed with &lt;3 for Technology
        </div>
      </div>
    </footer>
  );
}
