import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CommunitiesItem } from './CommunitiesItem';
import { communities } from '../data/communities';


SwiperCore.use([Navigation]);

export function CommunitiesSection() {
    return (
        <Flex
            bg="brand.background"
            paddingY={{ base: '30px', md: '160px'}}
            id="comunidades"
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
                        <Flex justify="center">
                            <Text paddingTop="1rem" w={{ base: '100%', md: '60%'}} textAlign="center" color="brand.gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet convallis risus, eget sagittis tellus convallis ac. In vel libero a libero tincidunt suscipit. </Text>
                        </Flex>
                    </Box>
                    <Box w="100%" my="30px">
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
                            {communities.map((community) => {
                                return <SwiperSlide key={community.id}>
                                    <CommunitiesItem name={community.name} description={community.description} imgUrl={community.logo?.url} imgAlt={community.logo?.alt} socials={community.socials} />
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </Box>
                </Flex>
            </Container>
        </Flex>
    )
}