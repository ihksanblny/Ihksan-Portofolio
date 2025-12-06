// src/App.jsx
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Impor komponen-komponen
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import My3DScene from './components/My3DScene';
import LoadingScreen from './components/LoadingScreen'; // Import LoadingScreen

// Import data
import { portfolioProjects } from './data/projects';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative">
          {/* 3D Scene sebagai background global */}
          <div className="fixed top-0 left-0 w-full h-full z-[-1]">
            <My3DScene />
          </div>

          {/* Konten utama aplikasi */}
          <div className="relative z-[1]">
            <Header />
            <main>
              <Hero />
              <About />
              <Projects projects={portfolioProjects} />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
