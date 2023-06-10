import React from "react";
import { Helmet } from "react-helmet";
import Home1 from "./Home1";
import Home2 from "./Home2";
import HomeUpdates from "./HomeUpdates";
import IntroHome from "./IntroHome";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>IGTS-NSUT | Home</title>
        <meta
          name="description"
          content="Welcome to the official website of the IGTS college society! We are a community of passionate individuals with a shared love for gaming, economics, and math."
        />
        <meta name="keywords" content="igts nsut, IGTS, nsut, game theory" />
        <meta property="og:url" content="https://igtsnsut.org/home" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IGTS-NSUT | Home" />
        <meta
          property="og:description"
          content="Welcome to the official website of the IGTS college society! We are a community of passionate individuals with a shared love for gaming, economics, and math."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dksdmvwch/image/upload/v1685981881/IGTS_logo_white_nflxiq.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="igtsnsut.org" />
        <meta property="twitter:url" content="https://igtsnsut.org/home" />
        <meta name="twitter:title" content="IGTS-NSUT | Home" />
        <meta
          name="twitter:description"
          content="Welcome to the official website of the IGTS college society! We are a community of passionate individuals with a shared love for gaming, economics, and math."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dksdmvwch/image/upload/v1685981881/IGTS_logo_white_nflxiq.jpg"
        />
      </Helmet>
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
