import type { Metadata } from "next";
import VlightHeader from "@/components/vlight/VlightHeader";
import VlightHero from "@/components/vlight/VlightHero";
import VlightAbout from "@/components/vlight/VlightAbout";
import ProductRange from "@/components/vlight/ProductRange";
import Manufacturing from "@/components/vlight/Manufacturing";
import VlightFooter from "@/components/vlight/VlightFooter";

export const metadata: Metadata = {
  title: "vlight — The Urban Series | Vithsutra",
  description:
    "vlight by Vithsutra: reliable, energy-efficient lighting for domestic, decorative, and outdoor applications.",
};

export default function VlightPage() {
  return (
    <div className="bg-white text-[#1a1a1a]">
      <VlightHeader />
      <VlightHero />
      <VlightAbout />
      <ProductRange />
      <Manufacturing />
      <VlightFooter />
    </div>
  );
}
