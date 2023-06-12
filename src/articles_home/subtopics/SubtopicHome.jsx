import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_URL } from "../../config";
import ArticleList from "../AtricleList";
import BlogHeading from "../BlogHeading";
import Topics from "../Topics";
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
          setSubtopic(subtopic._doc);
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
    <div className="flex flex-col min-h-screen mr-auto justify-center items-center pt-0 lg:pt-24 pb-48 translate-y-[-17vh] lg:translate-y-0">
      <div className="w-full bg-gray-900">
        <BlogHeading />
      </div>
      <div className="w-full bg-[#101010] text-gray-500 text-center font-bold italic sm:text-xl md:text-xl lg:text-lg">
        #{subtopic ? subtopic.name : ""}
      </div>

      <div className="flex  flex-row justify-center w-full">
        <div className="flex flex-1 pt-4 flex-grow ">
          <SubtopicArticleList />
          {/* <Topics /> */}
        </div>
        <div className="flex pt-4 flex-initial w-1/4 mt-20 pr-20 relative lg:block md:hidden sm:hidden">
          <div className="sticky top-40 h-fit">
            <Topics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubtopicHome;
