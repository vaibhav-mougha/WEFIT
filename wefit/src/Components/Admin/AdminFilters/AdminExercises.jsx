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
      <Box display="flex" mt="2rem" mb="2rem" justify="space-between">
        <Button
          bg="#31AE33"
          borderRadius="1rem"
          variant="solid"
          ml="3rem"
          color="white"
          _hover={{
            background: "white",
            color: "#31AE33",
            border: "2px solid #31AE33",
          }}
        >
          Save
        </Button>
        <Button
          bg="#257CFF"
          borderRadius="1rem"
          variant="solid"
          ml="3rem"
          color="white"
          _hover={{
            background: "white",
            color: "#257CFF",
            border: "2px solid #257CFF",
          }}
        >
          Add New Exercise
        </Button>
      </Box>

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
