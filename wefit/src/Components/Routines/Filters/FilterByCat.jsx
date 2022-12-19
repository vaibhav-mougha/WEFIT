import { Button, Center, Grid, GridItem, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import Exercises from "./Exercises";
import Pagination from "./Pagination";
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
  return (
    <>
      <Grid
        gap={"8"}
        mt={"8"}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
      >
        <GridItem>
          <Center>
            <Button
              onClick={allCatHandler}
              variant={"outline"}
              textTransform={"capitalize"}
            >
              {categories}
            </Button>
          </Center>
        </GridItem>
        <GridItem>
          <Select
            cursor={"pointer"}
            onChange={(e) => setBodyParts(e.target.value)}
          >
            <option value="filterbybodyparts">{filterByBodyParts}</option>
            {catByBodyParts.map((cat, i) => (
              <option value={cat} key={i}>
                {cat}
              </option>
            ))}
          </Select>
        </GridItem>
        <GridItem>
          <Select
            cursor={"pointer"}
            onChange={(e) => setTargetmuscles(e.target.value)}
          >
            <option value="filterbytargetmuscles">
              {filterByTargetMuscles}
            </option>
            {catByTragetMuscles.map((cat, i) => (
              <option value={cat} key={i}>
                {cat}
              </option>
            ))}
          </Select>
        </GridItem>
        <GridItem>
          <Select
            cursor={"pointer"}
            onChange={(e) => setEquipments(e.target.value)}
          >
            <option value="filterbyequipments">{filterByEquipments}</option>
            {catByEquipments.map((cat, i) => (
              <option value={cat} key={i}>
                {cat}
              </option>
            ))}
          </Select>
        </GridItem>
      </Grid>
      <Exercises data={data} loading={loading} />
      <Pagination totalPages={totalPages} onSwitchPage={handlePageChange} />
    </>
  );
};

export default FilterByCat;
