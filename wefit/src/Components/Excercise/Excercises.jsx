import React, { useState, useEffect } from "react";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

const Excercises = () => {
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

  return (
    <Box mt="50px" textAlign="center">
      <Text fontSize="24px" paddingTop="20px">
        Try Something New
      </Text>
      <Text
        fontSize="20px"
        paddingTop="10px"
        color="rgb(88, 95, 105)"
        paddingBottom="20px"
      >
        Change up your routine with one of these exercises!
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(4,1fr)",
          lg: "repeat(6,1fr)",
        }}
        w={{ base: "90%", md: "80%", lg: "75%" }}
        margin="auto"
        gap="15px"
      >
        {data.map((el) => (
          <Box key={el.id} w="100%">
            <Link to={`/exercise/filter/excercises-${el.id}`}>
              <Image src={el.image_urls[0]} w="100%" />
              <Text
                fontSize="14px"
                margin="5px"
                color="#0ab2e6"
                fontWeight="500"
              >
                {el.name}
              </Text>
              <Text fontSize="14px" margin="5px">
                {el.main_group}, {el.detailed_group}
              </Text>
            </Link>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Excercises;
