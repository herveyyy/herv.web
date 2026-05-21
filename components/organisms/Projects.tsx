"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Code2, Sparkles, Globe } from "lucide-react";
import BackgroundDots from "../atoms/BackgroundDots";
import CardShine from "../atoms/CardShine";


const projects = [
    {
        title: "Silidv3 LMS",
        category: "AI-Integrated LMS",
        desc: "Frappe and NestJS dual-backend architecture with AI-driven Student Hub for note summarization.",
        tech: ["Frappe", "NestJS", "Vue3", "Gemini AI", "DrizzleORM"],
        link: "#",
        type: "Enterprise"
    },
    {
        title: "Skillings",
        category: "P2P Marketplace",
        desc: "Flexible tutoring marketplace where educators list courses and students request sessions.",
        tech: ["Next.js", "TailwindCSS", "DrizzleORM", "Stripe", "PostgreSQL"],
        link: "#",
        type: "Marketplace"
    },
    {
        title: "Unified Agent Engine",
        category: "AI Orchestrator",
        desc: "High-performance framework-less agentic system orchestrating specialized LLM Personas.",
        tech: ["Bun", "Drizzle ORM", "Gemini API", "Workflow Orchestrator"],
        link: "#",
        type: "Open Source"
    },
    {
        title: "Meridrops",
        category: "Operations System",
        desc: "Streamlined commercial print shop operations via an offline Wi-Fi portal for Drops local sharing.",
        tech: ["Next.js", "TailwindCSS", "DrizzleORM", "PostgreSQL"],
        link: "#",
        type: "Local Network"
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-32 bg-white relative overflow-hidden z-10">
            {/* Background grid dots */}
            <BackgroundDots variant="grid" color="rgba(16, 185, 129, 0.08)" opacity={0.6} />

            <div className="max-w-7xl mx-auto px-6 relative z-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight leading-[0.9]">
                            Featured <span className="text-emerald-600">Architectures</span>
                        </h2>
                        <p className="text-stone-500 max-w-xl text-lg font-light leading-relaxed">
                            Selected projects that showcase my focus on scalability, 
                            AI integration, and performance-driven engineering.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-stone-100 flex items-center justify-center overflow-hidden">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <span className="text-sm font-bold text-stone-900 tracking-tight">Used by 500+ users</span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <CardShine
                            key={index}
                            className="rounded-[2.5rem]"
                            glowColor="rgba(16, 185, 129, 0.08)"
                            enableTilt={true}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="group bg-stone-50 rounded-[2.5rem] p-10 border border-stone-100 hover:border-emerald-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 h-full"
                            >
                                <div className="flex justify-between items-start mb-8">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-emerald-100/50 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
                                        {project.type}
                                    </span>
                                    <h3 className="text-3xl font-black text-stone-900 tracking-tight">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-emerald-600 hover:border-emerald-200 transition-all">
                                        <Code size={18} />
                                    </button>

                                    <button className="w-10 h-10 rounded-xl bg-stone-900 flex items-center justify-center text-white hover:bg-emerald-600 transition-all shadow-lg shadow-stone-900/20">
                                        <ExternalLink size={18} />
                                    </button>
                                </div>
                            </div>

                            <p className="text-stone-500 mb-8 font-light leading-relaxed text-lg">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 bg-white border border-stone-100 rounded-lg text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </CardShine>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="text-stone-400 font-mono text-xs uppercase tracking-[0.3em] mb-8">
                        View more on my full portfolio
                    </p>
                    <button className="px-8 py-4 bg-white border-2 border-stone-900 text-stone-900 rounded-2xl font-black hover:bg-stone-900 hover:text-white transition-all inline-flex items-center gap-2 group">
                        Explore Github <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={20} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

const ArrowUpRight = ({ className, size }: { className?: string, size?: number }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
);

export default Projects;
