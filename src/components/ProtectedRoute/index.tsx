import type React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { userAuth } = useContext(AuthContext);

  if (!userAuth) {
    return <Navigate to="/signout" />;
  }
  return children;
}
