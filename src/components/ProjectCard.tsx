import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Project } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/portfolio/${project.slug}`}
        className="group block bg-card rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
      >
        <div className="aspect-video bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <span className="font-display text-2xl text-primary/40">{project.title[0]}</span>
          </div>
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-primary text-primary-foreground rounded-full p-1.5">
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs font-normal">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
