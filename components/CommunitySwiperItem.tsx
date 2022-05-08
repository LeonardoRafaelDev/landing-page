import { SwiperSlide } from 'swiper/react';
import { Flex, Heading, Icon, Text, Image } from '@chakra-ui/react';
import { BsTwitter, BsInstagram, BsDiscord, BsGithub } from 'react-icons/bs'

interface CommunityDetails {
    name: string
    description: string,
    imgUrl: string
    imgAlt: string
}

export function CommunitySwiperItem ({ name, description, imgUrl, imgAlt } : CommunityDetails) {
    return (
        <Flex bg="brand.black" maxW="544px" px="20px" py="32px" marginBottom={{ base: '80px', md: '0' }} marginLeft={{ md: '48px' }}>
            <Flex justify="center" align="center" maxWidth={{ base: '30px', md: '50px'}} maxH={{ base: '30px', md: '50px'}} borderRadius="50%" overflow="hidden" bg="brand.darkGray" marginRight={{ base: '16px', md: '32px'}}>
                <Image maxW="70%" src={imgUrl} alt={imgAlt}></Image>
            </Flex>
            <Flex
                flexDir='column'
            >
                <Heading 
                    as="h4" 
                    fontWeight="bold" 
                    fontSize="2xl" 
                    color="brand.white"
                    paddingBottom="1rem"
                >
                    { name }
                </Heading>
                <Text
                    paddingBottom="20px"
                    color="brand.gray"
                    borderBottom="1px"
                    borderColor="brand.darkGray"
                >
                    { description }
                </Text>
                <Flex paddingTop="28px">
                    <Icon color="brand.white" as={BsTwitter} boxSize="2rem" marginRight="38px" cursor="pointer" transition="color .5s ease" _hover={{ color: 'brand.green' }} />
                    <Icon color="brand.white" as={BsInstagram} boxSize="2rem" marginRight="38px" cursor="pointer" transition="color .5s ease" _hover={{ color: 'brand.green' }} />
                    <Icon color="brand.white" as={BsDiscord} boxSize="2rem" marginRight="38px" cursor="pointer" transition="color .5s ease" _hover={{ color: 'brand.green' }} />
                    <Icon color="brand.white" as={BsGithub} boxSize="2rem" marginRight="38px" cursor="pointer" transition="color .5s ease" _hover={{ color: 'brand.green' }} />
                </Flex>
            </Flex>
        </Flex>
    )
}