import "./App.css";
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
      <Footer />
    </div>
  );
}

export default App;
