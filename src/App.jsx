import "./App.css";
import Editor from "./Editor/Editor";
// import Discussions from './article/comment-section/discussions/Discussions';
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";
import Home from "./home/Home";
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

function App() {
  return (
    <Router>
      <div className="bg-stone-900">
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
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <section className="">
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
