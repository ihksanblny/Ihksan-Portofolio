import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="CONTACT">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-text-muted text-lg font-light leading-relaxed mb-12">
          Interested in working together? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        <a
          href="mailto:ihksanbalany@gmail.com"
          className="inline-block border border-primary text-primary hover:bg-primary hover:text-dark-bg px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300"
        >
          Say Hello
        </a>
      </div>
    </SectionWrapper>
  );
}