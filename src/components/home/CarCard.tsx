type Car = {
  name: string;
  year: number;
  price: number;
  mileage: number;
  location: string;
};

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="group rounded-2xl border border-border bg-card overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-lg">
      
      {/* IMAGE AREA */}
      <div className="relative h-44 bg-gradient-to-br from-white/10 via-transparent to-black/30 overflow-hidden">
        
        {/* fake image zoom effect */}
        <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br from-white/5 to-transparent" />

        {/* badge */}
        <div className="absolute top-3 left-3 px-2 py-1 text-xs bg-primary text-black rounded-md font-medium">
          Featured
        </div>

        {/* year badge */}
        <div className="absolute top-3 right-3 px-2 py-1 text-xs bg-black/40 text-white rounded-md backdrop-blur">
          {car.year}
        </div>

        {/* center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">
            HVZMobilindo Unit
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight">
          {car.name}
        </h3>

        <p className="text-muted-foreground text-sm mt-1">
          📍 {car.location}
        </p>

        {/* divider */}
        <div className="my-4 h-px bg-border" />

        <div className="flex justify-between items-center">
          
          <div>
            <p className="text-xs text-muted-foreground">Price</p>
            <p className="text-primary font-semibold">
              Rp {car.price.toLocaleString("id-ID")}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-muted-foreground">Mileage</p>
            <p className="text-sm">
              {car.mileage.toLocaleString("id-ID")} km
            </p>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-4 w-full py-2 rounded-lg bg-primary text-black text-sm font-medium hover:opacity-80 transition">
          Lihat Detail
        </button>
      </div>
    </div>
  );
}