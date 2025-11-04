import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-primary" />
              <span className="font-sans text-lg font-semibold">Honest Selects</span>
            </div>
            <p className="font-serif text-sm text-muted-foreground">
              Real reviews, clear picks. Helping you make informed purchase decisions.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <a href="mailto:hello@honestselects.com" className="font-serif hover:underline">
                hello@honestselects.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wide">
              Categories
            </h3>
            <ul className="space-y-2 font-serif text-sm">
              <li>
                <Link to="/fitness" className="hover:underline">
                  Fitness
                </Link>
              </li>
              <li>
                <Link to="/eco-home" className="hover:underline">
                  Eco Home
                </Link>
              </li>
              <li>
                <Link to="/tech" className="hover:underline">
                  Tech
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:underline">
                  All Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wide">
              About Us
            </h3>
            <ul className="space-y-2 font-serif text-sm">
              <li>
                <Link to="/how-we-test" className="hover:underline">
                  How We Test
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/disclosure" className="hover:underline">
                  Disclosure
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wide">
              Legal
            </h3>
            <ul className="space-y-2 font-serif text-sm">
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="font-serif text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Honest Selects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
