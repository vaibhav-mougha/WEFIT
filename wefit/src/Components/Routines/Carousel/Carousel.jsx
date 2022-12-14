import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Heading, Image, VStack } from "@chakra-ui/react";
import ClampLines from "react-clamp-lines";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/components/navigation/navigation.scss";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import routinesSlide from "../db.json";
// import required modules
import { Grid, Navigation, Autoplay } from "swiper";
import "./Carousel.scss";
const ipsum =
  "Spicy jalapeno bacon ipsum dolor amet drumstick sirloin chuck shankle. Flank ribeye pancetta andouille ham hock. Turkey cow tenderloin landjaeger filet mignon hamburger. Pig tail strip steak pastrami t-bone venison bresaola biltong corned beef drumstick pork hamburger tri-tip. Tongue ham hock corned beef tri-tip meatball t-bone fatback andouille sirloin chuck jowl biltong pastrami. Ham hock ground round landjaeger tail strip steak. Ham sirloin pork loin salami spare ribs. Jerky cow short ribs ground round. Hamburger porchetta shankle meatloaf shank.";
const Carousel = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="app__carousel-container">
      <Swiper
        modules={[Navigation, Grid, Autoplay]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        autoplay={{
          delay: 2000,
        }}
        grid={{
          rows: 2,
          fill: "row",
        }}
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={2}
        className="mySwiper slide1"
      >
        {routinesSlide.routinesSlide.map((el, i) => {
          return (
            <SwiperSlide className="slideChild" key={i}>
              <VStack>
                <Box height={"150px"}>
                  <Image src={el.gifUrl} alt={`${el}_${i}`} />
                </Box>
                <Heading p={"4"} size={"sm"} as={"h4"}>
                  {el.name}
                </Heading>
              </VStack>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Box className="prev" ref={navigationPrevRef}>
        <HiChevronLeft />
      </Box>
      <Box className="next" ref={navigationNextRef}>
        <HiChevronRight />
      </Box>
    </div>
  );
};

export default Carousel;
