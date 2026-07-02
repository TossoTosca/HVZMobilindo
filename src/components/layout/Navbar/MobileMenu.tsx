import { NavLink } from "react-router-dom";

import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Inventory",
    href: "/inventory",
  },
  {
    label: "Jual Mobil",
    href: "/sell",
  },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="border-t border-white/10 bg-zinc-950/95 px-6 py-6 backdrop-blur-lg lg:hidden">
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "rounded-xl px-4 py-3 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.04] hover:text-white",
                isActive && "bg-white/[0.04] text-yellow-500"
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default MobileMenu;