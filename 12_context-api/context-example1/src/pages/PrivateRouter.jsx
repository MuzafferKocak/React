import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"

const PrivateRouter = () => {
  // const user = true

  //? Consuming
  const {signed} = useContext(LoginContext)
  return signed ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter