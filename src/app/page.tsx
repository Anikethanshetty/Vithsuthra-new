import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Clients from "@/components/site/Clients";
import About from "@/components/site/About";
import Heritage from "@/components/site/Heritage";
import Careers from "@/components/site/training";
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
      <About />

      {/* <Heritage /> */}
      <Careers />
      <Workshops />
       
      {/* <Products /> */}
      {/* <Industries /> */}
      <Unique />
      <Footer />
    </div>
  );
}
