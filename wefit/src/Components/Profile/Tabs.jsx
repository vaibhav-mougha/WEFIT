import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Textarea,
  Button,
  Image,
  CircularProgress,
  CircularProgressLabel,
  Grid,
  Progress,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../Redux/Profile/profile.actions";
import TrainingStats from "./TrainingStats";

const UserTabs = () => {
  const profile = useSelector((store) => store.profile.data);
  const dispatch = useDispatch();

  let height = profile && profile.height;
  let weight = profile && profile.weight;

  let h = Number(height);
  let w = Number(weight);
  let formula = w / (h / 100) ** 2;
  let BMI = Number.parseFloat(formula).toFixed(2);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>
            <Text fontSize={{ base: "0.7rem", lg: "1rem" }}>Home</Text>
          </Tab>
          <Tab>
            <Text fontSize={{ base: "0.7rem", lg: "1rem" }}>Body Stats</Text>
          </Tab>
          <Tab>
            <Text fontSize={{ base: "0.7rem", lg: "1rem" }}>
              Training Stats
            </Text>
          </Tab>
          <Tab>
            <Text fontSize={{ base: "0.7rem", lg: "1rem" }}>
              Progress Photos
            </Text>
          </Tab>
        </TabList>

        <TabPanels>
          {/* Home */}
          <TabPanel>
            <Text textAlign="left">Status:</Text>

            <Box display="flex">
              <Textarea
                w="70%"
                mt="0.5rem"
                placeholder="Update your status... (or share a youtube video?)"
              />
              <Button colorScheme="blue" variant="solid" ml="1rem" mt="2.5rem">
                Post
              </Button>
            </Box>

            <Text textAlign="left" mt="2rem">
              Tools and Resources:
            </Text>

            <Box
              display={{ lg: "flex" }}
              mt="1rem"
              justifyContent="space-between"
              // border="1px solid black"
              w="85%"
              ml=""
            >
              <Box>
                <Button
                  colorScheme="blue"
                  variant="outline"
                  size={{ base: "md", md: "md" }}
                >
                  <Image src="https://www.jefit.com/images/traininglogicon.png" />
                  Log Workout
                </Button>
              </Box>
              <Box mt={{ base: "0.5rem", md: "0rem", lg: "0rem" }}>
                <Button
                  colorScheme="blue"
                  variant="outline"
                  size={{ base: "md", md: "md" }}
                >
                  <Image src="https://www.jefit.com/images/bodystatusicon.png" />
                  Body Stats
                </Button>
              </Box>
              <Box mt={{ base: "0.5rem", md: "0rem", lg: "0rem" }}>
                <Button
                  colorScheme="blue"
                  variant="outline"
                  size={{ base: "md", md: "md" }}
                >
                  <Image src="https://www.jefit.com/images/takepictureicon.png" />
                  Progress Pic
                </Button>
              </Box>
            </Box>

            <Box
              bg="#D9EDF7"
              textAlign="left"
              mt="2rem"
              color="#31708F"
              fontSize="0.8rem"
            >
              <Text>
                Please activate your JEFIT account by clicking the link in your
                activation email. Only email activated accounts are allowed to
                post or upload pictures.
              </Text>
              <Text>
                - If you need to change your email address, click <b>here.</b>
              </Text>
              <Text>
                - If you need to resend the activation email, click <b>here.</b>
              </Text>
            </Box>

            <Text textAlign="left" mt="2rem">
              Activity Feed
            </Text>

            <Box
              border="0.1rem solid gray"
              mt="1rem"
              p="1rem"
              borderRadius="1rem"
            >
              <Text textAlign="left">Suggested Friends</Text>
              <Image src="Assets/suggestedFriends.jpg" />
            </Box>
          </TabPanel>

          {/* Body Stats */}
          <TabPanel>
            <Text textAlign="left" mt="0.2rem">
              Latest Body Stats
            </Text>
            <hr />

            <Box display="flex">
              <Box display="flex" justifyContent="left" mt="1rem">
                <Image src="https://www.jefit.com/images/male_setup1.jpg" />
              </Box>

              <Box mt="3rem">
                <Box>
                  <Text fontSize="0.9rem" color="gray">
                    Current Weight
                  </Text>
                  <Text fontSize="2rem" color="#257CFF">
                    {w}kgs
                  </Text>
                  <hr />
                </Box>

                <Box mt="1rem">
                  <Text fontSize="0.9rem" color="gray">
                    Lean Body Mass
                  </Text>
                  <Text fontSize="2rem" color="gray">
                    62 Kgs
                  </Text>
                  <hr />
                </Box>

                <Box mt="1rem">
                  <Text fontSize="0.9rem" color="gray">
                    Body Fat Mass
                  </Text>
                  <Text fontSize="2rem" color="gray">
                    0 Kgs
                  </Text>
                  <hr />
                </Box>

                <Box mt="1rem">
                  <Text fontSize="0.9rem" color="gray">
                    BMI
                  </Text>
                  <Text fontSize="2rem" color="gray">
                    {/* 22.5 */}
                    {BMI}
                    {/* Body mass index (BMI) is a person's weight in kilograms divided by the square of height in meters. */}
                  </Text>
                  <hr />
                </Box>
              </Box>

              <Box pt="5rem" pl="1rem">
                <CircularProgress value={10} size="14rem">
                  <CircularProgressLabel>
                    <Text color="gray" fontSize="2rem">
                      {" "}
                      10 %
                    </Text>
                  </CircularProgressLabel>
                </CircularProgress>
              </Box>
            </Box>

            <Text textAlign="left" mt="2rem">
              Body Stat Goal Progress
            </Text>
            <hr />

            <Grid templateColumns="repeat(2, 1fr)" gap={7} rowGap={0.5}>
              {/* first Box */}
              <Box>
                <Text textAlign="left" color="gray" mt="1rem">
                  Weight
                </Text>
                <Box display="flex">
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF">
                      72
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      of Goal
                    </Text>
                  </Box>
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF" ml="1rem">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      kgs
                    </Text>
                  </Box>
                </Box>
                <Box border="1px solid gray" p="0.3rem" borderRadius="1rem">
                  <Progress value={80} />
                </Box>
                <Text textAlign="center" fontSize="0.8rem">
                  Goal Progress:0.00%
                </Text>
              </Box>

              {/* Second Box */}
              <Box>
                <Text textAlign="left" color="gray" mt="1rem">
                  Body Fat
                </Text>
                <Box display="flex">
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      of Goal
                    </Text>
                  </Box>
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF" ml="1rem">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      kgs
                    </Text>
                  </Box>
                </Box>
                <Box border="1px solid gray" p="0.3rem" borderRadius="1rem">
                  <Progress value={80} />
                </Box>
                <Text textAlign="center" fontSize="0.8rem">
                  Goal Progress:0.00%
                </Text>
              </Box>

              {/* third Box */}
              <Box>
                <Text textAlign="left" color="gray" mt="1rem">
                  Neck
                </Text>
                <Box display="flex">
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      of Goal
                    </Text>
                  </Box>
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF" ml="1rem">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      kgs
                    </Text>
                  </Box>
                </Box>
                <Box border="1px solid gray" p="0.3rem" borderRadius="1rem">
                  <Progress value={80} />
                </Box>
                <Text textAlign="center" fontSize="0.8rem">
                  Goal Progress:0.00%
                </Text>
              </Box>

              {/* Fourth Box */}
              <Box>
                <Text textAlign="left" color="gray" mt="1rem">
                  Shoulder
                </Text>
                <Box display="flex">
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      of Goal
                    </Text>
                  </Box>
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF" ml="1rem">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      kgs
                    </Text>
                  </Box>
                </Box>
                <Box border="1px solid gray" p="0.3rem" borderRadius="1rem">
                  <Progress value={80} />
                </Box>
                <Text textAlign="center" fontSize="0.8rem">
                  Goal Progress:0.00%
                </Text>
              </Box>

              {/* fifth Box */}
              <Box>
                <Text textAlign="left" color="gray" mt="1rem">
                  Arms
                </Text>
                <Box display="flex">
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      of Goal
                    </Text>
                  </Box>
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF" ml="1rem">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      kgs
                    </Text>
                  </Box>
                </Box>
                <Box border="1px solid gray" p="0.3rem" borderRadius="1rem">
                  <Progress value={80} />
                </Box>
                <Text textAlign="center" fontSize="0.8rem">
                  Goal Progress:0.00%
                </Text>
              </Box>

              {/* sixth Box */}
              <Box>
                <Text textAlign="left" color="gray" mt="1rem">
                  Chest
                </Text>
                <Box display="flex">
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      of Goal
                    </Text>
                  </Box>
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF" ml="1rem">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      kgs
                    </Text>
                  </Box>
                </Box>
                <Box border="1px solid gray" p="0.3rem" borderRadius="1rem">
                  <Progress value={80} />
                </Box>
                <Text textAlign="center" fontSize="0.8rem">
                  Goal Progress:0.00%
                </Text>
              </Box>

              {/* seventh Box */}
              <Box>
                <Text textAlign="left" color="gray" mt="1rem">
                  Waist
                </Text>
                <Box display="flex">
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      of Goal
                    </Text>
                  </Box>
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF" ml="1rem">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      kgs
                    </Text>
                  </Box>
                </Box>
                <Box border="1px solid gray" p="0.3rem" borderRadius="1rem">
                  <Progress value={80} />
                </Box>
                <Text textAlign="center" fontSize="0.8rem">
                  Goal Progress:0.00%
                </Text>
              </Box>

              {/* eigth Box */}
              <Box>
                <Text textAlign="left" color="gray" mt="1rem">
                  Foremarms
                </Text>
                <Box display="flex">
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      of Goal
                    </Text>
                  </Box>
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF" ml="1rem">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      kgs
                    </Text>
                  </Box>
                </Box>
                <Box border="1px solid gray" p="0.3rem" borderRadius="1rem">
                  <Progress value={80} />
                </Box>
                <Text textAlign="center" fontSize="0.8rem">
                  Goal Progress:0.00%
                </Text>
              </Box>

              {/* ninth Box */}
              <Box>
                <Text textAlign="left" color="gray" mt="1rem">
                  Calves
                </Text>
                <Box display="flex">
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      of Goal
                    </Text>
                  </Box>
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF" ml="1rem">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      kgs
                    </Text>
                  </Box>
                </Box>
                <Box border="1px solid gray" p="0.3rem" borderRadius="1rem">
                  <Progress value={80} />
                </Box>
                <Text textAlign="center" fontSize="0.8rem">
                  Goal Progress:0.00%
                </Text>
              </Box>

              {/* tenth Box */}
              <Box>
                <Text textAlign="left" color="gray" mt="1rem">
                  Thigh
                </Text>
                <Box display="flex">
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      of Goal
                    </Text>
                  </Box>
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF" ml="1rem">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      kgs
                    </Text>
                  </Box>
                </Box>
                <Box border="1px solid gray" p="0.3rem" borderRadius="1rem">
                  <Progress value={80} />
                </Box>
                <Text textAlign="center" fontSize="0.8rem">
                  Goal Progress:0.00%
                </Text>
              </Box>

              {/* eleventh Box */}
              <Box>
                <Text textAlign="left" color="gray" mt="1rem">
                  Hips
                </Text>
                <Box display="flex">
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      of Goal
                    </Text>
                  </Box>
                  <Box display="flex">
                    <Text fontSize="2rem" color="#257CFF" ml="1rem">
                      0
                    </Text>
                    <Text
                      fontSize="0.9rem"
                      color="gray"
                      pt="1.2rem"
                      ml="0.3rem"
                    >
                      kgs
                    </Text>
                  </Box>
                </Box>
                <Box border="1px solid gray" p="0.3rem" borderRadius="1rem">
                  <Progress value={80} />
                </Box>
                <Text textAlign="center" fontSize="0.8rem">
                  Goal Progress:0.00%
                </Text>
              </Box>
            </Grid>
          </TabPanel>

          {/* Training Stats */}
          <TabPanel>
            <Text textAlign="left" mt="0.2rem">
              Benchmark Exercise Progress
            </Text>
            <hr />

            <TrainingStats />
          </TabPanel>

          {/* Progress Photos */}
          <TabPanel>
            <Text textAlign="left" mt="0.2rem">
              Progress Pictures
            </Text>
            <hr />
            <Image
              mt="2rem"
              w="30%"
              src="https://www.jefit.com/assets/img/group-avatar.png"
            />
            <Button colorScheme="gray" color="gray" variant="outline" mt="2rem">
              No Pictures Found Upload now to enable progress photo comparison
              feature.
            </Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default UserTabs;