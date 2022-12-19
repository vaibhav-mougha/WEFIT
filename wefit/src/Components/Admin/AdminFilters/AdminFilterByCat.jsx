import { Box, Button, Center, Grid, GridItem, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import AddExercises from "./AddExercises";
import Exercises from "./AdminExercises";
import Pagination from "./AdminPagination";
const categories = "all categories";

const catByBodyParts = [
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];
const catByTragetMuscles = [
  "abductors",
  "abs",
  "adductors",
  "biceps",
  "calves",
  "cardiovascular system",
  "delts",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "levator scapulae",
  "pectorals",
  "quads",
  "serratus anterior",
  "spine",
  "traps",
  "triceps",
  "upper back",
];
const catByEquipments = [
  "assisted",
  "band",
  "barbell",
  "body weight",
  "bosu ball",
  "cable",
  "dumbbell",
  "elliptical machine",
  "ez barbell",
  "hammer",
  "kettlebell",
  "leverage machine",
  "medicine ball",
  "olympic barbell",
  "resistance band",
  "roller",
  "rope",
  "skierg machine",
  "sled machine",
  "smith machine",
  "stability ball",
  "stationary bike",
  "stepmill machine",
  "tire",
  "trap bar",
  "upper body ergometer",
  "weighted",
  "wheel roller",
];
const filterByTargetMuscles = "Filter By Target Muscles";
const filterByBodyParts = "Filter By Body Parts";
const filterByEquipments = "Filter By Equipments";
import Search from "./AdminSearch";
const FilterByCat = ({
  data,
  setCurrPageHandler,
  totalPages,
  loading,
  allClickCat,
}) => {
  const [filterbytargetmuscles, setTargetmuscles] = useState(
    filterByTargetMuscles
  );
  const [filterbdyparts, setBodyParts] = useState(filterByBodyParts);
  const [filterEquipments, setEquipments] = useState(filterByBodyParts);

  const handlePageChange = (currentPage) => {
    setCurrPageHandler(currentPage);
  };
  const allCatHandler = () => {
    allClickCat();
  };

  const searchHandler = (query) => {
    setSearchTerm(query);
  };

  return (
    <>
      <Box display={{lg:"flex"}} mt="2rem" justify="space-between"
      // border="1px solid black"
      w="50%"
      >

        {/* All Categories */}
        <Button
          onClick={allCatHandler}
          variant={"outline"}
          textTransform={"capitalize"}
        >
          {categories}
        </Button>

        {/*  Add New Exercise */}
        <AddExercises />
      </Box>

      <Exercises data={data} loading={loading} />
      <Pagination totalPages={totalPages} onSwitchPage={handlePageChange} />
    </>
  );
};

export default FilterByCat;
