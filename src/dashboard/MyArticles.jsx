import React, { useState } from "react";
import moment from "moment/moment";

const data = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    datetime: "2020-03-16",
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    datetime: "2023-03-20",
  },
];

export default function Dashboard_MyArticles() {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "555-1234",
    email: "johndoe@example.com",
    organizationName: "Acme Corporation",
  });

  return (
    <div className="h-full w-full">
      <div className="lg:ml-24 lg:!mt-14 lg:!mb-12 sm:my-24 md:my-24 sm:text-center md:text-center lg:text-left">
        <p>
          <span className="text-gray-400 lg:text-xl sm:text-5xl md:text-5xl">
            {user.firstName + " " + user.lastName + " /"}
          </span>
          <span className="text-gray-200 lg:text-3xl sm:text-7xl md:text-7xl ml-4">
            My Blogs
          </span>
        </p>
      </div>
      <button className="text-slate-100 my-8 py-3 px-7 rounded-2xl bg-gradient-to-r from-blue-400 to-pink-400">
        Create New Article
      </button>

      <div>
        <div className="flex justify-between ml-3">
          <button className="text-slate-100">
            Sort by latest{" "}
            <i class="fa-solid fa-sort ml-2" style={{ color: "#f8fafc" }} />
          </button>
          <div className="items-center bg-stone-800 rounded-xl py-1 px-3 pr-0 flex">
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#94a3b8" }}
            />
            <input
              placeholder="Search"
              className="text-slate-100 text rounded-xl flex-1 px-4 py-1 bg-stone-800 focus:outline-0"
            />
          </div>
        </div>

        <div className="text-slate-100 my-5">
          {data.map((d) => {
            return (
              <div className="px-10 items-center my-5 bg-stone-800 rounded-2xl h-12 flex justify-between hover:bg-stone-700">
                <button>
                  <span className="mr-5">{d.id}.</span>
                  {d.title}
                </button>
                <p>
                  {moment.utc(d.datetime).local().startOf("seconds").fromNow()}
                </p>
                <div className="flex flex-row gap-5 text-slate-400 ">
                  <i className="fa-solid fa-thumbs-up hover:text-stone-300" />
                  <i className="fa-solid fa-arrow-up-right-dots hover:text-stone-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
