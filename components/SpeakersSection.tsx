import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { SpeakerItem } from './SpeakerItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { speakers } from '../data/speakers'

interface SpeakerItem {
    name: string
    role: string
    bio: string
}

export function SpeakersSection() {
    return (
        <Flex bg="brand.background">
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
                            {speakers.map((speaker:any) => {
                                return (
                                    <SwiperSlide key={speaker.id}>
                                        <SpeakerItem profilePic={speaker.picture} name={speaker.name} role={speaker.role} description={speaker.bio} socials={speaker.socials}></SpeakerItem>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Box>
                </Flex>
            </Container>
        </Flex>
    )
}