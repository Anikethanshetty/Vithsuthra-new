import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Clients from "@/components/site/Clients";
import Heritage from "@/components/site/Heritage";
import Careers from "@/components/site/training";
import Products from "@/components/site/Products";
import Industries from "@/components/site/Industries";
import Unique from "@/components/site/Unique";
import Footer from "@/components/site/Footer";
import Workshops from "@/components/site/Workshops";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Clients />

      {/* <Heritage /> */}
      <Careers />
      <Workshops />
       
      <Products />
      {/* <Industries /> */}
      <Unique />
      <Footer />
    </div>
  );
}
