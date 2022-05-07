import { Divider, Flex, Link, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex>
      <FooterNavigation />
      <FooterInfo />
      <Newsletter />
      <Divider />
      <Text fontWeight={700}>
        Design por <Link color="brand.green">@NexTuRHe4rt</Link>
      </Text>
    </Flex>
  )
}