import React from "react";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import "../Components/Routines/Routines.scss";
import { Carousel, Filters, Heading } from "../Components/Routines";
const Routines = () => {
  return (
    <div className="app__routines_page">
      <Navbar />
      <Heading
        heading={"WEFIT Workout Routine Database"}
        title="Featured Workout plans"
        text={"Try one of these professionally designed workout plans"}
      />
      <Carousel />
      <Heading
        heading={""}
        title="Wefit Workout plans"
        text={"Filter results down to your specific needs and find a new plan"}
      />
      <Filters />
      <Footer />
    </div>
  );
};

export default Routines;
