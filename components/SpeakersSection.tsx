import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SpeakerItem } from './SpeakerItem';

export function SpeakersSection() {
    return (
        <Flex bg="brand.background" id="convidados">
            <Container maxW="1300px" pt="6">
                <Flex flexDir="column" justify="center" align="center">
                    <Heading as="h4" fontSize="2xl" color="brand.green" marginBottom="32px">Convidados</Heading>
                    <Heading as="h1" fontSize="4xl" textAlign="center" color="brand.white" marginBottom="16px">Lorem Ipsum dolor Sit amet consectetur</Heading>
                    <Text color="brand.gray" textAlign="center" w={{ base: '100%', md: '70%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet convallis risus, eget sagittis tellus convallis ac. In vel libero a libero tincidunt suscipit.</Text>
                    <Box w="100%" my="80px">
                        <Swiper
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation
                            breakpoints={{
                                320: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 3
                                }
                            }}
                        >
                            <SwiperSlide>
                                <SpeakerItem profilePic='participantes/anne.jpeg' name='Letícia Coelho' role='Full-Stack Software Engineer' description='Eu sou uma Engenheira de Software por atuação e Engenheira de telecomunicações por formação. Sou apaixonada pelo universo da tecnologia, inovação e criação de produtos que geram qualidade de vida para as pessoas.'></SpeakerItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SpeakerItem profilePic='participantes/anne.jpeg' name='Letícia Coelho' role='Full-Stack Software Engineer' description='Eu sou uma Engenheira de Software por atuação e Engenheira de telecomunicações por formação. Sou apaixonada pelo universo da tecnologia, inovação e criação de produtos que geram qualidade de vida para as pessoas.'></SpeakerItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SpeakerItem profilePic='participantes/anne.jpeg' name='Letícia Coelho' role='Full-Stack Software Engineer' description='Eu sou uma Engenheira de Software por atuação e Engenheira de telecomunicações por formação. Sou apaixonada pelo universo da tecnologia, inovação e criação de produtos que geram qualidade de vida para as pessoas.'></SpeakerItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SpeakerItem profilePic='participantes/anne.jpeg' name='Letícia Coelho' role='Full-Stack Software Engineer' description='Eu sou uma Engenheira de Software por atuação e Engenheira de telecomunicações por formação. Sou apaixonada pelo universo da tecnologia, inovação e criação de produtos que geram qualidade de vida para as pessoas.'></SpeakerItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SpeakerItem profilePic='participantes/anne.jpeg' name='Letícia Coelho' role='Full-Stack Software Engineer' description='Eu sou uma Engenheira de Software por atuação e Engenheira de telecomunicações por formação. Sou apaixonada pelo universo da tecnologia, inovação e criação de produtos que geram qualidade de vida para as pessoas.'></SpeakerItem>
                            </SwiperSlide>
                        </Swiper>
                    </Box>
                </Flex>
            </Container>
        </Flex>
    )
}