import { ArrowRight } from "lucide-react";

export default function Heritage() {
  return (
    <section id="about" className="bg-surface text-navy px-6 md:px-10 lg:px-14 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="img-zoom aspect-[4/3] bg-slate-200 order-2 lg:order-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1581092918484-8313ba105b21?auto=format&fit=crop&w=1600&q=80"
            alt="Inside Vithsutra"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2 max-w-xl">
          <div className="text-[11px] tracking-[0.28em] uppercase text-brand mb-5">
            Inside Vithsutra
          </div>
          <h2 className="serif-display text-4xl md:text-6xl leading-[1.05] mb-6">
            Where Ideas Become Products
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
            Our in-house PCB assembly line, SMT reflow ovens, and R&D lab in Bengaluru let us take
            an idea from schematic to shipped product under one roof. This is precision
            engineering, made in India, built for the world.
          </p>
          <a
            href="#"
            className="link-underline text-[12px] tracking-[0.22em] uppercase font-medium text-brand"
          >
            Visit page <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
