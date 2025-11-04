import ReviewCard from "./ReviewCard";

const LatestReviews = () => {
  const reviews = [
    {
      title: "Premium Massage Gun: Performance for Athletes",
      slug: "massage-gun-athlete-performance",
      category: "fitness" as const,
      rating: 4.5,
      excerpt: "Powerful motor with minimal noise. Extended battery life makes it ideal for regular deep tissue work.",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      price: "$299",
    },
    {
      title: "Eco-Friendly Bamboo Dish Rack Review",
      slug: "bamboo-dish-rack-eco-review",
      category: "eco" as const,
      rating: 4.0,
      excerpt: "Sustainable materials meet practical design. Durable construction with proper drainage for daily use.",
      imageUrl: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
      price: "$79",
    },
    {
      title: "Audiophile Headphones Under $500",
      slug: "audiophile-headphones-budget",
      category: "tech" as const,
      rating: 4.5,
      excerpt: "Exceptional sound quality with comfortable fit. Premium build without the premium price tag.",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      price: "$449",
    },
    {
      title: "Adjustable Resistance Bands Set",
      slug: "resistance-bands-set-review",
      category: "fitness" as const,
      rating: 4.0,
      excerpt: "Versatile home workout solution. Multiple resistance levels for progressive training.",
      imageUrl: "https://images.unsplash.com/photo-1598266663439-2056815f7ef3?w=800&q=80",
      price: "$59",
    },
    {
      title: "Stainless Steel Lunch Containers",
      slug: "stainless-lunch-containers",
      category: "eco" as const,
      rating: 4.5,
      excerpt: "Plastic-free food storage built to last. Leak-proof design for daily commutes.",
      imageUrl: "https://images.unsplash.com/photo-1544913220-8e1d4d0b7c3d?w=800&q=80",
      price: "$45",
    },
    {
      title: "Wireless Studio Monitors Review",
      slug: "wireless-studio-monitors",
      category: "tech" as const,
      rating: 5.0,
      excerpt: "Professional-grade audio in a compact form. Perfect for home studios and critical listening.",
      imageUrl: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
      price: "$599",
    },
  ];

  return (
    <section className="border-b border-border bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-sans text-3xl font-bold tracking-tight md:text-4xl">
              Latest Reviews
            </h2>
            <div className="mt-2 h-1 w-16 bg-primary" />
          </div>
          <a href="/reviews" className="font-sans text-sm font-medium hover:underline">
            View All →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.slug} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestReviews;
