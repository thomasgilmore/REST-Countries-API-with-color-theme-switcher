import { ThemeProvider } from "@emotion/react";
import React, { useContext } from 'react';
import { CountriesContext } from './Context/Context';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Country from "./Components/Country";
import Title from "./Components/Title";

function App() {
  const { theme, darkMode } = useContext(CountriesContext);
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)', minHeight: '100vh' }}>
        <Title />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/country" element={<Country />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
