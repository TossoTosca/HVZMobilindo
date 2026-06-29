const services = [
  {
    title: "Ready Stock Cars",
    desc: "Mobil pilihan yang sudah melalui inspeksi kualitas dan siap dibeli langsung.",
    icon: "🚗",
  },
  {
    title: "Titip Jual Mobil",
    desc: "Bantu kamu menjual mobil dengan harga terbaik tanpa ribet proses.",
    icon: "🤝",
  },
  {
    title: "Car Finder Service",
    desc: "Kami bantu carikan mobil sesuai budget dan kebutuhan kamu.",
    icon: "🔎",
  },
];

export default function ServicesSection() {
  return (
    <section id="Services" className="py-32 bg-transparent scroll-smooth">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Layanan HVZMobilindo
          </h2>
          <p className="text-muted-foreground mt-3">
            Solusi lengkap untuk kebutuhan jual beli mobil bekas
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-border bg-card hover:scale-[1.03] hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="text-3xl">{service.icon}</div>

              <h3 className="text-xl font-medium mt-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-6 text-primary text-sm">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}