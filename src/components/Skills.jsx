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
  { name: 'HTML5', icon: <FaHtml5 size={28} />, level: 90 },
  { name: 'CSS3', icon: <FaCss3Alt size={28} />, level: 85 },
  { name: 'JavaScript', icon: <FaJsSquare size={28} />, level: 80 },
  { name: 'React', icon: <FaReact size={28} />, level: 75 },
  { name: 'Laravel', icon: <FaLaravel size={28} />, level: 85 },
  { name: 'Node.js', icon: <FaNodeJs size={28} />, level: 70 },
  { name: 'Firebase', icon: <SiFirebase size={28} />, level: 65 },
  { name: 'Google Cloud', icon: <SiGooglecloud size={28} />, level: 50 },
  { name: 'Git', icon: <FaGitAlt size={28} />, level: 75 },
  { name: 'Figma', icon: <FaFigma size={28} />, level: 60 },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Expertise" subtitle="TOOLS & TECHNOLOGIES">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillList.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group bg-dark-surface/30 backdrop-blur-sm border border-white/5 p-6 rounded-sm hover:border-primary/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="text-text-muted group-hover:text-primary transition-colors duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-white font-serif text-lg">{skill.name}</h3>
              </div>
              <span className="text-primary font-mono text-sm">{skill.level}%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary-light"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}