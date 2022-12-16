import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ExcerciseDisplay = ({ id, name, equipment, type, url, image, muscle_group }) => {
  const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
}
  return (
    <Box
       mt="4px" m="auto" w="70%"
    >
      <Flex direction={{sm:"column", md:"row"}} gap="20px">
        <Box ml="12px" w="25%" >
          <Image
            w="100%"
            src={image[0]}
            alt={name}
          />
        </Box>
        <Box  ml="12px" w="25%" >
          <Image
            w="100%"
            src={image[1]}
            alt={name}
          />
        </Box>
        <Box  w="40%" p="10px 20px" textAlign="start">
          <Link to={`/exercise/filter/${url}-${id}`}>
            <Text
              color="#0E709A"
              mb="5px"
              mt="0px"
              fontSize="19px"
            >
              {name}
            </Text>
          </Link>
          <Text fontSize="14px">Main Muscle Group : {capitalizeFirstLetter(muscle_group)} </Text>
          <Text fontSize="14px">Type: {capitalizeFirstLetter(type)} </Text>
          <Text fontSize="14px">Equipment : {capitalizeFirstLetter(equipment)} </Text>
        </Box>
        <Box w="20%" py="40px" textAlign="center">
          <Button colorScheme="messenger" >
            Details
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ExcerciseDisplay;