import { Box, Flex, Heading, IconButton, Image, Link, Text, useDisclosure } from "@chakra-ui/react"
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { ModalComponent } from './Modal'

interface Socials {
    instagram: string,
    twitter: string,
    linkedin: string
}
interface SpeakerItem {
    profilePic: string
    name: string
    age:  number
    state: string
    city: string
    role: string
    description: string
    socials: Socials
}

export function SpeakerItem( { profilePic, name, age, state, city, role, description, socials } : SpeakerItem) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const socialList = [
        { name: BsTwitter, href: socials?.twitter, id: 1, ariaLabel: "Perfil no twitter" },
        { name: BsInstagram, href: socials?.instagram, id: 2, ariaLabel: 'Perfil no Instagram' },
        { name: BsLinkedin, href: socials?.linkedin, id: 3, ariaLabel: "Perfil no Linkedin" }
    ]

    return (
        <>
            <Flex 
                bg="brand.black" 
                maxW="322px"
                marginY="60px"
                flexDir="column" 
                paddingY="32px" 
                paddingX="16px"
                height="500px"
                marginLeft={{ base: '12px', md: '50px' }} 
                marginBottom={{ base: '110px', md: '0' }} 
                align="center"
                justify="center"
                transition="all .3s ease"
                cursor="pointer"
                _hover={{ transform: 'translateY(-15px)', boxShadow: '-5px -5px 40px rgba(115, 255, 56, .1)' }}
                onClick={onOpen}
            > 
                <Flex flexDir="column" align="center">
                    <Box
                        w='100px'
                        h='100px' 
                        borderRadius="50%"
                        overflow='hidden'
                    >
                        <Image 
                            src={profilePic}
                            alt="teste"
                            objectFit='cover'
                        ></Image>
                    </Box>
                    <Heading textAlign="center" as="h2" fontSize="2xl" marginTop="32px" color="brand.white">{ name }</Heading>
                    <Text as="span" color="brand.white" fontSize="md">
                        { age && `${age} -`} { city }, { state }
                    </Text>
                    <Heading textAlign="center" as="h5" fontSize="md" color="brand.green" marginTop="32px">{ role }</Heading>
                    <Text color="brand.gray" marginY="32px" textAlign='center' noOfLines={5}>{ description }</Text>
                </Flex>
                <Flex w="70%" justify="center" align="center" gap="4">
                    {socialList.map((social) => {
                        if (social.href !== '') {
                            return (<Link href={social.href} key={social.id} isExternal>
                                <IconButton cursor="pointer" color="brand.white" transition="color .3s ease" bg="none" _hover={{ bg: 'none', color: 'brand.green' }} as={social.name} href={social.href} aria-label={social.ariaLabel} boxSize="32px" background='none' />
                            </Link>)
                        }
                    })}
                </Flex>
            </Flex>
            <ModalComponent isOpen={isOpen} onOpen={onOpen} onClose={onClose} title={name} content={description} profilePic={profilePic} role={role} />
        </>
    )
}