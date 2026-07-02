import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "@/components/layout/Container/Container";
import Logo from "@/components/layout/Navbar/Logo";
// import DesktopMenu from "@/components/layout/Navbar/DesktopMenu";
import DesktopMenu from "./DekstopMenu";
import MobileMenu from "@/components/layout/Navbar/MobileMenu";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen((current) => !current);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <DesktopMenu />

          <button
            type="button"
            onClick={handleToggleMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </Container>

      <MobileMenu open={isMobileMenuOpen} onClose={handleCloseMenu} />
    </header>
  );
}

export default Navbar;