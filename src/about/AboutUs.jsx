import React, { useState } from "react";
import Headings from "./Headings";

const AboutUs = () => {
  const [techTeam, setTechTeam] = useState([
    {
      name: "John W. Smith",
      post: "Developer",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      socials: [
        { icon: "instagram", url: "https://www.instagram.com/igts_nsut" },
        { icon: "github", url: "https://www.github.com/igts_nsut" },
        { icon: "linkedin", url: "https://www.linkedin.com/igts_nsut" },
      ],
    },
    {
      name: "John W. Smith",
      post: "Developer",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      socials: [
        { icon: "instagram", url: "https://www.instagram.com/igts_nsut" },
        { icon: "github", url: "https://www.github.com/igts_nsut" },
        { icon: "linkedin", url: "https://www.linkedin.com/igts_nsut" },
      ],
    },
    {
      name: "John W. Smith",
      post: "Developer",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      socials: [
        { icon: "instagram", url: "https://www.instagram.com/igts_nsut" },
        { icon: "github", url: "https://www.github.com/igts_nsut" },
        { icon: "linkedin", url: "https://www.linkedin.com/igts_nsut" },
      ],
    },
    {
      name: "John W. Smith",
      post: "Developer",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      socials: [
        { icon: "instagram", url: "https://www.instagram.com/igts_nsut" },
        { icon: "github", url: "https://www.github.com/igts_nsut" },
        { icon: "linkedin", url: "https://www.linkedin.com/igts_nsut" },
      ],
    },
    {
      name: "John W. Smith",
      post: "Developer",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      socials: [
        { icon: "instagram", url: "https://www.instagram.com/igts_nsut" },
        { icon: "github", url: "https://www.github.com/igts_nsut" },
        { icon: "linkedin", url: "https://www.linkedin.com/igts_nsut" },
      ],
    },
    {
      name: "John W. Smith",
      post: "Developer",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      socials: [
        { icon: "instagram", url: "https://www.instagram.com/igts_nsut" },
        { icon: "github", url: "https://www.github.com/igts_nsut" },
        { icon: "linkedin", url: "https://www.linkedin.com/igts_nsut" },
      ],
    },
  ]);

  return (
    <div className="min-h-screen pt-10 flex flex-col items-center">
      <Headings
        title={"About Us"}
        subTitle={[
          '"Our Mission and Vision"',
          `Discover How We're Making an Impact Through Gaming, Economics, and Math`,
        ]}
      />

      <p className=" prose lg:text-xl md:text-3xl sm:text-3xl sm:mx-3 md:mx-3 text-center pb-8">
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

      <h1 className="text-center  text-gray-400  lg:text-4xl md:text-6xl sm:text-6xl font-semibold pt-20 pb-4">
        Meet Our Developers
      </h1>

      <p className=" prose lg:text-xl md:text-3xl sm:text-3xl sm:mx-3 md:mx-3 text-center pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fuga
        reprehenderit neque sit id fugiat provident architecto veritatis
        excepturi, necessitatibus, aut doloremque molestiae repudiandae ut quam
        blanditiis nihil cum voluptates?
      </p>

      <div class="grid gap-8 pt-16 lg:gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {techTeam.map((el, i) => {
          return (
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img
                class="mx-auto mb-4 lg:w-48 lg:h-48 md:h-64 md:w-64 sm:h-64 md:w-64 rounded-full"
                src={el.avatar}
                alt="Bonnie Avatar"
              />
              <h3 class="mb-1 lg:text-2xl sm:text-4xl md:text-4xl font-bold tracking-tight text-white cursor-pointer">
                <p>{el.name}</p>
              </h3>
              <p className=" cursor-pointer lg:text-xl sm:text-3xl md:text-3xl">
                {el.post}
              </p>
              <ul class="flex justify-center mt-4 space-x-4">
                {el.socials.map((el, i) => {
                  return (
                    <li>
                      <a href={el.url} target="_blank" class="" key={i}>
                        <i
                          className={`fa fa-${el.icon} lg:text-xl sm:text-3xl md:text-3xl text-pink-800 hover:text-white`}
                        ></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <h1 className="text-center  text-gray-400  lg:text-4xl md:text-6xl sm:text-6xl font-semibold pt-20 pb-4">
        Meet IGTS
      </h1>

      <p className=" prose lg:text-xl md:text-3xl sm:text-3xl sm:mx-3 md:mx-3 text-center pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fuga
        reprehenderit neque sit id fugiat provident architecto veritatis
        excepturi, necessitatibus, aut doloremque molestiae repudiandae ut quam
        blanditiis nihil cum voluptates?
      </p>
      <img
        class="h-96 card-shadow-black transition-all duration-300 rounded-xl cursor-pointer filter lg:grayscale lg:hover:grayscale-0 shadow-2xl shadow-gray-800 m-5"
        src="https://drive.google.com/uc?export=view&id=1I8LBraLkRdRLWp2f9mNzsnip6ujxO3LZ"
        alt="image description"
      />
      <p className="  prose lg:text-xl md:text-3xl sm:text-3xl sm:mx-3 md:mx-3 text-center pb-8 pt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fuga
        reprehenderit neque sit id fugiat provident architecto veritatis
        excepturi, necessitatibus, aut doloremque molestiae repudiandae ut quam
        blanditiis nihil cum voluptates?
      </p>
    </div>
  );
};

export default AboutUs;
