import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { createContext, useContext, useState } from "react";
import { deepPurple, teal } from "@mui/material/colors";

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeContextProvider = ({ children }) => {
    const [colorMode, setColorMode] = useState(
        sessionStorage.getItem("colorMode") || "light"
      );

  const theme = createTheme({
    palette: {
      mode: colorMode,
      primary: {
        main: "#dc143c",
      },
      secondary: {
        main: teal[700],
      },
      // Benutzerdefinierte Farben
      lila: {
        main: deepPurple["A200"],
        light: deepPurple["A100"],
        dark: deepPurple["A400"],
      },
    },
    //? benutzer dark& light mode für 
     // ...(colorMode === "light"
    //     ? {
    //         //? palette values for light mode
    //         primary: {
    //           main: "#dc143c",
    //         },
    //         secondary: {
    //           main: teal[700],
    //         },
    //         morcivert: {
    //           main: deepPurple["A200"],
    //           light: deepPurple["A100"],
    //           dark: "#dc143c",
    //         },
    //         text: {
    //           primary: grey[900],
    //           secondary: grey[800],
    //         },
    //       }
    //     : {
    //         //? palette values for dark mode
    //         primary: {
    //           main: "#060606",
    //         },
    //         secondary: {
    //           main: "#3f3f3f",
    //         },
    //         morcivert: {
    //           main: "#00000",
    //           light: deepPurple["A100"],
    //           dark: deepPurple["A400"],
    //         },
    //         background: {
    //           default: "#060606",
    //           paper: "#230606",
    //         },
    //         text: {
    //           primary: "#fff",
    //           secondary: grey[500],
    //         },
    //       }),
  });

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      <ThemeProvider theme={theme}><CssBaseline/>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
