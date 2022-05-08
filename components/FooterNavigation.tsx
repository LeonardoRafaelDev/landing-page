import { Flex, Heading, Link } from "@chakra-ui/react";

export function FooterNavigation() {
  const navItems = [
    { href: '#', label: 'Início' },
    { href: '#evento', label: 'O evento' },
    { href: '#comunidades', label: 'Comunidades' },
    { href: '#convidados', label: 'Convidados' },
    { href: '#apoiar-evento', label: 'Apoie o evento' },
    { href: '#sobre-mtst', label: 'Sobre o MTST' }
];
  return (
    <Flex direction="column" gap="4">
      <Heading as="h4" fontSize={16} color="brand.white">Navegação</Heading>
      <Flex direction="column" gap="4">
        {navItems.map((item) => {
          return (
            <Link color="brand.gray" href={item.href} key={item.label}
              _hover={{ color: "brand.green" }}
            >
              {item.label}
            </Link>
          )
        })}
      </Flex>
    </Flex>
  )
}