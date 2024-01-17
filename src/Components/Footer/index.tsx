import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const FooterComponent = () => {
  return (
    <div className="py-4 border-0 border-t-4 border-solid border-primary footer">
      <div className="grid grid-cols-3 gap-10 px-32">
        <div className="flex flex-col border-0 border-r border-solid border-border details">
          <div className="flex flex-col items-center w-[8rem] logo">
            <img src="./logo.jpg" className="w-16" alt="logo" />
            <span className="mt-5 text-3xl font-bold text-primary">
              अर्थरेखा
            </span>
          </div>
          <div className="text-lg font-bold text-secondary">
            डिजीटल आर्थिक पत्रीका
          </div>

          <div className="mt-2 social-icon">
            <a href="facebook" className="mr-3">
              <FaFacebookSquare size={25} />
            </a>
            <a href="twitter" className="mr-3">
              <FaTwitterSquare size={25} />
            </a>
            <a href="youtube" className="mr-3">
              <FaYoutube size={25} />
            </a>
            <a href="instagram">
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
        <div className="border-0 border-r border-solid border-border useful-links">
          <div className="mt-5 text-lg font-bold">उपयोगी लिंकहरु</div>
          <div className="grid text-lg ">
            <a href="/" className="mt-5 text-secondary">
              हाम्रो बारेमा
            </a>
            <a href="/" className="text-secondary">
              विज्ञापन
            </a>
            <a href="/" className="text-secondary">
              आजको पत्रिका
            </a>
            <a href="/" className="text-secondary">
              सम्पर्क गर्नुहोस्
            </a>
          </div>
        </div>
        <div className="for-advertisement">
          <div className="mt-5 text-lg font-bold">विज्ञापनका लागि</div>
          <div className="grid mt-5 text-base text-secondary">
            9852055705, 9842025405, 9816315905
            <span>artharekha@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-4 mt-10 border-0 border-t border-solid text-secondary border-border copyright">
        &copy; {new Date().getFullYear()} Artharekha Pvt. Ltd. All rights
        reserved.
      </div>
    </div>
  );
};

export default FooterComponent;
