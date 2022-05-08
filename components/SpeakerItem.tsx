import { Flex, Heading, IconButton, Text, Image, Box } from "@chakra-ui/react"
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

interface SpeakerItem {
    profilePic: string
    name: string
    role: string
    description: string
}

export function SpeakerItem( { profilePic, name, role, description } : SpeakerItem) {
    const socialList = [
        { name: BsTwitter, href: "", id: 1 },
        { name: BsInstagram, href: "", id: 2 },
        { name: BsLinkedin, href: "", id: 3 }
    ]

    return (
        <Flex bg="brand.black" maxW="322px" flexDir="column" paddingY="32px" paddingX="16px" marginLeft={{ base: '12px', md: '50px' }} marginBottom={{ base: '110px', md: '0' }} align="center">
            <Image 
                w={{ base: '50px', md: '100px'}}
                h={{ base: '50px', md: '100px'}} 
                borderRadius="50%" 
                src='participantes/roberson.jpg' 
                alt="teste"
            ></Image>
            <Heading textAlign="center" as="h2" fontSize="2xl" marginTop="32px" color="brand.white">{ name }</Heading>
            <Heading textAlign="center" as="h5" fontSize="md" color="brand.green" marginTop="32px">{ role }</Heading>
            <Text color="brand.gray" marginY="32px" textAlign='center'>{ description }</Text>
            <Flex w="70%" justify="space-between" align="center">
                {socialList.map((social) => {
                    return <>
                        <IconButton key={social.id} color="brand.white" bg="none" _hover={{ bg: 'none' }} as={social.name} href={social.href} aria-label={"test"} boxSize="32px" background='none' />
                    </>
                })}
            </Flex>
        </Flex>
    )
}