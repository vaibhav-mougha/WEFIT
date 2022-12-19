import React from "react";
import Navbar from "../Components/Home/Navbar";
import ProfilePic from "../Components/Profile/NewUserProfilePic";
import {
  Table,
  Tr,
  Td,
  TableContainer,
  Box,
  Hide,
  Image,
  Text,
} from "@chakra-ui/react";
import Footer from "../Components/Home/Footer";
import Dob from "../Components/Profile/Dob";
import Height from "../Components/Profile/Height";

const NewUser = () => {
  return (
    <div>
      <Navbar />

      {/* Profile Container */}
      <Box
        p="1rem"
        // boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"

        align="center"
        justify="center"
        width="90%"
        m="auto"
        borderRadius="3rem"
        // boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        mt="2rem"
        mb="3rem"
      >
        <Box
          w="90%"
          // border="1px solid black"
        >
          {/* relic advt */}
          <Box w={{ base: "100%", md: "65%", lg: "65%" }}>
            <Image src="/Assets/relic.jpg" />
          </Box>

          {/* Setup Your Profile */}

          <Box
            mt="3rem"
            display="flex"
            // templateColumns={{sm:'repeat(1, 1fr)',lg:'repeat(3, 1fr)'}}
            // border="1px solid black"
          >
            {/* Left Grid */}

            <Hide below="md">
              <Box
                w="55%"
                // border="1px solid black"
                borderRadius="1rem"
                mr="2rem"
                p="1.5rem"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <Hide below="lg">
                  <ProfilePic />
                </Hide>

                <Box w="100%" mt="5rem">
                  <TableContainer>
                    <Table variant="simple" size="sm">
                      <Tr>
                        {" "}
                        <Td display="flex">
                          <Image
                            w="10%"
                            mr="0.5rem"
                            src="https://www.jefit.com/images/routine_icon_64_64.png"
                          />{" "}
                          My Routines
                        </Td>
                      </Tr>
                      <Tr>
                        {" "}
                        <Td display="flex">
                          <Image
                            w="10%"
                            mr="0.5rem"
                            src="https://www.jefit.com/images/main_menu_logs_70_70.png"
                          />
                          My Logs
                        </Td>
                      </Tr>
                      <Tr>
                        {" "}
                        <Td display="flex">
                          <Image
                            w="10%"
                            mr="0.5rem"
                            src="https://www.jefit.com/images/training_reports_icon_70_70.png"
                          />
                          My Reports
                        </Td>
                      </Tr>
                      <Tr>
                        {" "}
                        <Td display="flex">
                          <Image
                            w="10%"
                            mr="0.5rem"
                            src="https://www.jefit.com/images/pictureicon.png"
                          />
                          My Photos
                        </Td>
                      </Tr>
                      <Tr>
                        {" "}
                        <Td display="flex">
                          <Image
                            w="10%"
                            mr="0.5rem"
                            src="https://www.jefit.com/images/exercise_icon3_64_64.png"
                          />
                          My Custom Exercises
                        </Td>
                      </Tr>
                      <Tr>
                        {" "}
                        <Td display="flex">
                          <Image
                            w="10%"
                            mr="0.5rem"
                            src="https://www.jefit.com/images/message_icon.png"
                          />
                          My Messages
                        </Td>
                      </Tr>
                    </Table>
                  </TableContainer>
                </Box>

                <Box mt="2rem">
                  <Image src="https://tpc.googlesyndication.com/simgad/5710722612612753432?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qmez8LRNXvmWmjgO0wMECruwXYCDQ" />
                </Box>

                <Box mt="2rem">
                  <TableContainer>
                    <Table variant="simple" size="sm">
                      <Tr>
                        {" "}
                        <Td display="flex">
                          <Image
                            w="10%"
                            mr="0.5rem"
                            src="https://www.jefit.com/images/friend_request_20.png"
                          />{" "}
                          0 Friends (s)
                        </Td>
                      </Tr>
                    </Table>
                  </TableContainer>
                </Box>

                <Box mt="2rem">
                  <Image
                    src="/Assets/payoneer.jpg"
                    alt="payoneeradvt"
                    w="70%"
                  />
                </Box>
              </Box>
            </Hide>

            {/* Center */}
            <Box
              w={{ md: "100%", lg: "130%" }}
              // border="1px solid red"
              textAlign="left"
              mr="2rem"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              p="1rem"
              borderRadius="1rem"
            >
              <Text fontWeight="bold" fontSize="1.5rem">
                Setup Your Profile
              </Text>
              <hr />

              <Box display="flex" mt="1rem" fontSize={"0.9rem"}>
                <Text>Date of Birth -</Text>
                <Text color="gray">
                  (Age is required to calculate your BMI)
                </Text>
              </Box>

              <Dob />

              <Box display="flex" mt="3rem" fontSize={"0.9rem"}>
                <Text>Units of Measurement -</Text>
                <Text color="gray">
                  (A specific unit of measurement is required to record your
                  logs)
                </Text>
              </Box>

              <Height />
            </Box>

            {/* Right Grid */}
            <Hide below="lg">
              <Box
                w="50%"
                // border="2px solid blue"
                color="gray"
              >
                <Text fontWeight="bold">Account</Text>
                <Text textAlign="left">
                  On this page you will be able to change your profile settings
                  and set the units of measurement used within the application.
                </Text>
              </Box>
            </Hide>
          </Box>
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default NewUser;
