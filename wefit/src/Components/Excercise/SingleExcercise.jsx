import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Database from "./Database";
import Carousel from "./Carousel";

const SingleExcercise = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = id.split("-").join("/");
    getData(url);
    console.log(url);
  }, [id]);

  const getData = async (url) => {
    let data = axios.get(`https://we-fit-database-api.vercel.app/${url}`);
    let res = await data;
    setData(res.data);
    console.log(res);
  };

  return (
    <Box w="100%" backgroundColor="rgb(248, 251, 254)">
      <Flex
        w={{ base: "90%", md: "85%" }}
        margin="auto"
        gap="20px"
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Box
          w={{ base: "90%", md: "90%", lg: "20%" }}
          order={{ base: "1", md: "1", lg: "0" }}
        >
          {/* details in the left will go here */}
          <Database />
        </Box>
        <Box w={{ base: "100%", md: "100%", lg: "75%" }}>
          <Flex flexDirection="column">
            <Flex textAlign="left" fontSize="14px">
              <Text fontWeight={500} fontSize="15px" color="#0ab2e6">
                {data.main_group} Exercise Database{" "}
                <span style={{ color: "rgb(136, 136, 136)" }}>
                  {"->"} {data.name}
                </span>{" "}
              </Text>
            </Flex>
            <Box textAlign="left" borderBottom="1px solid rgb(222, 226, 230)">
              <Text fontSize="24px" color="rgb(14, 112, 154)">
                {data.name}
              </Text>
            </Box>
            <Box display="none" border="1px solid black">
              <video width="100%" controls loop autoplay>
                <source src={data.video} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </Box>
            <Flex
              mt="10px"
              gap="10px"
              flexDirection={{ base: "column", md: "column", lg: "row" }}
            >
              <Flex
                flexDirection="column"
                w={{ base: "90%", md: "80%", lg: "45%" }}
                gap="10px"
                m="auto"
              >
                {data.image_urls &&
                  data.image_urls.map((el, i) => (
                    <Box key={data.id} border="5px solid rgb(0, 174, 239)">
                      <Text textAlign="center">{i + 1}</Text>
                      <Image padding="0px 20px" src={el} />
                      <Text fontSize="11px" textAlign="center">
                        Click to Enlarge
                      </Text>
                    </Box>
                  ))}
              </Flex>
              <Flex
                textAlign="left"
                flexDirection="column"
                w={{ base: "90%", md: "90%", lg: "50%" }}
                gap="10px"
              >
                <Box w="100%" borderBottom="1px solid rgb(222, 226, 230)">
                  <Text color="#777777" fontSize="25px" fontWeight="600">
                    Exercise Details
                  </Text>
                </Box>
                <Flex
                  textAlign="left"
                  flexDirection="column"
                  fontSize="14px"
                  gap="5px"
                  padding="10px"
                >
                  <Text color="rgb(85, 85, 85)" as="b">
                    Main Muscle Group :
                    <span style={{ color: "#555555", fontWeight: "400" }}>
                      {" "}
                      {data.main_group}
                    </span>
                  </Text>
                  <Text color="rgb(85, 85, 85)" as="b">
                    Detailed Muscle Group :
                    <span style={{ color: "#555555", fontWeight: "400" }}>
                      {" "}
                      {data.detailed_group}
                    </span>
                  </Text>
                  <Text color="rgb(85, 85, 85)" as="b">
                    Other Muscle Groups :
                    <span style={{ color: "#555555", fontWeight: "400" }}>
                      {" "}
                      {data.other_group}
                    </span>
                  </Text>
                  <Text color="rgb(85, 85, 85)" as="b">
                    Type :
                    <span style={{ color: "#555555", fontWeight: "400" }}>
                      {" "}
                      {data.type}
                    </span>
                  </Text>
                  <Text color="rgb(85, 85, 85)" as="b">
                    Mechanics :
                    <span style={{ color: "#555555", fontWeight: "400" }}>
                      {" "}
                      {data.Mechanics}
                    </span>
                  </Text>
                  <Text color="rgb(85, 85, 85)" as="b">
                    Equipment :
                    <span style={{ color: "#555555", fontWeight: "400" }}>
                      {" "}
                      {data.equipment}
                    </span>
                  </Text>
                  <Text color="rgb(85, 85, 85)" as="b">
                    Difficulty :
                    <span style={{ color: "#555555", fontWeight: "400" }}>
                      {" "}
                      {data.difficulty}
                    </span>
                  </Text>
                </Flex>
                <Button
                  colorScheme="blue"
                  variant="outline"
                  w="fit-content"
                  fontSize="14px"
                  _hover={{
                    color: "white",
                    backgroundColor: "rgb(33, 110, 199)",
                    boxShadow: "rgba(1, 136, 255, 0.719) 6px 2px 16px 0px",
                  }}
                >
                  Track My Progress
                </Button>
                <Button
                  colorScheme="blue"
                  variant="outline"
                  w="fit-content"
                  fontSize="14px"
                  _hover={{
                    color: "white",
                    backgroundColor: "rgb(33, 110, 199)",
                    boxShadow: "rgba(1, 136, 255, 0.719) 6px 2px 16px 0px",
                  }}
                >
                  + Add to Routine
                </Button>
                <Button
                  colorScheme="blue"
                  variant="outline"
                  w="fit-content"
                  fontSize="14px"
                  _hover={{
                    color: "white",
                    backgroundColor: "rgb(33, 110, 199)",
                    boxShadow: "rgba(1, 136, 255, 0.719) 6px 2px 16px 0px",
                  }}
                >
                  Record Logs
                </Button>
              </Flex>
            </Flex>
            <Flex
              mt="10px"
              gap="10px"
              flexDirection={{ base: "column", md: "column", lg: "row" }}
            >
              <Flex
                flexDirection="column"
                w={{ base: "70%", md: "70%", lg: "45%" }}
                gap="10px"
              >
                <Box
                  textAlign="left"
                  w="100%"
                  borderBottom="1px solid rgb(222, 226, 230)"
                >
                  <Text color="#777777" fontSize="22px" as="b">
                    Targeted Muscle Group
                  </Text>
                </Box>
                <Image w="70%" margin="auto" src={data.muscle_image} />
              </Flex>
              <Flex
                color="#777777"
                textAlign="left"
                fontSize="14px"
                flexDirection="column"
                w={{ base: "90%", md: "90%", lg: "45%" }}
                gap="10px"
              >
                <Box
                  textAlign="left"
                  w="100%"
                  borderBottom="1px solid rgb(222, 226, 230)"
                >
                  <Text color="#777777" fontSize="22px" as="b">
                    How To Perform Exercise
                  </Text>
                </Box>
                <Text>
                  The {data.name} is a basic {data.main_group} exercise that
                  helps increase the size of the muscles.
                </Text>
                <Text>Steps :</Text>
                <Text>
                  1. Start off standing up straight with your feet
                  shoulder-width apart, keeping your knees slightly bent and abs
                  drawn in tight.
                </Text>
                <Text>
                  2. Grab a barbell with a shoulder width underhand (palms up)
                  grip, lowering your arms down to your thighs fully and bending
                  slightly at your elbows as this will be your starting
                  position.
                </Text>
                <Text>
                  3. Slowly raise the bar towards your upper chest, squeezing
                  your muscles and isolating the biceps.
                </Text>
                <Text>
                  4. Hold this position for a count and then return back to the
                  starting position.
                </Text>
                <Text>
                  5. Repeat for as many reps and however long you desire.
                </Text>
              </Flex>
            </Flex>
            <Box w="100%">
              <Box
                textAlign="left"
                w="100%"
                borderBottom="1px solid rgb(222, 226, 230)"
              >
                <Text color="#777777" fontSize="22px" as="b">
                  More Exercises
                </Text>
              </Box>
              <Carousel />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleExcercise;
