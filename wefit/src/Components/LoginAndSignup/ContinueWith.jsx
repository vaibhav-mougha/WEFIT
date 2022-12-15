import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ContinueWith = ({text}) => {
  return (
    <Box
    w={"90%"} mb={"1.2rem"} align={"center"}
      color={"#8A8377"}
      py={"1.5rem"}
    >
      <Text
      fontSize={{ base: "0.8rem", md: "1rem", lg: "1.1rem" }}
    
      >{text}</Text>
    </Box>
  );
};

export default ContinueWith;
