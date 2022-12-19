import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./ConnectMemberStyle.css";
import slideData from "./ConnectMemberData";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function ConnectMembers() {
  return (
    <>
      <Box bg="#F8FBFE" color="black" align="center" justify="center">
        <Box
          w="85%"
          // border="1px solid black"
          pt="6rem"
          pb="5rem"
        >
          <Heading fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}>
            CONNECT WITH OVER 10 MILLION WEFIT MEMBERS
          </Heading>

          <Text
            fontSize={{ base: "0.9rem", md: "1rem", lg: "1.6rem" }}
            pt="0.7rem"
          >
            As the most active workout community, we invite you and your friends
            to join us and support each other.
          </Text>

          <Box
            // border="1px solid black"
            mt="3rem"
            w="100%"
          >
            <Swiper
              slidesPerView={7}
              spaceBetween={15}
              centeredSlides={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              className="mySwiper"
              loop={true}
            >
              {slideData.map((ele) => (
                <SwiperSlide key={ele.id}>
                  <img src={ele.url} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          <Box
            // border="1px solid black"
            mt="1.5rem"
            w="55%"
            display="flex"
            justify="space-between"
          >
            <Box>
              <Link to="/community">
                <Button
                  fontSize={{ base: "0.7rem", md: "1rem", lg: "1.8rem" }}
                  w={{ base: "8rem", md: "13rem", lg: "21rem" }}
                  h={{ base: "1.7rem", md: "2.2rem", lg: "2.9rem" }}
                  borderRadius="2rem"
                  _hover={{
                    background: "white",
                    color: "#39B7FF",
                    border: "2px solid #39B7FF",
                  }}
                  bg="#39B7FF"
                  color="white"
                  py={{ base: "0rem", md: "0.1rem", lg: "1.5rem" }}
                  px={{ base: "1.5rem", md: "2.2rem", lg: "2.2rem" }}
                >
                  TRENDING TOPICS
                </Button>
              </Link>
            </Box>

            <Box ml={{ base: "1rem", md: "5rem", lg: "5rem" }}>
              <Link to="/signup">
                <Button
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
                  py={{ base: "0rem", md: "0.1rem", lg: "1.5rem" }}
                  px={{ base: "1.5rem", md: "2.2rem", lg: "2.2rem" }}
                >
                  JOIN NOW
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
