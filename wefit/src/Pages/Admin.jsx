import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import Filters from "../Components/Admin/AdminFilters/AdminFilters";

const Admin = () => {
  return (
    <Box bg="#EBF7FF">
      <Navbar />

      <Box color="black" align="center" justify="center">
        {/* Container */}

        <Box
          mt="2rem"
          mb="2rem"
          w="85%"
          //   border="2px solid black"
          bg="white"
          borderRadius="2rem"
          pt="3rem"
          pb="15rem"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        >
          <Heading
            fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}
            textDecoration="underline"
            color="#257CFF"
          >
            Admin Section
          </Heading>

          {/* FILTERS */}

          <Box border="1px solid gray" mt="2rem" width="80%" borderRadius="1rem" p="1rem">

            <Text fontSize="2rem">Wefit Workout plans</Text>

            <Text fontSize="1.5rem" color="gray">
              Filter results down to your specific needs and find a new plan
            </Text>

            <Filters />

          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Admin;
