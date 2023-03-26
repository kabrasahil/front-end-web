import React from "react";
import LoginCard from "./LoginCard";
import background from "./background.png";

const LoginPage = () => {
  return (
    <section
      className="bg-stone-900  bg-center bg-cover  min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="w-screen h-screen flex flex-col lg:pt-20 justify-center lg:items-end backdrop-blur-2xl ">
        <div className="flex justify-center items-center lg:!mr-24 ">
          <LoginCard />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
