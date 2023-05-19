import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "./../home/assets/igts-white-logo.png";
import { useNavigate } from "react-router-dom";
import Notification from "../notifications/Notification";
import { SERVER_URL } from "../config";
import EventCreationForm1 from "./EventCreationForm1";
import EventCreationForm3 from "./EventCreationForm3";
import EventCreationForm2 from "./EventCreationForm2";
const EventCreationCard = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [form,setform] = useState(0);
  const [content, setContent] = useState("");

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


  const setNext=()=>{
    setform(form+1)
    document.body.scrollTop = 0// For Safari
  document.documentElement.scrollTop = 0
  }

  const resetNext=()=>{
    setform(form-1)
    document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0
  }
  

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
        className="mb-20 lg:w-[950px] sm:w-[600px] md:w-[800px] bg-stone-900 rounded-lg lg:p-30 sm:p-10 md:p-10  flex flex-col justify-center lg:gap-y-2 sm:gap-y-10 md:gap-y-10"
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
              {form ===0 ?  "Create Event":""}
              {form ===1 ?  "Enter The Details About The Event":""}
              {form ===2 ?  "Add Event Members":""}
            </span>
          </h1>
        </div>
        
        {form===0 ? (<EventCreationForm1
          content={content}
          setContent={setContent}
          />):(<></>)}
          
        {form==1?(<EventCreationForm2
          content={content}
          setContent={setContent}
          />):(<></>)}
          
         {form==2? (<EventCreationForm3></EventCreationForm3>):(<></>)
         }


         <div className="flex flex-row">
      
      {form!=0?(<button
        type="button"
        className=" text-white bg-gradient-to-r font-medium rounded-lg lg:text-base lg:px-5 lg:py-2.5 sm:text-3xl md:text-3xl sm:py-5 md:py-5 text-center inline-flex items-center mr-2 gap-x-3 w-full justify-center mt-5 bg-gradient-to-r  to-pink-500 from-blue-400 hover:to-pink-600 hover:from-blue-500"
        onClick={resetNext}
      >
        Back
      </button>):(<></>)}
      {form != 2?(<button
        type="button"
        className=" text-white bg-gradient-to-r font-medium rounded-lg lg:text-base lg:px-5 lg:py-2.5 sm:text-3xl md:text-3xl sm:py-5 md:py-5 text-center inline-flex items-center mr-2 gap-x-3 w-full justify-center mt-5 bg-gradient-to-r  to-pink-500 from-blue-400 hover:to-pink-600 hover:from-blue-500"
        onClick={setNext}
      >
        Next
      </button>):(<></>)}
      </div>
      <div className="flex justify-center items-center">
      {form === 2?(<button
        type="button"
        className="block text-white bg-green-600 hover:bg-green-700 px-10 py-2 rounded-xl font-extrabold m-4 w-1/3 text-center justify-center"
        onClick={setNext}
      >
        Save Event
      </button>):(<></>)}
      </div>
      </div>
    </motion.div>
  );
};

export default EventCreationCard;
