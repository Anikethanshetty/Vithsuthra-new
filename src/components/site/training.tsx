
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { trainings, stats } from "@/data/mock"

export default function Trainings() {
  return (
    <section id="trainings" className="bg-navy text-white px-6 md:px-10 lg:px-14 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ">
        <div>
          <div className="text-[11px] tracking-[0.28em] uppercase text-white/70 mb-5">
            Trainings
          </div>

          <h2 className="serif-display text-4xl md:text-6xl leading-[1.05] mb-6">
            Learn. Build. Lead the future.
          </h2>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Build practical expertise through industry-focused training programs
            designed for students, professionals and teams ready to shape the
            next chapter of technology.
          </p>

          {/* <a
            href="#"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover transition-colors px-7 py-3.5 text-[12px] tracking-[0.22em] uppercase font-medium"
          >
            Explore Trainings <ArrowRight className="h-4 w-4" />
          </a> */}
        </div>

        <div>
          <div className="text-[11px] tracking-[0.28em] uppercase text-white/70 ">
            Training Impact
          </div>

          <div className="grid grid-cols-2 gap-y-10 gap-x-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="border-t border-white/25 mb-4 w-10" />

                <div className="serif-display text-4xl md:text-5xl mb-2 text-brand-light">
                  {s.value}
                </div>

                <div className="text-[12px] tracking-[0.14em] uppercase text-white/75">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <h3 className="text-2xl md:text-3xl font-medium">
            Featured Trainings
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {trainings.map((training) => (
            <a
              key={training.title}
              href="#"
              className="group bg-navy hover:bg-[#132759] transition-colors p-7 flex items-start justify-between"
            >
              <div>
                <div className="text-lg font-medium mb-2 group-hover:text-brand-light transition-colors">
                  {training.title}
                </div>

                <div className="text-sm text-white/70">
                  {training.type}
                </div>
              </div>

              <ArrowUpRight className="h-5 w-5 text-white/50 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}