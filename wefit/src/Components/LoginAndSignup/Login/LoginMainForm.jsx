import React, { useEffect, useState } from "react";

import {
  Box,
  Flex,
  FormControl,
  Text,
  FormLabel,
  Input,
  Button,
  Checkbox,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Redux/Login/login.actions";
import { useNavigate } from "react-router-dom";

const LoginMainFrom = () => {
  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();
  const { user, admin } = useSelector((store) => store.login);

  // console.log("admin: ", admin);
  console.log("user: ", user);

  const [show, setShow] = React.useState(false);

  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const toast = useToast();

  useEffect(() => {
    if (user.failed) {
      toast({
        title: "Login Failed",
        description: "The email or password that you've entered is incorrect",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    } else if (admin.failed) {
      toast({
        title: "Login Failed",
        description: "The email or password that you've entered is incorrect",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    } else if (user.userStatus) {
      toast({
        title: "Login Successful",
        status: "success",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
      setTimeout(() => {
        navigate("/newuser");
      }, 1300);
    } else if (admin.adminStatus) {
      toast({
        title: "Login Successful",
        status: "success",
        duration: 1200,
        isClosable: true,
        position: "top",
      });

      setTimeout(() => {
        navigate("/admin");
      }, 1300);


    } else if (user.createAccount) {
      toast({
        title: "Login Failed",
        description:
          "You didn't have any account first create an account then login",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    } else if (user.isError) {
      toast({
        title: "Server Error",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    } else if (admin.isError) {
      toast({
        title: "Server Error",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    }
  }, [
    user.failed,
    user.isError,
    admin.isError,
    user.userStatus,
    admin.adminStatus,
    admin.failed,
    user.createAccount,
    dispatch,
    toast,
  ]);

  const handleChange = (e) => {
    let { type, value } = e.target;
    setLogindata({ ...loginData, [type]: value });
  };

  const handleLogin = () => {
    let { email, password } = loginData;

    if (!email || !password) {
      toast({
        title: "Login Failed",
        description: "Fill all the Credentials",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else {
      dispatch(login(loginData));
    }
  };

  return (
    <FormControl w={"85%"} h={"35vh"} mb={"1.5rem"}>
      <Flex justify={"space-between"} flexDirection={"column"} h={"100%"}>
        <Box pt={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
          <FormLabel>
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.2rem" }}>
              Email Address
            </Text>
          </FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Enter A Email"
            bg={"white"}
            size={{ base: "sm", md: "md", lg: "lg" }}
            value={loginData.email}
            onChange={handleChange}
          />
        </Box>

        <Box pt={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
          <FormLabel>
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.2rem" }}>
              Password
            </Text>
          </FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              name="password1"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              bg={"white"}
              size={{ base: "sm", md: "md", lg: "lg" }}
              value={loginData.password}
              onChange={handleChange}
            />
            <InputRightElement
              width="4.5rem"
              display={"flex"}
              align={"center"}
              justify={"center"}
            >
              <Button
                mt={"0.2rem"}
                onClick={handleClick}
                fontSize={"12px"}
                bg={"transparent"}
                colorScheme={"white"}
                color={"black"}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        <Flex align={"center"} py={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
          <Text as="span" mr={"0.3rem"}>
            Remember Me
          </Text>
          <Checkbox bg={"white"} border={"0.5px solid"} size={"sm"}></Checkbox>
        </Flex>

        <Box>
          <Button
            type="submit"
            w={"100%"}
            borderRadius={"1rem"}
            colorScheme="blue"
            onClick={handleLogin}
          >
            LOGIN
          </Button>
        </Box>
      </Flex>
    </FormControl>
  );
};

export default LoginMainFrom;
