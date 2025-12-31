"use client";
import React, { useState } from "react";
import NavItem from "../atoms/NavItem";

interface NavItemProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const navItems: Omit<NavItemProps, "children">[] = [
    { href: "#about", className: "" },
    { href: "#architecture", className: "" },
    { href: "#performance", className: "" },
    { href: "#contact", className: "text-emerald-600" },
];

const navLabels = ["The Mindset", "Stack", "Value", "Start Project"];

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 glass-panel border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white font-bold">
                        H
                    </div>
                    <span className="font-extrabold tracking-tight text-stone-900 uppercase text-sm">
                        Herv.Web
                    </span>
                </div>
                <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-stone-500">
                    {navItems.map((item, index) => (
                        <NavItem
                            key={item.href}
                            href={item.href}
                            className={`${item.className} block`}
                        >
                            {navLabels[index]}
                        </NavItem>
                    ))}
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-stone-900 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white border-t border-stone-200">
                    <div className="px-6 py-4 space-y-4">
                        {navItems.map((item, index) => (
                            <NavItem
                                key={item.href}
                                href={item.href}
                                className={`${item.className} block`}
                                onClick={() => setIsOpen(false)}
                            >
                                {navLabels[index]}
                            </NavItem>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;
