import React, { useState } from "react";
import {
  Box,
  Input,
  Stack,
  InputGroup,
  Text,
  Checkbox,
  Image,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addProfile } from "../../Redux/Profile/profile.actions";
import { useNavigate } from "react-router-dom";

const initState = {
  height: null,
  weight: null,
  male: false,
  female: false,
};

const Height = () => {
  const [userCreds, setUserCreds] = useState(initState);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const Name = useSelector((store) => store.login.user.userName);
  console.log("Name: ", Name);
  const toast = useToast();

  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;
    let val = type === "checkbox" ? checked : value;
    setUserCreds({ ...userCreds, [name]: val });
  };

  const handleSubmit = () => {
    let { height, weight, male, female } = userCreds;
    let gen = male ? "male" : female ? "female" : undefined;

    if (!height || !weight || !gen) {
      toast({
        title: "Fill all the Credentials",
        status: "error",
        duration: 900,
        isClosable: true,
        position: "top",
      });
    } else {
      setTimeout(() => {
        navigate("/userdata");
      }, 1200);

      dispatch(
        addProfile({
          height: userCreds.height,
          weight: userCreds.weight,
          gender: gen,
          name: Name,
        })
      );
      toast({
        title: "Account created",
        status: "success",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
      userCreds(initState);
    }
  };

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
                name="height"
                placeholder="Height"
                size="sm"
                maxW={20}
                mr="1rem"
                onChange={handleChange}
                value={userCreds.height}
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
                name="weight"
                placeholder="Weight"
                size="sm"
                maxW={20}
                mr="1rem"
                onChange={handleChange}
                value={userCreds.weight}
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
              <Checkbox
                colorScheme="blue"
                name="male"
                onChange={handleChange}
                value={userCreds.male}
              >
                Male
              </Checkbox>
            </Box>
            <Box>
              <Image src="https://www.jefit.com/images/female_setup1.jpg" />
              <Checkbox
                colorScheme="blue"
                name="female"
                onChange={handleChange}
                value={userCreds.female}
              >
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
          onClick={handleSubmit}
        >
          Save Settings
        </Button>
      </Box>
    </Box>
  );
};

export default Height;