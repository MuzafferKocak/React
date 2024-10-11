import {CssBaseline} from "@mui/material"
import Navbar from "../components/Navbar";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import CardComp from "../components/CardComp";

const Home = () => {
  return (
    <>
    <CssBaseline/>
      <Navbar/>
      {/* <TypoButtons /> */}
      {/* <TextFieldComp/> */}
      <CardComp/>
    </>
  );
};

export default Home;