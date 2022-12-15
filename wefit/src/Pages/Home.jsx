import React from 'react'
import Navbar from "../Components/Home/Navbar"
import ManageTrack from "../Components/Home/ManageTrack"
import ConnectMembers from '../Components/Home/ConnectMember/ConnectMembers'

const Home = () => {
  return (
    <div>
      <Navbar />
      <ManageTrack />
      <ConnectMembers />
    </div>
  )
}

export default Home
