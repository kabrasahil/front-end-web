import "./App.css";
import Editor from "./Editor/Page";
// import Discussions from "./article/comment-section/discussions/Discussions";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";
import Home from "./home/Home";
import Announcement from "./marquee/Announcement";
import Tiptap from "./Editor/Tiptap";
import ShareButton from "./article/shareButton/ShareButtons";

function App() {
  return (
    // <div className="cont">
    // <section className="snap-align-top">
    //     <hr />
    //     <Navbar />{" "}
    //   </section>
      
    //   <Announcement />
    //   {/* <ShareButton url="https://twitter.com/" socialMedia="twitter" /> */}
    //   <Home />

    //   {/* <Discussions /> */}
    //   <section className="snap-align-top">
    //     <hr />
    //     <Footer />{" "}
    //   </section>
    // </div>
    <Editor />
  );
}

export default App;
