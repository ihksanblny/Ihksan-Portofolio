import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Projects', 'Skills', 'Contact'];

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] ${mobileMenuOpen ? '' : 'transition-all duration-500'
        } ${scrolled && !mobileMenuOpen ? 'bg-dark-bg/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6 md:py-8'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <a href="#hero" className="text-xl font-serif font-bold text-white tracking-wider z-[101] relative">
          IHKSAN<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs text-text-muted hover:text-white transition-colors duration-300 uppercase tracking-[0.15em]"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl z-[101] relative focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 bg-[#0a0a0a] z-[90] flex flex-col items-center justify-center md:hidden"
            >
              <nav className="flex flex-col space-y-8 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-3xl text-white font-serif font-bold hover:text-primary transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
