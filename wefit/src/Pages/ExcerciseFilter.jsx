import React, { useState, useEffect } from "react";
import FilterBoxes from "../Components/Excercise/FilterBoxes";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import ExcerciseDisplay from "../Components/Excercise/ExcerciseDisplay";
import { Box, Image, Text } from "@chakra-ui/react";
import Navbar from "../Components/Home/Navbar";
import styles from "../Styles/Excercise.module.css";
import Pagination from "../Components/Excercise/Pagination";
import Footer from "../Components/Home/Footer";

const ExcerciseFilter = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("excercises");
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const getExerciseData = (query, param, page) => {
    setQuery(query);
    if (query === "biceps") {
      return axios
        .get(`https://we-fit-database-api.vercel.app/biceps?_page=${page}&_limit=5`, param)
        .then((res) => {
          setData(res.data);
        });
    } else if (query === "excercises") {
      return axios
        .get(`https://we-fit-database-api.vercel.app/excercises?_page=${page}&_limit=8`, param)
        .then((res) => {
          setData(res.data);
        });
    } else if (query === "chest") {
      return axios
        .get(`https://we-fit-database-api.vercel.app/chest?_page=${page}&_limit=5`, param)
        .then((res) => {
          setData(res.data);
        });
    } else if (query === "glutes") {
      return axios
        .get(`https://we-fit-database-api.vercel.app/glutes?_page=${page}&_limit=5`, param)
        .then((res) => setData(res.data));
    } else if (query === "abs") {
      return axios
        .get(`https://we-fit-database-api.vercel.app/abs?_page=${page}&_limit=5`, param)
        .then((res) => setData(res.data));
    }
  };
  // console.log(page)
  console.log(location);
  useEffect(() => {
    if (location || data.length === 0) {
      const type = searchParams.getAll("type");
      const difficulty = searchParams.getAll("difficulty");
      const equipment = searchParams.getAll("equipment");
      const getResult = {
        params: {
          type: type,
          difficulty: difficulty,
          equipment: equipment,
        },
      };
      getExerciseData(query, getResult, page);
      console.log(query, getResult);
    }
  }, [location, data.length, searchParams, query, page]);
  const noResults = () => {
    return (
      <div>
        <Box
          borderBottom="1px solid gray"
          pt="16px"
          pb="4px"
          w="70%"
          m="auto"
          mt="40px"
        >
          <Text fontSize="18px" fontWeight="bold" textAlign="start">
            No Results Found
          </Text>
        </Box>
        <Image
          m="auto"
          mt="-80px"
          src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-4344461-3613889.png"
          alt="no-results"
          overflow="hidden"
        />
      </div>
    );
  };
  console.log("query", query);
  return (
    <>
    <Navbar />
    <div style={{ backgroundColor: "rgb(248, 251, 254)" }}>
      
      <FilterBoxes getData={getExerciseData} />
      {data.length === 0 ? (
        noResults()
      ) : (
        <div>
          <Box
            borderBottom="1px solid gray"
            pt={4}
            pb={1}
            w="70%"
            m="auto"
            mt="40px"
          >
            <Text fontSize="18px" fontWeight="bold" textAlign="start">
              Exercise Database
            </Text>
          </Box>
          {data &&
            data.map((elem) => (
              <Box className={styles.bgcolor} display="flex" gap="20px">
                <ExcerciseDisplay
                  key={elem.id}
                  id={elem.id}
                  name={elem.name}
                  muscle_group={elem.main_group}
                  type={elem.type}
                  equipment={elem.equipment}
                  image={elem.image_urls}
                  url={elem.main_group}
                />
              </Box>
            ))}
          <Box m="auto" w="20%">
            <Pagination
              page={page}
              onChange={(value) => setPage(value)}
              total={2}
            />
          </Box>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default ExcerciseFilter;
