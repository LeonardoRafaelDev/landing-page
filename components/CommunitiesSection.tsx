import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { communities } from '../data/communities';
import { CommunitiesItem } from './CommunitiesItem';


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
                    </Box>
                    <Box w="100%" my="30px">
                        <Swiper
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