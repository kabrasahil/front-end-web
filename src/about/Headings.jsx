import React from "react";

const Headings = ({ title, subTitle }) => {
  return (
    <div className="bg-stone-900 pt-20 sm:pb-8 md:pb-8 lg:pb-0">
      {/* make a small heading showing blogs and with background colour slate-500 */}
      <div className="text-center">
        <h1 class="bg-gradient-to-r to-pink-500 from-blue-400 inline-block text-transparent bg-clip-text mt-20 lg:text-5xl sm:text-8xl md:text-8xl sm:pb-8 md:pb-8 font-sans font-extrabold">
          {title}
        </h1>
      </div>{" "}
      {/* make a much larger heading showing "Releases,insights,and company announcements" and make it white in colour with text justified in center */}
      <h1 className="text-center text-gray-400 lg:text-2xl md:text-4xl sm:text-4xl font-semibold mt-5 pb-2">
        <i> {subTitle[0]}</i>
      </h1>
      <h1 className="text-center  text-gray-400 lg:text-2xl md:text-4xl sm:text-4xl font-semibold pb-10 ">
        {subTitle[1]}
      </h1>
    </div>
  );
};

export default Headings;
