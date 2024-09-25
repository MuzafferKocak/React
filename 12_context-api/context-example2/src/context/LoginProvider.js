import { useState } from "react";
import { createContext } from "react";


//? 1) Context erstellen
export const LoginContext = createContext()


//? 2) für Login Context ein Component erstellt
const LoginProvider = (props) => {
  const [signed, setSigned] = useState(false)

  const values = {signed, setSigned}
  return (
    <LoginContext.Provider value={values}>{props.children}

    </LoginContext.Provider>
  )
}

export default LoginProvider