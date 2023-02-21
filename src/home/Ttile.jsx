import React, { useEffect, useState } from "react";
import HoneyComb from "./HoneyComb";
import "./Ttile.css";
const Ttile = () => {
  const [tab, setTab] = useState("core");

  return (
    <section
      className="mt-20 text-gray-600 body-font ftile m-5 p-2 shadow-xl rounded-xl"
      id="ttile-id"
    >
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {" "}
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl leading-none tracking-tight text-white md:text-5xl lg:text-6xl  text-center font-extrabold">
            Meet Our Team
          </h2>
          <p class="mb-4 mt-4 text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="w-full snap-align-top">
            <HoneyComb />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ttile;
