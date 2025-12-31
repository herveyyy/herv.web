import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="scroll-smooth max-w-5xl mx-auto px-6 mb-24 text-center">
            <div id="about" className="absolute top-0"></div>
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100 rounded-full mb-6">
                Experience-Driven Engineering
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-stone-900 mb-8 tracking-tighter">
                Engineering Custom <br />
                <span className="text-emerald-600">
                    Web Application Systems
                </span>
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                I help <strong>independent founders</strong> and{" "}
                <strong>small businesses</strong> bridge the gap between "just a
                website" and a fully automated system. I bring enterprise-level
                experience to your personal vision.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm">
                    <div className="text-3xl mb-4">🛠️</div>
                    <h3 className="font-bold text-stone-900 mb-2">
                        Architectural Rigor
                    </h3>
                    <p className="text-sm text-stone-500">
                        I don't use templates. I build systems that are clean,
                        fast, and documented.
                    </p>
                </div>
                <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm">
                    <div className="text-3xl mb-4">🚀</div>
                    <h3 className="font-bold text-stone-900 mb-2">
                        Scalable Foundation
                    </h3>
                    <p className="text-sm text-stone-500">
                        Start small with serverless costs, but stay ready for
                        100k+ users.
                    </p>
                </div>
                <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm">
                    <div className="text-3xl mb-4">🤝</div>
                    <h3 className="font-bold text-stone-900 mb-2">
                        Direct Collaboration
                    </h3>
                    <p className="text-sm text-stone-500">
                        You work directly with the engineer. No middlemen, just
                        pure logic.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
