import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface ProtectedItem {
  children: any;
}
interface AuthState {
  auth: {
    isSignedIn: boolean;
  };
}

const ProtectedRoute = ({ children }: ProtectedItem) => {
  const isLogged = useSelector((state: AuthState) => state.auth.isSignedIn);
  const token = localStorage.getItem("token");
  if (!isLogged && !token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
