import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Box,
  useToast,
  Link,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { adminAddExercise } from "../../../Redux/Admin/admin.actions";
import { Navigate, useNavigate } from "react-router-dom";

// "bodyPart": "lower arms",
// "equipment": "barbell",
// "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1411.gif",
// "id": "1411",
// "name": "barbell palms down wrist curl over a bench",
// "target": "forearms",
// "proUser":true,
const initState = {
  name: "",
  bodyPart: "",
  equipment: "",
  target: "",
  proUser: "",
};

const AddExercises = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [add, setAdd] = useState(initState);
  const dispatch = useDispatch();
  const toast = useToast();

  const initialRef = React.useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAdd({ ...add, [name]: value });
  };

  const handleSubmit = () => {
    // console.log(add);

    let { name, bodyPart, equipment, target, proUser } = add;

    if (!name || !bodyPart || !equipment || !target) {
      toast({
        title: "Fill all the Credentials",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else {
      dispatch(
        adminAddExercise({
          ...add,
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1411.gif",
          proUser: false,
        })
      );
      toast({
        title: "Exercise added successfully",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
      setAdd(initState);

      setTimeout(() => {
        location.reload();
      }, 1200);
    }
  };

  return (
    <>
      <Button
        bg="#257CFF"
        borderRadius="1rem"
        variant="solid"
        ml={{ lg: "2rem" }}
        mr={{ lg: "2rem" }}
        mt={{ base: "2rem", lg: "0rem" }}
        mb={{ base: "2rem" }}
        color="white"
        _hover={{
          background: "white",
          color: "#257CFF",
          border: "2px solid #257CFF",
        }}
        onClick={onOpen}
      >
        Add New Exercise
      </Button>

      {/* Save Exercises will route you to the Exercises page */}
      
        <Button
          bg="#31AE33"
          borderRadius="1rem"
          variant="solid"
          // ml="3rem"
          color="white"
          _hover={{
            background: "white",
            color: "#31AE33",
            border: "2px solid #31AE33",
          }}
          onClick={() => navigate("/routines")}
        >
          Save
        </Button>
    

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
      >
        <ModalOverlay />
        <ModalContent
        // border="1rem solid #257cff"
        >
          <ModalHeader
            textDecoration="underline"
            color="#257cff"
            fontWeight="bold"
            fontSize="2.5rem"
          >
            Add New Exercise
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>EXERCISE NAME</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Enter exercise name"
                type="name"
                name="name"
                onChange={handleChange}
                value={add.name}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>BODY PARTS</FormLabel>
              <Input
                placeholder="Enter body parts"
                type="text"
                name="bodyPart"
                onChange={handleChange}
                value={add.bodyPart}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>EQUIPMENT TO BE USED</FormLabel>
              <Input
                placeholder="Enter equipment to be used"
                type="text"
                name="equipment"
                onChange={handleChange}
                value={add.equipment}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>TARGET</FormLabel>
              <Input
                placeholder="Enter target"
                type="text"
                name="target"
                onChange={handleChange}
                value={add.target}
              />
            </FormControl>

            {/* <FormControl mt={4}>
              <FormLabel>FREE/ELITE</FormLabel>
              <Input
                placeholder="Enter free/ellite"
                type="checkbox"
                name="proUser"
                onChange={handleChange}
                value={add.proUser}
              />
            </FormControl> */}
          </ModalBody>

          <ModalFooter>
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
              mr={3}
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddExercises;
