import { ArrowRight, ShieldCheck, Zap, Award } from "lucide-react";
import Image from "next/image";

const badges = [
  { icon: Zap, label: "Energy Efficient" },
  { icon: ShieldCheck, label: "IP65 Outdoor Rated" },
  { icon: Award, label: "2 Year Warranty" },
];

export default function VlightHero() {
  return (
    <section
      id="overview"
      className="relative max-h-[640px] h-screen w-full overflow-hidden bg-[#1a1a1a]"
    >
      {/* Background Image */}
      <Image
        src="/v_light_hero.png"
        alt="Modern interior illuminated with Vithsutra lighting"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overall dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Stronger gradient on the left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-transparent" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col justify-end px-6 pb-10 sm:px-8 md:px-10 md:pb-14 lg:px-14 lg:pb-16 xl:px-16">
        {/* Hero Text */}
        <div className="fade-in max-w-3xl text-white">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/90 md:mb-6 md:text-xs">
            <span className="h-px w-8 bg-[#E51826]" />
            <span>The Urban Series</span>
          </div>

          {/* Heading */}
          <h1 className="mb-5 max-w-[780px] text-[44px] font-medium leading-[0.99] tracking-[-0.035em] sm:text-[52px] md:mb-6 md:text-6xl lg:text-[76px] xl:text-[80px]">
            Lighting designed
            <br />
            for{" "}
            <span className="text-[#E51826]">
              modern living
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-[540px] text-sm leading-7 text-white/75 sm:text-base md:mb-9 md:text-lg">
            Reliable, energy-efficient lighting solutions engineered by
            Vithsutra for homes, businesses, and public infrastructure —
            built to perform across every sector.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-[#E51826] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#c91320] sm:px-7"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/50 bg-black/10 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#1a1a1a] sm:px-7"
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6 md:mt-12 md:gap-x-10 md:pt-7">
          {badges.map((badge) => {
            const Icon = badge.icon;

            return (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 text-white/85"
              >
                <Icon className="h-4 w-4 shrink-0 text-[#E51826]" />

                <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px] md:text-xs">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}