import React from "react";
import headline from "../../../assets/images/headline.jpg";
import "./mainNews.scss";
import { headlines } from "../../../Constants";
const MainNews = () => {
  return (
    <div className="mains">
      <div className="section-title">मुख्य समाचार</div>
      <img src={headline} alt="headline" />
      {headlines.map((headline: string, key: number) => (
        <div
          key={key}
          className={`main-titles ${key === 0 ? "large-font" : "title-font"}`}
        >
          <a href="#">{headline}</a>
        </div>
      ))}
    </div>
  );
};

export default MainNews;
