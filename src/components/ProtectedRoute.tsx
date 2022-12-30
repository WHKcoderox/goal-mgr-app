import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { selectUser } from "../redux/reducers/userSlice";

interface ProtectedRouteParams {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteParams) => {
  const user = useSelector(selectUser);

  console.log(user);
  if (user.uid === "") {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}