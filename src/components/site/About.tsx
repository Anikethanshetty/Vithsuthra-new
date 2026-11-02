import { ArrowRight, GraduationCap, Cpu, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "Training & Education",
    desc: "Hands-on programs in embedded systems, IoT and robotics for students, professionals and institutions.",
  },
  {
    icon: Cpu,
    title: "Smart Products",
    desc: "RFID-based smart card telephone systems and connected solutions, designed and built in-house.",
  },
  {
    icon: Lightbulb,
    title: "Vlight Lighting",
    desc: "Reliable, energy-efficient lighting for homes, businesses and modern infrastructure.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-surface text-navy px-6 md:px-10 lg:px-14 py-24">
      <div className="max-w-3xl mb-16">
        <div className="text-[11px] tracking-[0.28em] uppercase text-brand mb-5">About Us</div>
        <h2 className="serif-display text-4xl md:text-6xl leading-[1.05] mb-6">
          Engineering the future, built in India.
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          Vithsutra Technologies brings together education, electronics and design under one roof,
          taking ideas from schematic to shipped product and turning learners into builders.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative pb-12 pr-8 md:pr-14">
          <div className="absolute -top-4 -left-4 h-2/3 w-2/3 bg-brand/10" aria-hidden />
          <div className="img-zoom relative aspect-[4/3] bg-slate-200 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/manufacturing-machine.png"
              alt="Vithsutra in-house manufacturing line"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="img-zoom absolute bottom-0 right-0 w-1/2 aspect-[4/3] border-4 border-surface bg-slate-200 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/VITHSUTRA COMPANY.png"
              alt="Vithsutra company"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-slate-600 leading-relaxed mb-10">
            Backed by Alva&apos;s Education Foundation, we work with institutions across domains to
            deliver practical skills and dependable products, with every unit tested before it
            leaves our facility.
          </p>

          <ul className="space-y-7 mb-10">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="group flex gap-5">
                <div className="h-14 w-14 shrink-0 rounded-full border border-brand/30 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <a
              href="/contact"
              className="link-underline text-[12px] tracking-[0.22em] uppercase font-medium text-brand"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/vlight"
              className="link-underline text-[12px] tracking-[0.22em] uppercase font-medium text-navy"
            >
              Explore Vlight <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

     
    </section>
  );
}
