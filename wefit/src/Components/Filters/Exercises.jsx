import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import ExerciseRow from "./ExerciseRow";

const Exercises = ({ data }) => {
  return (
    // <div className="table_container">
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
            <ExerciseRow key={plan.id} data={plan} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
    // </div>
  );
};

export default Exercises;
