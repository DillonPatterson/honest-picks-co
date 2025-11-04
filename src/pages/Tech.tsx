import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewCard from "@/components/ReviewCard";
import Footer from "@/components/Footer";
import { Award, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const Tech = () => {
  const quickPicks = [
    {
      icon: <Award className="h-6 w-6" />,
      label: "Best Overall",
      product: "Sony WH-1000XM5",
      slug: "sony-wh1000xm5-review",
      price: "$399"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      label: "Best Value",
      product: "Sennheiser HD 560S",
      slug: "sennheiser-hd560s-review",
      price: "$199"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      label: "Best Under $500",
      product: "Focal Clear OG",
      slug: "audiophile-headphones-500",
      price: "$490"
    }
  ];

  const reviews = [
    {
      title: "Audiophile Wireless Headphones Under $500",
      slug: "audiophile-headphones-500",
      category: "tech" as const,
      rating: 4.5,
      excerpt: "High-fidelity sound without breaking the bank. Our top picks for serious listeners.",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=450&fit=crop",
      price: "$490"
    },
    {
      title: "USB-C Hub 7-in-1 Review",
      slug: "usb-c-hub-review",
      category: "tech" as const,
      rating: 4.0,
      excerpt: "Expand your laptop's connectivity with reliable ports and fast data transfer.",
      imageUrl: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&h=450&fit=crop",
      price: "$59"
    },
    {
      title: "Mechanical Keyboard Enthusiast Review",
      slug: "mechanical-keyboard-review",
      category: "tech" as const,
      rating: 4.5,
      excerpt: "Custom switches, hot-swap PCB, and premium keycaps for the perfect typing experience.",
      imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&h=450&fit=crop",
      price: "$179"
    },
    {
      title: "Webcam 4K Review for Remote Work",
      slug: "webcam-4k-review",
      category: "tech" as const,
      rating: 4.0,
      excerpt: "Crystal clear video with auto-focus and excellent low-light performance.",
      imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=450&fit=crop",
      price: "$129"
    },
    {
      title: "Portable SSD 2TB Review",
      slug: "portable-ssd-review",
      category: "tech" as const,
      rating: 4.5,
      excerpt: "Fast, durable storage for creators on the go with USB 3.2 Gen 2 speeds.",
      imageUrl: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=800&h=450&fit=crop",
      price: "$189"
    },
    {
      title: "Monitor Arm Dual Setup Review",
      slug: "monitor-arm-review",
      category: "tech" as const,
      rating: 4.0,
      excerpt: "Ergonomic desk setup with smooth adjustment and cable management.",
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=450&fit=crop",
      price: "$149"
    }
  ];

  const blogs = [
    {
      title: "Headphone Jargon Decoded: Impedance, Drivers, and Codecs",
      slug: "headphone-jargon-decoded",
      date: "Jan 17, 2025",
      readTime: "9 min",
      excerpt: "What do all those specs actually mean for sound quality? We explain in plain English.",
      imageUrl: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=450&fit=crop"
    },
    {
      title: "Desk Setup Essentials for Productivity",
      slug: "desk-setup-essentials",
      date: "Jan 14, 2025",
      readTime: "6 min",
      excerpt: "Build an ergonomic, efficient workspace with our tested recommendations.",
      imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=450&fit=crop"
    },
    {
      title: "Audio Codec Comparison: aptX vs LDAC vs AAC",
      slug: "audio-codec-comparison",
      date: "Jan 11, 2025",
      readTime: "7 min",
      excerpt: "How much do Bluetooth codecs really affect sound quality? We tested them all.",
      imageUrl: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&h=450&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />
      
      <div className="relative" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--tech) / 0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        <div className="container mx-auto px-4 py-12">
          {/* Promise */}
          <div className="mb-16">
            <h1 className="mb-3">Tech</h1>
            <div className="h-1 w-24 bg-tech mb-6" />
            <p className="font-serif text-lg text-muted-foreground max-w-2xl">
              Audio and peripherals tested by enthusiasts. We measure sound quality, comfort, battery life, and build to find gear that lasts.
            </p>
          </div>

          {/* Quick Picks */}
          <section className="mb-16">
            <h2 className="mb-8">Quick Picks</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {quickPicks.map((pick) => (
                <Link
                  key={pick.slug}
                  to={`/reviews/${pick.slug}`}
                  className="group flex flex-col items-start gap-4 rounded-md border border-border bg-card p-6 transition-all hover:border-tech hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 text-tech">
                    {pick.icon}
                    <span className="font-sans text-sm font-medium uppercase tracking-wide">
                      {pick.label}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2 group-hover:text-tech transition-colors">
                      {pick.product}
                    </h3>
                    <p className="font-serif text-sm text-muted-foreground">
                      {pick.price}
                    </p>
                  </div>
                  <span className="font-sans text-sm font-medium text-primary group-hover:underline">
                    See review →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Featured Comparison */}
          <section className="mb-16">
            <h2 className="mb-8">Featured Comparison</h2>
            <Link
              to="/compare/sony-vs-sennheiser"
              className="group block rounded-md border border-border bg-card overflow-hidden transition-all hover:border-tech hover:shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-6 p-8">
                <div>
                  <h3 className="text-xl mb-2">Sony WH-1000XM5 vs Sennheiser Momentum 4</h3>
                  <p className="font-serif text-muted-foreground mb-4">
                    Two premium wireless headphones with different approaches to sound and comfort.
                  </p>
                  <span className="font-sans text-sm font-medium text-tech group-hover:underline">
                    Read comparison →
                  </span>
                </div>
                <div className="flex items-center justify-end text-tech">
                  <div className="text-6xl font-bold opacity-10">VS</div>
                </div>
              </div>
            </Link>
          </section>

          {/* Latest Reviews */}
          <section className="mb-16">
            <h2 className="mb-8">Latest Reviews</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <ReviewCard key={review.slug} {...review} />
              ))}
            </div>
          </section>

          {/* Latest Blogs */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2>From the Blog</h2>
              <Link to="/blog" className="font-sans text-sm font-medium text-primary hover:underline">
                View all posts →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  to={`/blog/${blog.slug}`}
                  className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="aspect-[3/2] overflow-hidden bg-muted">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-5 space-y-3">
                    <div className="flex items-center gap-2 font-serif text-xs text-muted-foreground">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="font-sans text-lg font-semibold leading-tight line-clamp-2 group-hover:text-tech transition-colors">
                      {blog.title}
                    </h3>
                    <p className="font-serif text-sm text-muted-foreground line-clamp-2 flex-1">
                      {blog.excerpt}
                    </p>
                    <span className="font-sans text-sm font-medium text-primary group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Buyer Guide */}
          <section className="mb-16">
            <div className="rounded-md border border-tech/20 bg-tech/5 p-8">
              <h2 className="mb-4">Audio & Tech Buying Guide</h2>
              <p className="font-serif text-muted-foreground mb-6">
                Navigate the world of audiophile gear and peripherals with our comprehensive guide. We decode technical 
                specs like impedance, driver types, Bluetooth codecs, and more. Learn what matters for your use case 
                and budget, backed by our hands-on testing.
              </p>
              <Button variant="outline" className="border-tech text-tech hover:bg-tech hover:text-tech-foreground" asChild>
                <Link to="/blog/tech-buying-guide">
                  Read the full guide →
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tech;
