import "./App.css";
import Ftile from "./home/Ftile";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Stile from "./home/Stile";
import Ttile from "./home/Ttile";
import Announcement from "./home/marquee/Announcement";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Announcement />
      <Ftile />
      <Stile />
      <Ttile />
      <Footer />
    </div>
  );
}

export default App;
