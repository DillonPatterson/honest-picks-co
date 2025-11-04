import { Shield, FileText, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const TrustStrip = () => {
  return (
    <section className="border-b border-border bg-muted/50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            to="/how-we-test"
            className="group flex items-start gap-4 rounded-md p-4 transition-colors hover:bg-background"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="font-sans text-sm font-semibold group-hover:underline">
                How We Test
              </div>
              <p className="font-serif text-xs text-muted-foreground">
                Rigorous testing protocols for every category
              </p>
            </div>
          </Link>

          <Link
            to="/disclosure"
            className="group flex items-start gap-4 rounded-md p-4 transition-colors hover:bg-background"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="font-sans text-sm font-semibold group-hover:underline">
                Our Disclosure
              </div>
              <p className="font-serif text-xs text-muted-foreground">
                How we earn commission and stay unbiased
              </p>
            </div>
          </Link>

          <Link
            to="/privacy"
            className="group flex items-start gap-4 rounded-md p-4 transition-colors hover:bg-background"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Lock className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="font-sans text-sm font-semibold group-hover:underline">
                Privacy Policy
              </div>
              <p className="font-serif text-xs text-muted-foreground">
                Your data is secure and never sold
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
