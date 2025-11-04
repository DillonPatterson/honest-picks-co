import { Search, Dumbbell, Leaf, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      {/* Subtle grid pattern inspired by FLW stained glass */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container relative mx-auto px-4 py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left: Title and Promise */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <h1 className="font-sans text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Real Reviews.
                <br />
                Clear Picks.
              </h1>
              <div className="h-1 w-24 bg-primary" />
            </div>
            
            <p className="font-serif text-lg text-muted-foreground md:text-xl">
              We test products thoroughly and tell you what matters. No hype, no clutter—just honest guidance for your next purchase.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="default" size="lg" className="font-sans">
                Latest Reviews
              </Button>
              <Button variant="outline" size="lg" className="font-sans">
                How We Test
              </Button>
            </div>
          </div>

          {/* Right: Search and Categories */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="rounded-md border border-border bg-card p-6 shadow-sm">
              <label className="mb-2 block font-sans text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Find Reviews
              </label>
              <div className="flex gap-2">
                <Input
                  placeholder="Search products, brands, or categories..."
                  className="font-serif"
                />
                <Button size="icon" variant="default">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block font-sans text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Browse by Category
              </label>
              <div className="grid gap-3">
                <Link
                  to="/fitness"
                  className="group flex items-center gap-4 rounded-md border border-border bg-card p-4 transition-all hover:border-fitness hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-fitness/10">
                    <Dumbbell className="h-5 w-5 text-fitness" />
                  </div>
                  <div className="flex-1">
                    <div className="font-sans text-sm font-semibold group-hover:text-fitness">
                      Fitness
                    </div>
                    <div className="font-serif text-xs text-muted-foreground">
                      Home fitness & recovery gear
                    </div>
                  </div>
                </Link>

                <Link
                  to="/eco-home"
                  className="group flex items-center gap-4 rounded-md border border-border bg-card p-4 transition-all hover:border-eco hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-eco/10">
                    <Leaf className="h-5 w-5 text-eco" />
                  </div>
                  <div className="flex-1">
                    <div className="font-sans text-sm font-semibold group-hover:text-eco">
                      Eco Home
                    </div>
                    <div className="font-serif text-xs text-muted-foreground">
                      Sustainable home & kitchen
                    </div>
                  </div>
                </Link>

                <Link
                  to="/tech"
                  className="group flex items-center gap-4 rounded-md border border-border bg-card p-4 transition-all hover:border-tech hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-tech/10">
                    <Headphones className="h-5 w-5 text-tech" />
                  </div>
                  <div className="flex-1">
                    <div className="font-sans text-sm font-semibold group-hover:text-tech">
                      Tech
                    </div>
                    <div className="font-serif text-xs text-muted-foreground">
                      Audiophile gear & peripherals
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
