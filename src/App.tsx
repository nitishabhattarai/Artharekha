import React from "react";

import HeaderComponent from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterComponent from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      <FooterComponent/>
    </div>
  );
}

export default App;
