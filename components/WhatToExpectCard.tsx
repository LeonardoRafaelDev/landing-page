import { Box, Heading, Icon, Square, Stack } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface WhatToExpectCardPros {
      icon: IconType,
      title: string,
      BgColor: string,
      IconColor:string,
}
export function WhatToExpectCard({icon, title, IconColor, BgColor}:WhatToExpectCardPros) {
      return (
      <Box pt="7" px="7" bg="brand.black" height="160px" minWidth={["300px", "320px", "350px", "370px"]}>
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
      </Stack>
      </Box>
      );
}