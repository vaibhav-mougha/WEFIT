import { Button, Checkbox, HStack, Input, Spacer } from "@chakra-ui/react";
import React from "react";
import "./Filters.scss";
const Search = () => {
  return (
    <div className="app__search-container">
      <div className="app__checkbox">
        <Checkbox colorScheme="green" className="app__check-input">
          Body Parts
        </Checkbox>
        <Checkbox className="app__check-input" colorScheme="green">
          Target Muscles
        </Checkbox>
        <Checkbox className="app__check-input" colorScheme="green">
          Equipments
        </Checkbox>
      </div>
      <div className="app__search">
        <Input placeholder="Search..." />
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default Search;
