// import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home";
// import { deepPurple, teal } from "@mui/material/colors";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  // let theme = createTheme({
  //   palette: {
  //     mode: "dark",
  //     primary: {
  //       main: "#dc143c",
  //     },
  //     secondary:{
  //       main: teal[700],
  //     },
  //     //? Benutzer farben
  //     lila: {
  //       main: deepPurple["A200"],
  //       light: deepPurple["A100"],
  //       dark: deepPurple["A400"],
  //     }
  //   },
  // });

  return (
    // <ThemeProvider theme={theme}>
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
    // {/* </ThemeProvider> */}
  );
}

export default App;
