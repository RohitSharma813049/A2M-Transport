import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  // User not logged in → go to login
  if (!isAuthenticated) {
    return <Navigate to="/account/login" replace />;
  }

  // User logged in but NOT admin → go to home
  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Allow admin to continue
  return children;
}
