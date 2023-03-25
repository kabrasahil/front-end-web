import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const [links, setLinks] = useState([
    {
      title: "My Profile",
      link: "/dashboard/profile",
      active: false,
      icon: (
        <svg
          class="w-24 h-24 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 0c-5.522 0-10 4.478-10 10s4.478 10 10 10 10-4.478 10-10-4.478-10-10-10zM10 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
          <path d="M14.083 7.977c-0.07-0.544-0.383-1.057-0.853-1.427s-0.884-0.738-1.428-0.853c-0.568-0.074-1.127-0.074-1.694 0-0.544 0.116-1.057 0.319-1.428 0.853s-0.783 0.883-0.853 1.427c-0.074 0.568-0.074 1.127 0 1.694 0.07 0.544 0.383 1.057 0.853 1.427s0.884 0.738 1.428 0.853c0.568 0.074 1.127 0.074 1.694 0 0.544-0.116 1.057-0.319 1.428-0.853s0.783-0.883 0.853-1.427c0.074-0.568 0.074-1.127 0-1.694zM12 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z" />
        </svg>
      ),
    },
    {
      title: "My Blogs",
      link: "/dashboard/blogs",
      active: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-24 w-24 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v8m0-8l-4.5 4.5m4.5 0L16 8"
          />
        </svg>
      ),
    },
    {
      title: "Manage Blogs",
      link: "/dashboard/manageblogs",
      active: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-24 w-24 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.828 9.172a4 4 0 1 1 5.656 5.656l-1.414 1.414a2 2 0 0 1-2.828 0l-2.828-2.828a2 2 0 0 1 0-2.828l1.414-1.414zM4 15v4h4l11-11L15 4L4 15z"
          />
        </svg>
      ),
    },
    {
      title: "Manage Users",
      link: "/dashboard/manageusers",
      active: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-24 w-24 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 15v-3a6 6 0 0 1 12 0v3"
          />
        </svg>
      ),
    },
    {
      title: "Logout",
      link: "/dashboard/logout",
      active: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-24 w-24 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      ),
    },
  ]);
  const newLinks = links;
  const currentPath = useLocation().pathname;
  newLinks.forEach((el, i) => {
    if (currentPath.includes(el.link)) el.active = true;
    else el.active = false;
  });

  useEffect(() => {
    setLinks(newLinks);
  }, []);

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
              <p className="text-3xl">{el.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
