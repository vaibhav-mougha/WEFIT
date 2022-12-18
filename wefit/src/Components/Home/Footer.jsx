import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg="#FBFBFB" justify="center" align="center">
      <Grid
        w="80%"
        ml={{ base:"40%",md: "22%", lg: "12%" }}
        //   border="1px solid black"
        pt="2.2rem"
        gap={7}
        justify="space-between"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        <Box
          textAlign="left"
        //   border="2px solid red"
          w={{ base: "80%", md: "70%", lg: "90%" }}
        >
          <Text
            fontWeight="medium"
            fontSize={{ base: "1.3rem", md: "1.3rem", lg: "1.2rem" }}
          >
            Products
          </Text>
          <Box color="gray" fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}>
            <Text mt="0.7rem">Elite Membership</Text>
            <Text>Coach</Text>
            <Text>Signup</Text>
            <Text>Login</Text>
          </Box>
        </Box>

        <Box
          textAlign="left"
        //   border="2px solid red"
          w={{ base: "80%", md: "70%", lg: "90%" }}
        >
          <Text
            fontWeight="medium"
            fontSize={{ base: "1.3rem", md: "1.3rem", lg: "1.2rem" }}
          >
            Resource
          </Text>
          <Box color="gray" fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}>
            <Text mt="0.7rem">Workout Plans</Text>
            <Text>Exercise Database</Text>
            <Text>Community</Text>
            <Text>Help Center</Text>
          </Box>
        </Box>

        <Box
          textAlign="left"
        //   border="2px solid red"
          w={{ base: "80%", md: "70%", lg: "90%" }}
        >
          <Text
            fontWeight="medium"
            fontSize={{ base: "1.3rem", md: "1.3rem", lg: "1.2rem" }}
          >
            Legal Press
          </Text>
          <Box color="gray" fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}>
            <Text mt="0.7rem">Privacy Policy</Text>
            <Text>Terms of Use</Text>
            <Text>IP / DMCA Notices</Text>
            <Text>Press & Media</Text>
          </Box>
        </Box>

        <Box
          textAlign="left"
        //   border="2px solid red"
          w={{ base: "80%", md: "70%", lg: "90%" }}
        >
          <Text
            fontWeight="medium"
            fontSize={{ base: "1.3rem", md: "1.3rem", lg: "1.2rem" }}
          >
            Follow US
          </Text>
          <Box
            color="gray"
            fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem" }}
          >
            <Text mt="0.7rem">Blog</Text>
            <Text>Facebook</Text>
            <Text>Twitter</Text>
            <Text>Instagram</Text>
          </Box>
        </Box>
      </Grid>

      <Box
        fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem" }}
        mt="4rem"
        pb="2rem"
      >
        <Text>Copyright © 2010 - 2022 Jefit, Inc.</Text>
        <Text>All Rights Reserved.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
