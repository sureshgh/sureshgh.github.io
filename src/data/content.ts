export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: {
    overview: string;
    problem: string;
    process: string;
    solution: string;
    results: string;
  };
  technologies: string[];
  images: string[];
  externalLinks: { label: string; url: string }[];
  featured: boolean;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: string[];
  publishedAt: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform Redesign",
    slug: "ecommerce-redesign",
    description: "A complete redesign of a legacy e-commerce platform, improving conversion rates by 40%.",
    content: {
      overview: "Led the full redesign of a major e-commerce platform serving over 500K monthly users. The goal was to modernize the UI, improve mobile experience, and streamline the checkout flow.",
      problem: "The existing platform had a dated interface, poor mobile responsiveness, and a checkout process with a 73% abandonment rate. Users frequently complained about navigation difficulties.",
      process: "Conducted user research with 50+ interviews, created detailed user journey maps, and iterated through 3 rounds of prototyping and usability testing.",
      solution: "Implemented a clean, component-based design system with a simplified 3-step checkout. Added progressive disclosure patterns and smart defaults to reduce cognitive load.",
      results: "Conversion rates improved by 40%, mobile engagement increased by 65%, and cart abandonment dropped to 45%. The platform now handles 2x the traffic with better performance.",
    },
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Figma"],
    images: [],
    externalLinks: [{ label: "Live Site", url: "#" }],
    featured: true,
    createdAt: "2025-08-15",
  },
  {
    id: "2",
    title: "Health & Wellness Dashboard",
    slug: "health-dashboard",
    description: "An intuitive dashboard for tracking health metrics with real-time data visualization.",
    content: {
      overview: "Designed and built a comprehensive health tracking dashboard that aggregates data from multiple wearable devices and presents actionable insights.",
      problem: "Users struggled to make sense of fragmented health data spread across multiple apps. There was no unified view of their wellness journey.",
      process: "Worked closely with healthcare professionals to understand key metrics. Built interactive prototypes and tested with beta users over 3 months.",
      solution: "Created a unified dashboard with customizable widgets, trend analysis, and AI-powered recommendations. Integrated with Apple Health, Fitbit, and Garmin APIs.",
      results: "Achieved 4.8/5 user satisfaction rating. Users reported 60% better understanding of their health trends. Onboarded 10K users in the first month.",
    },
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
    images: [],
    externalLinks: [{ label: "Case Study", url: "#" }],
    featured: true,
    createdAt: "2025-05-20",
  },
  {
    id: "3",
    title: "AI Content Management System",
    slug: "ai-cms",
    description: "A next-generation CMS with AI-assisted content creation and SEO optimization.",
    content: {
      overview: "Built an intelligent CMS that leverages AI to help content creators write better, faster, and with improved SEO performance.",
      problem: "Content teams were spending too much time on repetitive tasks like meta descriptions, image alt texts, and internal linking. SEO optimization was inconsistent.",
      process: "Interviewed 20+ content managers, analyzed existing workflows, and identified automation opportunities. Built MVP in 6 weeks with iterative feedback.",
      solution: "Developed AI modules for auto-generating meta descriptions, suggesting internal links, optimizing readability scores, and generating image alt texts from content context.",
      results: "Reduced content production time by 35%. Average SEO scores improved from 62 to 89. Content team satisfaction increased significantly.",
    },
    technologies: ["Next.js", "OpenAI", "Prisma", "Tailwind CSS", "Vercel"],
    images: [],
    externalLinks: [{ label: "GitHub", url: "#" }],
    featured: false,
    createdAt: "2025-02-10",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Design Systems from Scratch",
    slug: "building-design-systems",
    excerpt: "Lessons learned from creating and maintaining design systems across multiple products and teams.",
    content: `## Why Design Systems Matter\n\nA design system is more than a component library — it's a shared language between design and engineering. After building systems for three different organizations, here's what I've learned.\n\n### Start with Principles, Not Components\n\nThe biggest mistake teams make is jumping straight into building buttons and inputs. Instead, start by defining your design principles. What does your brand feel like? How should interactions behave?\n\n> "A design system is not a project. It's a product serving products." — Nathan Curtis\n\n### Token Architecture\n\nDesign tokens are the foundation. Structure them in three layers:\n\n1. **Global tokens** — Raw values (colors, spacing)\n2. **Semantic tokens** — Purpose-driven aliases (primary, background)\n3. **Component tokens** — Scoped to specific components\n\n\`\`\`css\n:root {\n  --color-blue-500: #3b82f6;\n  --color-primary: var(--color-blue-500);\n  --button-bg: var(--color-primary);\n}\n\`\`\`\n\n### Adoption Strategy\n\nThe best design system is the one people actually use. Focus on developer experience, provide excellent documentation, and make migration gradual.\n\nStarting small and iterating based on real usage patterns will always beat trying to build the perfect system upfront.`,
    coverImage: "",
    tags: ["Design Systems", "Frontend", "Architecture"],
    publishedAt: "2025-12-01",
    featured: true,
  },
  {
    id: "2",
    title: "The Art of Performance Optimization",
    slug: "performance-optimization",
    excerpt: "Deep dive into web performance — from Core Web Vitals to runtime optimization strategies.",
    content: `## Performance is a Feature\n\nEvery 100ms of latency costs 1% in revenue. Performance isn't just a technical concern — it directly impacts user experience and business metrics.\n\n### Measuring What Matters\n\nFocus on Core Web Vitals:\n- **LCP** (Largest Contentful Paint) — Loading performance\n- **INP** (Interaction to Next Paint) — Interactivity\n- **CLS** (Cumulative Layout Shift) — Visual stability\n\n### Common Pitfalls\n\nMost performance issues come from:\n1. Unoptimized images and fonts\n2. Excessive JavaScript bundles\n3. Layout thrashing and forced reflows\n4. Unmanaged re-renders in React\n\n\`\`\`typescript\n// Bad: Re-renders on every parent update\nconst ExpensiveList = ({ items }) => {\n  return items.map(item => <ExpensiveItem key={item.id} {...item} />);\n};\n\n// Good: Memoized to prevent unnecessary re-renders\nconst ExpensiveList = React.memo(({ items }) => {\n  return items.map(item => <ExpensiveItem key={item.id} {...item} />);\n});\n\`\`\`\n\nProfile before optimizing. Measure impact after every change. And remember — premature optimization is still the root of all evil.`,
    coverImage: "",
    tags: ["Performance", "Web Development", "React"],
    publishedAt: "2025-10-15",
    featured: true,
  },
  {
    id: "3",
    title: "Reflections on Remote-First Engineering Culture",
    slug: "remote-engineering-culture",
    excerpt: "How to build a thriving engineering culture when your team is distributed across time zones.",
    content: `## Beyond the Office\n\nAfter three years leading remote-first teams, I've learned that remote work isn't about replicating the office — it's about rethinking how we collaborate.\n\n### Async by Default\n\nThe most important shift is moving from synchronous to asynchronous communication as the default. This means:\n\n- **Write things down** — Every decision, every context\n- **Record meetings** — For those in different time zones\n- **Use threads** — Keep discussions organized and searchable\n\n### Building Connection\n\nRemote doesn't mean isolated. Intentional relationship-building matters:\n\n1. Virtual coffee chats (optional, no agenda)\n2. Team retrospectives focused on feelings, not just tasks\n3. Celebrating wins publicly and loudly\n\n> The best remote teams aren't the ones with the best tools — they're the ones with the strongest trust.\n\nInvest in trust, documentation, and async workflows. The rest follows naturally.`,
    coverImage: "",
    tags: ["Culture", "Remote Work", "Leadership"],
    publishedAt: "2025-09-01",
    featured: false,
  },
];
