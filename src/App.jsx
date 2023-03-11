import "./App.css";
import Discussions from "./article/comment-section/discussions/Discussions";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";
import Home from "./home/Home";
import Announcement from "./marquee/Announcement";

function App() {
  return (
    <div>
      <Navbar />
      <Announcement />

      <Home />

      <Discussions />
      <Footer />
    </div>
  );
}

export default App;
