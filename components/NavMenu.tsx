import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, List } from "@chakra-ui/react";
import { MdClose } from 'react-icons/md'
import { NavItem } from './NavItem'

export function NavMenu(props:any) {
    return (
        <>
            <Drawer onClose={props.onClose} isOpen={props.isOpen}>
                <DrawerOverlay />
                <DrawerContent bg="brand.black">
                    <Flex justify="end">
                        <DrawerHeader>
                            <IconButton
                                aria-label="Fechar menu"
                                background="none"
                                as={MdClose} 
                                color="brand.white"
                                boxSize="2.5rem"
                                mt="1rem"
                                onClick={props.onClose}
                            />
                        </DrawerHeader>
                    </Flex>
                    <DrawerBody>
                        <List>
                            <NavItem label="Início" href={{ href: '/' }} active={false} clickEvent={props.onClose} />
                            <NavItem label="O evento" href={{ href: '/' }} active={false} />
                            <NavItem label="Comunidades" href={{ href: '/' }} active={false} />
                            <NavItem label="Convidados" href={{ href: '/' }} active={false} />
                            <NavItem label="Apoie o evento" href={{ href: '/' }} active={false} />
                            <NavItem label="Sobre o MTST" href={{ href: '/' }} active={false} />
                        </List>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}