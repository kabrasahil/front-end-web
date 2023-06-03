import React, { useEffect, useState } from "react";
import Headings from "./Headings";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [techTeam, setTechTeam] = useState([
    {
      name: "Parikshit Dabas",
      post: "Lead Developer",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      socials: [
        { icon: "instagram", url: "https://www.instagram.com/igts_nsut" },
        { icon: "github", url: "https://www.github.com/igts_nsut" },
        { icon: "linkedin", url: "https://www.linkedin.com/igts_nsut" },
      ],
    },
    {
      name: "Vishal Jatia",
      post: "Lead Developer",
      avatar:
        "https://res.cloudinary.com/dafqvvk91/image/upload/v1685733172/Developers/IMG_20230603_002827_dw6tzc.jpg",
      socials: [
        { icon: "instagram", url: "https://www.instagram.com/v._.i_s_h_a_l/" },
        { icon: "github", url: "https://github.com/Vishal-jatia" },
        { icon: "linkedin", url: "https://www.linkedin.com/in/vishal-jatia-638146229/" },
      ],
    },
    {
      name: "Pragun Bansal",
      post: "Lead Developer",
      avatar:
        "https://res.cloudinary.com/dafqvvk91/image/upload/v1685731655/Developers/InShot_20230526_135247900_p8uedx.jpg",
      socials: [
        { icon: "instagram", url: "https://www.instagram.com/pragun_bansal/" },
        { icon: "github", url: "https://github.com/pragun-bansal" },
        { icon: "linkedin", url: "https://www.linkedin.com/in/pragun-bansal-233a05214/" },
      ],
    },
    {
      name: "Samyak Jain",
      post: "Lead Developer",
      avatar:
        "https://res.cloudinary.com/dafqvvk91/image/upload/v1685734245/Developers/IMG20220210125653_2_bso5mk.jpg",
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

      <p className=" prose lg:text-xl md:text-3xl sm:text-3xl sm:mx-3 md:mx-3 text-center pb-8  text-slate-400">
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

      <h1 className="text-center  text-gray-400  lg:text-4xl md:text-6xl sm:text-6xl font-semibold pt-20 pb-4  ">
        Meet Our Developers
      </h1>

      <p className=" prose lg:text-xl md:text-3xl sm:text-3xl sm:mx-3 md:mx-3 text-center pb-8  text-slate-400">
        The Creative Minds Behind the Indian Game Theory Society Website! These
        individuals have poured their expertise, creativity, and passion into
        crafting a remarkable online platform for our esteemed society. Allow us
        to present our dedicated team:
      </p>

      <div class="grid gap-8 pt-16 lg:gap-16 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
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

      <p className=" prose lg:text-xl md:text-3xl sm:text-3xl sm:mx-3 md:mx-3 text-center pb-8  text-slate-400">
        Uniting game theory enthusiasts, fostering collaboration, and advancing
        its practical applications through events, workshops, and discussions.
        Join us in exploring strategic decision-making!
      </p>
      <img
        class="h-96 card-shadow-black transition-all duration-300 rounded-xl cursor-pointer filter lg:grayscale lg:hover:grayscale-0 shadow-2xl shadow-gray-800 m-5"
        src="https://res.cloudinary.com/dafqvvk91/image/upload/v1685737442/igts_group_photo_no6dzo.jpg"
        alt="image description"
      />
      <p className="  prose lg:text-xl md:text-3xl sm:text-3xl sm:mx-3 md:mx-3 text-center pb-8 pt-8  text-slate-400">
        Explore our curated collection of articles, case studies, and research papers that delve into various aspects of strategic decision-making. Engage in thought-provoking discussions on our online forums, where you can exchange ideas and perspectives with fellow enthusiasts. Whether you are a student, researcher, or simply curious about game theory, IGTS provides a platform to expand your knowledge and connect with others who share your passion
      </p>
    </div>
  );
};

export default AboutUs;
