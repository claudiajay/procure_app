import { Navigate } from "react-router-dom";

function RoleRoute({ children, allowedRoles }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <Navigate to="/login" replace />;

  return allowedRoles.includes(user.role) ? children : <Navigate to="/dashboard" replace />;
}

export default RoleRoute;
