import { Box, Grid, Hide, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Home/Navbar";
import ProfilePic from "../Components/Profile/NewUserProfilePic";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Footer from "../Components/Home/Footer";
import Dob from "../Components/Profile/Dob";
import Height from "../Components/Profile/Height";
import UserTabs from "../Components/Profile/Tabs";
import UserProfilePic from "../Components/Profile/UserProfilePic";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getProfile } from "../Redux/Profile/profile.actions";

const UserData = () => {
  const profile1 = useSelector((store) => store.profile.data);
  console.log('profile1: ', profile1);
  
  let name = profile1 && profile1.name
  // console.log("name: ", name);
  // console.log("weight: ", weight);
  // console.log("height: ", height);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

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
          {/* GooglePlay advt */}
          <Box
            w={{ base: "100%", md: "65%", lg: "65%" }}
            border="3px solid gray"
            borderRadius="0.5rem"
            display="flex"
            p="1rem"
          >
            <Box
              w={{ base: "100%", md: "100%", lg: "70%" }}
              //  border="1px solid black"
              fontSize={{ base: "0.9rem", md: "1.5rem", lg: "2rem" }}
            >
              <Stack color="gray" textAlign="left" spacing="-0.5rem">
                <Text>Welcome to Jefit! Download the</Text>
                <Text>app to start sharing your fitness</Text>
                <Text>stats on Discord!</Text>
              </Stack>
              <Box display="flex">
                <Box>
                  <a
                    href="https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail"
                    target="_blank"
                  >
                    <Image
                      src="https://www.jefit.com/wp/wp-content/uploads/2021/11/googleplay.png"
                      alt="googleplay"
                    />
                  </a>
                </Box>
                <Box ml="1rem">
                  <a
                    href="https://apps.apple.com/app/apple-store/id449810000"
                    target="_blank"
                  >
                    <Image
                      src="https://www.jefit.com/wp/wp-content/uploads/2021/11/appstore.png"
                      alt="appstore"
                    />
                  </a>
                </Box>
              </Box>
            </Box>
            <Box w="30%">
              <Hide below="sm">
                <Image
                  src="https://www.jefit.com/wp/wp-content/uploads/2021/11/qrcode_white.png"
                  alt="qrcode"
                />
              </Hide>
            </Box>
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
                w="35%"
                // border="1px solid black"
                borderRadius="1rem"
                mr="2rem"
                p="1.5rem"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <Hide below="lg">
                  <UserProfilePic />
                </Hide>

                <Text
                  mt="1rem"
                  fontSize="2rem"
                  fontStyle="italic"
                  fontWeight={"bold"}
                >
                  {name}
                </Text>

                <Box w="100%" mt="1rem">
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

                {/* <Box mt="2rem">
                  <Image src="https://tpc.googlesyndication.com/simgad/4175487587207076604?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qnUxrPy39uZGpSy48yOWTwa_wiWtw" />
                </Box> */}
              </Box>
            </Hide>

            {/* Center */}
            <Box
              // border="3px solid black"
              borderRadius="1rem"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            >
              <UserTabs />
            </Box>

            {/* Right Grid */}
            {/* <Hide below="lg">
              <Box
                ml="2rem"
                w="30%"
                // border="2px solid blue"
                color="gray"
              >
                <Text fontWeight="bold">Account</Text>
                <Text textAlign="left">
                  On this page you will be able to change your profile settings
                  and set the units of measurement used within the application.
                </Text>
              </Box>
            </Hide> */}
          </Box>
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default UserData;