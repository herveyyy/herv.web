"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SystemNode from "../atoms/SystemNode";
import { Cpu, Database, Layout, ShieldCheck, Zap, Code2 } from "lucide-react";
import { FaReact, FaBolt, FaDatabase } from "react-icons/fa";
import BackgroundDots from "../atoms/BackgroundDots";
import CardShine from "../atoms/CardShine";

const systemSpecs = {
    ui: {
        title: "Next.js Architecture",
        icon: <Layout className="text-emerald-400" size={32} />,
        desc: "I leverage my experience with the Next.js App Router to provide the fastest possible user experience. It's not just a page; it's a seamless interaction system.",
        tech: "Next.js 16 / Tailwind 4",
        role: "Fluid Experience",
        details: ["Server Components", "Streaming SSR", "Parallel Routes"]
    },
    api: {
        title: "Serverless Business Logic",
        icon: <Zap className="text-emerald-400" size={32} />,
        desc: "I build the 'brain' of your application using serverless functions. This ensures your system can handle complex workflows while keeping hosting costs near zero.",
        tech: "Vercel Edge / Node.js",
        role: "Low Overhead",
        details: ["Edge Runtime", "Type-safe APIs", "Durable Execution"]
    },
    db: {
        title: "Reliable Data Flow",
        icon: <Database className="text-emerald-400" size={32} />,
        desc: "Every system I build uses Neon Postgres. This ensures your data is secure, scalable, and professional-grade from day one.",
        tech: "Neon / Drizzle ORM",
        role: "Reliability",
        details: ["ACID Compliance", "Database Branching", "Vector Search ready"]
    },
};

const Architecture: React.FC = () => {
    const [selected, setSelected] = useState<string>("ui");

    const spec = systemSpecs[selected as keyof typeof systemSpecs];

    return (
        <section
            id="architecture"
            className="bg-stone-950 py-32 text-white overflow-hidden border-y border-stone-900 relative z-10"
        >
            {/* Background canvas particles */}
            <BackgroundDots variant="network" color="rgba(16, 185, 129, 0.08)" opacity={0.7} />

            {/* Ambient Background */}
            <motion.div
                animate={{
                    x: [0, 40, -40, 0],
                    y: [0, -30, 30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/5 blur-[120px] -z-10 pointer-events-none"
            />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                            The System <span className="text-emerald-500">Blueprint</span>
                        </h2>
                        <p className="text-stone-400 max-w-xl text-lg font-light leading-relaxed">
                            Every individual client deserves a world-class
                            architectural stack. I don't compromise on the foundation.
                        </p>
                    </motion.div>
                    
                    <div className="flex items-center gap-4 text-xs font-mono text-emerald-500/60 bg-emerald-500/5 px-4 py-2 rounded-full border border-emerald-500/10">
                        <Code2 size={14} /> SYSTEM_STATUS: OPERATIONAL
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-4">
                        <SystemNode
                            step="Stack Step 01"
                            title="The Interface"
                            icon={<FaReact />}
                            isActive={selected === "ui"}
                            onClick={() => setSelected("ui")}
                        />
                        <SystemNode
                            step="Stack Step 02"
                            title="The Logic"
                            icon={<FaBolt />}
                            isActive={selected === "api"}
                            onClick={() => setSelected("api")}
                        />
                        <SystemNode
                            step="Stack Step 03"
                            title="The Data"
                            icon={<FaDatabase />}
                            isActive={selected === "db"}
                            onClick={() => setSelected("db")}
                        />
                    </div>

                    <div className="lg:col-span-7 h-full">
                        <AnimatePresence mode="wait">
                            <CardShine
                                key={selected}
                                className="rounded-[2.5rem] h-full"
                                glowColor="rgba(16, 185, 129, 0.12)"
                                enableTilt={true}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98, x: 15 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.98, x: -15 }}
                                    transition={{ duration: 0.35, ease: "circOut" }}
                                    className="bg-stone-900/50 backdrop-blur-xl border border-stone-800 p-10 rounded-[2.5rem] min-h-[450px] flex flex-col relative overflow-hidden h-full"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-5">
                                        <Cpu size={200} />
                                    </div>

                                <div className="relative z-10">
                                    <div className="mb-8 p-4 bg-emerald-500/10 w-fit rounded-2xl border border-emerald-500/20">
                                        {spec.icon}
                                    </div>
                                    <h3 className="text-4xl font-black mb-6 tracking-tight">
                                        {spec.title}
                                    </h3>
                                    <p className="text-stone-300 text-xl leading-relaxed mb-10 font-light">
                                        {spec.desc}
                                    </p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                        <div className="bg-stone-950/50 p-6 rounded-2xl border border-stone-800">
                                            <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest block mb-2">
                                                Technologies
                                            </span>
                                            <span className="text-lg font-medium text-white">
                                                {spec.tech}
                                            </span>
                                        </div>
                                        <div className="bg-stone-950/50 p-6 rounded-2xl border border-stone-800">
                                            <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest block mb-2">
                                                Core Benefit
                                            </span>
                                            <span className="text-lg font-medium text-white">
                                                {spec.role}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        {spec.details.map((detail, i) => (
                                            <span key={i} className="flex items-center gap-2 px-4 py-2 bg-stone-800/50 rounded-full text-xs font-bold text-stone-400 border border-stone-700/50">
                                                <ShieldCheck size={14} className="text-emerald-500" />
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                    </div>
                                </motion.div>
                            </CardShine>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Architecture;

