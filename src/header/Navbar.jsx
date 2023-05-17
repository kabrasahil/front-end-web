import React, { useContext, useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { MenuButton } from "./MenuButton";
import logo from "./../home/assets/igts-white-logo.png";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Navbar = () => {
  const user = useContext(Context);

  console.log(user);

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
        className={`navbar-main navbar-font bg-stone-900 text-gray-400 conatainer w-100 fixed z-40 top-0 card-shadow-black`}
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
            {user ? (
              <a href="/dashboard" 
                class="relative inline-flex items-center justify-start inline-block px-5 py-3 sm:px-10 md:px-10 sm:py-6 md:py-6 overflow-hidden font-bold rounded-full group"
              >
                {/* <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-red opacity-[3%]"></span>
                <span class="absolute top-5 -left-16 w-96 h-80 transition-all duration-500 ease-in-out rotate-45 -translate-x-64 -translate-y-16 bg-gradient-to-r to-blue-100 to-blue-100 from-blue-800 opacity-100 group-hover:translate-x-0"></span>

                <span class="flex relative w-full text-left  transition-colors duration-200 ease-in-out group-hover:!text-gray-100">
                  <span className="text-gray-100 sm:text-3xl md:text-3xl lg:text-base flex items-end"> */}
                <img
                  src={user.pfp_url}
                  alt=""
                  srcset=""
                  className="h-10 w-10 rounded-full object-cover border-pink-300 border-2"
                />{" "}
                {/* <div className="ml-2">{user.name.last_name}</div> */}
                {/* </span>
                </span>
                <span class="absolute inset-0 border-2 border-blue-500 rounded-full"></span> */}
              </a>
            ) : (
              <Link
                to="/login"
                class="relative inline-flex items-center justify-start inline-block px-5 py-3 sm:px-10 md:px-10 sm:py-6 md:py-6 overflow-hidden font-bold rounded-full group"
              >
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-red opacity-[3%]"></span>
                <span class="absolute top-5 -left-16 w-96 h-80 transition-all duration-500 ease-in-out rotate-45 -translate-x-64 -translate-y-16 bg-gradient-to-r to-pink-300 to-pink-500 from-pink-700 opacity-100 group-hover:translate-x-0"></span>

                <span class="flex relative w-full text-left  transition-colors duration-200 ease-in-out group-hover:!text-gray-100">
                  <span className="text-gray-100 sm:text-3xl md:text-3xl lg:text-base">
                    Get Started
                  </span>
                </span>
                <span class="absolute inset-0 border-2 border-pink-500 rounded-full"></span>
              </Link>
            )}

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
