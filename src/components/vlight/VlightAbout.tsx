import { vlightStats } from "@/data/vlight";

export default function VlightAbout() {
  return (
    <section className="bg-[#f7f7f7] px-6 md:px-10 lg:px-14 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-[11px] tracking-[0.28em] uppercase text-[#E51826] mb-4 font-semibold">
            About vlight
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-6">
            A brand built for reliable lighting, everywhere.
          </h2>
          <p className="text-[#4a4a4a] leading-relaxed max-w-lg">
            vlight is Vithsutra&apos;s dedicated lighting brand, engineered to bring dependable,
            energy-efficient illumination to homes, commercial spaces, and public infrastructure.
            From decorative interior fixtures to rugged outdoor luminaires, every product in the
            Urban Series is built on the same foundation of precision manufacturing and rigorous
            quality control.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {vlightStats.map((s) => (
            <div key={s.label} className="border-l-2 border-[#E51826] pl-5">
              <div className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a]">{s.value}</div>
              <div className="text-sm text-[#4a4a4a] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
