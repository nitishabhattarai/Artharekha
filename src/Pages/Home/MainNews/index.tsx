import React from "react";
import headline from "../../../assets/images/headline.jpg";
import "./mainNews.scss";
import { headlines } from "../../../Constants";
import { Link } from "react-router-dom";
const MainNews = () => {
  return (
    <div className="mains">
      <div className="section-title">मुख्य समाचार</div>
      <img src={headline} alt="headline" />
      {headlines.map((headline, key) => (
        <div
          key={key}
          className={`main-titles ${key === 0 ? "large-font" : "title-font"}`}
        >
          <Link to={'news/'+ headline.url}>{headline.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default MainNews;
