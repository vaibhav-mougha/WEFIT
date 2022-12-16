import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const SocialMedia = () => {
  return (
    <Flex
      w={{ base: "50%", md: "40%", lg: "40%" }}
      mb={"1.5rem"}
      justify={"space-between"}
      align={"center"}
    >
      <Box
        _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        w={"25%"}
        borderRadius={"0.5rem"}
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
        _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        w={"25%"}
        borderRadius={"0.5rem"}
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
        _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        w={"25%"}
        borderRadius={"0.5rem"}
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
  );
};

export default SocialMedia;
