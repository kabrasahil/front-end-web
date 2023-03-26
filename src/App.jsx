import "./App.css";
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

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import LoadingScreen from "./loading_screen/LoadingScreen";
import ComingSoon from "./comingSoon/ComingSoon";
import { isPlainObject } from "@tiptap/react";

function IgtsWebsite() {
  return (
    <Router>
      <div className="bg-stone-900 h-full">
        <section className="">
          <Navbar />
        </section>
        {/* <Announcement /> */}
        <Routes>
          <Route exact path="/blogs" element={<ArticlesHome />} />
          <Route exact path="/blogs/:id" element={<Article />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/igts" element={<AboutIgts />} />
          <Route exact path="/editor" element={<Editor />} />
          <Route exact path="/privacy" element={<PrivacyPolicy />} />
          <Route exact path="/terms" element={<Terms />} />

          <Route exact path="/games" element={<ComingSoon />} />
          <Route exact path="/events" element={<ComingSoon />} />
          <Route exact path="/merchandise" element={<ComingSoon />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <section className="">
          <Footer />
        </section>
      </div>
    </Router>
  );
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Change 3000 to the number of milliseconds you want to show the loading screen
  }, []);

  return (
    <div>
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
