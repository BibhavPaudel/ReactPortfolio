import React from "react";
import { Avatar, Heading, VStack,Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Bibhav!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar
      name="Bibhav paudel"
      src="https://i.pravatar.cc/150?img=7"
      size="2x"

    />
    <Text>{greeting}</Text>
    <br/>
    <Heading>{bio1}</Heading>
    <Heading>{bio2}</Heading>
  </FullScreenSection>
);

export default LandingSection;
