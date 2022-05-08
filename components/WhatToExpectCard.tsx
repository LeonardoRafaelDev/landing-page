import { Icon, Text, Box,Stack,Heading,Square } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface WhatToExpectCardPros {
      icon: IconType,
      title: string,
      content: string,
      BgColor: string,
      IconColor:string,
}
export function WhatToExpectCard({icon, title, content,IconColor,BgColor}:WhatToExpectCardPros) {
      return (
      <Box pt="7" px="7" bg="brand.black" height="210px" minWidth={["300px", "320px", "350px", "370px"]}>
      <Stack>

            <Square 
            size="50px" 
            bg={BgColor}>

            <Icon 
            width="25px" 
            height="25px" 
            color={IconColor} 
            as={icon} />
            </Square>

            <Heading
            color={"white"}
            fontSize={"24px"}
            pt={"1"}
            pb={"0.8"}
            >
            {title}
            </Heading>

            <Text 
            color={"white"} 
            fontSize={"16px"}>
            {content}
            </Text>

      </Stack>
      </Box>
      );
}