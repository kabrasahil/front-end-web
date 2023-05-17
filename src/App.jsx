import "./App.css";
import React from "react";
import Editor from "./Editor/Editor";
// import Discussions from './article/comment-section/discussions/Discussions';
import Terms from "./privacy and terms/terms";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";
import Home from "./home/Home";
import PrivacyPolicy from "./privacy and terms/privacy-policy";
import Tiptap from "./Editor/Tiptap";
import ShareButton from "./article/shareButton/ShareButtons";
import ArticleContent from "./article/articleContent/ArticleContent";
import ArticlesHome from "./articles_home/ArticlesHome";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Article from "./article/Article";
import LoginPage from "./login/LoginPage";
import Dashboard from "./dashboard/Dashboard";
import AboutUs from "./about/AboutUs";
import AboutIgts from "./about/AboutIgts";
import NotFound from "./notFound/NotFound";

import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import LoadingScreen from "./loading_screen/LoadingScreen";
import ComingSoon from "./comingSoon/ComingSoon";
import { isPlainObject } from "@tiptap/react";
import { SERVER_URL } from "./config";
import Notification from "./notifications/Notification";
import SubtopicHome from "./articles_home/subtopics/SubtopicHome";
import { Context } from "./context/Context";
import Community from "./community/Community";
import Events from "./events/Events";

export const UserContext = React.createContext({});

function IgtsWebsite() {
  const [user, setUser] = useState();
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("jwt"); // retrieve JWT from localStorage
      const response = await fetch(`${SERVER_URL}/api/user`, {
        method: "GET",
        headers: {
          Authorization: token, // include JWT in the request header
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.success) {
        setUser(data._doc);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Router>
      <div className="bg-stone-900 h-full">
        <Context.Provider value={user}>
          <section className="">
            <Navbar />
          </section>
          {/* <Announcement /> */}

          <Routes>
            <Route exact path="/blogs" element={<ArticlesHome />} />
            <Route exact path="/blogs/:id" element={<Article />} />
            <Route
              exact
              path="/blogs/subtopic/:id"
              element={<SubtopicHome />}
            />

            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/igts" element={<AboutIgts />} />
            <Route exact path="/editor/:blog_id" element={<Editor />} />
            <Route exact path="/editor" element={<Editor />} />
            <Route exact path="/privacy" element={<PrivacyPolicy />} />
            <Route exact path="/terms" element={<Terms />} />
            <Route exact path="/community" element={<Community />} />

            <Route exact path="/games" element={<ComingSoon />} />
            <Route exact path="/events" element={<ComingSoon />} />
            <Route exact path="/merchandise" element={<ComingSoon />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <section className="">
            <Footer />
          </section>
        </Context.Provider>
      </div>
    </Router>
  );
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", (e) => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }); // Change 3000 to the number of milliseconds you want to show the loading screen
  }, []);

  return (
    <div className="bg-stone-900">
      {isLoading ? (
        <div>
          <LoadingScreen />
        </div>
      ) : (
        <IgtsWebsite />
      )}
    </div>
  );
};

export default App;
