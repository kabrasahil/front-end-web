import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../config";
const PasswordResetForm= ({ showNotification, setShowNotification }) => {

  const [email, setEmail] = useState("");


  const sendLink = async(e)=>{
    e.preventDefault();

    const res = await fetch(`${SERVER_URL}/api/user/sendpasswordlink`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email})
    });

    const data = await res.json();

    if(data.status == 201){
      setEmail("");
      setShowNotification([
          ...showNotification,
          {
            type: "Notification",
            message: "Link is sent to email",
          },
        ]);
    }else{
      setShowNotification([
        ...showNotification,
        {
          type: "error",
          message: "Username or password is incorrect",
        },
      ]);
    }
  }




  

  const [passwordL, setPasswordL] = useState("");
  const navigate = useNavigate();
  const [signInFailed, setSignInFailed] = useState([false, ""]);

  return (
    <form
      className="flex flex-col lg:gap-y-3 sm:gap-y-10 sm:gap-y-10"
      action="#"
    >
            <h1 className=" mr-auto ml-auto lg:text-3xl sm:text-9xl md:text-9xl sm:px-16  font-extrabold  tracking-tight ">
            <span
              className="text-gray-300 "
              style={{ filter: "drop-shadow(0px 0px 1px #fff)" }}
            >
              Enter Your Email
            </span>
          </h1>

      <div className="relative">
        <input
          type="Email"
          className="bg-stone-800 lg:p-3 lg:p-3 sm:p-5 md:p-5 text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <button
        type="button"
        className=" text-white bg-gradient-to-r font-medium rounded-lg lg:text-base lg:px-5 lg:py-2.5 sm:text-3xl md:text-3xl sm:py-5 md:py-5 text-center inline-flex items-center mr-2 mb-2 gap-x-3 w-full justify-center mt-5 bg-gradient-to-r  to-pink-500 from-blue-400 hover:to-pink-600 hover:from-blue-500"
        onClick={sendLink}
      >
      Generate Link
      </button>
      
    </form>
  );
};

export default PasswordResetForm;
