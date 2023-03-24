import React, { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import MyProfile from "./MyProfile";
import MyArticles from "./MyArticles";
import ManageUsers from "./ManageUsers";
import ManageArticles from "./ManageArticles";
import "./Dashboard.css";

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
    <div className="min-h-screen flex py-32 justify-center items-center h-full">
      <div className="flex gap-x-10">
        <div className="sm:hidden md:hidden lg:block ">
          {/* sidebar */}
          <SideBar />
        </div>
        <div className="card-shadow-black rounded-xl w-[900px] ">
          {toRender}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
