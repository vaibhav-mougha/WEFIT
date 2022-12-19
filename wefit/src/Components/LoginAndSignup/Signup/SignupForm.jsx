import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";
import ContinueWith from "../ContinueWith";
import FormHeading from "../FormHeading";
import LinkLoginSignup from "./LinkLoginSignup";
import SignupMainFrom from "./SignupMainFrom";
import SocialMedia from "../SocialMedia";
import SiteLogo from "../SiteLogo";
import Recaptcha from "./Recaptcha/Recaptcha";

const SignupForm = () => {
  return (
    <Box
      bg={"#DBE8F4"}
      justify={"center"}
      align={"center"}
      pt="2rem"
      pb={{ base: "4rem", md: "6rem", lg: "8rem" }}
    >
      <SiteLogo />

      <Box
        w={{ base: "80%", md: "60%", lg: "40%" }}
        bg={"#EBF7FF"}
        borderRadius="1rem"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        pb={{ base: "3rem", md: "4rem", lg: "5rem" }}
      >
        <FormHeading title={"CREATE ACCOUNT"} />

        <ContinueWith text={"Continue with"} />

        <SocialMedia />

        <Box w={"10%"} mb={"2.5rem"} align={"center"} color={"#8A8377"}>
          <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.3rem" }}>
            Or
          </Text>
        </Box>

        <SignupMainFrom />

        <LinkLoginSignup
          des={"Already a member?"}
          link={"Sign in"}
          to={"/login"}
        />

        <Box w={"70%"} mt={"1rem"} align={"center"} fontSize={"0.9rem"}>
          <Text color={"#8A8377"}>
            By signing up, you agree to the JEFIT{" "}
            <Link href="/" color={"#50B6FF"}>
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link color={"#50B6FF"} href="/">
              Privacy Policy.
            </Link>
            We respect and protect your information and privacy.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupForm;
