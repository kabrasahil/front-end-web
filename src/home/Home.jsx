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
        <title>IGTS NSUT | Home</title>
        <meta property="og:title" content="IGTS-NSUT | Home" />
        <meta property="og:url" content="https://igtsnsut.org/home" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dafqvvk91/image/upload/v1685046439/igts-white-logo_u3osk8.png"
        />

        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dafqvvk91/image/upload/v1685046439/igts-white-logo_u3osk8.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="igtsnsut.org" />
        <meta property="twitter:url" content="https://igtsnsut.org/home" />
        <meta name="twitter:title" content="IGTS-NSUT" />
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
