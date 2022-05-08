import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function EventGoalSection() {
  return (
    <Flex
      bgColor="brand.background"
      id="evento"
    >
      <Container maxW={800} color="brand.gray" py="8">
        <Heading as="h2" fontSize="xl" color="brand.green" mb="4">A Missão do Evento</Heading>
        <Text>
          Todo mundo, seja um iniciante ou um especialista, tem uma história para contar. Ao contar sua história, as pessoas aprendem com ela, se identificam, encontram motivação e seu lugar no mundo. E comunidades servem como ponto focal para indivíduos procurando respostas, ajuda e solidariedade.
        </Text>
        <Text mt="4">
          O primeiro Wonder Tech será focado nas comunidades de tecnologia, constituído de mesas de conversa, onde os membros envolvidos contarão suas histórias, experiências e resiliência. A intenção do encontro, é reunir histórias sobre pessoas diversas e mostrar como prosperaram em um mundo que não é adaptado a todos. Inspirando as pessoas com histórias reais e demonstrando que há espaço e apoio para a inclusão de todos.
        </Text>
      </Container>
      <Image src="event-goal.png" display={["none", "none", "block"]} alt="Imagem com um telão e diversas pessoas assistindo à ele" />
    </Flex>
  )
}