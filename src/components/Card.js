import { Heading, HStack, Image, Text, VStack ,Box} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
return(
  // <VStack>
  //   <Image src={imageSrc}
  //   boxSize="200px"
  //   >
  //   </Image>
  //   <Heading>ht</Heading>
  //   <Text>rht </Text>
  //   <Text> rthd</Text>
  // </VStack>

  <VStack spacing={8}>
  <Box width="md" bg="white" borderRadius="lg">
<Image src={imageSrc} alt={title}/>
<Box px="6" py="3"><Heading size="md" color="black">{title}</Heading></Box>
<Box px="6" ><Text size="lg" color="darkgrey">{description}</Text></Box>
<HStack>
<Box px="6" py="2"><Text size="lg" color="darkgrey">See More -> </Text> 
 </Box>
 <Box>
  <FontAwesomeIcon icon={faArrowRight} size="1x"/></Box>
 
 </HStack>

  </Box>
</VStack>
  )
};


export default Card;
