import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import Notification from "../notifications/Notification";
import { SERVER_URL } from "../config";
import EventCreationForm1 from "./EventCreationForm1";
import EventCreationForm3 from "./EventCreationForm3";
import EventCreationForm2 from "./EventCreationForm2";
import { Context } from "../context/Context";
import EventCreationForm4 from "./EventCreationForm4";

const EventCreationCard = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [signUpFailed, setSignUpFailed] = useState(true);
  const [form, setform] = useState(0);


  const [content, setContent] = useState("");
  const [contentEmpty, setContentEmpty] = useState(false);

  const [members, setMembers] = useState([]);
  const [membersEmpty, setMembersEmpty] = useState(false);

  const [photos, setPhotos] = useState([]);
  const [photosEmpty, setPhotosEmpty] = useState(false);

  const [title, setTitle] = useState("");
  const [titleEmpty, setTitleEmpty] = useState(false);

  const [date, setDate] = useState("");
  const [dateEmpty, setDateEmpty] = useState(false);


  const [time, setTime] = useState("");
  const [timeEmpty, setTimeEmpty] = useState(false);


  const [location, setLocation] = useState("");
  const [locationEmpty, setLocationEmpty] = useState(false);


  const [posterURL, setPosterURL] = useState("");
  const [posterURLEmpty, setPosterURLEmpty] = useState(false);

  const [datetime, setDatetime] = useState("");


  const event_id = useParams().id;

  // fetch event details
  const fetchEvent = async () => {
    const token = localStorage.getItem('jwt');
    const response = await fetch(`${SERVER_URL}/api/event/${event_id}/draft`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    if (response.ok) {
      const data = await response.json();
      console.log("data",data)
      if (data.success) {
       

        setTitle(data.event.event_title);
        setContent(data.event.details);
        setMembers(data.event.event_moderators);
        setLocation(data.event.location);
        setPosterURL(data.event.main_poster);
        setPhotos(data.event.event_photos);
        var newdate= new Date(data.event.date_time);
        console.log("time",newdate)
        const month=newdate.getUTCMonth()<10?"0"+newdate.getUTCMonth():newdate.getUTCMonth();
        const daten=newdate.getUTCDate()<10?"0"+newdate.getUTCDate():newdate.getUTCDate();
        setDate(newdate.getFullYear()+"-"+month+"-"+daten)
        const hours=newdate.getUTCHours()<10?"0"+newdate.getUTCHours():newdate.getUTCHours();
        const minutes=newdate.getUTCMinutes()<10?"0"+newdate.getUTCMinutes():newdate.getUTCMinutes();
        setTime(hours+":"+minutes);
      } else console.log(data)
    }

  }

  useEffect(() => {
    if (event_id)
      fetchEvent();
  }, []);



  const user = useContext(Context)

  const variants = {
    small: {
      transition: {
        duration: 1,
      },
    },
    big: {
      transition: {
        duration: 1,
      },
    },
  };
  const navigate = useNavigate();

  const setNext = () => {
    setform(form + 1)
    document.body.scrollTop = 0// For Safari
    document.documentElement.scrollTop = 0
  }

  const resetNext = () => {
    setform(form - 1)
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0
  }

  const saveContent = async (e) => {
    e.preventDefault();

    setContentEmpty(false);
    setTitleEmpty(false);
    setContentEmpty(false);
    setDateEmpty(false);
    setTimeEmpty(false);
    setLocationEmpty(false);
    setPosterURLEmpty(false);
    setMembersEmpty(false);
    setPhotosEmpty(false);

    // Validate input fields
    if (!title) setTitleEmpty(true);
    if (!content) setContentEmpty(true);
    if (!date) setDateEmpty(true);
    if (!time) setTimeEmpty(true);
    if (!location) setLocationEmpty(true);
    if (!posterURL) setPosterURLEmpty(true);
    if (!members) setMembersEmpty(true);
    if (!photos) setPhotosEmpty(true);
    if (
      contentEmpty ||
      timeEmpty ||
      dateEmpty ||
      locationEmpty ||
      membersEmpty ||
      posterURLEmpty ||
      titleEmpty ||
      photosEmpty
    ) {
      setSignUpFailed([true, "Please fill the required fields"]);

      return;
    }
    setSignUpFailed([false, ""]);

    const datentime = new Date(`${date}T${time}:00`);
    const isoDateString = datentime.toISOString();
    // console.log(datentime,isoDateString)
    // Send registration data to backend
    const registerData = {
      event_title: title,
      date_time: datentime,
      location: location,
      main_poster: posterURL,
      details: content,
      event_moderators: members,
      event_photos: photos,

    };
    console.log(registerData)
    try {

      const token = localStorage.getItem("jwt");

      // console.log(token);
      let response;
      if (!event_id) {
        response = await fetch(`${SERVER_URL}/api/event/createevent`, {
          method: "POST",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          user: { user },
          body: JSON.stringify(registerData),
        });
      } else {
        response = await fetch(`${SERVER_URL}/api/event/${event_id}/update`, {
          method: "PUT",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          user: { user },
          body: JSON.stringify(registerData),
        });
      }
      const data = await response.json();
      if (data.success) {
        // Registration successful
        setShowNotification([
          ...showNotification,
          {
            message: "Event Creation successful!",
            type: "success",
          },
        ]);
        window.location.href = '/dashboard/events'

      } else if (data.success === false) {
        // Registration failed
        setShowNotification([
          ...showNotification,
          {
            message: data.message,
            type: "error",
          },
        ]);
      } else {
        setSignUpFailed([
          true,
          "An error occurred while registering. Please try again later.",
        ]);
        setShowNotification([
          ...showNotification,
          {
            message:
              "An error occurred while registering. Please try again later.",
            type: "error",
          },
        ]);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setShowNotification([
        ...showNotification,
        {
          message:
            "An error occurred while registering. Please try again later.",
          type: "error",
        },
      ]);
    }
  };

  const [showNotification, setShowNotification] = useState([]);
  return (
    <motion.div animate={hasAccount ? "small" : "big"} variants={variants}>
      <div className="fixed lg:top-32 sm:top-48 md:top-48 left-10">
        {showNotification.map((el) => {
          return (
            <Notification
              title={el.type}
              message={el.message}
              color={el.type}
            />
          );
        })}
      </div>
      <div
        className="mt-64 lg:mt-0 mb-20 lg:w-[950px] sm:w-[600px] md:w-[800px] bg-stone-900 rounded-lg lg:p-30 sm:p-10 md:p-10  flex flex-col justify-center lg:gap-y-2 sm:gap-y-10 md:gap-y-10"
        style={{
          boxShadow: " 0 0px 40px -1px rgba(0, 0, 0, 0.6)",
        }}
      >

        <div className="flex flex-col gap-y-3">
          <h1 className=" mr-auto ml-auto lg:text-7xl sm:text-9xl md:text-9xl sm:px-16  text-center font-extrabold  tracking-tight ">
            <span
              className="text-gray-300 "
              style={{ filter: "drop-shadow(0px 0px 1px #fff)" }}
            >
              {form === 0 ? "Create Event" : ""}
              {form === 1 ? "Enter The Details About The Event" : ""}
              {form === 2 ? "Add Event Members" : ""}
            </span>
          </h1>
        </div>

        {form === 0 ? (<EventCreationForm1
          content={content}
          setContent={setContent}
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          location={location}
          setLocation={setLocation}
          posterURL={posterURL}
          setPosterURL={setPosterURL}
        />) : (<></>)}

        {form == 1 ? (<EventCreationForm2
          content={content}
          setContent={setContent}
        />) : (<></>)}

        {form == 2 ? (<EventCreationForm3
          members={members}
          setMembers={setMembers}
        />) : (<></>)
        }

        {form == 3 ? (<EventCreationForm4
          photos={photos}
          setPhotos={setPhotos}
        />) : (<></>)
        }


        <div className="flex flex-row">

          {form != 0 ? (<button
            type="button"
            className=" text-white bg-gradient-to-r font-medium rounded-lg lg:text-base lg:px-5 lg:py-2.5 sm:text-3xl md:text-3xl sm:py-5 md:py-5 text-center inline-flex items-center mr-2 gap-x-3 w-full justify-center mt-5   to-pink-500 from-blue-400 hover:to-pink-600 hover:from-blue-500"
            onClick={resetNext}
          >
            Back
          </button>) : (<></>)}
          {form != 3 ? (<button
            type="button"
            className=" text-white bg-gradient-to-r font-medium rounded-lg lg:text-base lg:px-5 lg:py-2.5 sm:text-3xl md:text-3xl sm:py-5 md:py-5 text-center inline-flex items-center mr-2 gap-x-3 w-full justify-center mt-5 to-pink-500 from-blue-400 hover:to-pink-600 hover:from-blue-500"
            onClick={setNext}
          >
            Next
          </button>) : (<></>)}
        </div>
        <div className="flex justify-center items-center">
          {form === 3 ? (<button
            type="button"
            className="block text-white bg-green-600 hover:bg-green-700 px-10 py-2 rounded-xl font-extrabold m-4 w-1/3 text-center justify-center"
            onClick={saveContent}
          >
            Save Event
          </button>) : (<></>)}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCreationCard;