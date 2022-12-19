import React from "react";
import { GridItem, Grid, Image, Box, Button, Center } from "@chakra-ui/react";
import styles from "../../Styles/Excercise.module.css";
import { useNavigate } from "react-router";

const MuscleGroup = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/exercise/filter");
  };
  return (
    <Box
      position="relative"
      w={{ base: "90vw", md: "75vw", lg: "45vw" }}
      h={{ base: "65vw", md: "50vw", lg: "34vw" }}
      margin="auto"
    >
      <Grid className={styles.muscle}>
        <GridItem>
          <Button size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}>
            Triceps
          </Button>
        </GridItem>
        <GridItem colSpan={2}></GridItem>
        <GridItem>
          <Button size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}>
            Shoulders
          </Button>
        </GridItem>
        <GridItem>
          <Button size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}>
            Biceps
          </Button>
        </GridItem>
        <GridItem colSpan={2}></GridItem>
        <GridItem>
          <Button size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}>
            Chest
          </Button>
        </GridItem>
        <GridItem>
          <Button size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}>
            Back
          </Button>
        </GridItem>
        <GridItem colSpan={2}></GridItem>
        <GridItem>
          <Button size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}>
            Forearms
          </Button>
        </GridItem>
        <GridItem>
          <Button size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}>
            Glutes
          </Button>
        </GridItem>
        <GridItem colSpan={2}></GridItem>
        <GridItem>
          <Button size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}>
            Abs
          </Button>
        </GridItem>
        <GridItem>
          <Button size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}>
            Lower Legs
          </Button>
        </GridItem>
        <GridItem colSpan={2} position="relative">
          <Button
            position="absolute"
            bottom="0px"
            size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
          >
            Cardio
          </Button>
        </GridItem>
        <GridItem>
          <Button size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}>
            Upper Legs
          </Button>
        </GridItem>
      </Grid>
      <Image
        className={styles.muscleimg}
        src="https://i.ibb.co/7J6mGV1/stock-photo-d-rendering-muscle-galloping-body-builder-59708131-transformed.png"
        alt="musclegroup"
      />
      <Center className={styles.singlebtn} mt="20px">
        <Button
          size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
          textAlign="center"
          color="rgb(88, 95, 105)"
          onClick={handleClick}
        >
          View All Excercises
        </Button>
      </Center>
    </Box>
  );
};

export default MuscleGroup;
