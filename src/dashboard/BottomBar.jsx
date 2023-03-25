import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const [links, setLinks] = useState([
    { title: "My Profile", link: "/dashboard/profile", active: false },
    { title: "My Blogs", link: "/dashboard/blogs", active: false },
    { title: "Manage Blogs", link: "/dashboard/manageblogs", active: false },
    { title: "Manage Users", link: "/dashboard/manageusers", active: false },
    { title: "Logout", link: "/dashboard/logout", active: false },
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
    <div className="flex flex-row fixed  gap-y-10 items-center justify-center h-full px-8 py-20 card-shadow-black text-gray-400 rounded-tr-full rounded-2xl !rounded-b-2xl">
      <Link
        to="/dashboard/profile"
        className="h-56 w-56 -mt-32 hover:contrast-50"
      >
        <img
          class="w-full h-full p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
          src="https://media.istockphoto.com/id/877076656/vector/panda-icon-vector.jpg?s=612x612&w=0&k=20&c=x9bRZQ22kYi5uLjYNwvZjEzR-ClGed8ESc8Cj9_PAdU="
          alt="Bordered avatar"
        ></img>
      </Link>

      {links.map((el, i) => {
        return (
          <Link
            to={el.link}
            key={i}
            className={`card-shadow-black w-full  text-center px-24 py-5 rounded-xl ${
              el.active ? "text-gray-100 border-2 border-gray-300" : ""
            }`}
          >
            {el.title}
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
