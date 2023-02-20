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
    <div className="App cont">
      <section className="snap-align-top"><Navbar /> </section>
      <Announcement />
      <section className="snap-align-top"><Ftile /> </section>
      <section className="snap-align-top"><hr />
      <Stile /></section>
      <section className="snap-align-top"><hr />
      <Ttile /> </section>
      <section className="snap-align-top"><hr />
      <FFtile /> </section>
      <section className="snap-align-top"><Footer /> </section>
      
      
      
      
      
    </div>
  );
}

export default App;
