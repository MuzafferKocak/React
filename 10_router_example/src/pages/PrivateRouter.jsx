import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from './Login'

const PrivateRouter = () => {
    //? Context, Redux, Mobx, Zustang (Global State managment, Local Staroge, session)

    const isLogged = false



  return (
    <div>{isLogged ? <Outlet/> : <Navigate to={"/Login"} />}</div>
  )
}

//? useNavigate (Hook) und Navigate(Component) machen tatsächlich dasselbe. Mit anderen Worten: Es führt den Routing-Prozess durch.
//? Der Unterschied zwischen ihnen liegt in ihren Einsatzgebieten. Es wird an Stellen wie einem Ereignis verwendet, das ein Hook ist, oder innerhalb des useEefect-Hooks. (Wo Funktionen verwendet werden)

//? Da es sich bei der anderen um eine Komponente handelt, wird sie verwendet, wenn eine Umleitung innerhalb von JSX erforderlich ist.

//? Ein Link kann verwendet werden, wenn eine Eingabe vom Benutzer erwartet wird.

export default PrivateRouter