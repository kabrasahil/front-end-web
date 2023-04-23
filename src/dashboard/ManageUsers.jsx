import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import { SERVER_URL } from "../config";

const ManageUsers = () => {
  const user = useContext(Context);
  const [searchResult, setSearchResult] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [role, setRole] = useState(searchResult ? searchResult.role : null);

  const handleRoleChange = async (event) => {
    const token = localStorage.getItem("jwt");
    const response = await fetch(`${SERVER_URL}/api/admin/updaterole`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: searchResult._id,
        new_role: event.target.value,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        setRole(event.target.value);
      }
    }
  };

  const handleSearch = async () => {
    const encodedQuery = encodeURIComponent(searchQuery); // encode the query parameter
    const token = localStorage.getItem("jwt");
    const response = await fetch(
      `${SERVER_URL}/api/admin/searchuser?search=${encodedQuery}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        setSearchResult(data.user);
        setRole(data.user.role);
      }
    }
  };

  return (
    <div className="h-full w-full m-10">
      <div className="lg:ml-24 lg:mt-14 lg:mb-12 sm:my-24 md:my-24 text-left">
        <p>
          <span className="text-gray-400 lg:text-xl text-xl md:text-2xl">
            {user
              ? user.name.first_name + " " + user.name.last_name + " /"
              : ""}
          </span>
          <span className="text-gray-200 2xl:text-3xl text-3xl md:text-5xl ml-4">
            Manage Users
          </span>
        </p>
      </div>
      <div className="items-center bg-stone-800 rounded-xl py-1 px-3 pr-0 flex lg:w-1/3 my-5 mx-5">
        <button
          className="bg-transparent cursor-pointer"
          onClick={handleSearch}
        >
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "#94a3b8" }}
          />
        </button>
        <input
          placeholder="Enter Email Id"
          className="text-slate-100 text rounded-xl flex-1 px-4 py-1 bg-stone-800 focus:outline-0 lg:w-1/3 focus:outline-none"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </div>

      <div className="text-gray-100 my-5 mx-5">
        {searchResult ? (
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
            {searchResult.pfp_url && (
              <img
                src={searchResult.pfp_url}
                alt="profile"
                className="w-24 h-24 rounded-full border-4 border-pink-500 mb-4"
              />
            )}
            <h2 className="text-2xl font-bold text-center text-white mb-2">
              {`${searchResult.name.first_name} ${searchResult.name.last_name}`}
            </h2>
            <div className="flex flex-col items-center w-full">
              <label htmlFor="email" className="text-lg text-pink-500 mb-1">
                Email:
              </label>
              <p id="email" className="text-lg text-center mb-4">
                {searchResult.email}
              </p>
            </div>
            {searchResult.phone && (
              <div className="flex flex-col items-center w-full">
                <label htmlFor="phone" className="text-lg text-pink-500 mb-1">
                  Phone:
                </label>
                <p id="phone" className="text-lg text-center mb-4">
                  {searchResult.phone}
                </p>
              </div>
            )}
            {searchResult.organization && (
              <div className="flex flex-col items-center w-full">
                <label
                  htmlFor="organization"
                  className="text-lg text-pink-500 mb-1"
                >
                  Organization:
                </label>
                <p id="organization" className="text-lg text-center mb-4">
                  {searchResult.organization}
                </p>
              </div>
            )}
            <div className="w-full">
              <label htmlFor="role" className="text-lg text-pink-500 mb-1">
                Role:
              </label>
              <div className="relative">
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={handleRoleChange}
                  className="w-full bg-gray-700 border border-pink-500 text-pink-500 py-2 px-3 rounded focus:outline-none focus:bg-gray-600 focus:border-pink-700 appearance-none"
                >
                  <option value="REGULAR">Regular</option>
                  <option value="ADMIN">Admin</option>
                  <option value="EDITOR">Editor</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-pink-500">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12L4 6h12l-6 6z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
