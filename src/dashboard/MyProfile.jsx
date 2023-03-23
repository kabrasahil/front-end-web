import React, { useState } from "react";
import { Link, Navigate, Route, Router } from "react-router-dom";

const EditProfile = () => {
  return <></>;
};

const ChangePassword = () => {
  return <></>;
};

const DeleteAccount = () => {
  return <></>;
};

const MyProfile = () => {
  const [links, setLinks] = useState([
    { title: "Edit Profile", link: "dashboard/profile/edit" },
    { title: "Password", link: "dashboard/profile/changepassword" },
    { title: "Delete", link: "dashboard/profile/delete" },
  ]);
  return (
    <div className="">
      <div>
        {links.map((el, i) => {
          <Link to={el.link} key={i} className="text-gray-100">
            {el.title}
          </Link>;
        })}
      </div>
      <div>
        <Router>
          <Route
            exact
            path="dashboard/profile/edit"
            element={<EditProfile />}
          />
          <Route
            exact
            path="dashboard/profile/changepassword"
            element={<ChangePassword />}
          />
          <Route
            exact
            path="dashboard/profile/delete"
            element={<DeleteAccount />}
          />
          <Route
            exact
            path="dashboard/profile/"
            element={<Navigate to={"dashboard/profile/edit"} />}
          />
        </Router>
      </div>
    </div>
  );
};

export default MyProfile;
