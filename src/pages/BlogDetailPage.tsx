import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getBlogById, blogs } from "@/lib/blogs-data";
import { SEO } from "@/components/SEO";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const blog = id ? getBlogById(id) : undefined;

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const relatedBlogs = blogs
    .filter(b => b.id !== blog.id && b.category === blog.category)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${blog.title} | Blog - Devs Quest`}
        description={blog.excerpt}
        keywords={blog.tags.join(', ')}
        canonicalUrl={`/blog/${blog.id}`}
      />
      <Navbar />
      
      {/* Hero Section with Image */}
      <section className="pt-32 pb-18 relative overflow-hidden">
        {/* Blog Image Background */}
        <div className="absolute inset-0">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/80 to-foreground" />
        </div>
        
        {/* Animated Background Overlay */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-primary/15 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="container relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                {blog.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-background max-w-4xl">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-background/70 mb-8">
              <div className="flex items-center gap-2">
                {blog.authorImage && (
                  <img 
                    src={blog.authorImage} 
                    alt={blog.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <span className="font-medium text-background">{blog.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(blog.publishedDate)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-5 h-5" />
                <span>{blog.readTime}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-background/70 hover:text-background"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 pt-20">
        <div className="container px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {blog.content.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('##')) {
                      return (
                        <h2 key={index} className="text-3xl font-bold text-foreground mt-4 mb-2">
                          {paragraph.replace('##', '').trim()}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h3 key={index} className="text-xl font-semibold text-foreground mt-4 mb-2">
                          {paragraph.replace(/\*\*/g, '').trim()}
                        </h3>
                      );
                    }
                    if (paragraph.trim() === '') {
                      return <br key={index} />;
                    }
                    if (paragraph.startsWith('-')) {
                      return (
                        <li key={index} className="ml-6 mb-2">
                          {paragraph.replace('-', '').trim()}
                        </li>
                      );
                    }
                    if (paragraph.startsWith('✅') || paragraph.startsWith('- ✅')) {
                      return (
                        <div key={index} className="flex items-start gap-2 mb-2">
                          <span className="text-primary">✓</span>
                          <span>{paragraph.replace(/[-✅]/g, '').trim()}</span>
                        </div>
                      );
                    }
                    return (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </article>

              {/* Tags */}
              <div className="mt-12 pt-4 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Author Card */}
                <div className="bg-card rounded-2xl border border-border p-6 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    {blog.authorImage && (
                      <img 
                        src={blog.authorImage} 
                        alt={blog.author}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-foreground">{blog.author}</h4>
                      <p className="text-sm text-muted-foreground">Author</p>
                    </div>
                  </div>
                </div>

                {/* Related Blogs */}
                {relatedBlogs.length > 0 && (
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedBlogs.map((relatedBlog) => (
                        <Link
                          key={relatedBlog.id}
                          to={`/blog/${relatedBlog.id}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <img 
                              src={relatedBlog.image} 
                              alt={relatedBlog.title}
                              className="w-20 h-20 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                {relatedBlog.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {formatDate(relatedBlog.publishedDate)}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
