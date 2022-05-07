import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function EventGoalSection() {
  return (
    <Flex
      bgColor="brand.background"
    >
      <Container maxW={800} color="brand.gray" py="8">
        <Heading as="h2" fontSize="xl" color="brand.green" mb="4">A Missão do Evento</Heading>
        <Text>
          Todo mundo, seja um iniciante ou um especialista, tem uma história para contar. Ao contar sua história, as pessoas aprendem com ela, se identificam, encontram motivação e seu lugar no mundo. Algumas pessoas ficam encorajadas quando você compartilha suas lutas porque isso as lembra que elas não estão sozinhas e que somos todos humanos tentando um propósito em comum. Alguns se inspiram em histórias de sucesso porque “se ela conseguiu, eu também consigo.” 💪🏽
        </Text>
        <Text mt="4">
          O evento será constituído de mesas de conversa, onde os membros envolvidos contarão suas histórias, experiências e resiliência. A intenção do evento, é reunir histórias sobre pessoas diversas e mostrar como prosperaram em um mundo que não é adaptado a todos. ​Inspirando as pessoas com histórias reais e demonstrando que há espaço e apoio para a inclusão de todos.
        </Text>
        <Text mt="4">
          Em nosso evento, você é incentivado a compartilhar sua história e impactar as pessoas do mesmo jeito que você foi impactado. Os convidados das mesas de conversa serão pessoas com ativa participação em comunidades de tecnologia com fins sociais e que contribuem com a divulgação de conteúdo técnico nas redes sociais como Twitter, Instagram, Twitch, LinkedIn, em seus blogs e grupos de Discord.
        </Text>
      </Container>
      <Image src="event-goal.png" display={["none", "none", "block"]}/>
    </Flex>
  )
}