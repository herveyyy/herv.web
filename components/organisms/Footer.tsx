import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-stone-950 border-t border-stone-900 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-900/20">
              H
            </div>
            <span className="font-extrabold tracking-tighter text-white uppercase text-sm">
              Herv<span className="text-emerald-600">.</span>Web
            </span>
          </div>

          <p className="text-stone-500 text-sm max-w-md leading-relaxed">
            Specialized engineering for independent founders and small
            businesses. Building high-performance systems with architectural
            rigor.
          </p>

            <div className="pt-8 border-t border-stone-900 w-full flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-stone-600 text-[10px] font-bold uppercase tracking-[0.2em]">
                © 2026 Hervey Geralph C. Mapano • ALL RIGHTS RESERVED
              </p>

            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-stone-700">
              <a href="#" className="hover:text-stone-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-stone-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
