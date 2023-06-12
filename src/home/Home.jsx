import React from "react";
import { Helmet } from "react-helmet";
import Home1 from "./Home1";
import Home2 from "./Home2";
import HomeUpdates from "./HomeUpdates";
import IntroHome from "./IntroHome";
import MetaDecorators from "../MetaDecorator";

const Home = () => {
  return (
    <div className="">
      <MetaDecorators
        title="IGTS-NSUT | Home"
        description="Welcome to the official website of the IGTS college society! We are a community of passionate individuals with a shared love for gaming, economics, and math."
        url="https://igtsnsut.org/home"
        image="https://res.cloudinary.com/dksdmvwch/image/upload/v1685981881/IGTS_logo_white_nflxiq.jpg"
      />
      <div className="">
        <IntroHome />
      </div>
      <div className="">
        <HomeUpdates />
      </div>
      <div className="">
        <Home1 />
      </div>
      <div className="">
        <Home2 />
      </div>
    </div>
  );
};

export default Home;
