"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "@/data/mock";

export default function Products() {
  const [active, setActive] = useState(0);
  const p = products[active];

  return (
    <section id="products" className="bg-white text-navy px-6 md:px-10 lg:px-14 py-24">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <div>
          <div className="text-[11px] tracking-[0.28em] uppercase text-brand mb-4">
            Our Products
          </div>
          <h2 className="serif-display text-4xl md:text-6xl leading-[1.05]">{p.title}</h2>
          <p className="text-slate-600 mt-4 max-w-md">{p.desc}</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover transition-colors text-white px-6 py-3 text-[12px] tracking-[0.22em] uppercase font-medium"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#" className="link-underline text-[12px] tracking-[0.22em] uppercase font-medium">
            View all <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative aspect-[21/9] w-full overflow-hidden bg-slate-100 mb-10">
        {products.map((pr, idx) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={idx}
            src={pr.img}
            alt={pr.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: idx === active ? 1 : 0 }}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3">
        {products.map((pr, idx) => (
          <button
            key={pr.title}
            onClick={() => setActive(idx)}
            className={`product-thumb text-left group ${
              idx === active ? "opacity-100" : "opacity-60 hover:opacity-100"
            }`}
          >
            <div className="aspect-square img-zoom mb-2 bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pr.img} alt={pr.title} className="w-full h-full object-cover" />
            </div>
            <div className="text-[10px] tracking-[0.14em] uppercase font-medium">
              <span className={idx === active ? "text-brand" : "text-slate-500"}>
                0{idx + 1}.
              </span>{" "}
              {pr.title}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
