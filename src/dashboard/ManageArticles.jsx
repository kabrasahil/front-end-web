import React, { useContext, useEffect, useState } from "react";
import moment from "moment/moment";
import { Context } from "../context/Context";
import { SERVER_URL } from "../config";

const ManageArticles = () => {
  const [data, setData] = useState([]);
  const user = useContext(Context);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const encodedQuery = encodeURIComponent(searchQuery); // encode the query parameter
      const token = localStorage.getItem("jwt");
      const response = await fetch(
        `${SERVER_URL}/api/admin/searchblog?search=${encodedQuery}`,
        {
          method: "GET",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          console.log(data);
          setData(data.blogs);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("user", user);
  }, [user]);

  const fetchBlogs = async () => {
    const token = localStorage.getItem("jwt");
    const response = await fetch(`${SERVER_URL}/api/admin/getallblogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        setData(data.blogs);
      }
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async (blog_id) => {
    const token = localStorage.getItem("jwt");
    const response = await fetch(`${SERVER_URL}/api/blog/${blog_id}/delete`, {
      method: "DELETE",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data2 = await response.json();
      if (data2.success) {
        setData(data.filter((el) => el._id !== blog_id));
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
            Manage Blogs
          </span>
        </p>
      </div>

      <div>
        <div className="flex justify-end ml-3 md:gap-4">
          <div className="items-center bg-stone-800 rounded-xl py-1 px-3 pr-0 flex">
            <div>
              <button onClick={handleSearch} className="bg-transparent p-3">
                <i
                  className="fa-solid fa-magnifying-glass text-2xl lg:text-lg"
                  style={{ color: "#94a3b8" }}
                />
              </button>
              <input
                placeholder="Search"
                className="text-slate-100 text rounded-xl flex-1 px-4 py-1 bg-stone-800 focus:outline-none text-3xl lg:text-xl"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="text-slate-100 my-5 overflow-scroll">
          {data.map((d, i) => {
            return (
              <div
                key={i}
                className="lg:px-10 md:px-10 px-5 py-10 lg:py-7 items-center my-5 bg-stone-800 rounded-2xl h-12 flex justify-between gap-10 hover:bg-stone-700"
              >
                <button className="w-1/2 text-2xl lg:text-lg " onClick={(e)=>{
                  window.location.href = '/editor/'+d._id
                }}>
                  <span className="mr-2 lg:mr-5 md:mr-3 text-2xl lg:text-lg">{i + 1}.</span>
                  {d.title}
                </button>
                <p className="text-slate-400">
                  {moment.utc(d.createdAt).local().startOf("seconds").fromNow()}
                </p>
                <div className="flex flex-row gap-5 text-slate-200 w-1/4 justify-end ml-auto text-xl lg:text-lg">
                  <div
                    className={`relative font-bold ${
                      d.public ? "text-green-700" : "text-red-300"
                    }`}
                  >
                    {d.public ? "Public" : "Draft"}
                  </div>

                  <div className="relative">
                    <i
                      className="fa-solid fa-thumbs-up hover:text-stone-100 !cursor-pointer text-xl lg:text-lg"
                      onMouseEnter={(e) => {
                        document.getElementById("likes-" + i).style.display =
                          "block";
                      }}
                      onMouseLeave={(e) => {
                        document.getElementById("likes-" + i).style.display =
                          "none";
                      }}
                    />
                    <span
                      id={`likes-${i}`}
                      className="absolute top-6 -left-5 p-4 text-gray-300 bg-stone-500 text-xs font-bold rounded-lg hidden "
                    >
                      {d.likes} likes
                    </span>
                  </div>
                  <div className="relative">
                    <i
                      className="fa-solid fa-arrow-up-right-dots hover:text-stone-100  cursor-pointer"
                      onMouseEnter={(e) => {
                        document.getElementById("views-" + i).style.display =
                          "block";
                      }}
                      onMouseLeave={(e) => {
                        document.getElementById("views-" + i).style.display =
                          "none";
                      }}
                    />
                    <span
                      className="absolute top-6 -left-5 p-4 text-gray-300 bg-stone-600 text-xs font-bold rounded-lg hidden"
                      id={`views-${i}`}
                    >
                      {d.views} views
                    </span>
                  </div>
                  <div
                    className="relative cursor-pointer text-xl lg:text-lg"
                    onClick={(e) => {
                      deleteBlog(d._id);
                    }}
                  >
                    <i className="fa fa-trash"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManageArticles;
