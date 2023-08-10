import React from "react";

function BlogHeading() {
  return (
    <div className="bg-[#101010] lg:py-0 sm:py-20 md:py-20">
      {/* make a small heading showing blogs and with background colour slate-500 */}
      <div className="text-center">
        <h1 class="bg-gradient-to-r to-pink-500 from-blue-400 inline-block text-transparent bg-clip-text mt-20 text-5xl font-sans font-extrabold">
          BLOGS
        </h1>
      </div>{" "}
      {/* make a much larger heading showing "Releases,insights,and company announcements" and make it white in colour with text justified in center */}
      <h1 className="text-center text-gray-400 text-5xl font-semibold mt-5 pb-2">
        Exploring the Delta of{" "}
      </h1>
      <h1 className="text-center  text-gray-400 text-5xl font-semibold pb-10 ">
        Programming, Math, and Economics
      </h1>
    </div>
  );
}

export default BlogHeading;
