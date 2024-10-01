import React, { useState } from "react";
import { format } from "date-fns";

import "./header.scss";
import useDarkMode from "../../Hooks/useDarkMode";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="header">
      <div className="container justify-between top-section">
        {" "}
        <span>{format(new Date(), "dd MMMM yyyy eeee")}</span>{" "}
        <img src="/logo.jpg" alt="logo" />
        <button
          className="self-end text-black bg-transparent border-2 rounded"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
      <div className={isDarkMode ? "dark-mode bg-black" : "light-mode"}></div>
      <nav>
        <ul>
          <Link to="/">
            <li>होमपेज</li>
          </Link>
          <li>कर्पोरेट</li>
          <li>सेयर मार्केट</li>
          <li>जीवनशैली</li>
          <Link to="/banking">
            <li>बैँक/वीमा</li>
          </Link>
          <li>विचार</li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
