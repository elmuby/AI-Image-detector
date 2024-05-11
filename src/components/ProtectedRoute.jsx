import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Ai } from "../pages/Ai";
import { useAuthValue } from "../AuthContext";

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
  const { currentUser } = useAuthValue();

  const [isAuthenticated, setIsAunthenticated] = useState(
    currentUser ? true : false
  );


  return isAuthenticated ? (
    // <component {...rest} />
    <Ai />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
