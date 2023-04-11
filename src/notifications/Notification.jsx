import React, { useState } from "react";
import { useEffect } from "react";

function Notification({ title, message, color }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      hideNotification();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const hideNotification = () => {
    setVisible(false);
  };

  return (
    <div className="">
      {visible ? (
        <div
          id="notification"
          className={`lg:w-64 sm:w-max md:w-max lg:px-4 lg:py-2 sm:px-16 md:py-16 sm:py-8 md:py-8 text-white font-bold rounded-md m-2 ${
            color === "success"
              ? "bg-green-500"
              : color === "error"
              ? "bg-red-500"
              : "bg-yellow-400"
          }`}
        >
          <div className="lg:text-lg sm:text-5xl md:text-5xl">{title}</div>
          <div className="lg:text-sm sm:text-2xl md:text-2xl">{message}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Notification;
