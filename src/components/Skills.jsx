import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaLaravel,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaNodeJs,
} from 'react-icons/fa';
import { SiGooglecloud, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const skillList = [
  { name: 'HTML5', icon: <FaHtml5 size={32} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={32} /> },
  { name: 'JavaScript', icon: <FaJsSquare size={32} /> },
  { name: 'React', icon: <FaReact size={32} /> },
  { name: 'Node.js', icon: <FaNodeJs size={32} /> },
  { name: 'Laravel', icon: <FaLaravel size={32} /> },
  { name: 'Firebase', icon: <SiFirebase size={32} /> },
  { name: 'Google Cloud', icon: <SiGooglecloud size={32} /> },
  { name: 'Git', icon: <FaGitAlt size={32} /> },
  { name: 'Figma', icon: <FaFigma size={32} /> },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Expertise" subtitle="TOOLS & TECHNOLOGIES">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {skillList.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group bg-dark-surface/30 border border-white/5 p-6 flex flex-col items-center justify-center hover:border-primary/30 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-text-muted group-hover:text-primary transition-colors duration-300 mb-4">
              {skill.icon}
            </div>
            <p className="text-sm font-light tracking-wide text-text-light/80">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}