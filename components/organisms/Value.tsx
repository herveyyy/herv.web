"use client";

import React from "react";
import { motion } from "framer-motion";
import CardShine from "../atoms/CardShine";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
} from "chart.js";
import { Bar, Radar } from "react-chartjs-2";
import { CheckCircle2, TrendingUp } from "lucide-react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler
);

const Value: React.FC = () => {
    const wrap = (label: string) => {
        if (label.length <= 16) return label;
        const words = label.split(" ");
        let lines: string[] = [];
        let line = "";
        words.forEach((w) => {
            if ((line + w).length > 16) {
                lines.push(line.trim());
                line = w + " ";
            } else {
                line += w + " ";
            }
        });
        lines.push(line.trim());
        return lines;
    };

    const tooltipConfig = {
        callbacks: {
            title: function (items: any) {
                const item = items[0];
                let label = item.chart.data.labels[item.dataIndex];
                return Array.isArray(label) ? label.join(" ") : label;
            },
        },
    };

    const radarData = {
        labels: [
            "Scalability",
            "Security",
            "State Logic",
            "Custom Logic",
            "Reliability",
        ].map(wrap),
        datasets: [
            {
                label: "My System Approach",
                data: [98, 95, 99, 90, 95],
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                borderColor: "#10b981",
                pointBackgroundColor: "#10b981",
                borderWidth: 2,
            },
            {
                label: "Generic Freelance",
                data: [60, 70, 40, 30, 75],
                backgroundColor: "rgba(120, 113, 108, 0.1)",
                borderColor: "#a8a29e",
                pointBackgroundColor: "#a8a29e",
                borderWidth: 1,
                borderDash: [5, 5],
            },
        ],
    };

    const radarOptions = {
        maintainAspectRatio: false,
        plugins: {
            tooltip: tooltipConfig,
            legend: { 
                position: "bottom" as const,
                labels: { 
                    font: { family: "Plus Jakarta Sans", weight: "bold" as const, size: 10 },
                    usePointStyle: true,
                    padding: 20
                } 
            },
        },
        scales: {
            r: {
                angleLines: { color: "rgba(0,0,0,0.05)" },
                grid: { color: "rgba(0,0,0,0.05)" },
                ticks: { display: false },
                pointLabels: {
                    font: { family: "Plus Jakarta Sans", size: 10, weight: "bold" as const }
                }
            },
        },
    };

    const barData = {
        labels: ["Modern Stack", "Legacy PHP", "Shared Hosting"].map(wrap),
        datasets: [
            {
                label: "Performance Index",
                data: [98, 45, 60],
                backgroundColor: ["#10b981", "#34d399", "#6ee7b7"],
                borderRadius: 12,
                barThickness: 40,
            },
        ],
    };

    const barOptions = {
        maintainAspectRatio: false,
        plugins: {
            tooltip: tooltipConfig,
            legend: { display: false },
        },
        scales: {
            y: { display: false, beginAtZero: true },
            x: { 
                grid: { display: false },
                ticks: {
                    font: { family: "Plus Jakarta Sans", size: 10, weight: "bold" as const }
                }
            },
        },
    };

    return (
        <section
            id="performance"
            className="py-32 max-w-7xl mx-auto px-6"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 text-emerald-600 font-bold tracking-widest uppercase text-xs mb-6">
                        <TrendingUp size={16} /> Data-Driven Engineering
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-stone-900 mb-8 leading-[0.9] tracking-tight">
                        Experience-Backed <br />
                        <span className="text-emerald-600">Performance</span>
                    </h2>
                    <p className="text-xl text-stone-600 mb-10 font-light leading-relaxed">
                        I specialize in <strong>Web Application Systems</strong>{" "}
                        because they offer long-term value that standard
                        websites can't match. My focus is on reducing your
                        operational overhead.
                    </p>
                    
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6 mb-10"
                    >
                        {[
                            "99.9% System Uptime Architecture",
                            "Serverless Auto-scaling for Zero-Cost Idle",
                            "Enterprise-grade Data Encryption",
                        ].map((item, i) => (
                            <motion.div 
                                key={i} 
                                variants={{
                                    hidden: { opacity: 0, x: -15 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                                }}
                                className="flex items-center gap-3 text-stone-700 font-medium"
                            >
                                <CheckCircle2 className="text-emerald-500" size={20} />
                                {item}
                            </motion.div>
                        ))}
                    </motion.div>

                    <CardShine className="rounded-4xl" glowColor="rgba(16, 185, 129, 0.05)" enableTilt={false}>
                        <div className="p-8 bg-stone-50 border border-stone-100 rounded-4xl shadow-sm h-full">
                            <h4 className="font-bold text-stone-900 mb-6 flex items-center justify-between">
                                Stack Performance Index
                                <span className="text-[10px] px-2 py-1 bg-white rounded-lg border border-stone-200">Lighthouse v11</span>
                            </h4>
                            <div className="h-[200px]">
                                <Bar data={barData} options={barOptions} />
                            </div>
                        </div>
                    </CardShine>
                </motion.div>

                <CardShine className="rounded-[3rem]" glowColor="rgba(16, 185, 129, 0.08)" enableTilt={true}>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-12 rounded-[3rem] border border-stone-200 shadow-2xl shadow-stone-200/50 relative overflow-hidden h-full"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                            <TrendingUp size={300} />
                        </div>
                        <h4 className="font-black text-stone-900 text-2xl text-center mb-10 tracking-tight">
                            Capability <span className="text-emerald-600">Comparison</span>
                        </h4>
                        <div className="h-[400px]">
                            <Radar data={radarData} options={radarOptions} />
                        </div>
                        <p className="mt-10 text-center text-stone-400 text-sm font-light italic">
                            *Comparison based on enterprise architecture vs template-based builds.
                        </p>
                    </motion.div>
                </CardShine>
            </div>
        </section>
    );
};

export default Value;

