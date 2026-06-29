export interface Car {
    id: number;

    brand: string;

    model: string;

    year: number;

    price: number;

    transmission: "Automatic" | "Manual";

    fuel: "Gasoline" | "Diesel" | "Hybrid" | "Electric";

    mileage: number;

    image: string;

    featured: boolean;
}