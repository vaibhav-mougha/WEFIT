import { Button, Checkbox, Input } from "@chakra-ui/react";
import React from "react";
import "./Filters.scss";
import { useState } from "react";
//http://localhost:8080/exercise?q=biceps
const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
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
        <Input
          className="app__search-input"
          size={["sm", "sm", "md", "md"]}
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          onClick={() => onSearch(query)}
          variant="outline"
          size={["sm", "sm", "md", "md"]}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
