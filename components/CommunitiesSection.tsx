import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CommunitySwiperItem } from './CommunitySwiperItem';

import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

export function CommunitiesSection() {
    return (
        <Flex
            bg="brand.background"
            paddingY={{ base: '128px', md: '160px'}}
        >
            <Container maxW="1300px" paddingX={{md: '0'}}>
                <Flex
                    flexDirection="column"
                    justify="center"
                    align="center"
                >
                    <Box w="100%" paddingX="1rem">
                        <Heading as="h4" fontSize="2xl" textAlign="center" color="brand.green">Comunidades</Heading>
                        <Heading paddingTop="2rem" textAlign="center" fontSize="3xl" color="brand.white">Lorem Ipsum dolor Sit amet consectetur</Heading>
                        <Text paddingTop="1rem" w={{ base: '100%', md: '55%'}} textAlign="center" color="brand.gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet convallis risus, eget sagittis tellus convallis ac. In vel libero a libero tincidunt suscipit. </Text>
                    </Box>
                    <Box w="100%" my="80px">
                        <Swiper
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation
                            breakpoints={{
                                0: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 2
                                }
                            }}
                        >
                            <SwiperSlide>
                                <CommunitySwiperItem name="Heart Developers" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec iaculis neque, vitae vestibulum augue. Curabitur ac rhoncus turpis. Mauris quis sagittis tellus.' imgUrl="https://img.freepik.com/vetores-gratis/personagem-de-menina-anime_146237-78.jpg" imgAlt="test" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CommunitySwiperItem name="Heart Developers" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec iaculis neque, vitae vestibulum augue. Curabitur ac rhoncus turpis. Mauris quis sagittis tellus.' imgUrl="https://img.freepik.com/vetores-gratis/personagem-de-menina-anime_146237-78.jpg" imgAlt="test" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CommunitySwiperItem name="Heart Developers" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec iaculis neque, vitae vestibulum augue. Curabitur ac rhoncus turpis. Mauris quis sagittis tellus.' imgUrl="https://img.freepik.com/vetores-gratis/personagem-de-menina-anime_146237-78.jpg" imgAlt="test" />
                            </SwiperSlide>
                        </Swiper>
                    </Box>
                </Flex>
            </Container>
        </Flex>
    )
}