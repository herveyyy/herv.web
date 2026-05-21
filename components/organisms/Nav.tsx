"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import NavItem from "../atoms/NavItem";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const navItems: Omit<NavItemProps, "children">[] = [
  { href: "#about", className: "" },
  { href: "#architecture", className: "" },
  { href: "#projects", className: "" },
  { href: "#performance", className: "" },
  {
    href: "#contact",
    className:
      "text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full hover:bg-emerald-100 transition-colors",
  },
];

const navLabels = [
  "The Mindset",
  "Stack",
  "Projects",
  "Value",
  "Start Project",
];

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-600 origin-left z-60"
        style={{ scaleX }}
      />
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-panel py-2" : "bg-transparent py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between font-plus">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-200 group-hover:rotate-12 transition-transform">
              H
            </div>
            <span className="font-extrabold tracking-tighter text-stone-900 uppercase text-lg">
              Herv<span className="text-emerald-600">.</span>Web
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-stone-500">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavItem
                  href={item.href}
                  className={`${item.className} relative group`}
                >
                  {navLabels[index]}
                  {index < 3 && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
                  )}
                </NavItem>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-900 focus:outline-none hover:bg-stone-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-stone-200 overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-8 space-y-6 flex flex-col">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavItem
                      href={item.href}
                      className={`${item.className} text-lg py-2 flex items-center justify-between group`}
                      onClick={() => setIsOpen(false)}
                    >
                      {navLabels[index]}
                      <ArrowRight
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        size={18}
                      />
                    </NavItem>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Nav;
