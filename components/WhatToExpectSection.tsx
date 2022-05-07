import { Container, Flex, Heading, Image, Text,SimpleGrid } from "@chakra-ui/react";
import {WhatToExpectCard} from "../components/WhatToExpectCard";
import { HiTerminal, HiBookOpen, HiTrendingUp,HiUserGroup} from "react-icons/hi";
export function WhatToExpectSection() {
  return (
    <Flex bgColor="brand.background">

      <Container maxW={800} color="brand.gray" py="8">

        <Heading as="h2" fontSize="xl" color="brand.green" mb="4">
          O que você vai encontrar?
        </Heading>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl
          justo. Donec consequat velit sed ultricies lobortis.
        </Text>

        <SimpleGrid columns={2} spacingY={10} spacingX={28}>

          <WhatToExpectCard
            BgColor="brand.yellowOpacity"
            IconColor="brand.yellow"
            icon={HiTerminal}
            title="Tecnologia"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <WhatToExpectCard
            BgColor="brand.redOpacity"
            IconColor="brand.red"
            icon={HiBookOpen}
            title="Consciência Social"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <WhatToExpectCard
            BgColor="brand.blueOpacity"
            IconColor="brand.blue"
            icon={HiTrendingUp}
            title="Desenv. Profissional"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <WhatToExpectCard
            BgColor="brand.greenOpacity"
            IconColor="brand.green"
            icon={HiUserGroup}
            title="Comunidades"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

        </SimpleGrid>

      </Container>
      <Image src="what-to-expect.png" display={["none", "none", "block"]} />
    </Flex>
  );

}