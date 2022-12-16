import React, { useState, useEffect } from "react";
import FilterBoxes from "../Components/Excercise/FilterBoxes";
import Navbar from "../Components/Navbar";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import ExcerciseDisplay from "../Components/Excercise/ExcerciseDisplay";
import { Box, Image, Text } from "@chakra-ui/react";

const ExcerciseFilter = () => {
  const [data, setData] = useState([]);
  //   const [page, setpage] = useState(1);
  const [query, setQuery] = useState("excercises"); //by default query
  //   const [queryData, setqueryData] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  //   const [limit, setLimit] = useState(8);
  // let totalpages = Math.ceil(data.length / 8);
  // console.log(data);

  // console.log(searchParams.getAll("type"))
  const getExerciseData = (query, param) => {
    setQuery(query); //setting query for loop next operation
    if (query === "biceps") {
      return axios.get(`http://localhost:8080/biceps`, param).then((res) => {
        setData(res.data);
      });
    } else if (query === "excercises") {
      return axios
        .get(`http://localhost:8080/excercises`, param)
        .then((res) => {
          setData(res.data);
        });
    } else if (query === "chest") {
      return axios
        .get(`http://localhost:8080/chest`, param)
        .then((res) => {
            setData(res.data)
        });
    }
    // else if (query === "glutes") {
    //   return axios
    //     .get(``, param)
    //     .then((res) => setData(res.data));
    // }
  };
  // console.log(page)
  console.log(location)
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
      getExerciseData(query, getResult);
      console.log(query, getResult);
    }
  }, [location, data.length, searchParams, query]);
  const noResults = () =>{
    return (
        <div>
            <Box borderBottom="1px solid gray" pt={4} pb={1} w="70%" m="auto" mt="40px">
                <Text fontSize="18px" fontWeight="bold" textAlign="start">
                No Results Found
                </Text>
            </Box>
            <Image m="auto" src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-4344461-3613889.png" alt="no-results"/>
        </div>
    )
  }
  console.log("query",query)
  return (
    <div>
      <Navbar />
      <FilterBoxes getData={getExerciseData} />
      {data.length===0? noResults() : 
      <div>
      <Box borderBottom="1px solid gray" pt={4} pb={1} w="70%" m="auto" mt="40px">
        <Text fontSize="18px" fontWeight="bold" textAlign="start">
          Exercise Database
        </Text>
      </Box>
      {data && data.map((elem) => (
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
        ))}
        </div>
      }
    </div>
  );
};

export default ExcerciseFilter;
