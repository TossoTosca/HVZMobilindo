import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button/button";

export default function MobileMenu() {
    return (
        <div className="lg:hidden">
            <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
            >
                <Menu className="size-5" />
            </Button>
        </div>
    );
}