import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import MyProfile from "./MyProfile";
import MyArticles from "./MyArticles";
import ManageUsers from "./ManageUsers";
import ManageArticles from "./ManageArticles";
import "./Dashboard.css";

const Dashboard = () => {
  const [links, setLinks] = useState([
    { title: "My Profile", link: "dashboard/profile/*", active: true },
    { title: "My Blogs", link: "dashboard/blogs", active: false },
    { title: "Manage Blogs", link: "dashboard/manageblogs", active: false },
    { title: "Manage Users", link: "dashboard/manageusers", active: false },
    { title: "Logout", link: "./logout", active: false },
  ]);

  const newlinks = links;
  newlinks.forEach((el, i) => {
    switch (el.link) {
      case "dashboard/profile/*":
        newlinks[i].component = <MyProfile />;
        break;
      case "dashboard/blogs":
        newlinks[i].component = <MyArticles />;

        break;
      case "dashboard/manageblogs":
        newlinks[i].component = <ManageArticles />;

        break;
      case "dashboard/manageusers":
        newlinks[i].component = <ManageUsers />;
        break;
    }
  });

  useEffect(() => {
    setLinks(newlinks);
  }, []);

  return (
    <div className="min-h-screen flex py-64 justify-center items-center">
      <div className="flex gap-x-10">
        <div className="sm:hidden md:hidden lg:block h-full">
          {/* sidebar */}
          <SideBar />
        </div>
        <div className="card-shadow-black rounded-xl">
          {/* router */}
          <Routes>
            {links.map((el, i) => {
              return <Route exact path={el.link} element={el.component} />;
            })}
            <Route exact path="/" element={<Navigate to={"./profile"} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
