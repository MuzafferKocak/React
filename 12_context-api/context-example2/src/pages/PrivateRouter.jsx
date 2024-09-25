// import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";
// import { LoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
  // const user = true

  //? Consuming
  // const { signed } = useContext(LoginContext);
  const { signed } = useLoginContext()
  return signed ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
