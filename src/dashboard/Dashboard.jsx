import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import MyProfile from "./MyProfile";
import MyArticles from "./MyArticles";
import ManageUsers from "./ManageUsers";
import ManageArticles from "./ManageArticles";
import MyEvents from "./ManageEvents";
import "./Dashboard.css";
import BottomBar from "./BottomBar";

const Dashboard = () => {
  const a = useLocation().pathname;

  let toRender = <MyProfile />;

  const navigate = useNavigate();
  const logout = async () => {
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  if (a === "/dashboard" || a == "/dashboard/") {
    toRender = <Navigate to="/dashboard/profile" />;
  }

  console.log(a);

  switch (a) {
    case "/dashboard/blogs":
      toRender = <MyArticles />;

      break;
    case "/dashboard/events":
      toRender = <MyEvents />;

      break;
    case "/dashboard/manageblogs":
      toRender = <ManageArticles />;

      break;
    case "/dashboard/manageusers":
      toRender = <ManageUsers />;
      break;

    case "/dashboard/logout":
      logout();
      break;
  }

  return (
    <div className="flex  lg:justify-center lg:items-center lg:h-fit sm:h-max md:h-max sm:min-h-screen md:min-h-screen  py-40  sm:mx-auto md:mx-auto">
      <Helmet>
        <title>IGTS NSUT | Dashboard</title>
        <meta property="og:title" content="IGTS-NSUT | Dashboard" />
        <meta
          property="og:url"
          content="https://igtsnsut.org/dashboard/profile/edit"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dksdmvwch/image/upload/v1685981881/IGTS_logo_white_nflxiq.jpg"
        />

        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dksdmvwch/image/upload/v1685981881/IGTS_logo_white_nflxiq.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="igtsnsut.org" />
        <meta
          property="twitter:url"
          content="https://igtsnsut.org/dashboard/profile/edit"
        />
        <meta name="twitter:title" content="IGTS-NSUT | Dashboard" />
      </Helmet>
      <div className="flex lg:flex-row sm:flex-col md:flex-col gap-x-10 sm:w-full md:w-full lg:w-max h-[1200px]">
        <div className="sm:hidden md:hidden lg:block ">
          {/* sidebar */}
          <SideBar />
        </div>
        <div className=" sm:w-full md:w-full sm:h-full md:h-full sm:flex md:flex sm:justify-center md:justify-center lg:card-shadow-black rounded-xl lg:w-[900px] !h-full">
          {toRender}
        </div>
        <div className="sm:block md:block lg:hidden bg-stone-950 fixed bottom-0 opacity-100 z-50">
          <BottomBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
