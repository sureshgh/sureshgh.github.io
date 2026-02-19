import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/content";

const Portfolio = () => {
  return (
    <div className="pt-16">
      <Section>
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-2">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            My Work
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            A collection of projects I've worked on — from concept to launch.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;
