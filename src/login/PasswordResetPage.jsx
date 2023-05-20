import React, { useContext, useEffect } from "react";
import LoginCard from "./LoginCard";
import background from "./background.png";
import { useLocation, useNavigate } from "react-router-dom";
import PasswordResetCard from "./PasswordResetCard";
import { Context } from "../context/Context";

const PasswordResetPage = () => {
  const user = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <section
      className="bg-stone-900  bg-center bg-cover  min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="w-screen h-screen flex flex-col lg:pt-20 justify-center lg:items-end backdrop-blur-2xl ">
        <div className="flex justify-center items-center lg:!mr-24 ">
          <PasswordResetCard />
        </div>
      </div>
    </section>
  );
};

export default PasswordResetPage;
