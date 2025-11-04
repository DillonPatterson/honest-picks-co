import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewCard from "@/components/ReviewCard";
import Footer from "@/components/Footer";
import { Award, TrendingUp, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const EcoHome = () => {
  const quickPicks = [
    {
      icon: <Award className="h-6 w-6" />,
      label: "Best Overall",
      product: "EcoWise Bamboo Set",
      slug: "ecowise-bamboo-set",
      price: "$49"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      label: "Best Value",
      product: "Simple Green Basics",
      slug: "simple-green-basics",
      price: "$24"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      label: "Most Sustainable",
      product: "Zero Waste Kit",
      slug: "zero-waste-kit",
      price: "$68"
    }
  ];

  const reviews = [
    {
      title: "EcoWise Bamboo Dish Rack Review",
      slug: "eco-kitchen-essentials",
      category: "eco" as const,
      rating: 4.5,
      excerpt: "Sustainable materials meet practical design in this kitchen essential.",
      imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=450&fit=crop",
      price: "$49"
    },
    {
      title: "Beeswax Food Wraps Complete Set",
      slug: "beeswax-wraps-review",
      category: "eco" as const,
      rating: 4.0,
      excerpt: "Replace plastic wrap with this reusable, natural alternative.",
      imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=450&fit=crop",
      price: "$32"
    },
    {
      title: "Stainless Steel Straw Set Review",
      slug: "steel-straw-set",
      category: "eco" as const,
      rating: 4.5,
      excerpt: "Durable, easy to clean, and comes with a carrying case.",
      imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=450&fit=crop",
      price: "$16"
    },
    {
      title: "Compost Bin Kitchen Caddy Review",
      slug: "compost-bin-review",
      category: "eco" as const,
      rating: 4.5,
      excerpt: "Odor-free composting made simple for your kitchen counter.",
      imageUrl: "https://images.unsplash.com/photo-1604857860614-2b604c0753bd?w=800&h=450&fit=crop",
      price: "$42"
    },
    {
      title: "Organic Cotton Produce Bags",
      slug: "cotton-produce-bags",
      category: "eco" as const,
      rating: 4.0,
      excerpt: "Lightweight, breathable bags for your grocery shopping trips.",
      imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=450&fit=crop",
      price: "$18"
    },
    {
      title: "Glass Storage Container Set Review",
      slug: "glass-storage-review",
      category: "eco" as const,
      rating: 4.5,
      excerpt: "Plastic-free food storage that's microwave and dishwasher safe.",
      imageUrl: "https://images.unsplash.com/photo-1584736064843-c7ab3be4c596?w=800&h=450&fit=crop",
      price: "$56"
    }
  ];

  const blogs = [
    {
      title: "7 Kitchen Swaps for a Greener Home",
      slug: "eco-kitchen-starters",
      date: "Jan 15, 2025",
      readTime: "5 min",
      excerpt: "Start your eco journey with these simple, effective kitchen upgrades.",
      imageUrl: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=450&fit=crop"
    },
    {
      title: "Understanding Sustainable Materials",
      slug: "sustainable-materials-guide",
      date: "Jan 12, 2025",
      readTime: "7 min",
      excerpt: "What makes a material truly sustainable? We break down the science.",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=450&fit=crop"
    },
    {
      title: "Zero Waste Living: A Realistic Approach",
      slug: "zero-waste-realistic",
      date: "Jan 8, 2025",
      readTime: "6 min",
      excerpt: "You don't have to be perfect. Here's how to make meaningful changes.",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=450&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />
      
      <div className="relative" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--eco) / 0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        <div className="container mx-auto px-4 py-12">
          {/* Promise */}
          <div className="mb-16">
            <h1 className="mb-3">Eco Home</h1>
            <div className="h-1 w-24 bg-eco mb-6" />
            <p className="font-serif text-lg text-muted-foreground max-w-2xl">
              Sustainable products that work. We test durability, materials, and real-world performance so you can trust every pick.
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
                  className="group flex flex-col items-start gap-4 rounded-md border border-border bg-card p-6 transition-all hover:border-eco hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 text-eco">
                    {pick.icon}
                    <span className="font-sans text-sm font-medium uppercase tracking-wide">
                      {pick.label}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2 group-hover:text-eco transition-colors">
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
              to="/compare/bamboo-vs-steel"
              className="group block rounded-md border border-border bg-card overflow-hidden transition-all hover:border-eco hover:shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-6 p-8">
                <div>
                  <h3 className="text-xl mb-2">Bamboo vs Stainless Steel</h3>
                  <p className="font-serif text-muted-foreground mb-4">
                    Both sustainable, but which kitchen material is right for you?
                  </p>
                  <span className="font-sans text-sm font-medium text-eco group-hover:underline">
                    Read comparison →
                  </span>
                </div>
                <div className="flex items-center justify-end text-eco">
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
                    <h3 className="font-sans text-lg font-semibold leading-tight line-clamp-2 group-hover:text-eco transition-colors">
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
            <div className="rounded-md border border-eco/20 bg-eco/5 p-8">
              <h2 className="mb-4">Eco Home Buying Guide</h2>
              <p className="font-serif text-muted-foreground mb-6">
                Not sure where to start? Our comprehensive guide covers materials, certifications, durability testing, 
                and how to evaluate true sustainability claims. Learn what to look for and what to avoid when building 
                a greener home.
              </p>
              <Button variant="outline" className="border-eco text-eco hover:bg-eco hover:text-eco-foreground" asChild>
                <Link to="/blog/eco-home-guide">
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

export default EcoHome;
