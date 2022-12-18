import React from "react";
import {
  Box,
  Input,
  Stack,
  InputGroup,
  Text,
  Checkbox,
  Image,
  Button,
} from "@chakra-ui/react";

const Height = () => {
  return (
    <Box mt="0.7rem" ml="3rem">
      {/* Height Weight */}
      <Box display="flex">
        <Box>
          <Text fontWeight="bold" mb="0.5rem">
            Height
          </Text>
          <Stack spacing={4}>
            <InputGroup>
              <Input
                type="number"
                placeholder="Height"
                size="sm"
                maxW={20}
                mr="1rem"
              />
              <span>(cm)</span>
            </InputGroup>
          </Stack>
        </Box>

        <Box ml="7rem">
          <Text fontWeight="bold" mb="0.5rem">
            Current Weight
          </Text>
          <Stack spacing={4}>
            <InputGroup>
              <Input
                type="number"
                placeholder="Weight"
                size="sm"
                maxW={20}
                mr="1rem"
              />
              <span>(Kgs)</span>
            </InputGroup>
          </Stack>
        </Box>
      </Box>

      {/* Gender */}
      <Box mt="4rem">
        <Text fontWeight="bold" mb="0.5rem">
          Gender
        </Text>

        <Stack spacing={5} direction="row">
          <Box
            display="flex"
            // border="1px solid black"
            w="80%"
            ml="1.7rem"
          >
            <Box>
              <Image src="https://www.jefit.com/images/male_setup1.jpg" />
              <Checkbox colorScheme="blue" defaultChecked>
                Male
              </Checkbox>
            </Box>
            <Box>
              <Image src="https://www.jefit.com/images/female_setup1.jpg" />
              <Checkbox colorScheme="blue" defaultChecked>
                Female
              </Checkbox>
            </Box>
          </Box>
        </Stack>

        <Button
          ml="9rem"
          mt={{ base: "1.5rem", md: "3rem", lg: "2rem" }}
          fontSize={{ base: "0.7rem", md: "1rem", lg: "1em" }}
          w={{ base: "7rem", md: "10rem", lg: "8rem" }}
          h={{ base: "1.7rem", md: "2.2rem", lg: "1.5rem" }}
          borderRadius="2rem"
          _hover={{
            background: "white",
            color: "#39B7FF",
            border: "3px solid #39B7FF",
          }}
          bg="#39B7FF"
          color="white"
          py={{ base: "0rem", md: "0.1rem", lg: "1.2rem" }}
          px={{ base: "1.5rem", md: "2.2rem", lg: "2rem" }}
        >
          Save Settings
        </Button>
      </Box>
    </Box>
  );
};

export default Height;
