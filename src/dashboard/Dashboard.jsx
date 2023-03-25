import React, { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import MyProfile from "./MyProfile";
import MyArticles from "./MyArticles";
import ManageUsers from "./ManageUsers";
import ManageArticles from "./ManageArticles";
import "./Dashboard.css";
import BottomBar from "./BottomBar";

const Dashboard = () => {
  const a = useLocation().pathname;

  let toRender = <MyProfile />;

  if (a === "/dashboard" || a == "/dashboard/") {
    toRender = <Navigate to="/dashboard/profile" />;
  }

  switch (a) {
    case "/dashboard/blogs":
      toRender = <MyArticles />;

      break;
    case "/dashboard/manageblogs":
      toRender = <ManageArticles />;

      break;
    case "/dashboard/manageusers":
      toRender = <ManageUsers />;
      break;
  }

  return (
    <div className=" flex  lg:justify-center lg:items-center lg:h-fit sm:h-max md:h-max sm:min-h-screen md:min-h-screen  py-40  sm:mx-auto md:mx-auto">
      <div className="flex gap-x-10 sm:w-full md:w-full lg:w-max h-[1200px]">
        <div className="sm:hidden md:hidden lg:block ">
          {/* sidebar */}
          <SideBar />
        </div>
        <div className=" sm:w-full md:w-full sm:h-full md:h-full sm:flex md:flex sm:justify-center md:justify-center lg:card-shadow-black rounded-xl lg:w-[900px] !h-full">
          {toRender}
        </div>
        <div className="sm:block md:block lg:hidden">
          <BottomBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
