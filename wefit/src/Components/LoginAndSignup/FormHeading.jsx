import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const FormHeading = ({ title }) => {
  return (
    <Box w={"90%"} mb={"0.5rem"} align={"center"}>
      <Heading fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
      pt={{ base: "2rem", md: "3rem", lg: "4rem" }}>
        {title}
      </Heading>
    </Box>
  );
};

export default FormHeading;
