import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { speakers } from '../data/speakers';
import { SpeakerItem } from './SpeakerItem';

export function SpeakersSection() {
    return (
        <Flex bg="brand.background" id="convidados">
            <Container maxW="1300px" pt="6">
                <Flex flexDir="column" justify="center" align="center">
                    <Heading as="h4" fontSize="2xl" color="brand.green" mt="2rem">Convidados</Heading>
                    <Box w="100%" mb="80px" mt="1rem">
                        <Swiper
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