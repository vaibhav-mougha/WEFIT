import React from 'react'
import Navbar from "../Components/Home/Navbar"
import ManageTrack from "../Components/Home/ManageTrack"
import ConnectMemebers from "../Components/Home/ConnectMember/ConnectMembers"

const Home = () => {
  return (
    <div>
      <Navbar />
      <ManageTrack />
      <ConnectMemebers />
    </div>
  )
}

export default Home
