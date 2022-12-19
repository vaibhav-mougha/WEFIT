import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const LinkLoginSignup = ({des, link, to}) => {
  return (
    <Box
        w={"37.5%"}
        my={"1.3rem"}
        fontSize={"1.1rem"}
        justify={"space-between"}
        align={"center"}
        style={{ fontWeight: "500" }}
      >
        
        <Text fontSize={{ base: "0.9rem", md: "1rem", lg: "1.2rem" }}>{des}</Text>
        <Text color={"#50B6FF"} textDecoration={"underline"} fontSize={{ base: "0.9rem", md: "1rem", lg: "1.2rem" }}>
          <Link to={to}>{link}</Link>
        </Text>
      </Box>
  )
}

export default LinkLoginSignup