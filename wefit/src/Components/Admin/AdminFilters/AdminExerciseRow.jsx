import React from "react";
import {
  Box,
  Button,
  Image,
  Input,
  Td,
  Text,
  Textarea,
  Tr,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ExerciseRow = ({ data, loading }) => {
  let [exer, setExer] = React.useState(data.name);
  let [body, setBody] = React.useState(data.bodyPart);
  let [equip, setEquip] = React.useState(data.equipment);
  let [target, setTarget] = React.useState(data.target);
  let [free, setFree] = React.useState(data.proUser ? "Elite" : "Free");

  // const navigate = useNavigate();
  // const navigationHandler = (id) => {
  //   if (data.proUser) {
  //     navigate(`/elite`);
  //   } else {
  //     navigate(`/routines/${id}`);
  //   }
  // };

  

  let exerInputChange = (e) => {
    let inputValue = e.target.value;
    setExer(inputValue);
  };

  let bodyInputChange = (e) => {
    let inputValue = e.target.value;
    setBody(inputValue);
  };

  let equipInputChange = (e) => {
    let inputValue = e.target.value;
    setEquip(inputValue);
  };

  let targetInputChange = (e) => {
    let inputValue = e.target.value;
    setTarget(inputValue);
  };

  let freeInputChange = (e) => {
    let inputValue = e.target.value;
    setFree(inputValue);
  };


  return (
    <>
      <Tr cursor={"pointer"}>
        <Td>
          <Button colorScheme="red" borderRadius="1rem" variant="solid" _hover={{
                    background: "white",
                    color: "red",
                    border: "2px solid red",
                  }}
                  >
            Delete
          </Button>
        </Td>


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

        

        <Td>
          <Text mb="8px">
            <b>Edit:</b> {exer}
          </Text>
          <Box border="1px solid gray">
            <Textarea
              value={exer}
              onChange={exerInputChange}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </Box>
        </Td>

        <Td>
          <Text mb="8px">
            <b>Edit:</b> {body}
          </Text>
          <Box border="1px solid gray">
            <Textarea
              value={body}
              onChange={bodyInputChange}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </Box>
        </Td>

        <Td>
          <Text mb="8px">
            <b>Edit:</b> {equip}
          </Text>
          <Box border="1px solid gray">
            <Textarea
              value={equip}
              onChange={equipInputChange}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </Box>
        </Td>

        <Td>
          <Text mb="8px">
            <b>Edit:</b> {target}
          </Text>
          <Box border="1px solid gray">
            <Textarea
              value={target}
              onChange={targetInputChange}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </Box>
        </Td>

        <Td>
          <Text mb="8px">
            <b>Edit:</b> {free}
          </Text>
          <Box border="1px solid gray">
            <Textarea
              value={free}
              onChange={freeInputChange}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </Box>
        </Td>
      </Tr>
    </>
  );
};

export default ExerciseRow;
