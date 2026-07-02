const stats = [
    {
        value: "350+",
        label: "Cars Sold",
    },
    {
        value: "280+",
        label: "Happy Customers",
    },
    {
        value: "5+",
        label: "Years Experience",
    },
];

export default function HeroStats() {
    return (
        <div className="grid grid-cols-3 gap-6 pt-6">

            {stats.map((item) => (
                <div key={item.label}>

                    <h3 className="text-3xl font-bold text-primary">
                        {item.value}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        {item.label}
                    </p>

                </div>
            ))}

        </div>
    );
}