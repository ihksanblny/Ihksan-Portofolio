import SectionWrapper from './SectionWrapper';

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="BIOGRAPHY">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-text-muted text-base md:text-xl font-light leading-relaxed md:leading-loose">
          <span className="text-white font-normal">Hello, I'm Ihksan.</span> The world of web development has always captivated me, starting from a simple question, 'how does all this work?' to what has now become an unquenchable passion. I find great satisfaction in creating intuitive and dynamic user experiences, especially with <span className="text-primary">React</span> on the frontend. However, behind the scenes, I'm also a backend enthusiast. I'm currently diving deep into <span className="text-primary">Flask</span> and have become quite comfortable building APIs with <span className="text-primary">Express.js</span>.
        </p>
      </div>
    </SectionWrapper>
  );
}