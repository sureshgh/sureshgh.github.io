import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import { projects } from "@/data/content";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">Project not found</h1>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    );
  }

  const sections = [
    { title: "Overview", content: project.content.overview },
    { title: "The Problem", content: project.content.problem },
    { title: "Process", content: project.content.process },
    { title: "Solution", content: project.content.solution },
    { title: "Results", content: project.content.results },
  ];

  return (
    <div className="pt-16">
      <Section>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground mt-4">{project.description}</p>

            {project.externalLinks.length > 0 && (
              <div className="flex gap-3 mt-6">
                {project.externalLinks.map((link) => (
                  <Button key={link.label} asChild variant="outline" size="sm">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label} <ExternalLink size={12} className="ml-1" />
                    </a>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </Section>

      {/* Project thumbnail */}
      <div className="container mx-auto px-6">
        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <span className="font-display text-6xl text-primary/20">{project.title[0]}</span>
          </div>
        </div>
      </div>

      {/* Content sections */}
      {sections.map((section) => (
        <Section key={section.title}>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              {section.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{section.content}</p>
          </div>
        </Section>
      ))}
    </div>
  );
};

export default ProjectDetail;
