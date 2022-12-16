import React from "react";
import Navbar from "../../Components/Navbar";
import { Carousel, Filters, Heading } from "../../Components/Routines";
const Routines = () => {
  return (
    <>
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
    </>
  );
};

export default Routines;
