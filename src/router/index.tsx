import { createBrowserRouter } from "react-router-dom";

import App from "@/App";

import HomePage from "@/pages/HomePage";
import InventoryPage from "@/pages/InventoryPage";
import CarDetailPage from "@/pages/CarDetailPage";
import SellCarPage from "@/pages/SellCarPage";
import DashboardPage from "@/pages/DashboardPage";
import AdminLoginPage from "@/pages/AdminLoginPage";
import ProtectedRoute from "@/router/protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "inventory",
        element: <InventoryPage />,
      },
      {
        path: "inventory/:id",
        element: <CarDetailPage />,
      },
      {
        path: "sell",
        element: <SellCarPage />,
      },
      {
        path: "admin/login",
        element: <AdminLoginPage />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
