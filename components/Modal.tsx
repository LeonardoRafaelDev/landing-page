import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Text, Flex, Heading, Image } from "@chakra-ui/react";

interface Modal {
    isOpen: boolean
    onOpen: any
    onClose: any
    title: string
    content: string
    profilePic: string
    role?: string
}

export function ModalComponent({ isOpen, onClose, onOpen, title, role, content, profilePic }:Modal) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="brand.black" minHeight="400px" py="1rem" boxShadow="0px 0px 30px rgba(255, 255, 255, .1)">
          <ModalCloseButton color="brand.white" position="relative" left="85%" zIndex={4} />
          <Flex justify="center" overflow="hidden">
            <Image src={profilePic} alt={profilePic} objectFit="cover" h="100px" w="100px" borderRadius="50%" />
          </Flex>
          <ModalBody position="relative" bg="brand.black">
            <Flex flexDir="column" p="1rem" zIndex="modal" position="relative">
                <Heading as="h4" color="brand.white" fontSize="2xl">{ title }</Heading>
                <Heading as="h5" fontSize="lg" color="brand.green" my=".5rem">{ role }</Heading>
                <Text color="brand.gray">{ content }</Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    )    
}