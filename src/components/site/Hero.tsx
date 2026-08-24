"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import { heroStories } from "@/data/mock";

const dotSections = ["top", "clients", "about", "careers", "products", "industries"];

export default function Hero() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setI((p) => (p + 1) % heroStories.length), 6000);
    return () => clearInterval(t);
  }, [playing]);

  const s = heroStories[i];

  return (
    <section id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden bg-navy">
      {heroStories.map((st, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: idx === i ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={st.img} alt={st.title} className="w-full h-full object-cover" />
         { st.kicker === "vlight" ? null : <div className="absolute inset-0 hero-overlay" />}
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 lg:px-14 pb-16 md:pb-20">
        <div key={i} className="fade-in max-w-2xl text-white">
          <div className="text-[12px] tracking-[0.28em] uppercase opacity-80 mb-6">{s.kicker}</div>
          <h1 className="serif-display text-5xl md:text-7xl lg:text-[88px] leading-[1.02] mb-6">
            {s.title}
          </h1>
          <p className="text-base md:text-lg opacity-90 max-w-md mb-10">{s.desc}</p>
        </div>

        <div className="mt-14 flex items-end justify-between gap-6">
          <div className="flex gap-8 md:gap-14 text-white/80 text-[12px] tracking-[0.14em] uppercase">
            {heroStories.map((st, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`slider-tab text-left ${idx === i ? "active text-white" : ""}`}
              >
                <span className="font-medium mr-1">0{idx + 1}.</span>
                <span>{st.tab}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-white/80 text-[12px]">
            <button
              onClick={() => setPlaying(!playing)}
              className="h-9 w-9 rounded-full border border-white/50 flex items-center justify-center hover:bg-white hover:text-navy transition-colors"
              aria-label="toggle"
            >
              {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            </button>
            <span className="tracking-widest">
              {i + 1} / {heroStories.length}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-4">
        {dotSections.map((h, idx) => (
          <a key={idx} href={`#${h}`} className="dot-nav-item" />
        ))}
      </div>
    </section>
  );
}
