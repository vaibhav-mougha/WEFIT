import React from 'react'
import Excercises from '../Components/Excercise/Excercises'
import MuscleGroup from '../Components/Excercise/MuscleGroup'
import Navbar from '../Components/Navbar'

const Excercise = () => {
  return (
    <div>
        <Navbar/>
        <MuscleGroup/>
        <Excercises/>
    </div>
  )
}

export default Excercise