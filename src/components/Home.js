import React from "react";
import Slider from "./home_components/Slider";
import Benefits from "./home_components/Benefits";
import Statistics from "./home_components/Statistics";
import Testimonials from "./home_components/Testimonials";
import Callback from "./home_components/Callback";

function Home() {
  return (
    <div>
      <Slider />

      <Benefits />
      <Statistics />
      <Testimonials />
      <Callback />
    </div>
  );
}

export default Home;
