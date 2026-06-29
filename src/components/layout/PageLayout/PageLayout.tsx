import type { ReactNode } from "react";

import GlobalBackground from "../GlobalBackground/GlobalBackground";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface PageLayoutProps {
    children: ReactNode;
}

export default function PageLayout({
    children,
}: PageLayoutProps) {
    return (
        <>
            <GlobalBackground />

            <Navbar />

            <main className="relative min-h-screen pt-20">
                {children}
            </main>

            <Footer />
        </>
    );
}