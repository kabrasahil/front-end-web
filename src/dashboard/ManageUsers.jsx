import React, { useState } from "react";

const users = [
  {
    id: 1,
    firstName: "Vishal",
    lastName: "Jatia",
    phoneNumber: "515-1144",
    email: "vishalj@example.com",
    organizationName: "Acme Corporation",
    profilePic:
      "https://decider.com/wp-content/uploads/2017/03/the-godfather.jpg?quality=80&strip=all",
    role: "admin",
  },
];

const ManageUsers = () => {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "555-1234",
    email: "johndoe@example.com",
    organizationName: "Acme Corporation",
  });

  return (
    <div className="h-full w-full m-10">
      <div className="lg:ml-24 lg:mt-14 lg:mb-12 sm:my-24 md:my-24 text-left">
        <p>
          <span className="text-gray-400 lg:text-xl text-xl md:text-2xl">
            {user.firstName + " " + user.lastName + " /"}
          </span>
          <span className="text-gray-200 2xl:text-3xl text-3xl md:text-5xl ml-4">
            Manage Users
          </span>
        </p>
      </div>
      <div className="items-center bg-stone-800 rounded-xl py-1 px-3 pr-0 flex lg:w-1/3 my-5 mx-5">
        <i
          className="fa-solid fa-magnifying-glass"
          style={{ color: "#94a3b8" }}
        />
        <input
          placeholder="Enter Email Id"
          className="text-slate-100 text rounded-xl flex-1 px-4 py-1 bg-stone-800 focus:outline-0 lg:w-1/3 focus:outline-none"
        />
      </div>

      <div className="text-slate-100 my-5 mx-5 grid grid-cols-1 lg:grid-cols-3 gap-0">
        {users.map((d) => {
          return (
            <div
              key={d.id}
              className="lg:px-10 md:px-10 px-5 py-5 items-center my-2 lg:my-5 bg-stone-900 rounded-2xl w-full lg:w-[90%] text-left hover:bg-stone-800 flex gap-5 shadow-[0_0_60px_20px_rgb(0,0,0,0.32)]"
            >
              <a className="cursor-pointer" href="#">
                <img
                  className="rounded-full w-32 aspect-square object-cover"
                  src={d.profilePic}
                  alt="profile picture"
                />
              </a>
              <div className="flex flex-col gap-3">
                <a className="cursor-pointer" href="#">
                  <h1 className="text-2xl text-slate-100">
                    {d.firstName + " " + d.lastName}
                  </h1>
                </a>
                <p className="text-slate-300">{d.email}</p>
                <p className="text-blue-400">
                  Current Role: <span className="text-slate-100">{d.role}</span>
                </p>
                <div>
                  <button
                    id="dropdownRadioButton"
                    data-dropdown-toggle="dropdownDefaultRadio"
                    className="text-white bg-stone-700 hover:bg-stone-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-stone-600 dark:hover:bg-stone-700"
                    type="button"
                  >
                    Change Role{" "}
                    <svg
                      className="w-4 h-4 ml-2"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  <div
                    id="dropdownDefaultRadio"
                    className="z-10 hidden w-48 bg-white divide-y divide-stone-100 rounded-lg shadow dark:bg-stone-700 dark:divide-stone-600"
                  >
                    <ul
                      className="p-3 space-y-3 text-sm text-stone-700 dark:text-stone-200"
                      aria-labelledby="dropdownRadioButton"
                    >
                      <li>
                        <div className="flex items-center">
                          <input
                            id="default-radio-1"
                            type="radio"
                            value=""
                            name="default-radio"
                            className="w-4 h-4 text-stone-600 bg-stone-100 border-stone-300 focus:ring-stone-500 dark:focus:ring-stone-600 dark:ring-offset-stone-700 dark:focus:ring-offset-stone-700 focus:ring-2 dark:bg-stone-600 dark:border-stone-500"
                          />
                          <label
                            htmlFor="default-radio-1"
                            className="ml-2 text-sm font-medium text-stone-900 dark:text-stone-300"
                          >
                            User
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <input
                            checked
                            id="default-radio-2"
                            type="radio"
                            value=""
                            name="default-radio"
                            className="w-4 h-4 text-stone-600 bg-stone-100 border-stone-300 focus:ring-stone-500 dark:focus:ring-stone-600 dark:ring-offset-stone-700 dark:focus:ring-offset-stone-700 focus:ring-2 dark:bg-stone-600 dark:border-stone-500"
                          />
                          <label
                            htmlFor="default-radio-2"
                            className="ml-2 text-sm font-medium text-stone-900 dark:text-stone-300"
                          >
                            Admin
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <input
                            id="default-radio-3"
                            type="radio"
                            value=""
                            name="default-radio"
                            className="w-4 h-4 text-stone-600 bg-stone-100 border-stone-300 focus:ring-stone-500 dark:focus:ring-stone-600 dark:ring-offset-stone-700 dark:focus:ring-offset-stone-700 focus:ring-2 dark:bg-stone-600 dark:border-stone-500"
                          />
                          <label
                            htmlFor="default-radio-3"
                            className="ml-2 text-sm font-medium text-stone-900 dark:text-stone-300"
                          >
                            Moderator
                          </label>
                        </div>
                      </li>
                    </ul>
                    <div className="py-2">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm dark:text-red-600 text-center hover:bg-stone-100 dark:hover:bg-stone-600 dark:hover:text-white"
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageUsers;
