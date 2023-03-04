import "./App.css";
import './customize.css';

import React from "react";
import { Route, Routes } from "react-router-dom";

import Virtual from "./pages/virtual";
import Medicine from "./pages/medicine";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();

  return (
    <Routes history={history}>
      <Route path="/" element={<Virtual />} />
      <Route path="/virtualme" element={<Virtual />} />
      <Route path="/virtualme/:medicine" element={<Medicine />} />
    </Routes>
  );
}

export default App;
