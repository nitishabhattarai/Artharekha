import React, { useState } from "react";
import "./header.scss"

const HeaderComponent = () => {
 const [currentDate, setCurrentDate]= useState(Date().toLocaleString()) 
  return (
    <div className="header">
      <div className="top-section container"> <span>{currentDate}</span> <img src="/logo.jpg" alt="logo"/></div>

      <nav>
        <ul>
          <li>होमपेज</li>
          <li>समाचार</li>
          <li>विजनेस</li>
          <li>जीवनशैली</li>
          <li>विचार</li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
