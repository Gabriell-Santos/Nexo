import type React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { userAuth, loadingAuth } = useContext(AuthContext);

  if (loadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl font-semibold text-purple-600 animate-pulse">
          Carregando...
        </div>
      </div>
    );
  }

  if (!userAuth) {
    return <Navigate to="/signout" />;
  }
  return children;
}
