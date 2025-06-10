import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TopProduct from "@/components/TopProduct";
import Reviews from "@/components/Reviews";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhoChooseus";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <TopProduct />
      <WhyChooseUs />
      <Reviews />
      <Brands />
      <Services />
      <Footer />
    </div>
  );
}
