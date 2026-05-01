import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
//   const token = localStorage.getItem("token");
  const token = true

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;