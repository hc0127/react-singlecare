import "./App.css";
import './customize.css';

import React from "react";
import { Route, Routes } from "react-router-dom";

import Virtual from "./pages/virtual";
import Medicine from "./pages/medicine";
import { createBrowserHistory } from "history";
import { ThemeProvider,createTheme } from "@mui/material/styles";
import { blue, pink,green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700],
    },
    green:{
      light: green[300],
      main: green[500],
      dark: green[700],
    }
  },
  breakpoints: {
    values: {
      sm: 768,
      md: 1024,
      lg: 1200,
      lg: 1440,
    },
  },
});

function App() {
  const history = createBrowserHistory();

  return (
    <ThemeProvider theme={theme}>
      <Routes history={history}>
        <Route path="/" element={<Virtual />} />
        <Route path="/virtualme" element={<Virtual />} />
        <Route path="/virtualme/:medicine" element={<Medicine />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
