import React from "react";
import "./home.scss";
import MainNews from "./MainNews/index";
import { img1 } from "../../assets/images";
import RecentNews from "./RecentNews";
const Home = () => {
  return (
    <div className="home-page main-container">
      <div className="ad">Google Ad</div>
      <div className="padding-r-l gap-10 home-content">
        <div className="w-1/4 headlines">
          <MainNews />
        </div>
        <div className="w-2/4 highlighted-news">
          <div className="pb-10 border-solid border-b border-border border-0 text-center">
            <img src={img1} className="w-full" alt="highlight" />
            <h1 className="mt-3.5 main-title">
              गृहमन्त्री श्रेष्ठको स्वास्थ्य सुधार हुँदै, अझै ३/४ दिन अस्पतालमै
              रहने
            </h1>
            <p className="text-secondary title-font">
              उपप्रधान एवं गृहमन्त्री नारायणकाजी श्रेष्ठको स्वास्थ्य अवस्था
              स्थिर रहेको चिकित्सकहरूले बताएका छन्।
            </p>
            <div className="mt-2 text-secondary">
              नागरिक २१ मंसिर २०८० ११:५४ बिहीबार १ मिनेट पाठ
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 other-highlights">
            <div className="mt-5 pl-5 border-solid border-0 border-r border-border">
              <a href="" className="title-font">
               जब अन्तरिक्षको टमाटर हरायो
              </a>
              <div className="author mt-2"><a className="!text-author" href="">नागरिक</a></div>
              <div className="text-secondary">६ पुस २०८० ०६:४२ शुक्रबार</div>
              <div className="text-secondary">१ मिनेट पाठ</div>
            </div>
            <div className="mt-5 ">

            <a href="" className="title-font">
            किन स्वतन्त्र पत्रकारिता ?
              </a>
              <div className="author mt-2"><a className="!text-author" href="">प्रेम लामिछाने</a></div>
              <div className="text-secondary">६ पुस २०८० ०६:१९ शुक्रबार </div>
              <div className="text-secondary"> ४ मिनेट पाठ</div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <RecentNews />
        </div>
      </div>
    </div>
  );
};

export default Home;
