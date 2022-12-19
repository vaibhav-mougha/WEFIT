import { Box, Text } from "@chakra-ui/react";

import ContinueWith from "../ContinueWith";
import FormHeading from "../FormHeading";
import SocialMedia from "../SocialMedia";
import SiteLogo from "../SiteLogo";
import LinkLoginSignup from "../Signup/LinkLoginSignup";
import LoginMainFrom from "./LoginMainForm";

const LoginFrom = () => {
  return (
    <Box
      bg={"#DBE8F4"}
      justify={"center"}
      align={"center"}
      pt="2rem"
      pb={{ base: "4rem", md: "6rem", lg: "8rem" }}
      backgroundImage="url('https://wallpapercave.com/wp/wp11122753.jpg')"
      backgroundPosition={{ base: "center", md: "center", lg: "contain" }}
      backgroundRepeat="no-repeat"
    >
      <SiteLogo />

      <Box
        w={{ base: "80%", md: "60%", lg: "40%" }}
        bg={"#EBF7FF"}
        borderRadius="1rem"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        pb={{ base: "1.7rem", md: "2rem", lg: "3rem" }}
      >
        <FormHeading title={"LOG IN"} />

        <LoginMainFrom />

        <ContinueWith text={"Or Continue with"} />

        <SocialMedia />

        <Box w={"10%"} mb={"1.5rem"} align={"center"} color={"#8A8377"}>
          <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.3rem" }}>
            Or
          </Text>
        </Box>

        <LinkLoginSignup
          des={"New to JEFIT?"}
          link={"Create an account."}
          to={"/signup"}
        />
      </Box>
    </Box>
  );
};

export default LoginFrom;
