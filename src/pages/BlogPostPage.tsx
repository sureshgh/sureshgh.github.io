import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/content";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">Post not found</h1>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let inCodeBlock = false;
    let codeContent = "";
    let codeKey = 0;

    lines.forEach((line, i) => {
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${codeKey++}`} className="bg-secondary rounded-lg p-4 overflow-x-auto my-6 text-sm">
              <code className="text-foreground">{codeContent.trim()}</code>
            </pre>
          );
          codeContent = "";
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += line + "\n";
        return;
      }

      if (line.startsWith("### ")) {
        elements.push(<h3 key={i} className="text-xl font-display font-semibold text-foreground mt-8 mb-3">{line.slice(4)}</h3>);
      } else if (line.startsWith("## ")) {
        elements.push(<h2 key={i} className="text-2xl font-display font-bold text-foreground mt-10 mb-4">{line.slice(3)}</h2>);
      } else if (line.startsWith("> ")) {
        elements.push(
          <blockquote key={i} className="border-l-2 border-primary pl-4 my-6 italic text-muted-foreground">
            {line.slice(2)}
          </blockquote>
        );
      } else if (line.match(/^\d+\.\s/)) {
        elements.push(
          <li key={i} className="text-muted-foreground ml-6 list-decimal leading-relaxed">
            {renderInlineCode(line.replace(/^\d+\.\s/, ""))}
          </li>
        );
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={i} className="text-muted-foreground ml-6 list-disc leading-relaxed">
            {renderInlineCode(line.slice(2))}
          </li>
        );
      } else if (line.trim() === "") {
        elements.push(<div key={i} className="h-2" />);
      } else {
        elements.push(<p key={i} className="text-muted-foreground leading-relaxed">{renderInlineCode(line)}</p>);
      }
    });

    return elements;
  };

  const renderInlineCode = (text: string) => {
    const parts = text.split(/(`[^`]+`)/g);
    return parts.map((part, i) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={i} className="bg-secondary text-foreground px-1.5 py-0.5 rounded text-sm font-mono">
            {part.slice(1, -1)}
          </code>
        );
      }
      // Handle bold
      const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
      return boldParts.map((bp, j) => {
        if (bp.startsWith("**") && bp.endsWith("**")) {
          return <strong key={`${i}-${j}`} className="text-foreground font-semibold">{bp.slice(2, -2)}</strong>;
        }
        return bp;
      });
    });
  };

  return (
    <div className="pt-16">
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-20"
      >
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar size={14} />
            <time>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>

          <div className="mt-12 prose-custom">
            {renderContent(post.content)}
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default BlogPostPage;
