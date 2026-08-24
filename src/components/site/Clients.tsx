const clients = [
  "/attachments/alvas-org-logo.png",
  "/attachments/download (2).jpg",
  "/attachments/download (3).jpg",
  "/attachments/download.jpg",
  "/attachments/jnnce-removebg-preview.png",
]

export default function Clients() {
  const row = [...clients, ...clients]

  return (
    <section
      id="clients"
      className="bg-white text-navy px-6 md:px-10 lg:px-14 py-24 overflow-hidden"
    >
      <div className="mb-14">
        <div className="text-[11px] tracking-[0.28em] uppercase text-brand mb-4">
          Trusted By
        </div>

        <h2 className="serif-display text-4xl md:text-6xl">
          Our Clients
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />

        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee-track">
          {row.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="flex items-center justify-center shrink-0 mx-4 md:mx-6 h-24 w-48 md:h-28 md:w-56 rounded-lg border border-slate-200 bg-slate-50"
            >
              <img
                src={src}
                alt={`Client logo ${idx + 1}`}
                className="max-h-16 max-w-[80%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}