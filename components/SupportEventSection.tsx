import { Container, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Button } from "./Button";

export function SupportEventSection() {
  return (
    <Flex
      bgColor="brand.background"
      py="2"
      id="apoiar-evento"
    >
      <Image src="support-event.png" display={["none", "none", "block"]} />
      <Container maxW={850} color="brand.gray" py="2">
        <Heading as="h2" fontSize="xl" color="brand.green" mb="4">Apoie o evento</Heading>
        <Text>
          O evento é sem fins lucrativos, todo montante doado será utilizado para a alimentação dos participantes e brindes e qualquer quantia que sobrar será revertido em doação para o <Link href="https://nucleodetecnologia.com.br/" target="_blank" color="brand.green">núcleo de Tecnologia do MTST.</Link> Qualquer quantia é bem vinda, tanto de pessoa física, quanto empresas.
        </Text>
        <Text mt="4">
          Tem brindes? Cupons de desconto para a gente disponibilizar para os atendentes em presença ou aqueles com participação online? A gente aceita também!
        </Text>
        <Text mt="4">
          Mande email para <Link href="mailto:vanny@onlydatafans.com" target="_blank" color="brand.green">vanny@onlydatafans.com</Link>
        </Text>
        <Text my="4">
          Ou compartilhe essa página em suas redes sociais! Seu alcance e visibilidade pode ajudar muito!
        </Text>
        <Button href="#" target="_blank">Acessar Media Kit</Button>
      </Container>
    </Flex>
  )
}
