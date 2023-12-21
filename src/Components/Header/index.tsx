import React, { useState } from "react";
import {format} from 'date-fns';

import "./header.scss"


const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="top-section container"> <span>{format(new Date(), 'dd MMMM yyyy eeee')}</span> <img src="/logo.jpg" alt="logo"/></div>

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
