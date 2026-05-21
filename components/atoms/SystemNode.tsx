"use client";
import React from "react";
import { motion } from "framer-motion";

interface SystemNodeProps {
    step: string;
    title: string;
    icon: React.ReactNode;
    onClick: () => void;
    isActive?: boolean;
}

const SystemNode: React.FC<SystemNodeProps> = ({
    step,
    title,
    icon,
    onClick,
    isActive,
}) => {
    return (
        <motion.div
            whileHover={{ x: 10 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`p-6 rounded-2xl border transition-all cursor-pointer group relative overflow-hidden ${isActive
                    ? "bg-emerald-600/10 border-emerald-500 shadow-lg shadow-emerald-900/20"
                    : "bg-stone-800/50 border-stone-700 hover:border-emerald-500/50"
                }`}
        >
            <div className="flex justify-between items-center relative z-10">
                <div>
                    <h4 className={`font-bold uppercase tracking-widest text-[10px] mb-1 ${isActive ? "text-emerald-400" : "text-stone-500"}`}>
                        {step}
                    </h4>
                    <h3 className={`text-xl font-bold tracking-tight ${isActive ? "text-white" : "text-stone-300 group-hover:text-white"}`}>{title}</h3>
                </div>
                <span className={`text-3xl transition-all duration-300 ${isActive ? "scale-110 opacity-100" : "opacity-20 group-hover:opacity-60"}`}>
                    {icon}
                </span>
            </div>
            {isActive && (
                <motion.div
                    layoutId="active-glow"
                    className="absolute inset-0 bg-linear-to-r from-emerald-600/5 to-transparent pointer-events-none"
                />
            )}
        </motion.div>
    );
};

export default SystemNode;

