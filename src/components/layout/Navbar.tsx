import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* BRAND */}
        <div className="font-semibold text-primary tracking-wide">
          HVZMobilindo
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition">
            Home
          </a>
          <a href="#" className="hover:text-foreground transition">
            Cars
          </a>
          <a href="#" className="hover:text-foreground transition">
            Services
          </a>
          <a href="#" className="hover:text-foreground transition">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <button className="px-4 py-2 rounded-lg bg-primary text-black text-sm font-medium hover:opacity-80 transition">
          Sell Your Car
        </button>
      </div>
    </header>
  );
}