import React from "react";
import { Routes, Route } from "react-router-dom";
import Routines from "../Pages/routines/Routines";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/routines" element={<Routines />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
