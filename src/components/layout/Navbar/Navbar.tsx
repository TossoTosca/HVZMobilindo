import Container from "../Container/Container";
import DesktopMenu from "./DekstopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    return (
        <header
            className="
                fixed
                top-0
                left-0
                right-0
                z-50
                border-b
                border-white/10
                bg-background/60
                backdrop-blur-xl
            "
        >
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <Logo />

                    <DesktopMenu />

                    <MobileMenu />
                </div>
            </Container>
        </header>
    );
}