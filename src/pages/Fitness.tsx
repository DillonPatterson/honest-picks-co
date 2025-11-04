import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewCard from "@/components/ReviewCard";
import Footer from "@/components/Footer";
import { Award, TrendingUp, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Fitness = () => {
  const quickPicks = [
    {
      icon: <Award className="h-6 w-6" />,
      label: "Best Overall",
      product: "Theragun Elite",
      slug: "massage-gun-review",
      price: "$399"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      label: "Best Value",
      product: "Hyperice Hypervolt Go",
      slug: "hypervolt-go-review",
      price: "$199"
    },
    {
      icon: <Volume2 className="h-6 w-6" />,
      label: "Best Quiet",
      product: "Ekrin Athletics B37",
      slug: "ekrin-b37-review",
      price: "$279"
    }
  ];

  const reviews = [
    {
      title: "Theragun Elite Review: Professional-Grade Recovery",
      slug: "massage-gun-review",
      category: "fitness" as const,
      rating: 4.5,
      excerpt: "Powerful, quiet, and built for athletes who demand the best.",
      imageUrl: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&h=450&fit=crop",
      price: "$399"
    },
    {
      title: "Resistance Bands Set Review",
      slug: "resistance-bands-review",
      category: "fitness" as const,
      rating: 4.0,
      excerpt: "Versatile home workout essential with multiple resistance levels.",
      imageUrl: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&h=450&fit=crop",
      price: "$32"
    },
    {
      title: "Foam Roller Deep Tissue Review",
      slug: "foam-roller-review",
      category: "fitness" as const,
      rating: 4.5,
      excerpt: "Effective myofascial release for post-workout recovery.",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=450&fit=crop",
      price: "$42"
    },
    {
      title: "Adjustable Dumbbells 5-52.5 lbs Review",
      slug: "adjustable-dumbbells-review",
      category: "fitness" as const,
      rating: 4.5,
      excerpt: "Space-saving design replaces 15 sets of weights.",
      imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=450&fit=crop",
      price: "$299"
    },
    {
      title: "Yoga Mat Premium Non-Slip Review",
      slug: "yoga-mat-review",
      category: "fitness" as const,
      rating: 4.0,
      excerpt: "Extra cushioning and grip for any practice level.",
      imageUrl: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=450&fit=crop",
      price: "$68"
    },
    {
      title: "Heart Rate Monitor Chest Strap Review",
      slug: "heart-rate-monitor-review",
      category: "fitness" as const,
      rating: 4.5,
      excerpt: "Accurate tracking for serious training and recovery monitoring.",
      imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=450&fit=crop",
      price: "$79"
    }
  ];

  const blogs = [
    {
      title: "Massage Gun Buying Guide: What Actually Matters",
      slug: "massage-gun-guide",
      date: "Jan 16, 2025",
      readTime: "8 min",
      excerpt: "Stall force, amplitude, battery life—we explain what these specs mean for your recovery.",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop"
    },
    {
      title: "Home Gym Essentials Under $500",
      slug: "home-gym-essentials",
      date: "Jan 13, 2025",
      readTime: "6 min",
      excerpt: "Build an effective workout space without breaking the bank.",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=450&fit=crop"
    },
    {
      title: "Recovery Tools: What Science Says",
      slug: "recovery-science",
      date: "Jan 10, 2025",
      readTime: "7 min",
      excerpt: "Which recovery methods have research backing and which are just hype?",
      imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=450&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />
      
      <div className="relative" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--fitness) / 0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        <div className="container mx-auto px-4 py-12">
          {/* Promise */}
          <div className="mb-16">
            <h1 className="mb-3">Fitness</h1>
            <div className="h-1 w-24 bg-fitness mb-6" />
            <p className="font-serif text-lg text-muted-foreground max-w-2xl">
              Gear that performs. We test recovery tools and home fitness equipment through real athlete use, measuring noise, battery life, and durability.
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
                  className="group flex flex-col items-start gap-4 rounded-md border border-border bg-card p-6 transition-all hover:border-fitness hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 text-fitness">
                    {pick.icon}
                    <span className="font-sans text-sm font-medium uppercase tracking-wide">
                      {pick.label}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2 group-hover:text-fitness transition-colors">
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
              to="/compare/theragun-vs-hyperice"
              className="group block rounded-md border border-border bg-card overflow-hidden transition-all hover:border-fitness hover:shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-6 p-8">
                <div>
                  <h3 className="text-xl mb-2">Theragun vs Hyperice</h3>
                  <p className="font-serif text-muted-foreground mb-4">
                    The two biggest names in percussion therapy. We tested both for 30 days to find the winner.
                  </p>
                  <span className="font-sans text-sm font-medium text-fitness group-hover:underline">
                    Read comparison →
                  </span>
                </div>
                <div className="flex items-center justify-end text-fitness">
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
                    <h3 className="font-sans text-lg font-semibold leading-tight line-clamp-2 group-hover:text-fitness transition-colors">
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
            <div className="rounded-md border border-fitness/20 bg-fitness/5 p-8">
              <h2 className="mb-4">Fitness Equipment Buying Guide</h2>
              <p className="font-serif text-muted-foreground mb-6">
                From massage guns to home gym setups, we break down the specs that matter. Learn about stall force, 
                amplitude, noise levels, battery performance, and build quality. Make informed decisions based on 
                your training goals and space constraints.
              </p>
              <Button variant="outline" className="border-fitness text-fitness hover:bg-fitness hover:text-fitness-foreground" asChild>
                <Link to="/blog/fitness-buying-guide">
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

export default Fitness;
