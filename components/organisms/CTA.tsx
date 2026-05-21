"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import BackgroundDots from "../atoms/BackgroundDots";

const CTA: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-stone-950 py-32 px-6 z-10"
    >
      {/* Background canvas dots */}
      <BackgroundDots variant="grid" color="rgba(16, 185, 129, 0.22)" opacity={0.65} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-stone-950/80 via-transparent to-stone-950 pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto text-center z-20"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="inline-block p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-emerald-500 mb-8"
        >
          <Sparkles size={24} />
        </motion.div>

        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tight text-white">
          Ready to Build Your <br />
          <span className="text-emerald-500">Next Digital System?</span>
        </h2>

        <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          I'm currently accepting new projects for 2026. Whether you need a
          simple automation or a complex enterprise system, let's talk.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://m.me/herbitok"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-900/20 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={24} />
            Facebook Message
            <ArrowUpRight
              size={18}
              className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:captainhervey@gmail.com"
            className="group px-10 py-5 bg-stone-800 text-white font-bold rounded-2xl border border-stone-700 hover:bg-stone-700 transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
          >

            <Mail size={24} />
            Send an Email
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-stone-800 pt-16">
          <div>
            <span className="block text-emerald-500 font-bold text-2xl mb-1">
              24h
            </span>
            <span className="text-stone-500 text-xs uppercase tracking-widest font-bold">
              Response Time
            </span>
          </div>
          <div>
            <span className="block text-emerald-500 font-bold text-2xl mb-1">
              100%
            </span>
            <span className="text-stone-500 text-xs uppercase tracking-widest font-bold">
              Ownership
            </span>
          </div>
          <div>
            <span className="block text-emerald-500 font-bold text-2xl mb-1">
              Private
            </span>
            <span className="text-stone-500 text-xs uppercase tracking-widest font-bold">
              Development
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
