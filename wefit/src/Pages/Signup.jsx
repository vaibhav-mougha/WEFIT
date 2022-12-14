import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SignupForm from "../Components/Signup/SignupForm";
import SiteLogo from "../Components/Signup/SiteLogo";

const Signup = () => {
  return (
    <Flex
    //   backgroundImage="url('https://wallpapercave.com/wp/wp11122753.jpg')"
    //   backgroundPosition="center"
    //   backgroundRepeat="no-repeat"
      bg={"#DBE8F4"}
      h={"216vh"}
      w={"100%"}
      justify={"center"}
      align={"center"}
      flexDirection={"column"}
    >
        <SiteLogo />
        <SignupForm />
    </Flex>
  );
};

export default Signup;
