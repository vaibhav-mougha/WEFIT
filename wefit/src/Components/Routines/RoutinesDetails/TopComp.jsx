import React, { useState } from "react";
import "./DetailRoutines.scss";
import { HiArrowLongLeft } from "react-icons/hi2";
import {
  Box,
  Button,
  HStack,
  Image,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Heading } from "../";
import { IoDiamondOutline } from "react-icons/io5";
import ExerciseRow from "../Filters/ExerciseRow";
import Pagination from "../Filters/Pagination";
const TopComp = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [relatedData, setRelatedData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currPage, setCurrPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://we-fit-database-api.vercel.app/exercise/${id}`)
      .then((res) => {
        setData(res.data);
      });
  }, [id, currPage]);
  if (data.bodyPart !== undefined) {
    axios
      .get(
        `https://we-fit-database-api.vercel.app/exercise/?bodyPart_like=${data.bodyPart}&_page=${currPage}&_limit=10`
      )
      .then((res) => {
        setRelatedData(res.data);
        setTotalPages(res.headers.get("x-total-count"));
      });
  }

  const currPageHandler = (currPage) => {
    setCurrPage(currPage);
  };
  return (
    <>
      <div>
        <div className="app__heros">
          <Button onClick={() => navigate(-1)} mb={"10"} colorScheme={"blue"}>
            <HiArrowLongLeft style={{ marginRight: "10px" }} />
            Back
          </Button>
          <HStack className="app__heros-container">
            <Image src={data.gifUrl} alt="heros-p" />
            <Box className="app__card-container" ml={"10"}>
              <Heading>{data.name}</Heading>
              <Text>
                <span>Body Parts:</span> {data.bodyPart}
              </Text>
              <Text>
                <span>Equipments Required:</span> {data.equipment}
              </Text>
              <Text>
                {" "}
                <span>Traget Body part:</span> {data.target}
              </Text>
              <Text>{data.proUser ? <IoDiamondOutline /> : "Free User"}</Text>
            </Box>
          </HStack>

          <div className="related_routines"></div>
        </div>
        <Heading
          heading={""}
          title="Related To Above Wefit Workout plans"
          text={"Filter results down to your specific needs"}
        />

        <div className="related_routines-container">
          <TableContainer mt={"4"}>
            <Table
              size={["sm", "sm", "sm", "sm"]}
              colorScheme={"facebook"}
              variant={"striped"}
            >
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Exercise Name</Th>
                  <Th>Body Parts</Th>
                  <Th>Equipments To be used</Th>
                  <Th>Target</Th>
                  <Th>Free / Elite</Th>
                </Tr>
              </Thead>
              <Tbody>
                {relatedData?.map((plan) => (
                  <ExerciseRow key={plan.id} data={plan} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Pagination totalPages={totalPages} onSwitchPage={currPageHandler} />
        </div>
      </div>
    </>
  );
};

export default TopComp;
