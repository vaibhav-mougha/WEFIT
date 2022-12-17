import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ExcerciseDisplay = ({
  id,
  name,
  equipment,
  type,
  url,
  image,
  muscle_group,
}) => {
  const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };
  return (
    <Flex
      direction={{ base: "column", md: "row", lg: "row" }}
      mt="20px"
      m="auto"
      w={{ base: "90%", md: "90%", lg: "70%" }}
      gap="20px"
    >
      <Flex w={{ base: "100%", md: "50%", lg: "50%" }}>
        <Box ml="12px" w="50%">
          <Image w="100%" h="100%" src={image[0]} alt={name} />
        </Box>
        <Box ml="12px" w="50%">
          <Image w="100%" h="100%" src={image[1]} alt={name} />
        </Box>
      </Flex>
      <Flex w={{ base: "100%", md: "50%", lg: "50%" }}>
        <Box w="80%" p="10px 20px" textAlign="start">
          <Link to={`/exercise/filter/${url}-${id}`}>
            <Text
              color="#0E709A"
              mb="5px"
              mt="0px"
              fontSize={{ base: "16px", sm: "16px", md: "17px", lg: "19px" }}
            >
              {name}
            </Text>
          </Link>
          <Text fontSize={{ base: "11px", sm: "12px", md: "14px", lg: "14px" }}>
            Main Muscle Group : {capitalizeFirstLetter(muscle_group)}{" "}
          </Text>
          <Text fontSize={{ base: "11px", sm: "12px", md: "14px", lg: "14px" }}>
            Type: {capitalizeFirstLetter(type)}{" "}
          </Text>
          <Text fontSize={{ base: "11px", sm: "12px", md: "14px", lg: "14px" }}>
            Equipment : {capitalizeFirstLetter(equipment)}{" "}
          </Text>
        </Box>
        <Box py="40px" textAlign="center">
          <Link to={`/exercise/filter/${url}-${id}`}>
            <Button
              colorScheme="messenger"
              size={{ base: "sm", md: "md", lg: "md" }}
            >
              Details
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ExcerciseDisplay;
