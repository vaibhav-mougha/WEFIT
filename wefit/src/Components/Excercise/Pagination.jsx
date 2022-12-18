import { Box, Button } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Pagination = ({ page, onChange, total }) => {
  const prev = (
    <Button
      size={"sm"}
      color="blue.600"
      variant="ghost"
      disabled={page === 1}
      onClick={() => onChange(page - 1)}
    >
      <IoIosArrowBack />
    </Button>
  );
  const next = (
    <Button
      size={"sm"}
      color="blue.600"
      variant="ghost"
      disabled={page === total}
      onClick={() => onChange(page + 1)}
    >
      <IoIosArrowForward />
    </Button>
  );
  const pages = new Array(total).fill(0).map((a, i) => (
    <Button
      size={"sm"}
      key={i}
      color="white"
      backgroundColor="blue.500"
      onClick={() => onChange(i + 1)}
      disabled={page === i + 1}
      _hover={{backgroundColor:"blue.600"}}
    >
      {i + 1}
    </Button>
  ));
  return (
    <Box display="flex" gap={1} p={2}>
      {prev}
      {pages}
      {next}
    </Box>
  );
};
export default Pagination;
