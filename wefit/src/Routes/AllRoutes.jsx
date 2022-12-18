import React from "react";
import { Routes, Route } from "react-router-dom";
import ExcerciseDetails from "../Pages/ExerciseDetails";
import Excercise from "../Pages/Excercise";
import ExcerciseFilter from "../Pages/ExcerciseFilter";
import Home from "../Pages/Home";
import Routines from "../Pages/routines/Routines";
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup";
import NewUser from "../Pages/NewUser";
import UserData from "../Pages/UserData";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/exercise" element={<Excercise />} />
        <Route path="/exercise/filter" element={<ExcerciseFilter />} />
        <Route path="/exercise/filter/:id" element={<ExcerciseDetails />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/userdata" element={<UserData />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
