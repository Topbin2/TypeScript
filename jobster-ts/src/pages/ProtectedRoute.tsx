import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useAppSelector((state) => state.user);
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
