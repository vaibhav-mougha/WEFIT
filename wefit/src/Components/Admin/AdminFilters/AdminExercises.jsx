import {
  Box,
  Button,
  Center,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import ExerciseRow from "./AdminExerciseRow";

import AddExercises from "./AddExercises";

const Exercises = ({ data, loading }) => {
  if (data.length === 0) {
    return (
      <Center>
        <Heading my={40}>Data Not Found</Heading>
      </Center>
    );
  }

  return (
    <>
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
            {data?.map((plan) => (
              <ExerciseRow key={plan.id} data={plan} loading={loading} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Exercises;
