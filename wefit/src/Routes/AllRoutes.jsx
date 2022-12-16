import React from "react";
import { Routes, Route } from "react-router-dom";
import ExcerciseDetails from "../Pages/ExerciseDetails";
import Excercise from "../Pages/Excercise";
import ExcerciseFilter from "../Pages/ExcerciseFilter";
import Home from "../Pages/Home";
import Routines from "../Pages/routines/Routines";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/exercise" element={<Excercise />} />
        <Route path="/exercise/filter" element={<ExcerciseFilter />} />
        <Route path="/exercise/filter/:id" element={<ExcerciseDetails />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
