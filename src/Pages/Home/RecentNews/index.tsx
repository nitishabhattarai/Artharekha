import React from "react";
import "./recentNews.scss";
import { recentNews } from "../../../Constants";
import { clockIcon } from "../../../assets/images";

const RecentNews = () => {
  return (
    <div>
      <div className="section-title mb-2">भर्खरका समाचार</div>
      <hr className="line" color="#d5d5d5" />

      {recentNews.map(
        (news: { src: string; title: string; time: string }, key) => (
          <div
            key={key}
            className="flex gap-4 py-5 border-solid border-0 border-b border-b-border last:border-b-0 recent-news"
          >
            <div className="flex w-1/3 justify-center">
              <img
                src={news.src}
                className="w-full object-contain"
                alt="recent-news"
              />
            </div>
            <div className="w-2/3">
              <div className="recent-news-title">{news.title}</div>
              <div className="flex items-center mt-2 posted-time"><img className="h-3.5 mr-1" src={clockIcon} alt="clock-icon" />{news.time}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default RecentNews;
