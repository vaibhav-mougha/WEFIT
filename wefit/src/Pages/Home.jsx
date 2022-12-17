import React from 'react'
import Navbar from "../Components/Home/Navbar"
import ManageTrack from "../Components/Home/ManageTrack"
import ConnectMemebers from "../Components/Home/ConnectMember/ConnectMembers"
import WorkoutNeeds from "../Components/Home/Workout Needs/WorkoutNeeds"
import Footer from "../Components/Home/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <ManageTrack />
      <ConnectMemebers />
      <WorkoutNeeds />
      <Footer />
    </div>
  )
}

export default Home
