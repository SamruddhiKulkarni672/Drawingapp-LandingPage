import Header from "../components/Header";
 import Hero from "../components/Hero";
 import Features from "../components/Features";
 import LiveDemo from "../components/LiveDemo";
 import FeaturedArtworks from "../components/FeaturedArtworks";
 import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <LiveDemo />
      <FeaturedArtworks />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;