import React, { useEffect } from "react";
import Headings from "./Headings";

const AboutIgts = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  },[]);
  
  return (
    <div className="min-h-screen pt-10 flex flex-col items-center">
      <Headings
        title={"The Indian Game Theory Society"}
        subTitle={[
          '"Our Mission and Vision"',
          `Discover How We're Making an Impact Through Gaming, Economics, and Math`,
        ]}
      />

      <p className=" prose lg:text-xl md:text-3xl sm:text-3xl sm:mx-3 md:mx-3 text-center pb-8 text-slate-400">
        Welcome to the official website of the IGTS college society! We are a
        community of passionate individuals with a shared love for gaming,
        economics, and math. Our society was founded with the goal of creating a
        space for like-minded individuals to connect, collaborate, and share
        their knowledge and skills with one another. Through our blogs, events,
        and gaming sessions, we aim to empower and educate others about the
        fascinating world of game theory and its applications in economics and
        math. At IGTS, we believe that anyone can learn and excel in these
        fields, regardless of their background or prior experience. Our team of
        talented developers and dedicated members work tirelessly to organize
        events, design games, and write blogs that showcase the practical
        applications of game theory concepts. We are constantly exploring new
        ideas and pushing the boundaries of what's possible, all while fostering
        a supportive and inclusive community.
      </p>
      <img
        class="h-96 card-shadow-black transition-all duration-300 rounded-xl cursor-pointer filter lg:grayscale lg:hover:grayscale-0 shadow-2xl shadow-gray-800 m-5"
        src="https://drive.google.com/uc?export=view&id=1I8LBraLkRdRLWp2f9mNzsnip6ujxO3LZ"
        alt="image description"
      />

      <h1 className="text-center  text-gray-400  lg:text-4xl md:text-6xl sm:text-6xl font-semibold pt-20 pb-4">
        What is IGTS?
      </h1>

      <p className=" prose lg:text-xl md:text-3xl sm:text-3xl sm:mx-3 md:mx-3 text-center pb-8  text-slate-400">
      We aim to find the applications of game theory in various fields like economics, politics, behavioural science and primarily computational decision making.
      </p>
      <img
        class="h-96 card-shadow-black transition-all duration-300 rounded-xl cursor-pointer filter lg:grayscale lg:hover:grayscale-0 shadow-2xl shadow-gray-800 m-5"
        src="https://www.pokersnowie.com/blog/sites/default/files/Game%20Theory.jpg"
        alt="image description"
      />

      <h1 className="text-center  text-gray-400  lg:text-4xl md:text-6xl sm:text-6xl font-semibold pt-20 pb-4">
        What is Game Theory?
      </h1>

      <p className=" prose lg:text-xl md:text-3xl sm:text-3xl sm:mx-3 md:mx-3 text-center pb-8  text-slate-400">
      The branch of social science that studies strategic decision making is called game theory. The games in this theory range from chess to child-rearing, from tennis to business takeovers, and from advertising to arms control.
      </p>

      <img
        class="h-96 w-1/3 card-shadow-black transition-all duration-300 rounded-xl cursor-pointer filter  shadow-2xl shadow-gray-800 m-5"
        src="https://anticap.files.wordpress.com/2011/08/postuniversitycartoongametheory.jpg"
        alt="image description"
      />
      <p className=" prose lg:text-xl md:text-3xl sm:text-3xl sm:mx-3 md:mx-3 text-center pb-8  text-slate-400">
The Monty Hall Problem      </p>

    </div>
  );
};

export default AboutIgts;
