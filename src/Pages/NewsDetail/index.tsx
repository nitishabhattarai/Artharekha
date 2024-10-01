import React from "react";
import { Link, useParams } from "react-router-dom";
import { newsDetail } from "../../Constants/index";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { MdEmail } from "react-icons/md";
import { FaPrint } from "react-icons/fa";

const NewsDetail = () => {
  const { slug } = useParams();

  return (
    <div className="box-border main-container">
      <div className="mb-5 ad"> Ad</div>
      <div className="ad">Google Ad</div>
      <div className="box-border mt-3 mb-2 text-base text-primary news-type">
        {newsDetail.category}
      </div>
      <div className="mb-3 news-title">{newsDetail.title}</div>
      {newsDetail.src && (
        <img
          src={newsDetail.src}
          className="object-cover w-full mb-3"
          alt="banner"
        />
      )}
      <div className="box-border flex py-3 news-body">
        <div className="w-1/4 title-font">
          <div>
            <Link to="/">{newsDetail.author}</Link>
          </div>
          <div className="mt-2">{newsDetail.location}</div>
          <div className="mt-2">{newsDetail.datePosted}</div>
          <div>{newsDetail.readingTime}</div>
          <div className="flex mt-10">
            <span className="flex items-center justify-center w-10 h-10 mr-3 border border-solid rounded-full border-border">
              <MdEmail />
            </span>
            ईमेल
          </div>
          <div className="flex mt-4">
            <span className="flex items-center justify-center w-10 h-10 mr-3 border border-solid rounded-full border-border">
              <FaPrint />
            </span>
            प्रिन्ट
          </div>
        </div>
        <div className="box-border w-2/3 px-12 border-0 border-r border-solid border-border">
          <div className="flex items-center">
            <div>
              <span className="text-4xl">{newsDetail.shares}</span>{" "}
              <span className="mr-5 text-xs text-gray-400">SHARES</span>
            </div>

            <FacebookShareButton
              className="mr-4"
              url={"https://www.example.com"}
              // quote={'Dummy text!'}
              hashtag="#muo"
            >
              <FacebookIcon size={38} round />
            </FacebookShareButton>
            <TwitterShareButton
              className="mr-4"
              url={"https://www.example.com"}
              // quote={'Dummy text!'}
              // hashtag="#muo"
            >
              <TwitterIcon size={38} round />
            </TwitterShareButton>
            <LinkedinShareButton
              url={"https://www.example.com"}
              // quote={'Dummy text!'}
              // hashtag="#muo"
            >
              <LinkedinIcon size={38} round />
            </LinkedinShareButton>
          </div>
          <div className="mt-5 text-xl text-justify text-newsStory newsStory">{newsDetail.newsStory}</div>
        </div>
        <div className="box-border w-4/12 pl-6">3</div>
      </div>
    </div>
  );
};

export default NewsDetail;
