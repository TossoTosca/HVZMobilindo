import Container from "../Container/Container";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 py-10">
            <Container>
                <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                    <div>
                        <h3 className="text-lg font-semibold tracking-wide text-primary">
                            HVZMobilindo
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Marketplace mobil bekas terpercaya dengan pengalaman
                            jual beli yang aman, transparan, dan profesional.
                        </p>
                    </div>

                    <div className="text-sm text-muted-foreground">
                        © {year} HVZMobilindo.
                        <br />
                        All Rights Reserved.
                    </div>
                </div>
            </Container>
        </footer>
    );
}