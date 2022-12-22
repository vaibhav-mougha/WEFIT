import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, admin } = useSelector((store) => store.login);

  if (
    (!user.userName || admin.adminName) &&
    (user.userName || !admin.adminName)
  ) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;