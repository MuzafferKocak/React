import Footer from "./components/Footer"
import Navs from "./components/Navs"
import About from "./pages/About"
import Home from "./pages/Home"
import People from "./pages/People"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import PersonDetail from "./pages/PersonDetail"
import Login from "./pages/Login"
import PrivateRouter from "./pages/PrivateRouter"
import { LoginContext } from "./context/LoginContext"
import { useState } from "react"

function App() {
  const [signed, setSigned] = useState(false)

  console.log(signed);

  return (
    //? 2) wickeln mit Context provider
    <LoginContext.Provider value={{signed, setSigned}}>

      <BrowserRouter>
      <Navs />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />

        <Route path="people" element={<PrivateRouter />}>
          <Route path="" element={<People />} />
          <Route path=":id" element={<PersonDetail />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </LoginContext.Provider>
    
  )
}

export default App