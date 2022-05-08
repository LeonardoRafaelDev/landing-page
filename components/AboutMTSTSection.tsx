import { Container, Flex, Heading, Image, Text, } from "@chakra-ui/react";
export function AboutMTSTSection() {
      return (
            <Flex
            bgColor="brand.background"
          >
            <Container maxW={850} color="brand.gray" pt="8">
              <Heading as="h2" fontSize="3xl" color="brand.green" mb="4">Sobre o MTST</Heading>
              <Text color="brand.white" fontWeight="semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text mt="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nulla eget nibh dapibus tempus. Aliquam consectetur turpis vitae velit imperdiet, eu laoreet ligula varius. Nam varius laoreet orci at congue.
              Nam condimentum massa sed ante auctor, vitae convallis odio dapibus. Integer cursus, arcu in viverra hendrerit, tellus libero ultricies tellus, non suscipit dui nulla sed leo. Morbi libero odio, vestibulum sed metus eu, mollis aliquet tortor.
              In quis euismod justo. Duis nec ultrices velit, quis consectetur lectus. Sed cursus non libero id tincidunt. Etiam suscipit a augue ut porttitor. Ut viverra sodales dui, id pellentesque ex condimentum id. 
              Nullam vehicula hendrerit nibh, eu fermentum odio ultricies interdum. Vestibulum nibh enim, tincidunt et dignissim sit amet, tristique nec ligula.
              </Text>
              <Text my="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nulla eget nibh dapibus tempus. Aliquam consectetur turpis vitae velit imperdiet, eu laoreet ligula varius. Nam varius laoreet orci at congue.
              Nam condimentum massa sed ante auctor, vitae convallis odio dapibus. Integer cursus, arcu in viverra hendrerit, tellus libero ultricies tellus, non suscipit dui nulla sed leo. Morbi libero odio, vestibulum sed metus eu, mollis aliquet tortor.
              In quis euismod justo. Duis nec ultrices velit, quis consectetur lectus. Sed cursus non libero id tincidunt. Etiam suscipit a augue ut porttitor. Ut viverra sodales dui, id pellentesque ex condimentum id. 
              Nullam vehicula hendrerit nibh, eu fermentum odio ultricies interdum. Vestibulum nibh enim, tincidunt et dignissim sit amet, tristique nec ligula.
              </Text>
            </Container>
            <Image src="About-MTST.png" display={["none", "none", "block"]} />
          </Flex>

      );

}