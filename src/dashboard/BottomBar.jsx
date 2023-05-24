import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/Context";

const BottomBar = () => {
  const user = useContext(Context);

  const [links, setLinks] = useState([]);
  const newLinks = links;
  const currentPath = useLocation().pathname;
  newLinks.forEach((el, i) => {
    if (currentPath.includes(el.link)) el.active = true;
    else el.active = false;
  });

  useEffect(() => {
    setLinks(newLinks);
  }, []);

  useEffect(() => {
    if (user) {
      if (user.role === "REGULAR") {
        setLinks([
          {
            title: "My Profile",
            link: "/dashboard/profile",
            active: false,
            icon: (
              <i class="fa-solid fa-user fa-2xl scale-150 py-10" />
            ),
          },
          {
            title: "Logout",
            link: "/dashboard/logout",
            active: false,
            icon: (
              <i class="fa-solid fa-right-from-bracket fa-2xl scale-150 py-10 text-[#c70000]" />
            ),
          },
        ]);
      } else if (user.role === "EDITOR") {
        setLinks([
          {
            title: "My Profile",
            link: "/dashboard/profile",
            active: false,
            icon: (
              <i class="fa-solid fa-user fa-2xl scale-150 py-10" />
            ),
          },
          {
            title: "My Blogs",
            link: "/dashboard/blogs",
            active: false,
            icon: (
              <i class="fa-solid fa-scroll fa-2xl scale-150 py-10"></i>
            ),
          },
          {
            title: "Logout",
            link: "/dashboard/logout",
            active: false,
            icon: (
              <i class="fa-solid fa-right-from-bracket fa-2xl scale-150 py-10 text-[#c70000]" />
            ),
          },
        ]);
      } else if (user.role === "ADMIN") {
        setLinks([
          {
            title: "My Profile",
            link: "/dashboard/profile",
            active: false,
            icon: (
              <i class="fa-solid fa-user fa-2xl scale-150 py-10" />
            ),
          },
          {
            title: "My Blogs",
            link: "/dashboard/blogs",
            active: false,
            icon: (
              <i class="fa-solid fa-scroll fa-2xl scale-150 py-10"></i>
            ),
          },
          {
            title: "Manage Blogs",
            link: "/dashboard/manageblogs",
            active: false,
            icon: (
              <i class="fa-solid fa-pen-nib fa-2xl scale-150 py-10"></i>
            ),
          },
          {
            title: "Events",
            link: "/dashboard/events",
            active: false,
            icon: (
              <i class="fa-solid fa-calendar-days fa-2xl scale-150 py-10"></i>
            ),
          },
          {
            title: "Manage Users",
            link: "/dashboard/manageusers",
            active: false,
            icon: (
              <i class="fa-solid fa-people-roof fa-2xl scale-150 py-10" />
            ),
          },
          {
            title: "Logout",
            link: "/dashboard/logout",
            active: false,
            icon: (
              <i class="fa-solid fa-right-from-bracket fa-2xl scale-150 py-10 text-[#c70000]" />
            ),
          },
        ]);
      }
    }
  }, [user]);

  return (
    <div className="flex flex-row w-screen h-max flex-row items-start justify-center card-shadow-black text-gray-400 rounded-t-3xl bg-stone-900">
      {links.map((el, i) => {
        return (
          <Link to={el.link} key={i} className="">
            <div
              className={`flex flex-col items-center gap-y-6 text-center px-3 py-5 rounded-xl m-4  w-40 h-64 ${
                el.active ? "text-gray-100 outline outline-gray-300" : ""
              }`}
            >
              {el.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
