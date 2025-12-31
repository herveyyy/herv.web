"use client";
import React from "react";

const CTA: React.FC = () => {
    return (
        <section
            id="contact"
            className="py-24 bg-linear-to-br from-emerald-600 to-emerald-800 text-white text-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                    Ready to Build Your <br />
                    <span className="text-emerald-200">Next Big Idea?</span>
                </h2>
                <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
                    To inquire, please message us on Facebook or email directly.
                    Let's turn your vision into reality.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
                    <a
                        href="https://m.me/lyn.cabig.mapano"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-3"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Facebook Message
                    </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
                    <p className="text-emerald-200 text-sm mb-2">
                        Direct Contact
                    </p>
                    <a
                        href="mailto:hmapano87642@gmail.com"
                        className="text-white hover:text-emerald-200 transition-colors font-medium"
                    >
                        hmapano87642@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
