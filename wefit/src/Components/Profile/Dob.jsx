import React from "react";
import {
  Box,
  Input,
} from "@chakra-ui/react";

const Dob = () => {
  return (
    <Box mt="1rem" display="flex">
      <Input
        placeholder="Select Date and Time"
        size={{ base: "sm", md: "md", lg: "md" }}
        w={{ base: "50%", md: "40%", lg: "40%" }}
        type="datetime-local"
      />

      {/* <FormControl >
       
        <Select placeholder="January" size="xs" w="10rem">
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>Octber</option>
          <option>November</option>
          <option>December</option>
        </Select>
      </FormControl>

      <Stack shouldWrapChildren direction="row" ml={{base:"-8rem",md:"-14.7rem",lg:"-24.7rem"}} mt="0.15rem">
        <NumberInput size="xs" maxW={16} defaultValue={1} min={1} max={31} >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Stack>

      <Stack shouldWrapChildren direction="row"  ml="0.6rem" mt="0.15rem">
        <NumberInput
          size="xs"
          maxW={20}
          defaultValue={1989}
          min={1921}
          max={2010}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Stack> */}
    </Box>
  );
};

export default Dob;
