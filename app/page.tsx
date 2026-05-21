"use client";
import { motion } from "framer-motion";
import Architecture from "../components/organisms/Architecture";
import CTA from "../components/organisms/CTA";
import Footer from "../components/organisms/Footer";
import Hero from "../components/organisms/Hero";
import Value from "../components/organisms/Value";
import Projects from "../components/organisms/Projects";


export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-20"
    >
      <Hero />
      <Architecture />
      <Projects />
      <Value />

      <CTA />
      <Footer />
    </motion.main>
  );
}

