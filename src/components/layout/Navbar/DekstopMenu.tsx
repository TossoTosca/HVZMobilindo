import { Button } from "@/components/ui/button/button";

const menus = [
    {
        label: "Home",
        href: "#hero",
    },
    {
        label: "Services",
        href: "#services",
    },
    {
        label: "Collection",
        href: "#cars",
    },
    {
        label: "About",
        href: "#about",
    },
];

export default function DesktopMenu() {
    return (
        <div className="hidden items-center gap-10 lg:flex">
            <nav className="flex items-center gap-8">
                {menus.map((menu) => (
                    <a
                        key={menu.label}
                        href={menu.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                        {menu.label}
                    </a>
                ))}
            </nav>

            <Button variant="default">
                Login Admin
            </Button>
        </div>
    );
}