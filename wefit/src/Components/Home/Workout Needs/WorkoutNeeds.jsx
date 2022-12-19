import React from "react";
import { Box, Button, Heading, Text, Image, Grid } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import PlansData from "./PlansData";

const WorkoutNeeds = () => {
  return (
    <>
      <Box bg="white" color="black" align="center" justify="center">
        {/* Container */}
        <Box
          w="85%"
          // border="1px solid black"
          pt="6rem"
          pb="5rem"
        >
          <Heading fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}>
            WEFIT COVERS ALL OF YOUR WORKOUT NEEDS
          </Heading>

          {/* WORKOUT TRACKING */}
          <Box
            // border="1px solid black"
            mt="4rem"
            display="flex"
          >
            <Box w="60%">
              <Image
                w="100%"
                src="https://cdn.jefit.com/wp/wp-content/uploads/2021/11/web_create-2.png.webp"
              />
            </Box>
            <Box w="40%" textAlign="left">
              <Text
                mt={{ base: "0.5rem", md: "1rem", lg: "4.5rem" }}
                fontSize={{ base: "0.9rem", md: "1rem", lg: "1.5rem" }}
                pt="0.7rem"
                color="#8BBBC5"
              >
                WORKOUT TRACKING
              </Text>
              <Heading
                mt="1.5rem"
                fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}
              >
                PERSONALIZE YOUR
              </Heading>
              <Heading fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}>
                WORKOUT PLANS
              </Heading>

              <Text
                mt={{ base: "0.5rem", md: "1rem", lg: "3.5rem" }}
                fontSize={{ base: "0.5rem", md: "1rem", lg: "1.5rem" }}
                pt="0.7rem"
              >
                <CheckCircleIcon
                  boxSize={{ base: "0.6rem", md: "1rem", lg: "1rem" }}
                  color="#257CFF"
                />{" "}
                1400+ exercises with instructions
              </Text>

              <Text fontSize={{ base: "0.5rem", md: "1rem", lg: "1.5rem" }}>
                <CheckCircleIcon
                  boxSize={{ base: "0.6rem", md: "1rem", lg: "1rem" }}
                  color="#257CFF"
                />{" "}
                Pro-designed workout plans
              </Text>

              <Text fontSize={{ base: "0.5rem", md: "1rem", lg: "1.5rem" }}>
                <CheckCircleIcon
                  boxSize={{ base: "0.6rem", md: "1rem", lg: "1rem" }}
                  color="#257CFF"
                />{" "}
                Support custom exercises
              </Text>

              <Text fontSize={{ base: "0.5rem", md: "1rem", lg: "1.5rem" }}>
                <CheckCircleIcon
                  boxSize={{ base: "0.6rem", md: "1rem", lg: "1rem" }}
                  color="#257CFF"
                />{" "}
                Flexible workout planning tool
              </Text>

              <Link to="/signup">
                <Button
                  mt={{ base: "1.5rem", md: "3rem", lg: "3rem" }}
                  fontSize={{ base: "0.7rem", md: "1rem", lg: "1.8rem" }}
                  w={{ base: "5rem", md: "8rem", lg: "15rem" }}
                  h={{ base: "1.7rem", md: "2.2rem", lg: "2.9rem" }}
                  borderRadius="2rem"
                  _hover={{
                    background: "white",
                    color: "#39B7FF",
                    border: "2px solid #39B7FF",
                  }}
                  bg="#39B7FF"
                  color="white"
                  py={{ base: "0rem", md: "0.1rem", lg: "1.8rem" }}
                  px={{ base: "1.5rem", md: "2.2rem", lg: "2rem" }}
                >
                  JOIN NOW
                </Button>
              </Link>
            </Box>
          </Box>
          {/* WORKOUT TRACKING */}

          {/* SMART WATCH INTEGRATION */}
          <Box
            // border="1px solid black"
            mt={{ base: "3rem", md: "12rem", lg: "12rem" }}
            display="flex"
          >
            <Box w="40%" textAlign="left">
              <Text
                mt={{ base: "0.5rem", md: "1rem", lg: "4.5rem" }}
                fontSize={{ base: "0.9rem", md: "1rem", lg: "1.5rem" }}
                pt="0.7rem"
                color="#8BBBC5"
              >
                SMART WATCH INTEGRATION
              </Text>
              <Heading
                mt="1.5rem"
                fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}
              >
                TRAIN & LOG
              </Heading>
              <Heading fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}>
                SEAMLESSLY IN GYM
              </Heading>
              <Heading fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}>
                AND HOME
              </Heading>

              <Text
                mt={{ base: "0.5rem", md: "1rem", lg: "3.5rem" }}
                fontSize={{ base: "0.5rem", md: "1rem", lg: "1.5rem" }}
                pt="0.7rem"
              >
                <CheckCircleIcon
                  boxSize={{ base: "0.6rem", md: "1rem", lg: "1rem" }}
                  color="#257CFF"
                />{" "}
                Log training with one-click
              </Text>

              <Text fontSize={{ base: "0.5rem", md: "1rem", lg: "1.5rem" }}>
                <CheckCircleIcon
                  boxSize={{ base: "0.6rem", md: "1rem", lg: "1rem" }}
                  color="#257CFF"
                />{" "}
                Control rest time easily
              </Text>

              <Text fontSize={{ base: "0.5rem", md: "1rem", lg: "1.5rem" }}>
                <CheckCircleIcon
                  boxSize={{ base: "0.6rem", md: "1rem", lg: "1rem" }}
                  color="#257CFF"
                />{" "}
                Available on mobile and watch
              </Text>

              <Text fontSize={{ base: "0.5rem", md: "1rem", lg: "1.5rem" }}>
                <CheckCircleIcon
                  boxSize={{ base: "0.6rem", md: "1rem", lg: "1rem" }}
                  color="#257CFF"
                />{" "}
                Audio and video instructions
              </Text>

              <Link to="/signup">
                <Button
                  mt={{ base: "1.5rem", md: "3rem", lg: "3rem" }}
                  fontSize={{ base: "0.7rem", md: "1rem", lg: "1.8rem" }}
                  w={{ base: "5rem", md: "8rem", lg: "15rem" }}
                  h={{ base: "1.7rem", md: "2.2rem", lg: "2.9rem" }}
                  borderRadius="2rem"
                  _hover={{
                    background: "white",
                    color: "#39B7FF",
                    border: "2px solid #39B7FF",
                  }}
                  bg="#39B7FF"
                  color="white"
                  py={{ base: "0rem", md: "0.1rem", lg: "1.8rem" }}
                  px={{ base: "1.5rem", md: "2.2rem", lg: "2rem" }}
                >
                  JOIN NOW
                </Button>
              </Link>
            </Box>

            <Box w="60%">
              <Image
                w="100%"
                src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web2.png"
              />
            </Box>
          </Box>
          {/* SMART WATCH INTEGRATION */}

          {/* PROGRESS TRACKING */}
          <Box
            // border="1px solid black"
            mt={{ base: "3rem", md: "12rem", lg: "12rem" }}
            display="flex"
          >
            <Box w="60%">
              <Image
                w="100%"
                src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web3.png"
              />
            </Box>
            <Box w="40%" textAlign="left">
              <Text
                mt={{ base: "0.5rem", md: "1rem", lg: "4.5rem" }}
                fontSize={{ base: "0.9rem", md: "1rem", lg: "1.5rem" }}
                pt="0.7rem"
                color="#8BBBC5"
              >
                PROGRESS TRACKING
              </Text>
              <Heading
                mt="1.5rem"
                fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}
              >
                VIEW PROGRESS &
              </Heading>
              <Heading fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}>
                REACH NEW LIMITS
              </Heading>

              <Text
                mt={{ base: "0.5rem", md: "1rem", lg: "3.5rem" }}
                fontSize={{ base: "0.5rem", md: "1rem", lg: "1.5rem" }}
                pt="0.7rem"
              >
                <CheckCircleIcon
                  boxSize={{ base: "0.6rem", md: "1rem", lg: "1rem" }}
                  color="#257CFF"
                />{" "}
                Track workout time and weightlifting
              </Text>

              <Text fontSize={{ base: "0.5rem", md: "1rem", lg: "1.5rem" }}>
                <CheckCircleIcon
                  boxSize={{ base: "0.6rem", md: "1rem", lg: "1rem" }}
                  color="#257CFF"
                />{" "}
                Set target muscles and body measurements
              </Text>

              <Text fontSize={{ base: "0.5rem", md: "1rem", lg: "1.5rem" }}>
                <CheckCircleIcon
                  boxSize={{ base: "0.6rem", md: "1rem", lg: "1rem" }}
                  color="#257CFF"
                />{" "}
                Understand muscle recovery rate
              </Text>

              <Text fontSize={{ base: "0.5rem", md: "1rem", lg: "1.5rem" }}>
                <CheckCircleIcon
                  boxSize={{ base: "0.6rem", md: "1rem", lg: "1rem" }}
                  color="#257CFF"
                />{" "}
                Set 1RM goals and refresh records
              </Text>

              <Link to="/signup">
                <Button
                  mt={{ base: "1.5rem", md: "3rem", lg: "3rem" }}
                  fontSize={{ base: "0.7rem", md: "1rem", lg: "1.8rem" }}
                  w={{ base: "5rem", md: "8rem", lg: "15rem" }}
                  h={{ base: "1.7rem", md: "2.2rem", lg: "2.9rem" }}
                  borderRadius="2rem"
                  _hover={{
                    background: "white",
                    color: "#39B7FF",
                    border: "2px solid #39B7FF",
                  }}
                  bg="#39B7FF"
                  color="white"
                  py={{ base: "0rem", md: "0.1rem", lg: "1.8rem" }}
                  px={{ base: "1.5rem", md: "2.2rem", lg: "2rem" }}
                >
                  JOIN NOW
                </Button>
              </Link>
            </Box>
          </Box>
          {/* PROGRESS TRACKING */}

          {/* PLANS THAT SUIT YOU BEST */}
          <Box
            // border="1px solid black"
            mt={{ base: "3rem", md: "8rem", lg: "10rem" }}
            // display="flex"
          >
            <Heading fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}>
              PLANS THAT SUIT YOU BEST
            </Heading>

            <Grid
              // border="1px solid black"
              // mt={{ base: "2rem", md: "3rem", lg: "5rem" }}
              // pt="2.2rem"

              gap={7}
              justify="space-between"
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
            >
              {PlansData.map((ele) => (
                <Box
                  key={ele.id}
                  // border="3px solid blue"
                  bg="#404040"
                  mt={{ base: "2rem", md: "3rem", lg: "4rem" }}
                  pb={{ base: "2rem", md: "3rem", lg: "6rem" }}
                  borderRadius="2rem"
                  color="white"
                >
                  <Image w="10rem" mt="3rem" src={ele.url} alt="star-icon" />
                  <Heading
                    fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}
                  >
                    {ele.Heading}
                  </Heading>
                  <Box
                    mt={{ base: "0.5rem", md: "1rem", lg: "2rem" }}
                    fontSize={{ base: "0.9rem", md: "1rem", lg: "1.5rem" }}
                  >
                    <Text pt="0.8rem">{ele.p1}</Text>
                    <Text pt="0.8rem">{ele.p2}</Text>
                    <Text pt="0.8rem">{ele.p3}</Text>
                    <Text pt="0.8rem">{ele.p4}</Text>
                    <Text pt="0.8rem">{ele.p5}</Text>
                    <Text pt="0.8rem">{ele.p6}</Text>
                    <Text pt="0.8rem">{ele.p7}</Text>
                    <Text pt="0.8rem">{ele.p8}</Text>
                    <Text pt="0.8rem">{ele.p9}</Text>
                  </Box>
                  <Link to="/">
                    {" "}
                    <Button
                      mt={{ base: "1.5rem", md: "3rem", lg: "3rem" }}
                      fontSize={{ base: "0.7rem", md: "1rem", lg: "1.8rem" }}
                      w={{ base: "7rem", md: "10rem", lg: "18rem" }}
                      h={{ base: "1.7rem", md: "2.2rem", lg: "2.9rem" }}
                      borderRadius="2rem"
                      _hover={{
                        background: "white",
                        color: "#39B7FF",
                        border: "3px solid #39B7FF",
                      }}
                      bg="#39B7FF"
                      color="white"
                      py={{ base: "0rem", md: "0.1rem", lg: "1.8rem" }}
                      px={{ base: "1.5rem", md: "2.2rem", lg: "2rem" }}
                    >
                      {ele.btn}
                    </Button>
                  </Link>
                </Box>
              ))}
            </Grid>
          </Box>
          {/* PLANS THAT SUIT YOU BEST */}
        </Box>

        {/* WANT TO BUILD YOUR OWN WORKOUT PLAN? */}
        <Box
          // border="1px solid black"
          mt={{ base: "3rem", md: "8rem", lg: "10rem" }}
          pb={{ base: "3rem", md: "4rem", lg: "5rem" }}
          pt={{ base: "3rem", md: "4rem", lg: "5rem" }}
          bg="#F8FBFE"
          // display="flex"
        >
          <Heading fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}>
            WANT TO BUILD YOUR OWN WORKOUT PLAN?
          </Heading>

          <Text
            mt={{ base: "0.5rem", md: "1rem", lg: "1.5rem" }}
            fontSize={{ base: "0.5rem", md: "1rem", lg: "1.5rem" }}
            pt="0.7rem"
          >
            Customize your workout plan with over 3000 free exercises in WEFIT
            Workout Plan Builder. And easily share with friends.
          </Text>

          <Link to="/routines">
            <Button
              mt={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
              fontSize={{ base: "0.7rem", md: "1rem", lg: "1.8rem" }}
              w={{ base: "10rem", md: "14rem", lg: "25rem" }}
              h={{ base: "1.7rem", md: "2.2rem", lg: "2.9rem" }}
              borderRadius="2rem"
              _hover={{
                background: "white",
                color: "#39B7FF",
                border: "3px solid #39B7FF",
              }}
              bg="#39B7FF"
              color="white"
              py={{ base: "0rem", md: "0.1rem", lg: "1.8rem" }}
              px={{ base: "1.5rem", md: "2.2rem", lg: "2rem" }}
            >
              CREATE WORKOUT PLAN
            </Button>
          </Link>
        </Box>
        {/* WANT TO BUILD YOUR OWN WORKOUT PLAN? */}
      </Box>
    </>
  );
};

export default WorkoutNeeds;
