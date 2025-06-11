import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TopProduct from "@/components/TopProduct";
import Reviews from "@/components/Reviews";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhoChooseus";

export async function getServerSideProps() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/products`);
  const products = await res.json();
  console.log('Fetched products get:', products);

  return {
    props: { products },
  };
}

export default function Home({products}) {
  return (
    <div>
          <Navbar products={products} />
      <Hero />
      <Features />
      <TopProduct products={products}  />
      <WhyChooseUs />
      <Reviews />
      <Brands />
      <Services />
      <Footer />
    </div>
  );
}
