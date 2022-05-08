import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function SupportMTST() {
  return (
    <Flex py="10" bgColor="brand.background" >
      <Container maxW={1180}>
        <Flex direction="column" justify="center" align="center" gap="2">
          <Heading as="h2" fontSize="xl" color="brand.green">Apoie agora mesmo</Heading>
          <Text fontSize="2xl" color="brand.white" align="center" fontWeight={700} >Lorem Ipsum dolor Sit amet consectetur</Text>
          <Text fontSize="lg" color="brand.gray" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet convallis risus, eget sagittis tellus convallis ac. In vel libero a libero tincidunt suscipit.
          </Text>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Blank_Square.svg/1024px-Blank_Square.svg.png"
            w="120px"
            h="120px"
          />
        </Flex>
      </Container>
    </Flex>
  )
}