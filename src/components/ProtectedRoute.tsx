import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { selectUser } from "../redux/reducers/userSlice";
import { Props } from "../types";

export const ProtectedRoute = ({ children }: Props) => {
  const user = useSelector(selectUser);

  console.log(user);
  if (user.uid === "") {
    return <Navigate to="/login" />;
  }

  return children;
}