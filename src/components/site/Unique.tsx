import { Clock, Sparkles, Cloud, Settings } from "lucide-react";
import { uniques } from "@/data/mock";

const icons = [Clock, Sparkles, Cloud, Settings];

export default function Unique() {
  return (
    <section className="bg-white text-navy px-6 md:px-10 lg:px-14 py-24">
      <div className="text-center mb-16">
        <div className="text-[11px] tracking-[0.28em] uppercase text-brand mb-4">
          We Are Special
        </div>
        <h2 className="serif-display text-4xl md:text-6xl">What Makes Us Unique</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {uniques.map((u, idx) => {
          const Icon = icons[idx];
          return (
            <div key={u.title} className="group text-center px-4">
              <div className="mx-auto mb-6 h-16 w-16 rounded-full border border-brand/30 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-3">{u.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{u.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
