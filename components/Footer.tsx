import { Box, Container, Divider, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { FooterInfo } from "./FooterInfo";
import { FooterNavigation } from "./FooterNavigation";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <Box bgColor="brand.black" px="4" py="8">
      <Container maxW={1180} px="8">
        <SimpleGrid
          columns={[1, 1, 2]}
          templateColumns={["100%", "40% 60%"]}
          gap="4">
          <FooterNavigation />
          <Flex direction="column" gap="4">
            <FooterInfo />
            <Newsletter />
          </Flex>
        </SimpleGrid>
        <Divider mt={["42px", "64px"]} mb={["32px", "42px"]} />
        <Text fontWeight={700} color="brand.white">
          Design por <Link href="https://www.behance.net/nexturhe4rt" target="_blank" color="brand.green">@NexTuRHe4rt</Link>
        </Text>
      </Container>
    </Box>
  )
}