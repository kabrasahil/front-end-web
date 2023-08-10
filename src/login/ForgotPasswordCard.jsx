import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Notification from "../notifications/Notification";
import { SERVER_URL } from "../config";
import ForgotPasswordForm from "./ForgotPasswordForm";
const ForgotPasswordCard = (id,token) => {
  const [hasAccount, setHasAccount] = useState(true);

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
        className="lg:w-[650px] sm:w-[800px] md:w-[800px] bg-[#101010] rounded-lg lg:p-30 sm:p-10 md:p-10  flex flex-col justify-center lg:gap-y-2 sm:gap-y-10 md:gap-y-10"
        style={{
          boxShadow: " 0 0px 40px -1px rgba(0, 0, 0, 0.6)",
        }}
      >
        {/* logo */}

        <div className="flex flex-col gap-y-3 mb-4">
          <h1 className=" mr-auto ml-auto lg:text-7xl sm:text-9xl md:text-9xl sm:px-16  text-center font-extrabold  tracking-tight ">
            <span
              className="text-gray-300 "
              style={{ filter: "drop-shadow(0px 0px 1px #fff)" }}
            >
              Welcome
            </span>
          </h1>

        </div>
          <ForgotPasswordForm
            showNotification={showNotification}
            setShowNotification={setShowNotification}
            id={id}
            token={token}
          />
       
      </div>
    </motion.div>
  );
};

export default ForgotPasswordCard;
