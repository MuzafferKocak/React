import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  // const user = true;

  const { user } = useSelector((state) => state.login);

  return user?.email && user?.password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
