"use client";

import React, { useEffect } from "react";
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
                backgroundColor: "rgba(5, 150, 105, 0.2)",
                borderColor: "#059669",
                pointBackgroundColor: "#059669",
            },
            {
                label: "Generic Freelance",
                data: [60, 70, 40, 30, 75],
                backgroundColor: "rgba(120, 113, 108, 0.1)",
                borderColor: "#a8a29e",
                pointBackgroundColor: "#a8a29e",
            },
        ],
    };

    const radarOptions = {
        maintainAspectRatio: false,
        plugins: {
            tooltip: tooltipConfig,
            legend: { labels: { font: { weight: "bold" as const } } },
        },
        scales: {
            r: {
                angleLines: { color: "#e7e5e4" },
                grid: { color: "#e7e5e4" },
                ticks: { display: false },
            },
        },
    };

    const barData = {
        labels: ["My Tech Stack", "Shared Hosting", "Legacy PHP"].map(wrap),
        datasets: [
            {
                label: "Value Index (%)",
                data: [98, 60, 45],
                backgroundColor: ["#059669", "#10b981", "#6ee7b7"],
                borderRadius: 8,
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
            y: { beginAtZero: true, grid: { display: false } },
            x: { grid: { display: false } },
        },
    };

    return (
        <section
            id="performance"
            className="py-24 max-w-7xl mx-auto px-6 scroll-auto"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-extrabold text-stone-900 mb-8 leading-tight">
                        Experience-Backed <br />
                        Performance
                    </h2>
                    <p className="text-lg text-stone-600 mb-8">
                        I specialize in <strong>Web Application Systems</strong>{" "}
                        because they offer long-term value that standard
                        websites can't match. My focus is on reducing your
                        operational overhead through automation and clean data
                        flow.
                    </p>
                    <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-sm mb-6">
                        <h4 className="font-bold text-stone-900 mb-2">
                            Cost-Efficiency Comparison
                        </h4>
                        <div
                            className="chart-container"
                            style={{ height: "200px" }}
                        >
                            <Bar data={barData} options={barOptions} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xl">
                    <h4 className="font-bold text-stone-900 text-center mb-6">
                        Personal Service Capability
                    </h4>
                    <div className="chart-container">
                        <Radar data={radarData} options={radarOptions} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Value;
