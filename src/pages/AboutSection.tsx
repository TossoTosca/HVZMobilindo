export default function AboutSection() {
  return (
    <section id="About" className="py-32 bg-transparent scroll-smooth">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Dibangun dari kepercayaan, bukan sekadar transaksi.
          </h2>

          <p className="text-muted-foreground mt-6 leading-relaxed">
            HVZMobilindo lahir dari visi Muhammad Hafiz Fadilah untuk menciptakan
            pengalaman jual beli mobil bekas yang jujur, transparan, dan aman.
            Setiap unit yang kami tawarkan telah melalui proses kurasi dan pengecekan kualitas.
          </p>

          <p className="text-muted-foreground mt-4 leading-relaxed">
            Kami tidak hanya menjual mobil — kami membangun kepercayaan jangka panjang
            antara pemilik dan pembeli.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div>
              <p className="text-2xl font-semibold text-primary">100+</p>
              <p className="text-xs text-muted-foreground">Mobil Terjual</p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-primary">3+</p>
              <p className="text-xs text-muted-foreground">Tahun Pengalaman</p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-primary">98%</p>
              <p className="text-xs text-muted-foreground">Customer Puas</p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl border border-border bg-card shadow-luxury overflow-hidden">
            
            {/* placeholder visual */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
              <div className="text-center">
                <p className="text-primary text-sm tracking-widest">
                  HVZ SHOWROOM
                </p>
                <p className="text-xl mt-2 font-semibold">
                  Trusted Car Marketplace
                </p>
              </div>
            </div>

          </div>

          {/* floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-card border border-border px-4 py-2 rounded-lg shadow-lg">
            <p className="text-sm">
              ⭐ Verified & Trusted Dealer
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}