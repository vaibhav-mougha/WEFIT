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
  Spinner,
  useToast
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { adminDeleteExercise } from "../../../Redux/Admin/admin.actions";

const ExerciseRow = ({ data, loading }) => {
  let [exer, setExer] = React.useState(data.name);
  let [body, setBody] = React.useState(data.bodyPart);
  let [equip, setEquip] = React.useState(data.equipment);
  let [target, setTarget] = React.useState(data.target);
  let [free, setFree] = React.useState(data.proUser ? "Elite" : "Free");

  const toast = useToast();

  const dispatch = useDispatch();
  const {isLoading,isError} = useSelector(store => store.admin);
  // console.log(isLoading,isError)

  // console.log(data)

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

  const handleDelete = () => {
    dispatch(adminDeleteExercise(data.id));
    toast({
      title: "Exercise deleted successfully",
      status: "error",
      duration: 1200,
      isClosable: true,
      position: "top",
    });
   setTimeout(() => {
    location.reload()
   }, 1200);
  };

  // if(isLoading){
  //   return <Spinner
  //   thickness='4px'
  //   speed='0.65s'
  //   emptyColor='gray.200'
  //   color='blue.500'
  //   size='xl'
  // />
  // }

  return (
    <>
      <Tr cursor={"pointer"}>
        <Td>
          <Button
            onClick={handleDelete}
            colorScheme="red"
            borderRadius="1rem"
            variant="solid"
            _hover={{
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
