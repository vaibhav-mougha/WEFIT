import {
  Box,
  Flex,
  FormControl,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <Flex
      w={"42.5%"}
      h={"190vh"}
      bg={"#EBF7FF"}
      flexDirection={"column"}
      borderRadius={"0.6rem"}
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      justify={"center"}
      align={"center"}
    >
      <Box w={"63%"} mb={"1.2rem"} align={"center"}>
        <Heading as="h1" fontSize={"2.5rem"}>
          CREATE ACCOUNT
        </Heading>
      </Box>

      <Box w={"26%"} fontSize={"1.1rem"} mb={"2.5rem"} align={"center"}>
        <Text>Continue with</Text>
      </Box>

      <Flex
        w={"41.5%"}
        h={"60px"}
        mb={"2.5rem"}
        justify={"space-between"}
        align={"center"}
      >
        <Box
          w={"25%"}
          borderRadius={"0.5rem"}
          h={"58px"}
          cursor={"pointer"}
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        >
          <Image
            src={"https://www.jefit.com/images/rg_google.svg"}
            alt={"Facebook_Logo"}
            w={"100%"}
            borderRadius={"0.5rem"}
          />
        </Box>
        <Box
          w={"25%"}
          borderRadius={"0.5rem"}
          h={"58px"}
          cursor={"pointer"}
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        >
          <Image
            src={"https://www.jefit.com/images/rg_fb.svg"}
            alt={"Facebook_Logo"}
            w={"100%"}
            borderRadius={"0.5rem"}
          />
        </Box>
        <Box
          w={"25%"}
          borderRadius={"0.5rem"}
          h={"58px"}
          cursor={"pointer"}
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        >
          <Image
            src={"https://www.jefit.com/images/rg_apple.svg"}
            alt={"Facebook_Logo"}
            w={"100%"}
            borderRadius={"0.5rem"}
          />
        </Box>
      </Flex>

      <Box border={"1px solid black"} w={"5%"} mb={"2.5rem"} align={"center"}>
        <Text>Or</Text>
      </Box>

      <FormControl
        border={"1px solid black"}
        w={"85%"}
        h={"93vh"}
      >
        
      </FormControl>

      <Flex
        border={"1px solid black"}
        w={"37.5%"}
        h={"36px"}
        my={"1.6rem"}
        fontSize={"1.1rem"}
        justify={"space-between"}
        align={"center"}
        style={{ fontWeight: "500" }}
      >
        <Text>Already a member?</Text>
        <Text color={"#50B6FF"} textDecoration={"underline"}>
          <Link to={"/signin"}>Sign in</Link>
        </Text>
      </Flex>

      <Box
        border={"1px solid black"}
        w={"70%"}
        h={"70px"}
        my={"1.6rem"}
        align={"center"}
        fontSize={"0.9rem"}
      >
        <Text>
          By signing up, you agree to the JEFIT Terms of Use and Privacy Policy.
          We respect and protect your information and privacy.
        </Text>
      </Box>
    </Flex>
  );
};

export default SignupForm;
