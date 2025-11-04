import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LatestReviews from "@/components/LatestReviews";
import EditorsPicks from "@/components/EditorsPicks";
import TrustStrip from "@/components/TrustStrip";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <LatestReviews />
        <EditorsPicks />
        <TrustStrip />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
