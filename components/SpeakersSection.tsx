import { Container, Flex, Heading, Text } from '@chakra-ui/react';

export function SpeakersSection() {
    return (
        <Flex bg="brand.background">
            <Container maxW="1300px">
                <Flex flexDir="column" justify="center" align="center">
                    <Heading as="h4" fontSize="2xl" color="brand.green" marginBottom="32px">Convidados</Heading>
                    <Heading as="h1" fontSize="4xl" textAlign="center" color="brand.white" marginBottom="16px">Lorem Ipsum dolor Sit amet consectetur</Heading>
                    <Text textAlign="center" w={{ base: '80%', md: '70%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet convallis risus, eget sagittis tellus convallis ac. In vel libero a libero tincidunt suscipit.</Text>
                </Flex>
            </Container>
        </Flex>
    )
}