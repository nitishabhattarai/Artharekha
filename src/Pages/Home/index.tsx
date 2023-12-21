import React from "react";
import "./home.scss";
import MainNews from "./MainNews/index";
const Home = () => {
  return (
    <div className="home-page main-container">
      <div className="ad">Google Ad</div>
      <div className="padding-r-l home-content">
        <div className="headlines">
          <MainNews />
        </div>
        <div className="main-news">
          <img src="" alt="" />
          <h1>
            गृहमन्त्री श्रेष्ठको स्वास्थ्य सुधार हुँदै, अझै ३/४ दिन अस्पतालमै
            रहने
          </h1>
          <p>
            उपप्रधान एवं गृहमन्त्री नारायणकाजी श्रेष्ठको स्वास्थ्य अवस्था स्थिर
            रहेको चिकित्सकहरूले बताएका छन्।
          </p>
          <span>नागरिक २१ मंसिर २०८० ११:५४ बिहीबार १ मिनेट पाठ</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
