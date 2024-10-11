import React, { useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";

const SwitchMode = () => {
  const theme = useTheme();
  console.log(theme);
  const { setColorMode, colorMode } = useThemeContext();

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    sessionStorage.setItem("colorMode", colorMode);
  }, [colorMode]);

  return (
    <IconButton onClick={toggleColorMode} color="inherit">
      {theme?.palette?.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default SwitchMode;