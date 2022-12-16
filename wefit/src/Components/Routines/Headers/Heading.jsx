import React from "react";
import { Container, Text } from "@chakra-ui/react";
import "./Headers.scss";

const Heading = ({ heading, title, text }) => {
  return (
    <Container className="app__headers-container" maxW="2xl" centerContent>
      <Text className="app__heading">{heading}</Text>
      <Text className="app__heading-title">{title}</Text>
      <Text className="app__heading-content">{text}</Text>
    </Container>
  );
};

export default Heading;
