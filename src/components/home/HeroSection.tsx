import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center bg-transparent overflow-hidden">
            {/* Content */}
            <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-primary tracking-widest uppercase text-sm">
                        HVZMobilindo Official Showroom
                    </p>

                    <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight mt-4">
                        Kepercayaan adalah awal dari setiap perjalanan.
                    </h1>

                    <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                        HVZMobilindo hadir sebagai showroom mobil bekas terpercaya yang dibangun oleh{" "}
                        <span className="text-primary font-medium">
                            Muhammad Hafiz Fadilah
                        </span>
                        , berfokus pada kualitas, transparansi, dan pengalaman pembelian yang aman.
                    </p>

                    {/* CTA */}
                    <div className="flex gap-4 mt-8">
                        <button className="px-6 py-3 rounded-xl bg-primary text-black font-medium hover:scale-[1.02] transition-transform">
                            Lihat Koleksi Mobil
                        </button>

                        <button className="px-6 py-3 rounded-xl border border-border bg-card/30 backdrop-blur hover:bg-card transition">
                            Titip Jual Mobil
                        </button>
                    </div>

                    {/* small trust text */}
                    <div className="flex gap-6 mt-6 text-sm text-muted-foreground">
                        <span>🚗 100+ Mobil Terjual</span>
                        <span>🤝 Proses Transparan</span>
                        <span>⭐ Verified Dealer</span>
                    </div>
                </motion.div>

                {/* RIGHT VISUAL */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="aspect-[4/3] rounded-2xl bg-card border border-border shadow-luxury overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                            <div className="w-full h-full bg-gradient-to-br from-white/10 via-transparent to-black/20 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-primary text-sm tracking-widest">
                                        FEATURED UNIT
                                    </div>
                                    <div className="text-2xl mt-2 font-semibold">
                                        Premium Selection Cars
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* floating badge */}
                    <div className="absolute -bottom-4 -left-4 bg-card border border-border px-4 py-2 rounded-lg shadow-luxury">
                        <p className="text-sm">
                            🔥 Premium Selected Cars
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}