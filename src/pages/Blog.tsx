import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/content";

const Blog = () => {
  return (
    <div className="pt-16">
      <Section>
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-2">Blog</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Thoughts & Insights
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Writing about design, development, and everything in between.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blog;
