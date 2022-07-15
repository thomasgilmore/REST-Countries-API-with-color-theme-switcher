import { ThemeProvider } from "@emotion/react";
import React, { useContext } from 'react';
import { CountriesContext } from './Context/Context';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  const { theme } = useContext(CountriesContext);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
