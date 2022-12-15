import React from "react";
import { Box, Flex, Hide, Image, Show, Text } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const ManageTrack = () => {
  return (
    <Box bg="#184FA3" color="white" align="center" justify="center">
      <Flex
        w="85%"
        // border="1px solid white"
        pt="5rem"
        textAlign="left"
        pb="5rem"
      >
        <Box
          w="50%"
          // border="1px solid white"
        >
          <Text
            fontSize={{ base: "1.2rem", md: "2rem", lg: "3.2rem" }}
            fontWeight="bold"
          >
            MANAGE & TRACK
          </Text>
          <Text
            fontSize={{ base: "1.2rem", md: "2rem", lg: "3.2rem" }}
            fontWeight="bold"
            mt={{ base: "-0.5rem", md: "-0.5rem", lg: "-1rem" }}
          >
            ALL YOUR WORKOUTS
          </Text>
          <Text
            fontSize={{ base: "1.2rem", md: "2rem", lg: "3.2rem" }}
            fontWeight="bold"
            mt={{ base: "-0.5rem", md: "-0.5rem", lg: "-1rem" }}
          >
            IN ONE PLACE
          </Text>
          <Text
            fontSize={{ base: "0.9rem", md: "1.5rem", lg: "1.8rem" }}
            fontStyle="italic"
            fontWeight="bold"
            mt={{ base: "0.7rem", md: "1rem", lg: "1.5rem" }}
          >
            #1 Popular Workout Tracking Platform
          </Text>
          <Text
            fontSize={{ base: "0.9rem", md: "1.5rem", lg: "1.8rem" }}
            fontStyle="italic"
            fontWeight="bold"
            mt={{ base: "0.7rem", md: "1rem", lg: "1.5rem" }}
          >
            Stay Strong Together
          </Text>

          <Box
            //   border="1px solid white"

            display="flex"
            mt="2rem"
          >
            <Box>
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
              <Box mt="1.5rem">
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

              <Box display="flex" mt="3.5rem">
                <Box>
                  <a href="https://www.instagram.com/jefitapp/" target="_blank">
                    <FaInstagram size="1.5rem" />
                  </a>{" "}
                </Box>
                <Box ml="1.5rem">
                  <a href="https://www.facebook.com/jefitapp/" target="_blank">
                    <FaFacebook size="1.5rem" />{" "}
                  </a>
                </Box>
                <Box ml="1.5rem">
                  <a href="https://twitter.com/jefitinc" target="_blank">
                    <FaTwitter size="1.5rem" />
                  </a>
                </Box>
              </Box>
            </Box>
            <Box ml="1.5rem">
              <Hide below="sm">
                <Image
                  src="https://www.jefit.com/wp/wp-content/uploads/2021/11/qrcode_white.png"
                  alt="qrcode"
                />
              </Hide>
            </Box>
          </Box>
        </Box>

        <Box
          w="60%"
          // border="1px solid white"
        >
          <Image
            src="https://www.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch-2048x1707.png"
            alt="hero_watch"
          />
          <Box w="65%" mt="5rem" ml="1.8rem">
            <Show below="sm">
              <Image
                src="https://www.jefit.com/wp/wp-content/uploads/2021/11/qrcode_white.png"
                alt="qrcode"
              />
            </Show>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ManageTrack;
