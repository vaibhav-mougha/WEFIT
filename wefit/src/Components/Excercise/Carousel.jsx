import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import {Text} from "@chakra-ui/react"
import axios from 'axios';
import { Link } from 'react-router-dom';

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img width="50%" src='https://www.svgrepo.com/show/109459/left-arrow.svg' alt="prevArrow" {...props} />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img width="50%" src='https://www.svgrepo.com/show/83417/right-arrow.svg' alt="nextArrow" {...props} />
);


const Carousel = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let data = axios.get("https://we-fit-database-api.vercel.app/excercises");
        let res = await data;
        setData(res.data);
    };
    console.log(data);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SlickArrowRight />,
      prevArrow: <SlickArrowLeft />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

  return (
    <>
      <Slider {...settings} style={{width:"100%", margin: "auto", marginTop: "20px"}}>
        {data && data.map((item) => (
          <div className="card" key={item.id}  >
          <Link to={`/exercise/filter/excercises-${item.id}`}>
            <div className="card-top" style={{width: "100%", backgroundColor:'white'}} >
              <img
                style={{width: "100%"}}
                src={item.image_urls[0]}
                alt={item.name}
              />
            </div>
            </Link>
            <Text fontSize="13px" color="blue.500" fontWeight="400">{item.name}</Text>
          </div>
        ))}
      </Slider>
    </>
    
  );
}

export default Carousel