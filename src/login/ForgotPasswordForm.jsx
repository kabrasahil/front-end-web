import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "./../home/assets/igts-white-logo.png";
import { useNavigate } from "react-router-dom";
import Notification from "../notifications/Notification";
import { SERVER_URL } from "../config";
// import { redirect } from "next/dist/server/api-utils";
// import { apiUtils } from 'next/dist/server';

import { Navigate } from "react-router-dom";



const ForgotPasswordForm= ({
  id,
  token,
  showNotification,
  setShowNotification
}) => {
  const navigate = useNavigate();
  const [passwordR, setPasswordR] = useState("");
  const [invalidPass, setInvalidPass] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passDontMatch, setPassDontMatch] = useState(false);

  const [PassUpdateFailed, setPassUpdateFailed] = useState([false, ""]);

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression for email validation

    return regex.test(email);
  }

  const sendpassword = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (passwordR.length < 8) setInvalidPass(true);
    if (passwordR !== confirmPassword) setPassDontMatch(true);

    if (
      invalidPass ||
      passDontMatch
    ) {
      setPassUpdateFailed([true, "Please fill the required fields"]);
      return;
    }else{
      setPassUpdateFailed([false, ""]);

      const res = await fetch(`${SERVER_URL}/api/user/changepassword/${id.id}/${id.token}`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({password:passwordR})
      })

      const data = await res.json();

      if(data.status == 201){
        setPasswordR("");
        setConfirmPassword("");
        setShowNotification([
          ...showNotification,
          { type: "success", message: data.message },
        ]);

        setTimeout(()=>{
          navigate("/login")
        },2000)
      } else {
        setShowNotification([
          ...showNotification,
          {
            type: "error",
            message: data.message,
          },
        ]);  
      }
      
    }

    
  }
  return (
    <form
      className="flex flex-col lg:gap-y-3 sm:gap-y-10 md:gap-y-10 sm:gap-x-10 md:gap-x-10"
      action="#"
    >

<h1 className=" mr-auto ml-auto lg:text-3xl sm:text-9xl md:text-9xl sm:px-16  font-extrabold  tracking-tight ">
            <span
              className="text-gray-300 "
              style={{ filter: "drop-shadow(0px 0px 1px #fff)" }}
            >
              Enter New Password
            </span>
          </h1>

      <div className="relative flex lg:gap-x-3  sm:gap-x-10 md:gap-x-10">
        <input
          type={invalidPass ? "text" : "password"}
          className={`bg-stone-800  lg:p-3 sm:p-5 md:p-5 text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5 ${
            invalidPass || passDontMatch
              ? "outline outline-1 outline-red-600 text-red-500"
              : ""
          }`}
          placeholder="Password"
          value={invalidPass ? "*Enter 8 char long valid password" : passwordR}
          onChange={(e) => setPasswordR(e.target.value)}
          onClick={(e) => {
            setInvalidPass(false);
          }}
        />

        <input
          type={passDontMatch ? "text" : "password"}
          className={`bg-stone-800 text-gray-400  lg:p-3 sm:p-5 md:p-5  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5 ${
            invalidPass || passDontMatch
              ? "outline outline-1 outline-red-600 text-red-500"
              : ""
          }`}
          placeholder="Confirm Password"
          value={passDontMatch ? "*Passwords don't match" : confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onClick={(e) => setPassDontMatch(false)}
        />
      </div>
      <button
        type="button"
        className=" text-white bg-gradient-to-r   to-pink-500 from-blue-400 hover:to-pink-600 hover:from-blue-500 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg lg:text-base lg:px-5 lg:py-2.5 sm:text-3xl md:text-3xl sm:py-5 md:py-5 text-center inline-flex items-center mr-2 mb-2 gap-x-3 w-full justify-center mt-5"
        onClick={sendpassword}
      >
        Update Password
      </button>
      {PassUpdateFailed[0] ? (
        <span className="text-red-600 sm:text-2xl md:text-2xl lg:text-base">
          *Password Update Failed: {PassUpdateFailed[1]}
        </span>
      ) : (
        <></>
      )}
    </form>
  );
}

export default ForgotPasswordForm;
