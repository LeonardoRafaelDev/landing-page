import { Flex, Heading } from "@chakra-ui/react";
import { Button } from "./Button";
import { Input } from "./Input";

export function Newsletter() {
  return (
    <Flex direction="column" gap="6">
      <Heading as="h4" fontSize={24} color="brand.white">
        Se inscreva para receber novidades do site
      </Heading>
      <Flex direction={["column", "column", "row"]} gap="4">
        <Input placeholder="Seu email" />
        <Flex>
          <Button href="#" target="_blank">Enviar</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}