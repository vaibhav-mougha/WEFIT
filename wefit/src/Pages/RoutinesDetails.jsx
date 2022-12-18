import React from "react";
import { TopComp } from "../Components/Routines";

import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import { Heading } from "../Components/Routines";
const RoutinesDetails = () => {
  return (
    <div className="app__routines-details">
      <Navbar />
      <Heading
        heading={"WEFIT Workout Routine Database"}
        title="Featured Workout plans"
        text={"Try one of these professionally designed workout plans"}
      />
      <TopComp />

      <Footer />
    </div>
  );
};

export default RoutinesDetails;
