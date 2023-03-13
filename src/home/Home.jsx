import React from "react";
import Ftile from "./components/Ftile";
import Stile from "./components/Stile";
import Ttile from "./components/Ttile";
import FFtile from "./components/FFtile";

const Home = () => {
  return (
    <div className="App ">
      <section className="snap-align-top">
        <Ftile />{" "}
      </section>
      <section className="snap-align-top">
        <hr />
        <Stile />
      </section>
      <section className="snap-align-top">
        <hr />
        <Ttile />{" "}
      </section>
      <section className="snap-align-top">
        <hr />
        <FFtile />{" "}
      </section>
    </div>
  );
};

export default Home;
