import { Container, Flex } from '@chakra-ui/react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Sponsor } from './Sponsor';

export function SponsorsCarousel() {
  return (
    <Container maxW={1180}>
      <Flex
        h="20vh"
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          breakpoints={{
            720: {
              spaceBetween: 30,
              slidesPerView: 7
            }
          }}
        >
          <SwiperSlide>
            <Sponsor href="https://alura.com.br" logo="patrocinadores/alura.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://ezdevs.com.br/" logo="patrocinadores/ez.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://codamos.com.br" logo="patrocinadores/codamos.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://twitter.com/codigofalado" logo="patrocinadores/codigo-falado.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://ideen.tech/" logo="patrocinadores/ideen.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://zup.com.br" logo="patrocinadores/zup.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Sponsor href="https://www.lambda3.com.br/" logo="patrocinadores/lambda.jpg" />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Container>
  );
}