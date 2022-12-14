import React from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Hide,
  Show,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Hide below="sm">
        <Flex
          w="100%"
          bg="#257CFF"
          p="1rem"
          color="white"
          align="center"
          justify="center"
        >
          <Flex
            w="80%"
            // border="1px solid white"
            justify="space-between"
          >
            <Box
              w="11%"
              // border="1px solid white"
            >
              <Link to="/">
                <Image src="./Assets/WEFIT.png" w="100%" alt="WeFitLogo" />
              </Link>
            </Box>
            <Box w="65%">
              <Flex
                justify="space-between"
                // border="1px solid white"
                fontSize={{ base: "0.7rem", md: "0.9rem", lg: "1.2rem" }}
                pt="0.5rem"
              >
                <Box>
                  <Menu>
                    <MenuButton
                      bg="#257CFF"
                      _hover={{ bg: "#257CFF" }}
                      _expanded={{ bg: "#257CFF" }}
                    >
                      Get App <ChevronDownIcon />
                    </MenuButton>
                    <MenuList color="#257CFF">
                      <MenuItem>Workout App (iOS)</MenuItem>
                      <MenuItem>Workout App (Android)</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>

                <Box>
                  <Menu>
                    <MenuButton
                      bg="#257CFF"
                      _hover={{ bg: "#257CFF" }}
                      _expanded={{ bg: "#257CFF" }}
                    >
                      Workout Plans <ChevronDownIcon />
                    </MenuButton>
                    <MenuList color="#257CFF">
                      <MenuItem>Pro-designed Plans</MenuItem>
                      <MenuItem>Create My Plan</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Box>
                  <Link to="/">Exercises</Link>
                </Box>

                <Box>
                  <Menu>
                    <MenuButton
                      bg="#257CFF"
                      _hover={{ bg: "#257CFF" }}
                      _expanded={{ bg: "#257CFF" }}
                    >
                      Community <ChevronDownIcon />
                    </MenuButton>
                    <MenuList color="#257CFF">
                      <MenuItem>Wefit Community</MenuItem>
                      <MenuItem>Blog</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>

                <Box>
                  <Link to="/">Coach</Link>
                </Box>
                <Box>
                  <Link to="/">Elite</Link>
                </Box>
                <Box>
                  <Link to="/">Login</Link>
                </Box>
              </Flex>
            </Box>
            <Box
              w="12%"
              // border="1px solid white"
              pt="0.5rem"
            >
              <Button
                fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1.2rem" }}
                w={{ base: "1.7rem", md: "3rem", lg: "8.7rem" }}
                h={{ base: "1.2rem", md: "1.8rem", lg: "2.3rem" }}
                _hover={{
                  background: "#184FA3",
                  color: "white",
                }}
                bg="white"
                color="#257CFF"
                py={{ base: "0rem", md: "0.1rem", lg: "0.5rem" }}
                px={{ base: "1.5rem", md: "2.2rem", lg: "2.2rem" }}
              >
                Sign Up
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Hide>

      <Show below="sm">
        <Flex
          w="100%"
          bg="#257CFF"
          p="1rem"
          color="white"
          align="center"
          justify="center"
        >
          <Flex
            w="80%"
            // border="1px solid white"
            justify="space-between"
          >
            <Box
              w="40%"
              // border="1px solid white"
            >
              <Link to="/">
                <Image src="./Assets/WEFIT.png" w="100%" alt="WeFitLogo" />
              </Link>
            </Box>

            <Box pt="0.5rem">
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                  border="3px solid white"
                  bg="#257CFF"
                  _hover={{ bg: "#257CFF" }}
                  _expanded={{ bg: "#257CFF" }}
                />

                <MenuList>
                  <MenuList
                    color="#257CFF"
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                  >
                    Get App <ChevronDownIcon />
                    <MenuItem>Workout App (iOS)</MenuItem>
                    <MenuItem>Workout App (Android)</MenuItem>
                  </MenuList>

                  <MenuList
                    color="#257CFF"
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                  >
                    Workout Plans <ChevronDownIcon />
                    <MenuItem>Pro-designed Plans</MenuItem>
                    <MenuItem>Create My Plan</MenuItem>
                  </MenuList>

                  <MenuList
                    color="#257CFF"
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                  >
                    <Link to="/"> Exercise</Link>
                  </MenuList>

                  <MenuList
                    color="#257CFF"
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                  >
                    Community <ChevronDownIcon />
                    <MenuItem>Wefit Community</MenuItem>
                    <MenuItem>Blog</MenuItem>
                  </MenuList>

                  <MenuList
                    color="#257CFF"
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                  >
                    <Link to="/">Coach</Link>
                  </MenuList>

                  <MenuList
                    color="#257CFF"
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                  >
                    <Link to="/">Elite</Link>
                  </MenuList>

                  <MenuList
                    color="#257CFF"
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                  >
                    <Link to="/">Login</Link>
                  </MenuList>

                  <MenuList
                    color="#257CFF"
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                  >
                    SignUp
                  </MenuList>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Flex>
      </Show>
    </>
  );
};

export default Navbar;
