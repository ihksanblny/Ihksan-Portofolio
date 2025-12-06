import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image, tags, repoUrl, liveUrl, featured }) => {
  return (
    <motion.div
      className={`group relative bg-dark-surface/40 backdrop-blur-sm border border-white/5 rounded-sm overflow-hidden flex flex-col ${featured ? 'md:col-span-2 md:flex-row' : ''}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${featured ? 'w-full md:w-3/5 h-64 md:h-auto' : 'h-56 w-full'}`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
        {/* Fallback jika gambar tidak ada/error, tampilkan gradient elegan */}
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white/10">
          <FaCode size={50} />
        </div>
        <img
          src={image}
          alt={title}
          onError={(e) => { e.target.style.display = 'none'; }} // Hide image if broken
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Content */}
      <div className={`p-8 flex flex-col ${featured ? 'w-full md:w-2/5 justify-center' : ''}`}>
        <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-6 font-light line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider text-text-light/70 border border-white/10 px-2 py-1 rounded-sm font-sans"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6 pt-6 border-t border-white/5">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-text-muted hover:text-primary transition-colors gap-2 group/link"
            >
              <FaGithub className="text-lg" />
              <span className="hidden group-hover/link:inline-block transition-all duration-300 text-xs uppercase tracking-widest">Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-text-muted hover:text-primary transition-colors gap-2 group/link"
            >
              <FaExternalLinkAlt className="text-sm" />
              <span className="hidden group-hover/link:inline-block transition-all duration-300 text-xs uppercase tracking-widest">Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;