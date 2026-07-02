import { Link, NavLink } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button/button";
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

function DesktopMenu() {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      <nav className="flex items-center gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "text-sm font-medium text-zinc-400 transition hover:text-white",
                isActive && "text-yellow-500"
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Link to="/inventory" className={buttonVariants({ variant: "gold" })}>
        Lihat Mobil
      </Link>
    </div>
  );
}

export default DesktopMenu;