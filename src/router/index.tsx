import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import HomePage from "@/pages/HomePage";
import InventoryPage from "@/pages/InventoryPage";
import CarDetailPage from "@/pages/CarDetailPage";
import SellCarPage from "@/pages/SellCarPage";
import DashboardPage from "@/pages/DashboardPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />

                <Route
                    path="/inventory"
                    element={<InventoryPage />}
                />

                <Route
                    path="/inventory/:id"
                    element={<CarDetailPage />}
                />

                <Route
                    path="/sell"
                    element={<SellCarPage />}
                />

                <Route
                    path="/dashboard"
                    element={<DashboardPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}