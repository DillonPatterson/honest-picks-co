import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-8 w-8 bg-primary" />
            <div className="flex flex-col">
              <span className="font-sans text-lg font-semibold leading-none tracking-tight">
                Honest Selects
              </span>
              <span className="font-serif text-xs text-muted-foreground">
                Real Reviews. Clear Picks.
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/fitness"
              className="relative font-sans text-sm font-medium transition-colors hover:text-fitness after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-fitness after:transition-all hover:after:w-full"
            >
              Fitness
            </Link>
            <Link
              to="/eco-home"
              className="relative font-sans text-sm font-medium transition-colors hover:text-eco after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-eco after:transition-all hover:after:w-full"
            >
              Eco Home
            </Link>
            <Link
              to="/tech"
              className="relative font-sans text-sm font-medium transition-colors hover:text-tech after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-tech after:transition-all hover:after:w-full"
            >
              Tech
            </Link>
            <Link
              to="/blog"
              className="font-sans text-sm font-medium transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              to="/how-we-test"
              className="font-sans text-sm font-medium transition-colors hover:text-foreground"
            >
              How We Test
            </Link>
          </div>

          <Button variant="ghost" size="icon" className="ml-auto md:ml-0">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
