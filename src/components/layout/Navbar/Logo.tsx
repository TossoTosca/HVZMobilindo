export default function Logo() {
    return (
        <div className="flex items-center gap-3 select-none">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-bold text-black shadow-lg shadow-primary/20">
                HVZ
            </div>

            <div className="leading-tight">
                <h1 className="text-lg font-semibold tracking-wide">
                    HVZMobilindo
                </h1>

                <p className="text-xs text-muted-foreground">
                    Trusted Used Car Marketplace
                </p>
            </div>
        </div>
    );
}