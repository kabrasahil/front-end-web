import React from "react";

function MinimalDialogBox({ handleSubmit, prompt }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center h-full w-full z-50">
      <div
        className="bg-stone-700 rounded-xl lg:py-4 sm:py-10 md:py-10 px-10 card-shadow-black"
        style={{ maxWidth: "660px" }}
      >
        <div className="text-gray-200 lg:text-xl sm:text-3xl md:text-3xl font-medium mb-8 ">
          {prompt}
        </div>
        <div className="flex justify-end lg:space-x-4 sm:space-x-12 md:space-x-12">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg lg:px-4 lg:py-2 sm:p-4 md:p-4 lg:text-base sm:text-3xl md:text-3xl"
            onClick={() => handleSubmit(false)}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg lg:px-4 lg:py-2 sm:p-4 md:p-4 lg:text-base sm:text-3xl md:text-3xl"
            onClick={() => handleSubmit(true)}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default MinimalDialogBox;
