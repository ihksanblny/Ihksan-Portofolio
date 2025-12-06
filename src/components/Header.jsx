import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-dark-bg/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <a href="#hero" className="text-xl font-serif font-bold text-white tracking-wider">
          IHKSAN<span className="text-primary">.</span>
        </a>
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
      </div>
    </header>
  );
}
