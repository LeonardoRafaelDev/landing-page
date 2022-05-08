import { Container, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { HiBookOpen, HiTerminal, HiTrendingUp, HiUserGroup } from "react-icons/hi";
import { WhatToExpectCard } from "../components/WhatToExpectCard";
export function WhatToExpectSection() {
  return (
    <Flex bgColor="brand.background">

      <Container maxW={800} color="brand.gray" py="1">

        <Heading as="h2" fontSize={["xl","xl","3xl"]} color="brand.green" mb="4">
          O que vamos abordar?
        </Heading>

        <SimpleGrid columns={[1,1,1,2]}  spacingY={5} spacingX={[18]}>
          <WhatToExpectCard 
            BgColor="brand.yellowOpacity"
            IconColor="brand.yellow"
            icon={HiTerminal}
            title="Tecnologia"
          />

          <WhatToExpectCard
            BgColor="brand.redOpacity"
            IconColor="brand.red"
            icon={HiBookOpen}
            title="Consciência Social"
          />

          <WhatToExpectCard
            BgColor="brand.blueOpacity"
            IconColor="brand.blue"
            icon={HiTrendingUp}
            title="Desenv. Profissional"
          />

          <WhatToExpectCard
            BgColor="brand.greenOpacity"
            IconColor="brand.green"
            icon={HiUserGroup}
            title="Comunidades"
          />
        </SimpleGrid>

      </Container>
      <Image src="what-to-expect.png" display={["none", "none","none", "none","block"]} maxWidth={['400px']} />
    </Flex>
  );

}