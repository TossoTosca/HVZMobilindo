export interface Car {
    id: number;

    brand: string;

    model: string;

    year: number;

    price: number;

    transmission: string;

    fuel: string;

    mileage: number;

    image: string;

    images?: string[];

    featured: boolean;
}
