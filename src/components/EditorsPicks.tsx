import { Award } from "lucide-react";
import { Link } from "react-router-dom";

const EditorsPicks = () => {
  const picks = [
    {
      title: "Best Massage Gun for Athletes",
      slug: "massage-gun-athlete-performance",
      category: "Fitness",
      categoryColor: "fitness",
      reason: "Unmatched power and battery life",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    },
    {
      title: "Top Eco Kitchen Essentials",
      slug: "eco-kitchen-essentials",
      category: "Eco Home",
      categoryColor: "eco",
      reason: "Sustainable without compromise",
      imageUrl: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80",
    },
    {
      title: "Best Value Audiophile Headphones",
      slug: "audiophile-headphones-budget",
      category: "Tech",
      categoryColor: "tech",
      reason: "Premium sound at fair price",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",
    },
  ];

  return (
    <section className="border-b border-border bg-muted/30 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Award className="h-7 w-7 text-primary" />
            <h2 className="font-sans text-3xl font-bold tracking-tight md:text-4xl">
              Editor's Choice
            </h2>
          </div>
          <div className="mt-2 h-1 w-16 bg-primary" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {picks.map((pick) => {
            const categoryColorClasses = {
              fitness: "border-fitness bg-fitness/10 text-fitness",
              eco: "border-eco bg-eco/10 text-eco",
              tech: "border-tech bg-tech/10 text-tech",
            };

            return (
              <Link
                key={pick.slug}
                to={`/reviews/${pick.slug}`}
                className="group relative overflow-hidden rounded-md border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={pick.imageUrl}
                    alt={pick.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute left-4 top-4">
                  <div className={`rounded border px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wide backdrop-blur-sm ${categoryColorClasses[pick.categoryColor as keyof typeof categoryColorClasses]}`}>
                    {pick.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-sans text-xl font-bold leading-tight group-hover:text-primary/80">
                    {pick.title}
                  </h3>
                  <p className="font-serif text-sm text-muted-foreground">
                    {pick.reason}
                  </p>
                  <div className="pt-2">
                    <span className="font-sans text-sm font-medium text-primary group-hover:underline">
                      See Full Review →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EditorsPicks;
