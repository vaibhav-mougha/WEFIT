import React from 'react'
import { Box, Button, Flex, Grid, Input } from "@chakra-ui/react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../../Styles/Excercise.module.css";


const FilterBoxes = ({getData}) => {

    const [searchParams, setSearchParams] = useSearchParams();
    // const [click,setClick] = React.useState(true);
    // const closeMenu = () => {
    //     setClick(!click);
    // }
    const [type, settype] = useState(searchParams.getAll("type") || []);
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
      settype(newtypeOptions);
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
        <Flex paddingTop="20px" justifyContent="center">
        </Flex>
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
            <Box ml={{base:"0px", md:"20px", lg:"50px"}} fontWeight={600}>Muscles</Box>
            <Flex className={styles.buttons} flexDirection="column" alignItems="flex-start">
              <NavLink onClick={() => getData("excercises")}>All</NavLink>
              <NavLink onClick={() => getData("abs")}>Abs</NavLink>
              <NavLink onClick={() => getData("back")}>Back</NavLink>
              <NavLink onClick={() => getData("biceps")}>Biceps</NavLink>
              <NavLink onClick={() => getData("chest")}>Chest</NavLink>
              <NavLink onClick={() => getData("forearm")}>Forearm</NavLink>
            </Flex>
            <Flex className={styles.buttons} flexDirection="column" alignItems="flex-start">
              <NavLink onClick={() => getData("glutes")}>Glutes</NavLink>
              <NavLink onClick={() => getData("shoulders")}>Shoulders</NavLink>
              <NavLink onClick={() => getData("triceps")}>Triceps</NavLink>
              <NavLink onClick={() => getData("upperlegs")}>Upper Legs</NavLink>
              <NavLink onClick={() => getData("lowerlegs")}>Lower Legs</NavLink>
              <NavLink onClick={() => getData("cardio")}>Cardio</NavLink>
            </Flex>
          </Grid>
          <Grid
            w="50%"
            templateColumns={{base: "repeat(1,1fr)",md: "repeat(3, 1fr)",lg: "repeat(3,1fr)"}}
            alignItems="center"
          >
            <Box ml={{base:"0px", md:"20px", lg:"50px"}} fontWeight={600}>Equipment</Box>
            <Flex flexDirection="column" alignItems="flex-start" justifyContent="center" className={styles.flex}>
              <Box>
                <input
                  type="checkbox"
                  name="Bands"
                  checked={equipment.includes("bands")}
                  className="equipment"
                  value="bands"
                  onChange={handleChangeEquipments}
                />
                <label style={{marginLeft:"5px"}} htmlFor="Bands">Bands</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Barbell"
                  checked={equipment.includes("barbell")}
                  className="all"
                  value="barbell"
                  onChange={handleChangeEquipments}
                />
                <label htmlFor="Barbell">Barbell</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Bench"
                  checked={equipment.includes("bench")}
                  className="all"
                  value="bench"
                  onChange={handleChangeEquipments}
                />
                <label htmlFor="Bench">Bench</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Body Only"
                  checked={equipment.includes("body Only")}
                  className="all"
                  value="body Only"
                  onChange={handleChangeEquipments}
                />
                <label htmlFor="Body Only">Body Only</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Dumbell"
                  checked={equipment.includes("dumbbell")}
                  className="all"
                  value="dumbbell"
                  onChange={handleChangeEquipments}
                />
                <label htmlFor="Dumbbell">Dumbbell</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Exercise Ball"
                  checked={equipment.includes("exerciseball")}
                  className="all"
                  value="exerciseball"
                  onChange={handleChangeEquipments}
                />
                <label htmlFor="Exercise Ball">Exercise Ball</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Ez - Bar"
                  checked={equipment.includes("ez Bar")}
                  className="all"
                  value="ez Bar"
                  onChange={handleChangeEquipments}
                />
                <label htmlFor="Ez - Bar">EZ - Bar</label>
              </Box>
            </Flex>
            <Flex flexDirection="column" alignItems="flex-start" className={styles.flex}>
              <Box>
                <input
                  type="checkbox"
                  name="Foam Roll"
                  checked={equipment.includes("foamroll")}
                  className="all"
                  value="foamroll"
                  onChange={handleChangeEquipments}
                />
                <label htmlFor="Foam Roll">Foam Roll</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Kettlebell"
                  checked={equipment.includes("kettlebell")}
                  className="equipment"
                  value="kettlebell"
                  onChange={handleChangeEquipments}
                />
                <label htmlFor="Kettlebell">Kettlebell</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Machine - Cardio"
                  checked={equipment.includes("machinecardio")}
                  className="all"
                  value="machinecardio"
                  onChange={handleChangeEquipments}
                />
                <label htmlFor="Machine - Cardio">Machine - Cardio</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Machine - Strength"
                  checked={equipment.includes("machine strength")}
                  className="all"
                  value="machine strength"
                  onChange={handleChangeEquipments}
                />
                <label htmlFor="Machine - Strength">Machine - Strength</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Other"
                  checked={equipment.includes("other")}
                  className="all"
                  value="other"
                  onChange={handleChangeEquipments}
                />
                <label htmlFor="Other">Other</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Pull Bar"
                  checked={equipment.includes("pullbar")}
                  className="all"
                  value="pullbar"
                  onChange={handleChangeEquipments}
                />
                <label htmlFor="Pull Bar">Pull Bar</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Weight Plate"
                  checked={equipment.includes("weightplate")}
                  className="all"
                  value="weightplate"
                  onChange={handleChangeEquipments}
                />
                <label htmlFor="Weight Plate">Weight Plate</label>
              </Box>
            </Flex>
          </Grid>
        </Flex>
        <Flex w="100%"  justifyContent="flex-start" rowGap="20px">
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
            <Box ml={{base:"0px", md:"20px", lg:"50px"}} fontWeight={600}>Type</Box>
            <Flex flexDirection="column" justifyContent="space-between" alignItems="" className={styles.flex}>
              <Box>
                <input
                  type="checkbox"
                  name="Strength"
                  className="all"
                  value="strength"
                  checked={type.includes("strength")}
                  onChange={handleTypeChange}
                />
                <label htmlFor="Strength">Strength</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Stretching"
                  className="all"
                  value="stretching"
                  checked={type.includes("stretching")}
                  onChange={handleTypeChange}
                />
                <label htmlFor="Stretching">Stretching</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Powerlifting"
                  className="all"
                  value="powerlifting"
                  checked={type.includes("powerlifting")}
                  onChange={handleTypeChange}
                />
                <label htmlFor="Powerlifting">Powerlifting</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Olympic Weight Lifting"
                  className="all"
                  value="olympicweightLifting"
                  checked={type.includes("olympicweightLifting")}
                  onChange={handleTypeChange}
                />
                <label htmlFor="Olympic Weight Lifting">Olympic Weight</label>
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
            <Box ml={{base:"0px", md:"20px", lg:"50px"}} fontWeight={600}>Difficulty</Box>
            <Flex flexDirection="column" alignItems="flex-start" className={styles.flex}>
              <Box>
                <input
                  type="checkbox"
                  name="Beginner"
                  className="all"
                  value="beginner"
                  checked={difficulty.includes("beginner")}
                  onChange={handleDifficulty}
                />
                <label htmlFor="Beginner">Beginner</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Intermediate"
                  className="all"
                  value="intermediate"
                  checked={difficulty.includes("intermediate")}
                  onChange={handleDifficulty}
                />
                <label htmlFor="Intermediate">Intermediate</label>
              </Box>
              <Box>
                <input
                  type="checkbox"
                  name="Expert"
                  className="all"
                  value="expert"
                  checked={difficulty.includes("expert")}
                  onChange={handleDifficulty}
                />
                <label htmlFor="Expert">Expert</label>
              </Box>
            </Flex>
          </Grid>
          <Flex className={styles.singlebtn} direction={{base:"column", sm:"column", md:"column", lg:"row"}} w="33%" alignItems="center" gap="6px" justifyContent="flex-end" >
            <Input type="text" h="27px" borderColor="gray.400" />
            <Button>Search</Button>
          </Flex>
        </Flex>
      </Box>
    );
}

export default FilterBoxes

