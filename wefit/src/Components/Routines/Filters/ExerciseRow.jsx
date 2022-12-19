import React from "react";
import { Image, Td, Tr } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const ExerciseRow = ({ data, loading }) => {
  const navigate = useNavigate();
  const navigationHandler = (id) => {
    if (data.proUser) {
      navigate(`/elite`);
    } else {
      navigate(`/routines/${id}`);
    }
  };

  return (
    <>
      <Tr cursor={"pointer"} onClick={() => navigationHandler(data.id)}>
        <Td>
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
