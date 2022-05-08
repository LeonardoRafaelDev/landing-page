import { Container, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
export function AboutMTSTSection() {
  return (
    <Flex
      bgColor="brand.background"
      id="sobre-mtst"
      pb="4rem"
    >
      <Container maxW={850} color="brand.gray" pt="8">
        <Heading as="h2" fontSize="3xl" color="brand.green" mb="4">Sobre o MTST</Heading>
        <Text mt="4">
          O Núcleo de Tecnologia do MTST é um coletivo de militantes sociais que calharam de também trabalhar com tecnologia.
          Formado no final de 2020, a partir do Setor de Formação Política do MTST, o núcleo inicia seu trabalho tendo como ponto de partida o objetivo de formar pessoas da base do movimento para disputar vagas da tecnologia, uma área que tem muita demanda de emprego, trabalho e renda, mas ao mesmo tempo oferece poucas alternativas de formação de novos profissionais, principalmente ao povo sem-teto, da periferia.
        </Text>
        <Text mt="4">
          Conheça mais sobre as iniciativas do núcleo clicando <Link href="https://nucleodetecnologia.com.br/#portfolio" color="brand.green" isExternal>aqui </Link>.
        </Text>
        <Heading as="h2" fontSize="xl" color="brand.green" my="8">Apoie agora mesmo</Heading>
        <Image src="pix-mtst.jpg"
          w="120px"
          h="120px"
          alt="Imagem de um QRCode que aponta para o PIX da MTST"
        />
      </Container>
      <Image src="About-MTST.png" display={["none", "none", "block"]} alt="Imagem com a bandeira do MTST sendo balançada"/>
    </Flex>

  );

}