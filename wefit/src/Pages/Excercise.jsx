import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Excercises from '../Components/Excercise/Excercises'
import MuscleGroup from '../Components/Excercise/MuscleGroup'
import Footer from '../Components/Home/Footer'
import Navbar from '../Components/Home/Navbar'


const Excercise = () => {
  return (
    <div style={{backgroundColor: "rgb(248, 251, 254)"}}>
        <Navbar/>
        <Box textAlign="center">
          <Text fontSize={{base:"20px",md:"24px", lg:"28px"}} marginTop="30px" marginBottom="20px">WEFIT Exercise Database</Text>
          <Text fontSize={{base:"16px",md:"20px", lg:"24px"}}>Exercises By Muscle Group</Text>
          <Text fontSize={{base:"14px",md:"18px", lg:"22px"}} marginBottom="30px" color="rgb(88, 95, 105)">Find exercises that work out the muscle groups you're targeting.</Text>
        </Box>
        <MuscleGroup/>
        <Excercises/>
        <Footer />
    </div>
  )
}

export default Excercise