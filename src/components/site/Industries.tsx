import { ArrowRight, ArrowUpRight } from "lucide-react";
import { industries } from "@/data/mock";

export default function Industries() {
  return (
    <section id="industries" className="bg-surface text-navy px-6 md:px-10 lg:px-14 py-24">
      <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
        <div>
          <div className="text-[11px] tracking-[0.28em] uppercase text-brand mb-4">
            Industries
          </div>
          <h2 className="serif-display text-4xl md:text-6xl">Industry Solutions</h2>
        </div>
        <a href="#" className="link-underline text-[12px] tracking-[0.22em] uppercase font-medium">
          View All <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((i) => (
          <a key={i.title} href="#" className="industry-card group bg-white hover-lift block">
            <div className="img-zoom aspect-[4/3] bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={i.img} alt={i.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-7">
              <h3 className="text-xl font-medium mb-3 group-hover:text-brand transition-colors">
                {i.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">{i.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-[12px] tracking-[0.22em] uppercase font-medium text-brand">
                Explore <ArrowUpRight className="industry-arrow h-4 w-4 transition-transform" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
