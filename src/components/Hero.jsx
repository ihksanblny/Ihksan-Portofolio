// src/components/Hero.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center relative z-10"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 border border-primary/30 rounded-full transform rotate-45 scale-105"></div>
            <img
              src="/ihksan.jpg"
              alt="Ihksan"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-dark-bg relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <h2 className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-sans">
            Full Stack Developer
          </h2>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
            Ihksan Balany
          </h1>

          <p className="max-w-xl mx-auto text-text-muted text-lg font-light leading-relaxed mb-10">
            Crafting digital experiences with a focus on minimal aesthetics and functional elegance.
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            <a href="https://github.com/ihksanblny" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white text-2xl transition-colors duration-300"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ihksanblny" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white text-2xl transition-colors duration-300"><FaLinkedin /></a>
            <a href="mailto:ihksan.mail@gmail.com" className="text-text-muted hover:text-white text-2xl transition-colors duration-300"><FaEnvelope /></a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}