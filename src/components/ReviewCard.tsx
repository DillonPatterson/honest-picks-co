import { Star, StarHalf } from "lucide-react";
import { Link } from "react-router-dom";

interface ReviewCardProps {
  title: string;
  slug: string;
  category: "fitness" | "eco" | "tech";
  rating: number;
  excerpt: string;
  imageUrl: string;
  price?: string;
}

const ReviewCard = ({ title, slug, category, rating, excerpt, imageUrl, price }: ReviewCardProps) => {
  const categoryColors = {
    fitness: "text-fitness border-fitness",
    eco: "text-eco border-eco",
    tech: "text-tech border-tech",
  };

  const categoryBg = {
    fitness: "bg-fitness/5",
    eco: "bg-eco/5",
    tech: "bg-tech/5",
  };

  const renderStars = (score: number) => {
    const stars = [];
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-current" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-current" />);
    }
    const emptyStars = 5 - Math.ceil(score);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4" />);
    }
    return stars;
  };

  return (
    <Link
      to={`/reviews/${slug}`}
      className="group overflow-hidden rounded-md border border-border bg-card shadow-sm transition-all hover:shadow-md"
    >
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className={`font-sans text-xs font-medium uppercase tracking-wide ${categoryColors[category]}`}>
            {category}
          </span>
          {price && (
            <span className="ml-auto font-serif text-sm text-muted-foreground">
              {price}
            </span>
          )}
        </div>

        <h3 className="font-sans text-lg font-semibold leading-tight line-clamp-2 group-hover:text-primary/80">
          {title}
        </h3>

        <div className={`flex items-center gap-1.5 ${categoryColors[category]}`}>
          {renderStars(rating)}
          <span className="ml-1 font-sans text-sm font-medium">
            {rating.toFixed(1)}
          </span>
        </div>

        <p className="font-serif text-sm text-muted-foreground line-clamp-2">
          {excerpt}
        </p>

        <div className="pt-2">
          <span className="font-sans text-sm font-medium text-primary group-hover:underline">
            Read Review →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
