

import React, { useEffect, useState } from "react";
import TipTap from "./Tiptap";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "./../home/assets/igts-white-logo.png";
import { useNavigate } from "react-router-dom";
import Notification from "../notifications/Notification";
import { SERVER_URL } from "../config";
const EventCreationForm1 = ({content,setContent,title,setTitle,date,setDate,time,setTime,location,setLocation,posterURL,setPosterURL}) => {

  setDatetime(datetime.split('T')[0])

  return (
    <form
      className="flex flex-col lg:gap-y-3 sm:gap-y-10 sm:gap-y-10"
      action="#"
    >

      <div className="relative">
        <input
          type="Title"
          className="bg-stone-800 lg:p-3 lg:p-3 sm:p-5 md:p-5 text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5"
          placeholder="Title"
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />
      </div>
      <div className="relative">
        <input
          type="date"
          className="bg-stone-800 w-2/3 lg:p-3 lg:p-3 sm:p-5 md:p-5  text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5"
          placeholder="Date"
          value={date}
          onChange={(e)=>{setDate(e.target.value)}}
        />
      </div>
      <div className="relative">
        <input
          type="time"
          className="bg-stone-800 w-2/3 lg:p-3 lg:p-3 sm:p-5 md:p-5  text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5"
          placeholder="Time"
          value={time}
          onChange={(e)=>{setTime(e.target.value)}}
        />
      </div>
      <div className="relative">
        <input
          type="Text"
          className="bg-stone-800 w-2/3 lg:p-3 lg:p-3 sm:p-5 md:p-5  text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5"
          placeholder="Location"
          value={location}
          onChange={(e) => { setLocation(e.target.value) }}
        />
      </div>
      <div className="relative">
        <input
          type="text"
          className="bg-stone-800 w-2/3 lg:p-3 lg:p-3 sm:p-5 md:p-5  text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5"
          placeholder="Poster URL"
          value={posterURL}
          onChange={(e) => { setPosterURL(e.target.value) }}
        />
      </div>


    </form>
  );
};

export default EventCreationForm1;
