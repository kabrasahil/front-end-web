import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { MenuButton } from "./MenuButton";
import logo from "./../home/assets/igts-white-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Blogs", to: "/blogs", id: 1 },
    { name: "Events", to: "/events", id: 3 },
    { name: "Games", to: "/games", id: 5 },
    { name: "Community", to: "/community", id: 2 },
    { name: "Merchandise", to: "/merchandise", id: 6 },
    { name: "About-us", to: "/about", id: 4 },
  ];

  const [isOpen, setOpen] = useState(false);
  const [topNavShadow, setShadow] = useState("");
  const dropDownMenuVariants = {
    opened: {
      opacity: 1,
      y: 0,
      height: "max-content",
      transition: {
        duration: 0.1,
      },
      display: "block",
    },
    closed: {
      y: -1000,
      border: "0",
      height: 0,
      transition: {
        duration: 0.1,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const itemVariants = {
    opened: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.8,
        duration: 1,
        staggerChildren: 0.3,
        staggerDirection: 1,
      },
    },
    closed: {
      x: -200,
      opacity: 0,
      transition: {
        duration: 0.1,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className="">
      <nav
        className={`navbar-main navbar-font bg-stone-900 text-gray-400 conatainer w-100 fixed z-40 top-0 border-b-2 border-gray-500`}
        style={{ width: "100%", boxShadow: topNavShadow }}
      >
        <motion.aside
          className="lg:justify-center md:justify-between sm:justify-between flex content-center z-30"
          style={{ height: "100%" }}
        >
          <motion.div
            className=" flex gap-x-8 lg:ml-auto justify-center content-center"
            // initial="closed"
            // animate="open"
            // variants={sideVariants}
          >
            <Link to="/" key={0} className="nav-item w-fit">
              <div class=" w-fit">
                <img
                  src={logo}
                  alt=""
                  srcset=""
                  className="object-cover ml-4 w-fit sm:h-24 md:h-32 lg:h-16"
                  style={{
                    filter: "drop-shadow(0px 0px 3px #fff)",
                  }}
                />
              </div>
            </Link>
            {links.map(({ name, to, id }) => {
              return (
                <Link
                  to={to}
                  key={id}
                  className=" hover:text-gray-200 sm:hidden md:hidden lg:flex items-center"
                >
                  {name}
                </Link>
              );
            })}
          </motion.div>

          <motion.div
            // initial="closed"
            // animate="open"
            // variants={sideVariants}
            className="flex content-center h-10 my-auto ml-auto mr-10"
          >
            <Link
              to="#_"
              class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group sm:hidden lg:inline-flex"
            >
              <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-red opacity-[3%]"></span>
              <span class="absolute -top-2 left-0 w-72 h-72 transition-all duration-500 ease-in-out rotate-45 -translate-x-64 -translate-y-16 bg-gradient-to-r to-pink-300 to-pink-500 from-pink-700 opacity-100 group-hover:translate-x-0"></span>

              <span class="flex relative w-full text-left  transition-colors duration-200 ease-in-out group-hover:!text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-5 text-pink-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <span className="text-gray-100">Get Started</span>
              </span>
              <span class="absolute inset-0 border-2 border-pink-500 rounded-full"></span>
            </Link>
            <div
              className="flex flex-row content-center lg:hidden sm:block md:block cursor-pointer"
              onClick={() => {
                setOpen(!isOpen);
                if (topNavShadow == "") {
                  setShadow("box-shadow: 0 30px 80px 30px rgba(0, 0, 0, 0.6);");
                } else setShadow("");
              }}
            >
              <MenuButton isOpen={isOpen} />
            </div>
          </motion.div>
        </motion.aside>
        <motion.div
          animate={isOpen ? "opened" : "closed"}
          variants={dropDownMenuVariants}
          style={{ zIndex: "-10", position: "relative" }}
        >
          <div
            className="ml-auto pt-10 mr-auto bg-stone-900 flex flex-col gap-y-1 sm:flex md:flex sm:border-0 md:border-0 lg:hidden navbar-main border-b-4 border-x-2 border-gray-500"
            style={{
              width: "100%",
              borderRadius: "0px 0px 10px 10px",
            }}
          >
            {links.map(({ name, to, id }) => {
              return (
                <motion.div
                  className="mt-2 border-b-2 border-gray-700 mx-20 px-2 py-10 text-5xl"
                  variants={itemVariants}
                  animate={isOpen ? "opened" : "closed"}
                >
                  <Link
                    to={to}
                    key={id}
                    className="hover:text-gray-200"
                    onClick={(e) => {
                      setOpen(false);
                    }}
                  >
                    {name}
                    {/* <hr /> */}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
