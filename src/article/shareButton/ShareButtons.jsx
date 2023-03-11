import React from "react";

const ShareButtons = ({ articleUrl }) => {
  // generate the shareable message

  const sharingButtonsData = [
    {
      name: "facebook",
      url: "", // generated url
    },
    {
      name: "twitter",
      url: "", // genrerated url
    },
  ];
  
//   copy link button

  return (
    <div className="">
      {sharingButtonsData.map((el) => {
        return (
          <button
            className=""
            onClick={(e) => {
              window.open(el.url, "_blank");
            }}
          >
            {/* icons related to the current el */}
            {/* add url of the current el to the button */}
          </button>
        );
      })}
    </div>
  );
};

export default ShareButtons;
