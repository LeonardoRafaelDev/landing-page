import { Container, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Button } from "./Button";

export function SupportEventSection() {
  return (
    <Flex
      bgColor="brand.background"
      py="12"
      id="apoiar-evento"
    >
      <Image src="support-event.png" display={["none", "none", "block"]} alt="Imagem com diversas pessoas comendo, numa espécie de coffee break"/>
      <Container maxW={850} color="brand.gray" py="2">
        <Heading as="h2" fontSize="xl" color="brand.green" mb="4">Apoie o evento</Heading>
        <Text>
          O evento é sem fins lucrativos, o apoio recebido será utilizado primeiramente para a alimentação da platéia e convidados. A cada edição iremos recolher doações que serão revertidas para iniciativas e projetos que visão educar e formar pessoas em tecnologia e nessa primeira edição do meet up estamos apoiando o <Link href="https://nucleodetecnologia.com.br/" target="_blank" color="brand.green">núcleo de Tecnologia do MTST.</Link>
        </Text>
        <Text mt="4">
          Qualquer quantia é bem vinda, tanto de pessoa física, quanto empresas.
        </Text>
        <Text mt="4">
          Tem brindes, cupons de desconto para a gente disponibilizar para os atendentes em presença ou aqueles com participação online? A gente aceita também!
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
