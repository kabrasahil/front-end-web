import "./App.css";
import Ftile from "./home/Ftile";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Stile from "./home/Stile";
import Ttile from "./home/Ttile";
import Announcement from "./home/marquee/Announcement";
import HomeArticle from "./home/HomeArticles";
import FFtile from "./home/FFtile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Announcement />
      <Ftile />
      <hr />
      <Stile />
      <hr />
      <Ttile />
      <hr />
      <FFtile />
      <Footer />
    </div>
  );
}

export default App;
