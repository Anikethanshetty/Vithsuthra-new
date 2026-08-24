import { vlightSegments } from "@/data/vlight";
import PlaceholderImage from "./PlaceholderImage";

export default function ProductRange() {
  return (
    <section id="products" className="bg-white px-6 md:px-10 lg:px-14 py-24">
      <div className="mb-16 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="text-[#E51826]">OUR PRODUCT</span>
          <br />
          <span className="text-[#1a1a1a]">RANGE</span>
        </h2>
        <p className="text-[#4a4a4a] mt-5 leading-relaxed">
          Explore our comprehensive collection of premium lighting solutions designed for
          residential, commercial, industrial, and architectural applications.
        </p>
      </div>

      <div className="space-y-16">
        {vlightSegments.map((segment) => (
          <div key={segment.id}>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a]">
                {segment.label.toUpperCase()} <span className="text-[#E51826]">SEGMENT</span>
              </h3>
              <div className="w-16 h-[3px] bg-[#E51826] mt-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {segment.products.map((p) => (
                <div key={p.name} className="group">
                  <PlaceholderImage
                    icon={p.icon}
                    src={p.img}
                    alt={p.name}
                    className="aspect-square w-full mb-5 transition-transform duration-500 group-hover:scale-[1.02]"
                    iconClassName="h-14 w-14"
                  />
                  <div className="text-center">
                    <div className="font-bold text-[#1a1a1a] tracking-wide">
                      {p.name.toUpperCase()}
                    </div>
                    <div className="text-[#E51826] font-semibold text-sm mt-1">{p.spec}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
