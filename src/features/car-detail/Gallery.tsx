import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import type { Car } from "@/types/car";

interface GalleryProps {
    car: Car;
}

export default function Gallery({ car }: GalleryProps) {
    const images = car.images?.length ? car.images : [car.image];
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: images.length > 1 });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const updateSelected = useCallback(() => {
        if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", updateSelected);
        emblaApi.on("reInit", updateSelected);
        return () => {
            emblaApi.off("select", updateSelected);
            emblaApi.off("reInit", updateSelected);
        };
    }, [emblaApi, updateSelected]);

    return (
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative">
                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex touch-pan-y">
                        {images.map((image, index) => (
                            <div key={`${image}-${index}`} className="min-w-0 flex-[0_0_100%]">
                                <img
                                    src={image}
                                    alt={`${car.brand} ${car.model} - foto ${index + 1}`}
                                    onError={(event) => {
                                        event.currentTarget.onerror = null;
                                        event.currentTarget.src = "/favicon.svg";
                                    }}
                                    className="h-[300px] w-full bg-zinc-900 object-cover sm:h-[420px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {images.length > 1 && (
                    <>
                        <Button aria-label="Foto sebelumnya" size="icon" variant="glass" className="absolute left-4 top-1/2 -translate-y-1/2" onClick={() => emblaApi?.scrollPrev()}>
                            <ChevronLeft />
                        </Button>
                        <Button aria-label="Foto berikutnya" size="icon" variant="glass" className="absolute right-4 top-1/2 -translate-y-1/2" onClick={() => emblaApi?.scrollNext()}>
                            <ChevronRight />
                        </Button>
                    </>
                )}
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-white/10 p-4">
                <p className="text-sm text-muted-foreground">
                    Galeri unit {car.brand} {car.model}
                </p>
                <div className="flex gap-2" aria-label="Pilih foto">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            aria-label={`Tampilkan foto ${index + 1}`}
                            aria-current={selectedIndex === index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`h-2 rounded-full transition-all ${selectedIndex === index ? "w-6 bg-primary" : "w-2 bg-white/30"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
