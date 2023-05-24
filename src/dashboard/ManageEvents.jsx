import React, { useContext, useEffect, useState } from "react";
import moment from "moment/moment";
import { Context } from "../context/Context";
import { SERVER_URL } from "../config";
import ReactSwitch from "react-switch";

const ManageEvents = () => {
  const [data, setData] = useState([]);
  const user = useContext(Context);
  const [checkedMap, setCheckedMap] = useState({});


  useEffect(() => {
    console.log("user", user);
  }, [user]);


  useEffect(() => {
    const map = {}
    data.forEach((el) => {
      console.log(el);
      map[el._id] = {
        registration: el.registrations_open,
        active: el.active
      }
    })
    setCheckedMap(map);
  }, [data])

  const fetchEvents = async () => {
    const token = localStorage.getItem("jwt");
    const response = await fetch(`${SERVER_URL}/api/event/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        setData(data.events);
      }
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const deleteEvent = async (event_id) => {
    const token = localStorage.getItem("jwt");
    const response = await fetch(`${SERVER_URL}/api/event/${event_id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data2 = await response.json();
      if (data2.success) {
        setData((prevData) => prevData.filter((el) => el._id !== event_id));
      }
    }
  };

  const handleRegistrationChange = async (eventId, val) => {
    setCheckedMap((prevState) => ({
      ...prevState,
      [eventId]: {
        ...prevState[eventId],
        registration: val,
      },
    }));

    // send request to backend

    const token = localStorage.getItem("jwt");
    const response = await fetch(`${SERVER_URL}/api/event/${eventId}/${checkedMap[eventId].registration ? 'disableregistration' : 'enableregistration'}`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data2 = await response.json();
      if (!data2.success) {
        console.log(data2.message);
      }
    }

  };

  const handleEventChange = async (eventId, val) => {
    setCheckedMap((prevState) => ({
      ...prevState,
      [eventId]: {
        ...prevState[eventId],
        active: val,
      },
    }));

    // send request to backend

    const token = localStorage.getItem("jwt");
    const response = await fetch(`${SERVER_URL}/api/event/${eventId}/${checkedMap[eventId].active ? 'disableeventactive' : 'enableeventactive'}`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data2 = await response.json();
      if (!data2.success) {
        console.log(data2.message);
      }
    }



  };

  const handleViewParticipants = (eventId) => {
    // Handle the logic to view participants for the given blogId
    console.log("View participants for blogId:", eventId);
    window.open(`/${eventId}/viewparticipants`, '_blank');
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
        className="bg-gradient-to-r from-blue-400 to-pink-500 shadow-md shadow-gray-800 focus:shadow-sm focus:shadow-gray-700 hover:shadow-lg hover:shadow-gray-900 hover:to-pink-600 hover:from-blue-500  focus:to-pink-600 focus:from-blue-500  rounded-xl lg:px-5 px-5 lg:py-2 py-1 lg:mr-5 text-2xl lg:text-lg font-normal lg:font-bold block  lg:block text-white"
        onClick={(e) => {
          console.log("here");
          window.location.href = "/event-creation";
        }}
      >
        + Add Event
      </button>

      <div>

        <div className="text-slate-100 my-5 overflow-scroll">
          {data.map((d, i) => {
            const isChecked = checkedMap[d._id] || {
              registration: false,
              active: false,
            };

            console.log(isChecked);

            return (
              <div
                key={i}
                className="lg:px-10 lg:py-3 md:px-10 px-5 py-5 items-center my-5 bg-stone-800 rounded-2xl h-auto flex justify-between hover:bg-stone-700"
              >
                <button
                  className="w-1/4 text-2xl lg:text-lg"
                  onClick={(e) => {
                    window.location.href = "/event-creation/" + d._id;
                  }}
                >
                  <span className="mr-2 lg:mr-5 md:mr-3 text-xl lg:text-lg">{i + 1}.</span>
                  {d.event_title}
                </button>
                <p className="text-slate-400">
                  {moment
                    .utc(d.createdAt)
                    .local()
                    .startOf("seconds")
                    .fromNow()}
                </p>
                <div className="flex flex-row gap-5 text-slate-200 w-1/2 justify-end ml-auto">
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
                    {isChecked.active ? (
                      <span className="mr-2">Enable event</span>
                    ) : (
                      <span className="mr-2">Disable event</span>
                    )}
                    <ReactSwitch
                      checked={isChecked.active}
                      onChange={(val) => handleEventChange(d._id, val)}
                    />
                  </div>
                  <div className="flex flex-row gap-5 justify-center">
                    <div
                      className="relative cursor-pointer text-center"
                      onClick={(e) => {
                        deleteEvent(d._id);
                      }}
                    >
                      <i className="fa fa-trash text-2xl lg:text-lg"></i>
                    </div>
                    <div
                      className="relative cursor-pointer"
                      onClick={(e) => {
                        handleViewParticipants(d._id);
                      }}
                    >
                      <i class="fa fa-address-book text-2xl lg:text-lg" aria-hidden="true"></i>
                    </div>
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
