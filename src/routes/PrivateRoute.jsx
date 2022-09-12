import { Outlet, Navigate } from "react-router-dom";
const PrivateRoutes = () => {
  const data = JSON.parse(localStorage.getItem("auth"));
  const auth = data?.token;
  if (!auth) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export { PrivateRoutes };
