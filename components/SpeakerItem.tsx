import { Flex, Heading, Icon, IconButton, Text } from "@chakra-ui/react"
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

interface SpeakerItem {
    profilePic: string
    name: string
    role: string
    description: string
}

export function SpeakerItem( { profilePic, name, role, description } : SpeakerItem) {
    const socialList = [
        { name: BsTwitter, href: "" }
        { name: BsInstagram, href: "" }
        { name: BsLinkedin, href: "" }
    ]

    return (
        <Flex flexDir="column" paddingY="32px" paddingX="16px">
            <Heading as="h2" size="2xl" marginTop="32px">{ name }</Heading>
            <Heading as="h5" size="md" color="brand.green" marginTop="32px">{ role }</Heading>
            <Text color="brand.gray" marginY="32px">{ description }</Text>
            <Flex w="100%" justify="center" align="center">
                {socialList.map((social) => {
                    return <IconButton as={social.name} href={social.href} aria-label={"test"} />
                })}
            </Flex>
        </Flex>
    )
}