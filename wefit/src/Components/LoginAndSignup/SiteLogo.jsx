import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SiteLogo = () => {
  return (
    <Box w="12rem" pb="3rem">
      <Link to={"/"}>
        <Image src="./Assets/WEFIT.png" w="100%" alt="WeFitLogo" />
      </Link>
    </Box>
  );
};

export default SiteLogo;
