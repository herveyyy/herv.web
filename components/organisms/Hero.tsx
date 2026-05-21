"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, Rocket, Users, ChevronRight } from "lucide-react";
import BackgroundDots from "../atoms/BackgroundDots";
import CardShine from "../atoms/CardShine";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  return (
    <section className="relative overflow-hidden pt-20 pb-24 px-6">
      {/* Background canvas dots */}
      <BackgroundDots variant="network" color="rgba(16, 185, 129, 0.12)" opacity={0.6} />

      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.15, 0.9, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 70, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.85, 1.1, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-stone-200 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center"
      >
        <div id="about" className="absolute top-0"></div>

        <motion.span
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100/50 backdrop-blur-sm rounded-full mb-8 border border-emerald-200"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Experience-Driven Engineering
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black text-stone-900 mb-8 tracking-tighter leading-[0.9]"
        >
          Engineering Custom <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">
            Web Application Systems
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-stone-600 leading-relaxed mb-12 max-w-3xl mx-auto font-light"
        >
          I help <strong>independent founders</strong> and{" "}
          <strong>small businesses</strong> bridge the gap between "just a
          website" and a fully automated system.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-stone-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-stone-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-stone-200"
          >
            Start Your Project <ChevronRight size={20} />
          </button>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-2xl font-bold hover:bg-stone-50 transition-all hover:scale-105"
          >
            View Case Studies
          </button>
        </motion.div>


        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          {[
            {
              icon: <Hammer className="text-emerald-600" />,
              title: "Architectural Rigor",
              desc: "I don't use templates. I build systems that are clean, fast, and documented.",
            },
            {
              icon: <Rocket className="text-emerald-600" />,
              title: "Scalable Foundation",
              desc: "Start small with serverless costs, but stay ready for 100k+ users.",
            },
            {
              icon: <Users className="text-emerald-600" />,
              title: "Direct Collaboration",
              desc: "You work directly with the engineer. No middlemen, just pure logic.",
            },
          ].map((feature, i) => (
            <CardShine
              key={i}
              className="rounded-3xl"
              glowColor="rgba(16, 185, 129, 0.06)"
            >
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-8 bg-white/80 backdrop-blur-md border border-stone-200 rounded-3xl shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all h-full"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl text-stone-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-stone-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            </CardShine>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
