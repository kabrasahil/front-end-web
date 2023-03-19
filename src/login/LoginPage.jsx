import React from "react";
import LoginCard from "./LoginCard";

const LoginPage = () => {
  return (
    <section
      className="bg-stone-900  bg-center bg-cover  min-h-screen"
      style={{
        backgroundImage:
          "url(https://w0.peakpx.com/wallpaper/997/21/HD-wallpaper-carbon-world-map-grunge-art-carbon-background-creative-black-world-map-travel-concepts-world-map-concepts-world-map.jpg)",
      }}
    >
      <div className="w-screen h-screen flex flex-col justify-center items-center backdrop-blur-2xl">
        <div className="flex justify-center items-center">
          <LoginCard />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
