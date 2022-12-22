import React from "react";
import { Routes, Route } from "react-router-dom";
import ExerciseDetails from "../Pages/ExerciseDetails";
import Excercise from "../Pages/Excercise";
import ExcerciseFilter from "../Pages/ExcerciseFilter";
import Home from "../Pages/Home";
import Routines from "../Pages/Routines";
import Login from "../Pages/Login";
import Blog from "../Pages/Blog";
import Coach from "../Pages/Coach";
import Community from "../Pages/Community";
import Elite from "../Pages/Elite";
import SingleBlogPage from "../Pages/SingleBlogPage";
import NewUser from "../Pages/NewUser";
import UserData from "../Pages/UserData";
import Admin from "../Pages/Admin";
import Signup from "../Pages/Signup";
import ScrollToTop from "../Components/Excercise/ScrollToTop";
import PrivateRoute from "../Pages/PrivateRoute";
import RoutinesDetails from "../Pages/RoutinesDetails";

const AllRoutes = () => {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/routines" element={<Routines />} />
          <Route path="/exercise" element={<Excercise />} />

          <Route path="/exercise/filter" element={<ExcerciseFilter />} />
          <Route path="/exercise/filter/:id" element={<ExerciseDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/community" element={<Community />} />
          <Route path="/elite" element={<Elite />} />
          <Route path="/blog/:user_id" element={<SingleBlogPage />}></Route>
          <Route
            path="/newuser"
            element={
              <PrivateRoute>
                <NewUser />
              </PrivateRoute>
            }
          />
          <Route
            path="/userdata"
            element={
              <PrivateRoute>
                <UserData />
              </PrivateRoute>
            }
          />

          <Route path="/routines/:id" element={<RoutinesDetails />}></Route>
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </ScrollToTop>
    </>
  );
};

export default AllRoutes;