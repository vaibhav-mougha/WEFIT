import React from "react";
import { Grid, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Heading, Image } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { IoDiamond } from "react-icons/io5";
import routinesSlide from "../db.json";
import "./Carousel.scss";
import { useNavigate } from "react-router-dom";
const sliderSettings = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
    grid: {
      rows: 1,
      fill: "row",
    },
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 10,
    grid: {
      rows: 2,
      fill: "row",
    },
  },
  780: {
    slidesPerView: 3,
    spaceBetween: 20,
    grid: {
      rows: 2,
      fill: "row",
    },
  },
  900: {
    slidesPerView: 4,
    spaceBetween: 20,
    grid: {
      rows: 2,
      fill: "row",
    },
  },
};
const Carousel = () => {
  const navigate = useNavigate();
  const navigationHandler = (proUser, id) => {
    if (proUser) {
      navigate(`/elite`);
    } else {
      navigate(`/routines/${id}`);
    }
  };
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="app__carousel-container">
      <Swiper
        modules={[Navigation, Grid, Autoplay]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        breakpoints={sliderSettings}
        autoplay={{
          delay: 2000,
        }}
        slidesPerView={3}
        slidesPerGroup={2}
        className="mySwiper slide1"
      >
        {routinesSlide.routinesSlide.map((el, i) => {
          return (
            <SwiperSlide
              className="slideChild"
              key={i}
              onClick={() => navigationHandler(el.proUser, el.id)}
            >
              <div className="app__slider-card">
                <div className="app__pro-icon">
                  {el.proUser && <IoDiamond />}
                </div>
                <Box height={"150px"}>
                  <Image src={el.gifUrl} alt={`${el}_${i}`} />
                </Box>
                <Heading p={"4"} size={"sm"} as={"h4"}>
                  {el.name}
                </Heading>
              </div>
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
