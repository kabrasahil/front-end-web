import React, { useContext, useEffect } from "react";
import EventCreationCard from "./EventCreationCard";

const EventCreationPage = () => {


  return (
    <section
      className="bg-[#101010]  bg-center bg-cover  min-h-screen"
      style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/2454622.jpg)`,
      }}
    >
      <div className="w-screen h-full flex flex-col lg:pt-32 justify-center lg:items-center backdrop-blur-2xl ">
        <div className="flex justify-center items-center  ">
          <EventCreationCard />
        </div>
      </div>
    </section>
  );
};

export default EventCreationPage;
