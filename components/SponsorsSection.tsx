import { Flex, Heading, Text } from "@chakra-ui/react";
import { SponsorsCarousel } from "./SponsorsCarousel";

export function SponsorsSection() {
  return (
    <Flex bgColor="brand.background" direction="column" gap="8">
      <Heading textAlign="center" as="h2" fontSize="xl" color="brand.green">Apoiadores</Heading>
      <Text color="brand.white" fontSize="2xl" textAlign="center" fontWeight="bold">
        Com a ajuda deles que o evento será realizado
      </Text>
      <SponsorsCarousel />
    </Flex>
  )
}