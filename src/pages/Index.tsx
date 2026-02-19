import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { projects, blogPosts } from "@/data/content";

const Index = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const featuredPosts = blogPosts.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
              Designer & Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-foreground">
              Hi, I'm{" "}
              <span className="text-primary">Jane Doe</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed max-w-lg">
              I craft thoughtful digital experiences at the intersection of design and engineering. Currently focused on building products that matter.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Button asChild size="lg">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/blog">Read Blog</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <Section>
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-2">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Selected Work
            </h2>
          </div>
          <Link to="/portfolio" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Section>

      {/* Featured Posts */}
      <Section className="bg-card">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-2">Blog</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Latest Thoughts
            </h2>
          </div>
          <Link to="/blog" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Let's work together
          </h2>
          <p className="text-muted-foreground mt-4">
            Have a project in mind? I'd love to hear about it.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Index;
