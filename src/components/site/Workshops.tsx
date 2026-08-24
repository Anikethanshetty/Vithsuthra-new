const clients = [
  { img: "/attachments 2/alvas-org-logo.png", name: "Alva's Education Foundation" },
  { img: "/attachments 2/jnnce-removebg-preview.png", name: "JNN College of Engineering, Shimoga" },
  { img: "/attachments 2/logo-banner.png", name: "S N Mudbidri Polytechnic" },
  { img: "/attachments 2/VITHSUTRA COMPANY (1).png", name: "AJIET" },
  { img: "/attachments 2/VITHSUTRA COMPANY (2).png", name: "Yenepoya Institute of Technology" },
  { img: "/attachments 2/VITHSUTRA COMPANY (4).png", name: "Tontadarya College of Engineering" },
  { img: "/attachments 2/download (2).jpg", name: "Christ King English School" },
  { img: "/attachments 2/download (3).jpg", name: "National Education Society, Shivamogga" },
  { img: "/attachments 2/download (4).jpg", name: "SDM Polytechnic, Ujire" },
  { img: "/attachments 2/download (5).jpg", name: "Tontadarya College of Engineering" },
  { img: "/attachments 2/download (6).jpg", name: "PESITM" },
  { img: "/attachments 2/download.jpg", name: "GM University" },
  { img: "/attachments 2/download.png", name: "Proudhadevaraya Institute of Technology" },
  { img: "/attachments 2/images.jpg", name: "Vivekananda Polytechnic" },
  {img:"/attachments 2/International_Cultural_Jamboree.jpg", name:"Internaltional Jamboree"},
  {img:"/attachments 2/images (2).jpg", name:"Scouts and Guides"}
]

export default function Workshops() {
  const row = [...clients, ...clients]

  return (
    <section
      id="workshops"
      className="bg-white text-navy px-6 md:px-10 lg:px-14 pt-24 pb-8 overflow-hidden"
    >
      <div className="mb-14">
        <div className="text-[11px] tracking-[0.28em] uppercase text-brand mb-4">
          Workshops
        </div>

        <h2 className="serif-display text-4xl md:text-6xl">
          Workshops Conducted At
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />

        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee-track">
          {row.map((c, idx) => (
            <div
              key={`${c.img}-${idx}`}
              className="flex flex-col items-center justify-center shrink-0 mx-4 md:mx-6 h-32 w-48 md:h-36 md:w-56 rounded-lg border border-slate-200 bg-slate-50 p-4 gap-2"
            >
              <img
                src={c.img}
                alt={c.name}
                className="max-h-16 max-w-[80%] object-contain"
              />
              <span className="text-[11px] text-center leading-tight text-slate-500">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
