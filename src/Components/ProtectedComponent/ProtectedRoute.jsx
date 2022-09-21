import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { LogUserContext } from "../Context/LogUserContext";
const ProtectedRoute = (props) => {
  const { isLogin } = useContext(LogUserContext);

  if (isLogin == null) {
    return <Navigate to="/register" replace />;
  } else {
    return props.children;
  }
};
export default ProtectedRoute;
