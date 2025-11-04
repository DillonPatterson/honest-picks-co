import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const formatCrumb = (str: string) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 font-serif text-sm">
          <li>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          {pathnames.map((crumb, index) => {
            const path = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <li key={path} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                {isLast ? (
                  <span className="text-foreground font-medium">{formatCrumb(crumb)}</span>
                ) : (
                  <Link to={path} className="text-muted-foreground hover:text-foreground transition-colors">
                    {formatCrumb(crumb)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
