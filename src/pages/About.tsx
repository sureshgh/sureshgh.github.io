import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const skills = [
  "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Figma",
  "Tailwind CSS", "GraphQL", "AWS", "Docker", "Git", "Agile",
];

const timeline = [
  {
    year: "2023 – Present",
    role: "Senior Product Designer & Developer",
    company: "TechCorp Inc.",
    description: "Leading design and frontend development for the core product platform.",
    icon: Briefcase,
  },
  {
    year: "2020 – 2023",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    description: "Built and shipped 3 products from concept to launch, serving 100K+ users.",
    icon: Briefcase,
  },
  {
    year: "2018 – 2020",
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    description: "Developed responsive web applications for enterprise clients.",
    icon: Briefcase,
  },
  {
    year: "2014 – 2018",
    role: "B.S. Computer Science",
    company: "State University",
    description: "Focus on HCI and Software Engineering. Dean's List all semesters.",
    icon: GraduationCap,
  },
];

const About = () => {
  return (
    <div className="pt-16">
      <Section>
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-2">About</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Jane Doe
            </h1>
            <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a designer and developer with over 7 years of experience building digital products. 
                I specialize in creating intuitive, performant, and beautiful web applications.
              </p>
              <p>
                My approach combines deep technical expertise with a strong design sensibility. I believe 
                the best products emerge when engineering and design work hand-in-hand from day one.
              </p>
              <p>
                When I'm not coding, you'll find me hiking, reading about cognitive psychology, or 
                experimenting with new creative tools. I'm always open to interesting conversations 
                and collaboration opportunities.
              </p>
            </div>
            <Button className="mt-8" size="lg">
              <Download size={16} className="mr-2" /> Download Resume
            </Button>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">Skills & Tools</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm font-normal px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-card">
        <h2 className="text-3xl font-display font-bold text-foreground mb-12">Experience</h2>
        <div className="max-w-2xl space-y-0">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-10 pb-10 border-l border-border last:pb-0"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <item.icon size={12} className="text-primary" />
              </div>
              <p className="text-xs font-medium text-primary mb-1">{item.year}</p>
              <h3 className="text-lg font-display font-semibold text-foreground">{item.role}</h3>
              <p className="text-sm font-medium text-muted-foreground">{item.company}</p>
              <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
