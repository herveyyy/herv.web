"use client";

import React, { useState } from "react";
import SystemNode from "../atoms/SystemNode";

const systemSpecs = {
    ui: {
        title: "Next.js Architecture",
        icon: "⚛️",
        desc: "I leverage my experience with the Next.js App Router to provide the fastest possible user experience. It's not just a page; it's a seamless interaction system.",
        tech: "Next.js 15,16 / Tailwind",
        role: "Fluid Experience",
    },
    api: {
        title: "Serverless Business Logic",
        icon: "⚡",
        desc: "I build the 'brain' of your application using serverless functions. This ensures your system can handle complex workflows while keeping hosting costs near zero.",
        tech: "Vercel Edge / Node.js",
        role: "Low Overhead",
    },
    db: {
        title: "Reliable Data Flow",
        icon: "🗄️",
        desc: "Every system I build uses Neon Postgres. This ensures your data is secure, scalable, and professional-grade from day one.",
        tech: "Neon / Drizzle ORM",
        role: "Reliability",
    },
};

const Architecture: React.FC = () => {
    const [selected, setSelected] = useState<string | null>(null);

    const inspectSystem = (id: string) => {
        setSelected(id);
    };

    const spec = selected
        ? systemSpecs[selected as keyof typeof systemSpecs]
        : null;

    return (
        <section
            id="architecture"
            className="scroll-smooth bg-stone-900 py-24 text-white overflow-hidden border-y border-stone-800"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        My System Philosophy
                    </h2>
                    <p className="text-stone-400 max-w-xl">
                        Every individual client deserves a world-class
                        architectural stack. Here is how I structure my builds.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-4">
                        <SystemNode
                            step="Stack Step 01"
                            title="The Interface (Next.js)"
                            icon="⚛️"
                            onClick={() => inspectSystem("ui")}
                        />
                        <div className="flex justify-center py-2 text-stone-700">
                            ⬇
                        </div>
                        <SystemNode
                            step="Stack Step 02"
                            title="The Logic (Serverless)"
                            icon="⚡"
                            onClick={() => inspectSystem("api")}
                        />
                        <div className="flex justify-center py-2 text-stone-700">
                            ⬇
                        </div>
                        <SystemNode
                            step="Stack Step 03"
                            title="The Data (Postgres)"
                            icon="🗄️"
                            onClick={() => inspectSystem("db")}
                        />
                    </div>

                    <div
                        id="inspector-panel"
                        className="bg-stone-800/50 border border-stone-700 p-8 rounded-3xl min-h-100 flex flex-col justify-center transition-all"
                    >
                        {!spec ? (
                            <div id="inspector-default">
                                <h3 className="text-3xl font-bold mb-4">
                                    Technical Breakdown
                                </h3>
                                <p className="text-stone-400">
                                    Click a component to see how I apply my
                                    experience to build professional-grade
                                    systems for your project.
                                </p>
                            </div>
                        ) : (
                            <div id="inspector-content">
                                <div className="text-4xl mb-6">{spec.icon}</div>
                                <h3 className="text-3xl font-bold mb-4">
                                    {spec.title}
                                </h3>
                                <p className="text-stone-300 text-lg mb-6">
                                    {spec.desc}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-stone-900 p-4 rounded-lg">
                                        <span className="text-emerald-400 text-xs font-bold uppercase block mb-1">
                                            Tech Choice
                                        </span>
                                        <span className="text-sm font-mono">
                                            {spec.tech}
                                        </span>
                                    </div>
                                    <div className="bg-stone-900 p-4 rounded-lg">
                                        <span className="text-emerald-400 text-xs font-bold uppercase block mb-1">
                                            Client Benefit
                                        </span>
                                        <span className="text-sm font-mono">
                                            {spec.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Architecture;
