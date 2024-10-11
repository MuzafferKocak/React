import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home";
import { deepPurple, teal } from "@mui/material/colors";

function App() {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#dc143c",
      },
      secondary:{
        main: teal[700],
      },
      lila: {
        main: deepPurple["A200"],
        light: deepPurple["A100"],
        dark: deepPurple["A400"],
      }
    },
  });

  return (
    
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    
  );
}

export default App;
