import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "./../home/assets/igts-white-logo.png";
import { useNavigate } from "react-router-dom";
import Notification from "../notifications/Notification";
import { SERVER_URL } from "../config";
const LoginForm = ({ showNotification, setShowNotification }) => {
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression for email validation

    return regex.test(email);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`${SERVER_URL}/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailL, password: passwordL }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      if (data.success) {
        localStorage.setItem("jwt", data.token);
        window.location.href = "/";
      } else {
        console.log("here");
        setShowNotification([
          ...showNotification,
          {
            type: "error",
            message: "Username or password is incorrect",
          },
        ]);
        setSignInFailed([true, "Username or password is incorrect"]);
      }
    } else {
      console.log("here");
      setShowNotification([
        ...showNotification,
        {
          type: "error",
          message: "Something went wrong",
        },
      ]);
      setSignInFailed([true, "Something went wrong. Please try again later."]);
    }
  };


  const [emailL, setEmailL] = useState("");
  const [passwordL, setPasswordL] = useState("");
  const navigate = useNavigate();
  const [signInFailed, setSignInFailed] = useState([false, ""]);


 

  useEffect(() => {

    // window.addEventListener("message", (event) => {
    //   const { token } = event.data;
    //   localStorage.setItem("jwt", token);
    //   window.location.href = "/";
    // });




  }, [])

  return (
    <form
      className="flex flex-col lg:gap-y-3 sm:gap-y-10 sm:gap-y-10"
      action="#"
    >
      <div>
        <div className="flex items-center w-full justify-center">
          <hr className="w-full border-1 border-gray-600" />
          <p className="text-gray-400 mx-2">or </p>
          <hr className="w-full border-1 border-gray-600" />
        </div>
      </div>

      <div className="relative">
        <input
          type="Email"
          className="bg-stone-800 lg:p-3 lg:p-3 sm:p-5 md:p-5 text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5"
          placeholder="Email"
          value={emailL}
          onChange={(e) => {
            setEmailL(e.target.value);
          }}
        />
      </div>
      <div className="relative">
        <input
          type="password"
          className="bg-stone-800 lg:p-3 lg:p-3 sm:p-5 md:p-5  text-gray-400  focus:outline focus:outline-gray-600 lg:text-base sm:text-3xl md:text-3xl rounded-lg focus:0 block w-full p-2.5"
          placeholder="Password"
          value={passwordL}
          onChange={(e) => setPasswordL(e.target.value)}
        />
      </div>

      <button
        type="button"
        className=" text-white bg-gradient-to-r font-medium rounded-lg lg:text-base lg:px-5 lg:py-2.5 sm:text-3xl md:text-3xl sm:py-5 md:py-5 text-center inline-flex items-center mr-2 gap-x-3 w-full justify-center mt-5 bg-gradient-to-r  to-pink-500 from-blue-400 hover:to-pink-600 hover:from-blue-500"
        onClick={handleLogin}
      >
        Sign In
      </button>
      <button
        type="button"
        className=" text-white font-medium rounded-lg lg:text-base lg:px-5 lg:py-2.5 sm:text-3xl md:text-3xl sm:py-5 md:py-5 text-center inline-flex items-center  gap-x-3 w-full hover:text-blue-200 hover:shadow-md"
      >
        <Link to="/password-reset">Forgot Password?</Link>
      </button>
      {signInFailed[0] ? (
        <span className=" sm:text-2xl md:text-2xl lg:text-base text-red-600">
          {" "}
          *Sign in failed: {signInFailed[1]}
        </span>
      ) : (
        <></>
      )}
    </form>
  );
};

export default LoginForm;
