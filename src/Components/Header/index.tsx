import React, { useEffect, useState } from "react";
import NepaliDate from "nepali-date-converter";
import HamBurger from "../../assets/images/hamburger.svg";
import "./header.scss";

  var NepaliWords = require('nep-eng');

const HeaderComponent = () => {
  const [currentDate, setCurrentDate] = useState(
    new NepaliDate().toLocaleString()
  );
  const s = NepaliWords.translate('currentDate')
useEffect(()=>{
 

},[])
  return (
    <div className="header">
      <div className="top-section container">
        {s}
        <span>{currentDate}</span> <img src="/logo.jpg" alt="logo" />
      </div>
      <nav>
        <ul>
          <li className="active">होमपेज</li>
          <li>समाचार</li>
          <li>विजनेस</li>
          <li>जीवनशैली</li>
          <li>विचार</li>
        </ul>
        <img src={HamBurger} alt="ham-menu" />
      </nav>
    </div>
  );
};

export default HeaderComponent;
