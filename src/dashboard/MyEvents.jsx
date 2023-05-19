import React, { useContext, useEffect, useState } from "react";
import moment from "moment/moment";
import { Context } from "../context/Context";
import { SERVER_URL } from "../config";
import ReactSwitch from "react-switch";

const ManageEvents = () => {
  const [data, setData] = useState([]);
  const user = useContext(Context);
  const [checkedMap, setCheckedMap] = useState({});

  const handleChange = (blogId, val) => {
    setCheckedMap((prevState) => ({
      ...prevState,
      [blogId]: val,
    }));
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const encodedQuery = encodeURIComponent(searchQuery);
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
        setData((prevData) => prevData.filter((el) => el._id !== blog_id));
      }
    }
  };

  const handleRegistrationChange = (blogId, val) => {
    setCheckedMap((prevState) => ({
      ...prevState,
      [blogId]: {
        ...prevState[blogId],
        registration: val,
      },
    }));
  };

  const handleEventChange = (blogId, val) => {
    setCheckedMap((prevState) => ({
      ...prevState,
      [blogId]: {
        ...prevState[blogId],
        event: val,
      },
    }));
  };

  const handleViewParticipants = (blogId) => {
    // Handle the logic to view participants for the given blogId
    console.log("View participants for blogId:", blogId);
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
            Manage Events
          </span>
        </p>
      </div>

      <button
        className="bg-gradient-to-r from-blue-400 to-pink-500 shadow-md shadow-gray-800 focus:shadow-sm focus:shadow-gray-700 hover:shadow-lg hover:shadow-gray-900 hover:to-pink-600 hover:from-blue-500  focus:to-pink-600 focus:from-blue-500  rounded-full lg:px-5 px-5 lg:py-2 py-1 lg:mr-5 text-xs lg:text-lg font-normal lg:font-bold block  lg:block text-white"
        onClick={(e) => {
          console.log("here");
          window.location.href = "/editor";
        }}
      >
        Create New Event
      </button>

      <div>
        {/* <div className="flex justify-end ml-3 md:gap-4">
          <div className="items-center bg-stone-800 rounded-xl py-1 px-3 pr-0 flex">
            <div>
              <button onClick={handleSearch} className="bg-transparent">
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ color: "#94a3b8" }}
                />
              </button>
              <input
                placeholder="Search"
                className="text-slate-100 text rounded-xl flex-1 px-4 py-1 bg-stone-800 focus:outline-none"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
            </div>
          </div>
        </div> */}

        <div className="text-slate-100 my-5 overflow-scroll">
          {data.map((d, i) => {
            const isChecked = checkedMap[d._id] || {
              registration: false,
              event: false,
            };

            return (
              <div
                key={i}
                className="lg:px-10 lg:py-3 md:px-10 px-5 items-center my-5 bg-stone-800 rounded-2xl h-auto flex justify-between hover:bg-stone-700"
              >
                <button
                  className="w-1/2"
                  onClick={(e) => {
                    window.location.href = "/editor/" + d._id;
                  }}
                >
                  <span className="mr-2 lg:mr-5 md:mr-3">{i + 1}.</span>
                  {d.title}
                </button>
                <p className="text-slate-400">
                  {moment
                    .utc(d.createdAt)
                    .local()
                    .startOf("seconds")
                    .fromNow()}
                </p>
                <div className="flex flex-row gap-5 text-slate-200 w-1/4 justify-end ml-auto">
                  <div className="relative">
                    {isChecked.registration ? (
                      <span className="mr-2">Turn on registration</span>
                    ) : (
                      <span className="mr-2">Turn off registration</span>
                    )}
                    <ReactSwitch
                      checked={isChecked.registration}
                      onChange={(val) =>
                        handleRegistrationChange(d._id, val)
                      }
                    />
                  </div>
                  <div className="relative">
                    {isChecked.event ? (
                      <span className="mr-2">Enable event</span>
                    ) : (
                      <span className="mr-2">Disable event</span>
                    )}
                    <ReactSwitch
                      checked={isChecked.event}
                      onChange={(val) => handleEventChange(d._id, val)}
                    />
                  </div>
                  <div
                    className="relative cursor-pointer"
                    onClick={(e) => {
                      deleteBlog(d._id);
                    }}
                  >
                    <i className="fa fa-trash"></i>
                  </div>
                  <div
                    className="relative cursor-pointer"
                    onClick={(e) => {
                      handleViewParticipants(d._id);
                    }}
                  >
                    <i class="fa fa-address-book" aria-hidden="true"></i>
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

export default ManageEvents;
