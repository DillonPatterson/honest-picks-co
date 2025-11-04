import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, StarHalf, ExternalLink, ChevronUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface Review {
  title: string;
  category: "fitness" | "eco" | "tech";
  rating: number;
  verdict: string;
  price: string;
  retailers: Array<{ name: string; url: string }>;
  pros: string[];
  cons: string[];
  subScores: { [key: string]: number };
  specs: { [key: string]: string };
  testingNotes: string;
  alternatives: Array<{ title: string; slug: string; price: string }>;
  imageUrl: string;
}

// Mock data - in real app, this would come from backend
const mockReviews: { [key: string]: Review } = {
  "eco-kitchen-essentials": {
    title: "Eco-Friendly Dish Rack Review",
    category: "eco",
    rating: 4.5,
    verdict: "Best sustainable dish rack with thoughtful design and durable bamboo construction.",
    price: "$79",
    retailers: [
      { name: "Amazon", url: "https://amazon.com" },
      { name: "Direct", url: "https://example.com" },
    ],
    pros: [
      "100% sustainable bamboo",
      "Excellent water drainage",
      "Sturdy construction",
      "Easy to clean",
      "Holds full load of dishes",
    ],
    cons: [
      "Requires occasional oiling",
      "Higher price point",
      "Takes up counter space",
    ],
    subScores: {
      Sustainability: 5,
      Materials: 4.5,
      "Ease of Use": 4,
      Durability: 5,
      Value: 4,
    },
    specs: {
      Material: "Bamboo",
      Dimensions: '17" x 13" x 6"',
      Weight: "3.2 lbs",
      Capacity: "8-10 plates",
      Warranty: "2 years",
    },
    testingNotes:
      "We tested this dish rack over 60 days with daily use, monitoring water drainage, structural integrity, and ease of cleaning. The bamboo showed no signs of warping or splitting. Drainage system effectively channels water to the removable tray.",
    alternatives: [
      { title: "Steel Dish Rack Pro", slug: "steel-dish-rack-pro", price: "$59" },
      { title: "Compact Eco Drainer", slug: "compact-eco-drainer", price: "$45" },
      { title: "Premium Wood Rack", slug: "premium-wood-rack", price: "$99" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
  },
  "massage-gun-review": {
    title: "Massage Gun Review: Athlete Use and Noise",
    category: "fitness",
    rating: 4.5,
    verdict: "Powerful recovery tool with whisper-quiet operation, ideal for athletes.",
    price: "$299",
    retailers: [
      { name: "Amazon", url: "https://amazon.com" },
      { name: "Brand Site", url: "https://example.com" },
    ],
    pros: [
      "Ultra-quiet motor (45dB)",
      "6-hour battery life",
      "Professional-grade power",
      "5 speed settings",
      "Ergonomic grip",
      "Premium carry case",
    ],
    cons: [
      "Heavy for extended use",
      "Premium pricing",
      "Limited head attachments",
    ],
    subScores: {
      Performance: 5,
      Noise: 5,
      Battery: 4.5,
      Build: 5,
      Value: 4,
    },
    specs: {
      "Motor Power": "60W brushless",
      "Speed Range": "1200-3200 RPM",
      "Noise Level": "45dB",
      Battery: "2600mAh",
      Weight: "2.5 lbs",
      Attachments: "4 heads",
    },
    testingNotes:
      "Tested extensively by two athletes over 8 weeks. Measured noise levels at each speed setting. Battery lasted 6+ hours of varied use. Motor remained cool even during extended sessions. Build quality exceptional with premium materials throughout.",
    alternatives: [
      { title: "Budget Massage Gun", slug: "budget-massage-gun", price: "$99" },
      { title: "Theragun Elite", slug: "theragun-elite", price: "$399" },
      { title: "Compact Travel Gun", slug: "compact-travel-gun", price: "$149" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1591027866852-e59cbb1225d9?w=800&h=600&fit=crop",
  },
  "audiophile-headphones-500": {
    title: "Audiophile Wireless Headphones Under $500: First Look",
    category: "tech",
    rating: 4.5,
    verdict: "Reference-quality sound in wireless form factor with exceptional build.",
    price: "$449",
    retailers: [
      { name: "Amazon", url: "https://amazon.com" },
      { name: "B&H Photo", url: "https://example.com" },
    ],
    pros: [
      "Reference-grade sound signature",
      "Premium build quality",
      "30-hour battery life",
      "Excellent ANC performance",
      "Comfortable for long sessions",
      "LDAC codec support",
    ],
    cons: [
      "Heavy weight",
      "No IP rating",
      "Case is bulky",
    ],
    subScores: {
      Sound: 5,
      Comfort: 4,
      Battery: 5,
      Features: 4.5,
      Value: 4.5,
    },
    specs: {
      Driver: "40mm planar magnetic",
      Codec: "LDAC, aptX HD, AAC",
      Battery: "30 hours ANC on",
      Weight: "320g",
      Impedance: "32Ω",
      "Frequency Range": "5Hz - 40kHz",
    },
    testingNotes:
      "Evaluated with FLAC files and high-quality streaming. Compared against wired reference headphones. ANC tested in various environments. Comfort assessed during 4-hour listening sessions. Battery life verified through repeated full-drain cycles.",
    alternatives: [
      { title: "Sony WH-1000XM5", slug: "sony-wh-1000xm5", price: "$399" },
      { title: "Sennheiser Momentum 4", slug: "sennheiser-momentum-4", price: "$379" },
      { title: "Bowers & Wilkins PX8", slug: "bowers-wilkins-px8", price: "$699" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&h=600&fit=crop",
  },
};

const ReviewDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const review = slug ? mockReviews[slug] : null;

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!review) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Breadcrumbs />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">Review Not Found</h1>
            <Link to="/" className="text-primary hover:underline">
              Return Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const categoryColors = {
    fitness: "text-fitness border-fitness bg-fitness/5",
    eco: "text-eco border-eco bg-eco/5",
    tech: "text-tech border-tech bg-tech/5",
  };

  const renderStars = (score: number) => {
    const stars = [];
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-5 w-5 fill-current" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-current" />);
    }
    const emptyStars = 5 - Math.ceil(score);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-5 w-5" />);
    }
    return stars;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs />

      <main className="flex-1 bg-background">
        {/* Summary Card */}
        <section className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              <div>
                <img
                  src={review.imageUrl}
                  alt={review.title}
                  className="w-full rounded-md object-cover aspect-video"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <span className={`inline-block w-fit font-sans text-xs font-medium uppercase tracking-wide px-3 py-1 rounded ${categoryColors[review.category]}`}>
                  {review.category}
                </span>
                <h1 className="font-sans text-3xl md:text-4xl">{review.title}</h1>
                <div className={`flex items-center gap-2 ${categoryColors[review.category]}`}>
                  {renderStars(review.rating)}
                  <span className="ml-1 font-sans text-lg font-semibold">
                    {review.rating.toFixed(1)}
                  </span>
                </div>
                <p className="font-serif text-lg text-muted-foreground">{review.verdict}</p>
                
                {/* Disclosure */}
                <div className="text-xs text-muted-foreground font-serif border-t border-border pt-4">
                  We may earn a commission if you buy through our links—it never affects our picks.
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {review.retailers.map((retailer) => (
                    <Button key={retailer.name} asChild size="lg">
                      <a href={retailer.url} target="_blank" rel="noopener noreferrer">
                        See best price
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Column Body */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Pros & Cons */}
                <div id="pros-cons" className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-md border border-border bg-card p-6">
                    <h3 className="mb-4 text-eco">Pros</h3>
                    <ul className="space-y-2 font-serif">
                      {review.pros.map((pro, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-eco">+</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-md border border-border bg-card p-6">
                    <h3 className="mb-4 text-destructive">Cons</h3>
                    <ul className="space-y-2 font-serif">
                      {review.cons.map((con, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-destructive">−</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Testing Notes */}
                <div id="testing" className="rounded-md border border-border bg-card p-6">
                  <h3 className="mb-4">Testing Notes</h3>
                  <p className="font-serif text-muted-foreground">{review.testingNotes}</p>
                </div>

                {/* Specs */}
                <div id="specs" className="rounded-md border border-border bg-card p-6">
                  <h3 className="mb-4">Specifications</h3>
                  <table className="w-full font-serif text-sm">
                    <tbody>
                      {Object.entries(review.specs).map(([key, value], i) => (
                        <tr key={key} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                          <td className="py-2 px-3 font-semibold">{key}</td>
                          <td className="py-2 px-3">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Sub-scores */}
                <div className="rounded-md border border-border bg-card p-6 sticky top-20">
                  <h3 className="mb-4">Our Ratings</h3>
                  <div className="space-y-3">
                    {Object.entries(review.subScores).map(([key, value]) => (
                      <div key={key}>
                        <div className="flex justify-between font-serif text-sm mb-1">
                          <span>{key}</span>
                          <span className="font-semibold">{value.toFixed(1)}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${categoryColors[review.category]}`}
                            style={{ width: `${(value / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-serif text-sm">Overall Rating</span>
                      <span className="font-sans text-2xl font-bold">{review.rating.toFixed(1)}</span>
                    </div>
                    <div className={`flex gap-1 ${categoryColors[review.category]}`}>
                      {renderStars(review.rating)}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="font-serif text-sm text-muted-foreground mb-2">Price</div>
                    <div className="font-sans text-2xl font-bold mb-4">{review.price}</div>
                    <Button asChild className="w-full">
                      <a href={review.retailers[0].url} target="_blank" rel="noopener noreferrer">
                        See best price
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Alternatives */}
                <div id="alternatives" className="rounded-md border border-border bg-card p-6">
                  <h3 className="mb-4">Alternatives</h3>
                  <div className="space-y-3">
                    {review.alternatives.map((alt) => (
                      <Link
                        key={alt.slug}
                        to={`/reviews/${alt.slug}`}
                        className="block p-3 rounded border border-border hover:border-primary transition-all hover:shadow-sm"
                      >
                        <div className="font-sans text-sm font-semibold">{alt.title}</div>
                        <div className="font-serif text-sm text-muted-foreground">{alt.price}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6 mx-auto" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default ReviewDetail;
