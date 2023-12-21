import React from "react";
import headline from "../../../Assets/images/headline.jpg";
import "./mainNews.scss";
import { Headlines } from "../../../Constants";
const MainNews = () => {
  return (
    <div className="mains">
      <div className="title">मुख्य समाचार</div>
      <img src={headline} alt="headline" />
      {Headlines.map((headline: string, key: number) => (
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
