import React from "react";
import "./style.css";
// import logo from "./../home/assets/igts-white-logo.png";
const LoadingScreen = () => {
  return (
    <div className="h-screen">
      <img
        src="https://res.cloudinary.com/dafqvvk91/image/upload/v1685046439/igts-white-logo_u3osk8.png"
        alt=""
        className="lg:w-[200px] lg:mt-[-40px] lg:ml-[-100px] sm:w-[450px] sm:ml-[-225px] sm:mt-[-95px] md:w-[450px] md:ml-[-225px] md:mt-[-95px]  left-[50%] top-[50%]  fixed object-contain"
      />
      <div id="preloader">
        <div
          id="loader"
          className="block relative left-[50%] top-[50%] lg:w-[250px] lg:h-[250px] lg:mt-[-125px] lg:ml-[-125px] sm:w-[500px] sm:h-[500px] md:w-[500px] md:h-[500px] sm:mt-[-250px] sm:ml-[-250px] md:mt-[-250px] md:ml-[-250px] rounded-full border-t border-t-cyan-600 lg:border-12 sm:border-32  md:border-32 border-transparent"
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
