import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_URL } from "../../config";
import BlogHeading from "../BlogHeading";
import SubtopicArticleList from "./SubtopicArticleList";
const SubtopicHome = () => {
  const [subtopic, setSubtopic] = useState({
    name: "random",
    subtopic_id: "23143",
  });

  const subtopic_id = useParams().id;

  const fetchSubtopic = async () => {
    try {
      const response = await fetch(
        `${SERVER_URL}/api/subtopic/${subtopic_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const subtopic = await response.json();
        if (subtopic.success === true) {
          setSubtopic(subtopic);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchSubtopic();
  }, []);

  return (
    <div className="flex flex-col ml-auto mr-auto justify-center items-center pt-24 pb-48">
      <div className="w-full bg-gray-900">
        <BlogHeading />
      </div>

      <div className="w-full bg-stone-900 text-gray-500 text-center font-bold italic sm:text-xl md:text-xl lg:text-lg">
        #{subtopic ? subtopic.name : ""}
      </div>

      <div className="flex px-4 pt-4">
        <SubtopicArticleList />
      </div>
    </div>
  );
};

export default SubtopicHome;
