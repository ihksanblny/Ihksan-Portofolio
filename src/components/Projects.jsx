import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';

export default function Projects({ projects }) {
  return (
    <SectionWrapper id="projects" title="Selected Works" subtitle="PORTFOLIO">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}