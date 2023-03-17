import React from "react";
import Home1 from "./Home1";
import Home2 from "./Home2";
import HomeUpdates from "./HomeUpdates";
import IntroHome from "./IntroHome";

const Home = () => {
  return (
    <div>
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
