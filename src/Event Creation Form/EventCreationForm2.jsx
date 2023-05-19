

import React, { useEffect, useState } from "react";
import TipTap from "./Tiptap";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "./../home/assets/igts-white-logo.png";
import { useNavigate } from "react-router-dom";
import Notification from "../notifications/Notification";
import { SERVER_URL } from "../config";
const EventCreationForm2 = ({content,setContent}) => {




  return (
    <form
      className="flex flex-col lg:gap-y-3 sm:gap-y-10 sm:gap-y-10"
      action="#"
    >
      <div className=" flex flex-row  w-full">
      
        <TipTap
          setContent={setContent}
          content={content}
        />

      </div>

    </form>
  );
};

export default EventCreationForm2;
