import "./App.css";
import Editor from "./Editor/Editor";
// import Discussions from './article/comment-section/discussions/Discussions';
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";
import Home from "./home/Home";
import Announcement from "./marquee/Announcement";
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

function App() {
  return (
    <Router>
      <div className="cont">
        <section className="snap-align-top">
          <hr />
          <Navbar />
        </section>
        <Announcement />
        <Routes>
          <Route exact path="/articles" element={<ArticlesHome />} />

          

          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
        <section className="snap-align-top">
          <hr />
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
