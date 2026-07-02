import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { isAdminAuthenticated } from "@/lib/auth";

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();

  if (!isAdminAuthenticated()) {
    return (
      <Navigate
        to="/admin/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return <>{children}</>;
}

export default ProtectedRoute;