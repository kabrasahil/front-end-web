import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../config";
import "./ArticleCard.css";

function Topics() {
  const [subtopics, setSubtopics] = useState([
    {
      id: 1,
      name: "Sample Subtopic 1",
    },
    {
      id: 1,
      name: "Sample Subtopic 1",
    },
    
    {
      id: 1,
      name: "Sample Subtopic 1",
    },
    
    
  
    
  ]);

  const fetchSubtopics = async () => {
    const response = await fetch(`${SERVER_URL}/api/subtopic/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        setSubtopics(data.subtopics.slice(0, 10));
      }
    }
  };

  useEffect(() => {
    fetchSubtopics();
  }, []);

  return (
    //  make background color rgb(17 17 17)
    <div className="flex-auto bg-stone-900 flex-wrap h-fit topics rounded-lg w-fit py-5 px-3">
      <h2 className="text-slate-200 text-xl font font-sans my-auto mx-auto px-3 py-2.5">
        Recommended Topics
      </h2>

      <div className="flex flex-wrap justify-between px-2 pb-2">
        <ul className="flex flex-wrap text-sm font-medium text-center text-white font-sans dark:text-gray-400 justify justify-normal">
          {subtopics.map((el, i) => {
            console.log("subtopic", el);
            const allSpacesRemoved = el.name.replaceAll(' ', '-');
            return (
              <li className="mr-2 py-2.5 w-max">
                <a
                  href={`/blogs/subtopic/${el._id}/${allSpacesRemoved}`}
                  className="relative text-lg lg:text-sm z-10 rounded-xl bg-stone-600 py-1.5 px-3 font-medium text-gray-200 hover:bg-gray-100 z-40 relative mx-2 hover:text-gray-700"
                >
                  {el ? el.name : ""}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Topics;
