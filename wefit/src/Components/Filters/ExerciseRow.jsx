import React from "react";
import { Image, Td, Tr } from "@chakra-ui/react";
const ExerciseRow = ({ data }) => {
  return (
    <>
      <Tr>
        <Td
          style={
            {
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
            }
          }
        >
          <Image
            border={"1px solid black"}
            borderRadius="md"
            minW={"60px"}
            w={["60px", "60px", "70px", "70px"]}
            objectFit="cover"
            src={data.gifUrl}
            alt={data.name}
          />
        </Td>
        <Td>{data.name}</Td>
        <Td>{data.bodyPart}</Td>
        <Td>{data.equipment}</Td>
        <Td>{data.target}</Td>
        <Td>{data.proUser ? "Elite" : "Free"}</Td>
      </Tr>
    </>
  );
};

export default ExerciseRow;
