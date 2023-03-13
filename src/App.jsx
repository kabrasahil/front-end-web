import "./App.css";
// import Discussions from "./article/comment-section/discussions/Discussions";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";
import Home from "./home/Home";
import Announcement from "./marquee/Announcement";

import ShareButton from "./article/shareButton/ShareButtons";
import ArticleContent from "./article/articleContent/ArticleContent";
import ArticlesHome from "./articles_home/ArticlesHome";

function App() {
  return (
    <div className="cont">
      <section className="snap-align-top">
        <hr />
        <Navbar />
      </section>

      <ArticleContent />

      <Announcement />
      {/* <ShareButton url="https://twitter.com/" socialMedia="twitter" /> */}
      <Home />

      {/* <Discussions /> */}
      <section className="snap-align-top">
        <hr />
        <Footer />{" "}
      </section>
    </div>
  );
}

export default App;
