import React from "react";
import HeadlinesHeader from "../../../Components/Headlines-Header";
import { recentNews } from "../../../Constants";
import { clockIcon, saveBtn, shareBtn } from "../../../assets/images";

const Banking = () => {
  return (
    <div className="flex px-10 gap-10 banking-section">
      <div className="w-1/3 advertise">
        <div className="mb-5 ad-square"></div>
        <div className="ad-square"></div>
      </div>
      <div className="w-2/3 mt-10 banking-headlines">
        <HeadlinesHeader newsTitle={"बैंकिङ"} pageLink={"/banking"} />
        {recentNews.map((news, key) => (
          <div
            key={key}
            className="flex gap-5 py-10 border-0 border-solid border-b last:border-b-0 border-border investment-highlights"
          >
            <div className="w-2/6 image">
              <div className="relative h-full bg-gray-400">
                <div className="aspect-video"></div>
                <img
                  src={news.src}
                  className="absolute top-0 left-0 object-contain w-full h-full"
                  alt="news"
                />
              </div>
            </div>
            <div className="w-4/6">
              <h3 className="text-xl">
                <a href="">{news.title}</a>
              </h3>

              <div className="title-font line-clamp-3 text-secondary oneline">
                {news.oneline}
              </div>
              <div className="text-sm text-secondary flex justify-between items-center mt-5 info">
                <div className="flex items-center">
                  <span className="text-author mr-4">{news.author}</span>
                  <span className="flex items-center mr-4">
                    <img
                      className="h-3.5 mr-1"
                      src={clockIcon}
                      alt="clock-icon"
                    />
                    {news.time}
                  </span>
                  <span>{news.readingTime}</span>
                </div>
                <div>
                  <img
                    className="h-6 mr-2 cursor-pointer"
                    src={saveBtn}
                    alt="saveBtn"
                  />
                  <img
                    className="h-6 cursor-pointer"
                    src={shareBtn}
                    alt="sharebtn"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banking;
