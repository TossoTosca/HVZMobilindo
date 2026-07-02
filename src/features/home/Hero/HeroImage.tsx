import GlassCard from "@/components/ui/card/GlassCard";

export default function HeroImage() {
    return (
        <div className="relative flex justify-center">

            <div
                className="
                    absolute
                    h-80
                    w-80
                    rounded-full
                    bg-primary/20
                    blur-[120px]
                "
            />

            <GlassCard className="overflow-hidden">

                <img
                    src="/images/cars/fortuner.jpg"
                    alt="Toyota Fortuner"
                    className="w-full rounded-xl object-cover"
                />

            </GlassCard>

        </div>
    );
}