import React from "react";
import { Box, Button, Checkbox, Flex, Grid, Input, Toast } from "@chakra-ui/react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../../Styles/Excercise.module.css";
import { useToast } from "@chakra-ui/react";

const FilterBoxes = ({ getData }) => {
  const toast = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState(searchParams.getAll("type") || []);
  const [difficulty, setDifficulty] = useState(
    searchParams.getAll("difficulty") || []
  );
  const [equipment, setEquipment] = useState(
    searchParams.getAll("equipment") || []
  );

  const handleTypeChange = (e) => {
    const option = e.target.value;
    let newtypeOptions = [...type];
    if (type.includes(option)) {
      newtypeOptions.splice(newtypeOptions.indexOf(option), 1);
    } else {
      newtypeOptions.push(option);
    }
    setType(newtypeOptions);
    toast({
      title: "filter applied",
      status: "success",
      duration: 1000,
      position:"top"
    })
  };

  const handleDifficulty = (e) => {
    const option = e.target.value;
    let newtypeOptions = [...difficulty];
    if (difficulty.includes(option)) {
      newtypeOptions.splice(newtypeOptions.indexOf(option), 1);
    } else {
      newtypeOptions.push(option);
    }
    setDifficulty(newtypeOptions);
    toast({
      title: "filter applied",
      status: "success",
      duration: 1000,
      position:"top"
    })
  };

  const handleChangeEquipments = (e) => {
    const option = e.target.value;
    let newtypeOptions = [...equipment];
    if (equipment.includes(option)) {
      newtypeOptions.splice(newtypeOptions.indexOf(option), 1);
    } else {
      newtypeOptions.push(option);
    }
    setEquipment(newtypeOptions);
    toast({
      title: "filter applied",
      status: "success",
      duration: 1000,
      position:"top"
    })
  };

  useEffect(() => {
    if (type && difficulty && equipment) {
      setSearchParams({ type, difficulty, equipment });
    }
  }, [type, difficulty, equipment, setSearchParams]);

  return (
    <Box
      fontSize="13px"
      w={{ base: "90%", md: "80%", lg: "70%" }}
      margin="auto"
    >
      <Flex paddingTop="20px" justifyContent="center"></Flex>
      <Flex>
        <Grid
          w="50%"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3,1fr)",
          }}
          alignItems="center"
        >
          <Box ml={{ base: "0px", md: "20px", lg: "50px" }} fontWeight={600}>
            Muscles
          </Box>
          <Flex
            className={styles.buttons}
            flexDirection="column"
            alignItems="flex-start"
          >
            <NavLink onClick={() => getData("excercises")}>All</NavLink>
            <NavLink onClick={() => getData("abs")}>Abs</NavLink>
            <NavLink onClick={() => getData("biceps")}>Biceps</NavLink>
            <NavLink onClick={() => getData("chest")}>Chest</NavLink>
            <NavLink onClick={() => getData("back")}>Back</NavLink>
            <NavLink onClick={() => getData("glutes")}>Glutes</NavLink>
          </Flex>
          <Flex
            className={styles.buttons}
            flexDirection="column"
            alignItems="flex-start"
          >
            <NavLink onClick={() => getData("forearm")}>Forearm</NavLink>
            <NavLink onClick={() => getData("shoulders")}>Shoulders</NavLink>
            <NavLink onClick={() => getData("triceps")}>Triceps</NavLink>
            <NavLink onClick={() => getData("upperlegs")}>Upper Legs</NavLink>
            <NavLink onClick={() => getData("lowerlegs")}>Lower Legs</NavLink>
            <NavLink onClick={() => getData("cardio")}>Cardio</NavLink>
          </Flex>
        </Grid>
        <Grid
          w="50%"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3,1fr)",
          }}
          alignItems="center"
        >
          <Box ml={{ base: "0px", md: "20px", lg: "50px" }} fontWeight={600}>
            Equipment
          </Box>
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            className={styles.flex}
          >
            <Box>
              <Checkbox
                name="Barbell"
                checked={equipment.includes("Barbell")}
                value="Barbell"
                onChange={handleChangeEquipments}
                size="sm"
               >Barbell</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Bench"
                checked={equipment.includes("Bench")}
                value="Bench"
                onChange={handleChangeEquipments}
                size="sm"
               >Bench</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Body Only"
                checked={equipment.includes("Body Only")}
                value="Body Only"
                onChange={handleChangeEquipments}
                size="sm"
               >Body Only</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Dumbell"
                checked={equipment.includes("Dumbell")}
                value="Dumbell"
                onChange={handleChangeEquipments}
                size="sm"
               >Dumbbell</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Exercise Ball"
                checked={equipment.includes("exerciseball")}
                value="exerciseball"
                onChange={handleChangeEquipments}
                size="sm"
               >Exercise Ball</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Bands"
                checked={equipment.includes("Bands")}
                value="Bands"
                onChange={handleChangeEquipments}
                size="sm"
               >
                Bands</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Ez - Bar"
                checked={equipment.includes("Ez Bar")}
                value="Ez Bar"
                onChange={handleChangeEquipments}
                size="sm"
               >EZ - Bar</Checkbox>
            </Box>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            className={styles.flex}
          >
            <Box>
              <Checkbox
                name="Foam Roll"
                checked={equipment.includes("foamroll")}
                value="foamroll"
                onChange={handleChangeEquipments}
                size="sm"
               >Foam Roll</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Kettlebell"
                checked={equipment.includes("kettlebell")}
                value="kettlebell"
                onChange={handleChangeEquipments}
                size="sm"
               >Kettlebell</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Machine - Cardio"
                checked={equipment.includes("machinecardio")}
                value="machinecardio"
                onChange={handleChangeEquipments}
                size="sm"
              >Machine - Cardio</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Machine - Strength"
                checked={equipment.includes("Machine strength")}
                value="Machine strength"
                onChange={handleChangeEquipments}
                size="sm"
              >Machine - Strength</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Other"
                checked={equipment.includes("other")}
                value="other"
                onChange={handleChangeEquipments}
                size="sm"
              >Other</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Pull Bar"
                checked={equipment.includes("pullbar")}
                value="pullbar"
                onChange={handleChangeEquipments}
                size="sm"
              >Pull Bar</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Weight Plate"
                checked={equipment.includes("weightplate")}
                value="weightplate"
                onChange={handleChangeEquipments}
                size="sm"
              >Weight Plate</Checkbox>
            </Box>
          </Flex>
        </Grid>
      </Flex>
      <Flex w="100%" justifyContent="flex-start" rowGap="20px">
        <Grid
          w="33%"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            lg: "repeat(2,1fr)",
          }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box ml={{ base: "0px", md: "20px", lg: "50px" }} fontWeight={600}>
            Type
          </Box>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            alignItems=""
            className={styles.flex}
          >
            <Box>
              <Checkbox
                name="Strength"
                value="Strength"
                checked={type.includes("Strength")}
                onChange={handleTypeChange}
                size="sm"
              >Strength</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Stretching"
                value="Stretching"
                checked={type.includes("Stretching")}
                onChange={handleTypeChange}
                size="sm"
              >Stretching</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Powerlifting"
                value="Powerlifting"
                checked={type.includes("Powerlifting")}
                onChange={handleTypeChange}
                size="sm"
              >Powerlifting</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Olympic Weight Lifting"
                value="Olympic WeightLifting"
                checked={type.includes("Olympic WeightLifting")}
                onChange={handleTypeChange}
                size="sm"
              >Olympic Weight</Checkbox>
            </Box>
          </Flex>
        </Grid>
        <Grid
          w="33%"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            lg: "repeat(2,1fr)",
          }}
          alignItems="center"
        >
          <Box ml={{ base: "0px", md: "20px", lg: "50px" }} fontWeight={600}>
            Difficulty
          </Box>
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            className={styles.flex}
          >
            <Box>
              <Checkbox
                name="Beginner"
                value="Beginner"
                checked={difficulty.includes("Beginner")}
                onChange={handleDifficulty}
                size="sm"
              >Beginner</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Intermediate"
                value="Intermediate"
                checked={difficulty.includes("Intermediate")}
                onChange={handleDifficulty}
                size="sm"
              >Intermediate</Checkbox>
            </Box>
            <Box>
              <Checkbox
                name="Expert"
                value="Expert"
                checked={difficulty.includes("Expert")}
                onChange={handleDifficulty}
                size="sm"
              >Expert</Checkbox>
            </Box>
          </Flex>
        </Grid>
        <Flex
          className={styles.singlebtn}
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          w="33%"
          alignItems="center"
          gap="6px"
          justifyContent="flex-end"
        >
          <Input type="text" h="27px" borderColor="gray.400" />
          <Button>Search</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FilterBoxes;
