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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutFunc } from "../../Redux/Login/login.actions";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();

  const data = useSelector((store) => store.login);
  const dispatch = useDispatch();

  let userName = data.user.userName || "";
  console.log("userName: ", userName);
  let adminName = data.admin.adminName || "";

  console.log("adminName: ", adminName);
  console.log("data: ", data);

  const handleSignout = () => {
    dispatch(logoutFunc());
  };

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
                <Image src="/Assets/WEFIT.png" w="100%" alt="WeFitLogo" />
              </Link>
            </Box>
            <Box w="65%">
              <Flex
                justify="space-between"
                // border="1px solid white"
                fontSize={{ base: "0.7rem", md: "0.9rem", lg: "1.2rem" }}
                pt="0.5rem"
              >
                <Box zIndex="10">
                  <Menu>
                    <MenuButton
                      bg="#257CFF"
                      _hover={{ bg: "#257CFF" }}
                      _expanded={{ bg: "#257CFF" }}
                    >
                      Get App <ChevronDownIcon />
                    </MenuButton>
                    <MenuList color="#257CFF" bg="white">
                      <a
                        href="https://apps.apple.com/app/apple-store/id449810000"
                        target="_blank"
                      >
                        <MenuItem bg="white" _hover={{ bg: "#C2DAFF" }}>
                          Workout App (iOS)
                        </MenuItem>
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail"
                        target="_blank"
                      >
                        <MenuItem bg="white" _hover={{ bg: "#C2DAFF" }}>
                          Workout App (Android)
                        </MenuItem>
                      </a>
                    </MenuList>
                  </Menu>
                </Box>

                <Box zIndex="10">
                  <Menu>
                    <MenuButton
                      bg="#257CFF"
                      _hover={{ bg: "#257CFF" }}
                      _expanded={{ bg: "#257CFF" }}
                    >
                      Workout Plans <ChevronDownIcon />
                    </MenuButton>
                    <MenuList color="#257CFF" bg="white">
                      <Link to="/routines"><MenuItem bg="white" _hover={{ bg: "#C2DAFF" }}>
                        Pro-designed Plans
                      </MenuItem></Link>
                      <Link to="/routines">
                      <MenuItem bg="white" _hover={{ bg: "#C2DAFF" }}>
                        Create My Plan
                      </MenuItem></Link>
                    </MenuList>
                  </Menu>
                </Box>
                <Box>
                  <Link to="/exercise">Exercises</Link>
                </Box>

                <Box zIndex="10">
                  <Menu>
                    <MenuButton
                      bg="#257CFF"
                      _hover={{ bg: "#257CFF" }}
                      _expanded={{ bg: "#257CFF" }}
                    >
                      Community <ChevronDownIcon />
                    </MenuButton>
                    <MenuList color="#257CFF" bg="white">
                      <Link to="/community">
                        <MenuItem bg="white" _hover={{ bg: "#C2DAFF" }}>
                          Wefit Community
                        </MenuItem>
                      </Link>
                      <Link to="/blog">
                        <MenuItem bg="white" _hover={{ bg: "#C2DAFF" }}>
                          Blog
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </Menu>
                </Box>

                <Box>
                  <Link to="/coach">Coach</Link>
                </Box>
                <Box>
                  <Link to="/elite">Elite</Link>
                </Box>
                <Box>
                  {userName ? (
                    <Link
                      to={"/newuser"}
                      style={{ fontWeight: "bold", color: "white" }}
                    >
                      {userName}
                    </Link>
                  ) : adminName ? (
                    <Link 
                    to="/admin"
                    style={{ fontWeight: "bold", color: "white" }}>
                      {adminName}
                    </Link>
                  ) : (
                    <Link to={"/login"}>Login</Link>
                  )}
                </Box>
              </Flex>
            </Box>
            <Box
              w="12%"
              // border="1px solid white"
              pt="0.5rem"
            >
              {userName || adminName ? (
                <Link>
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
                    onClick={handleSignout}
                  >
                    Sign Out
                  </Button>
                </Link>
              ) : (
                <Link to={"/signup"}>
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
                </Link>
              )}
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
                <Image src="/Assets/WEFIT.png" w="100%" alt="WeFitLogo" />
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
                  onClick={onOpen}
                />
              </Menu>
            </Box>
          </Flex>
        </Flex>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="white" color="black">
            <DrawerCloseButton />
            <DrawerHeader>
              <Box
                w="70%"
                ml="2.5rem"
                display="flex"
                justify="center"
                align="center"
              >
                <Link to="/">
                  <Image src="Assets/WEFIT.png" alt="WeFitLogo" />
                </Link>
              </Box>
            </DrawerHeader>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Get App
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <a
                    href="https://apps.apple.com/app/apple-store/id449810000"
                    target="_blank"
                  >
                    Workout App (iOS)
                  </a>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <a
                    href="https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail"
                    target="_blank"
                  >
                    Workout App (Android)
                  </a>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Workout Plans
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Link to="/routines">Pro-designed Plans</Link>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link to="/routines"> Create My Plan</Link>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Link to="/exercise"> Exercise</Link>
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Community
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Link to="/community">Wefit Community</Link>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link to="/blog">Blog</Link>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Link to="/coach"> Coach</Link>
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Link to="/elite"> Elite</Link>
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {userName ? (
                        <Link
                          to={"/newuser"}
                          style={{ fontWeight: "bold", color: "#257CFF" }}
                        >
                          {userName}
                        </Link>
                      ) : adminName ? (
                        <Link style={{ fontWeight: "bold", color: "#257CFF" }}>
                          {adminName}
                        </Link>
                      ) : (
                        <Link to={"/login"}>Login</Link>
                      )}
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              {userName || adminName ? (
                <Button
                  fontSize="1.5rem"
                  mt="3rem"
                  ml="6rem"
                  w="8rem"
                  h="2.9rem"
                  borderRadius="2rem"
                  _hover={{
                    background: "white",
                    color: "#39B7FF",
                    border: "2px solid #39B7FF",
                  }}
                  bg="#257CFF"
                  color="white"
                  py={{ base: "0rem", md: "0.1rem", lg: "1.5rem" }}
                  px={{ base: "1.5rem", md: "2.2rem", lg: "2.2rem" }}
                  onClick={handleSignout}
                >
                  <Link>Sign Out</Link>
                </Button>
              ) : (
                <Button
                  fontSize="1.5rem"
                  mt="3rem"
                  ml="6rem"
                  w="8rem"
                  h="2.9rem"
                  borderRadius="2rem"
                  _hover={{
                    background: "white",
                    color: "#39B7FF",
                    border: "2px solid #39B7FF",
                  }}
                  bg="#257CFF"
                  color="white"
                  py={{ base: "0rem", md: "0.1rem", lg: "1.5rem" }}
                  px={{ base: "1.5rem", md: "2.2rem", lg: "2.2rem" }}
                >
                  <Link to={"/signup"}>Sign Up</Link>
                </Button>
              )}
            </Accordion>
          </DrawerContent>
        </Drawer>
      </Show>
    </>
  );
};

export default Navbar;
