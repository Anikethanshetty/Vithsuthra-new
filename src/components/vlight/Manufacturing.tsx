import {
  CheckCircle2,
  Factory,
  ShieldCheck,
  Zap,
  Settings2,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Factory,
    title: "Advanced Machinery",
    description: "High-precision equipment for consistent production.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Testing",
    description: "Strict quality checks throughout every stage.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Optimized processes designed for efficiency.",
  },
  {
    icon: Settings2,
    title: "Reliable & Durable",
    description: "Built to perform across diverse environments.",
  },
];

const process = [
  "Fabrication",
  "Assembly",
  "Inspection",
  "Testing",
  "Packaging",
];

export default function Manufacturing() {
  return (
    <section
      id="manufacturing"
      className="relative overflow-hidden bg-[#f6f6f4] px-6 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-14 max-w-3xl md:mb-16">
          <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E51826]">
            <span className="h-px w-9 bg-[#E51826]" />
            Built with precision
          </div>

          <h2 className="text-[42px] font-extrabold leading-[0.95] tracking-[-0.035em] text-[#1a1a1a] sm:text-5xl md:text-6xl lg:text-[72px]">
            <span className="text-[#E51826]">MANUFACTURING</span>
            <br />
            EXCELLENCE
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#555] md:text-base md:leading-8">
            Our state-of-the-art manufacturing facility combines advanced
            technology with skilled craftsmanship to deliver lighting
            solutions of unmatched quality.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#555] md:text-base md:leading-8">
            From precision engineering to rigorous testing, every stage of our
            process is designed to ensure reliability, efficiency, and
            long-lasting performance.
          </p>
        </div>

        {/* Main Manufacturing Visual */}
        <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
          {/* Machine Image */}
          <div className="relative min-h-[420px] overflow-hidden md:min-h-[520px] lg:min-h-[620px]">
            <Image
              src="/manufacturing-machine.png"
              alt="Advanced manufacturing machinery"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            {/* Image label */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <div className="flex items-center gap-3 text-white">
                <div className="flex h-10 w-10 items-center justify-center bg-[#E51826]">
                  <Factory className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    Manufacturing Facility
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    Advanced production environment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Information Panel */}
          <div className="flex flex-col justify-center bg-[#1a1a1a] px-7 py-12 text-white sm:px-10 md:px-14 lg:px-12 xl:px-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
              Precision Manufacturing
            </p>

            <h3 className="mt-5 max-w-md text-3xl font-extrabold leading-tight md:text-4xl">
              Where technology meets{" "}
              <span className="text-[#E51826]">craftsmanship.</span>
            </h3>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              Our integrated manufacturing approach allows us to maintain
              complete control over production quality, from individual
              components to final assembly.
            </p>

            {/* Commitment */}
            <div className="mt-9 border-t border-white/10 pt-7">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-[#E51826]/40">
                  <CheckCircle2 className="h-5 w-5 text-[#E51826]" />
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.08em]">
                    Quality Commitment
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Every product undergoes multiple quality inspections
                    before leaving our facility, ensuring dependable
                    performance and long service life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid border-x border-b border-[#dededb] bg-white sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`group px-6 py-8 md:px-7 md:py-9 ${
                  index < features.length - 1
                    ? "border-b border-[#dededb] lg:border-b-0 lg:border-r"
                    : ""
                } ${
                  index === 1
                    ? "sm:border-b lg:border-b-0"
                    : ""
                }`}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center border border-[#ddd] transition-all duration-300 group-hover:border-[#E51826] group-hover:bg-[#E51826]">
                  <Icon className="h-5 w-5 text-[#E51826] transition-colors group-hover:text-white" />
                </div>

                <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-[#1a1a1a]">
                  {feature.title}
                </h4>

                <p className="mt-2 max-w-[220px] text-xs leading-6 text-[#777]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Production Process */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E51826]">
                Our Process
              </p>

              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#1a1a1a] md:text-3xl">
                Built systematically. Tested thoroughly.
              </h3>
            </div>
          </div>

          <div className="grid border-y border-[#dededb] md:grid-cols-5">
            {process.map((step, index) => (
              <div
                key={step}
                className={`relative flex items-center gap-4 px-5 py-6 ${
                  index < process.length - 1
                    ? "border-b border-[#dededb] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <span className="text-2xl font-extrabold text-[#E51826]/25">
                  0{index + 1}
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#333]">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 flex items-center gap-3 md:mt-16">
          <span className="h-px w-9 bg-[#E51826]" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#555] md:text-xs">
            Engineered to light. Built to last.
          </p>
        </div>
      </div>
    </section>
  );
}