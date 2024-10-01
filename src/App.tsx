import React from "react";

import HeaderComponent from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterComponent from "./Components/Footer";
import Banking from "./Pages/Home/Banking";
import BankingInsurance from "./Pages/Banking-Insurance";
import NewsDetail from "./Pages/NewsDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/banking" element={<BankingInsurance/>}/>
        <Route path="news/:slug" element={<NewsDetail/>}/>
      </Routes>
      </BrowserRouter>
      <FooterComponent/>
    </div>
  );
}

export default App;
