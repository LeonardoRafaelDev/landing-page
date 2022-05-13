import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { HiCalendar, HiLocationMarker, HiMail } from "react-icons/hi";
import { Button } from "./Button";
import { HorizontalInfo } from "./HorizontalInfo";
import { NavBar } from "./NavBar";

export function MainInfo() {
  return (
    <SimpleGrid
      bgImage="url(main-info-bg.png)"
      bgSize="cover"
      w="100%"
      h={["95vh", "100vh"]}
      flexDirection="column"
    >
      <NavBar />
      <Flex align="center"
        justify="center"
        flexDirection="column"
        justifySelf="center"
        gap="8"
      >
        <Heading color="white" textAlign="center">
          Venha conhecer a <Text color="brand.green">Wonder Tech 2022</Text>
        </Heading>
        <Text color="brand.gray" textAlign="center" fontWeight="bold" px="4">
          Tecnologia - Consciência Social - Desenvolvimento Profissional
        </Text>
        <Button href="https://aka.ms/Checkin.WonderTech2020" target="_blank">Fazer inscrição online</Button>
        <Flex direction={["column", "row-reverse"]} px="6" gap={["4", "16"]}>
          <HorizontalInfo
            icon={HiLocationMarker}
            title="Endereço"
            content="Rua Pascoal Pais, 525 - 3 e 4° andar Brooklin, São Paulo"
            isLink
            href="https://goo.gl/maps/jeNFU1Q2rPuLsRiW9"
          />
          <HorizontalInfo
            icon={HiCalendar}
            title="Data"
            content="13 de maio de 2022 às 17h"
          />
          <HorizontalInfo
            icon={HiMail}
            title="Contato"
            content="vanny@onlydatafans.com"
          />
        </Flex>

      </Flex>
    </SimpleGrid>
  )
}