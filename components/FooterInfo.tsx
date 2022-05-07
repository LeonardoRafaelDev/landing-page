import { Flex, Heading, Link } from "@chakra-ui/react";

export function FooterInfo() {
  return (
    <Flex direction="column" gap="4">
      <Heading as="h4" fontSize={16} color="brand.white">Informações</Heading>
      <Link href="mailto:vanny@onlydatafans.com" color="brand.gray"
        _hover={{ filter: "brightness(1.3)" }}
      >vanny@onlydatafans.com</Link>
      <Link color="brand.gray"
        href="https://www.google.com/maps/place/Rua+Pascoal+Pais,+525+-+4%C2%B0+andar+-+Vila+Cordeiro,+S%C3%A3o+Paulo+-+SP,+04581-060/@-23.6169108,-46.6895502,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce50b90243a1df:0x36b9d7f870543253!8m2!3d-23.6169157!4d-46.6873615"
        target="_blank"
        _hover={{ filter: "brightness(1.3)" }}
      >
        Rua Pascoal Pais, 525 - 3 e 4° andar  Brooklin, São Paulo
      </Link>
    </Flex>
  )
}
