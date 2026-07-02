export default function GlobalBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
            {/* Top Left Glow */}
            <div
                className="
                    absolute
                    -left-48
                    -top-48
                    h-[38rem]
                    w-[38rem]
                    rounded-full
                    bg-primary/20
                    blur-[170px]
                    animate-pulse-slow
                "
            />

            {/* Bottom Right Glow */}
            <div
                className="
                    absolute
                    -bottom-48
                    -right-48
                    h-[34rem]
                    w-[34rem]
                    rounded-full
                    bg-primary/10
                    blur-[170px]
                    animate-float
                "
            />

            {/* Ambient Light */}
            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]
                "
            />

            {/* Noise Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.03]
                    [background-image:radial-gradient(circle,white_1px,transparent_1px)]
                    [background-size:24px_24px]
                "
            />
        </div>
    );
}