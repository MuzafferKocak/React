import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import Paths from "./pages/Paths";
import NotFound from "./pages/NotFound";
import FS from "./pages/FS"
import AWS from "./pages/AWS"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Azure from "./pages/Azure";
import Google from "./pages/Google";
import Login from "./pages/Login";
import PrivateRouter from "./pages/PrivateRouter";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/people" element={<PrivateRouter/>} >
        <Route path="" element={<People />} />
        <Route path=":id" element={<PersonDetail />} />
        </Route>
        
        <Route path="/contact" element={<Contact />} />


        <Route path="/paths" element={<Paths />}>
          <Route index path="" element={<FS />}/>
          <Route path="aws" element={<AWS/>} >
            <Route path="azure" element={<Azure/>} />
            <Route path="google" element={<Google/>} />
          </Route>
          


        </Route>

        <Route path="/login" element={<Login />} />



        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
