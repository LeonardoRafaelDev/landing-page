import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, List } from "@chakra-ui/react";
import { MdClose } from 'react-icons/md';
import { NavItem } from './NavItem';
const navItems = [
    { href: '/', label: 'Início' },
    { href: '#evento', label: 'O evento' },
    { href: '#comunidades', label: 'Comunidades' },
    { href: '#convidados', label: 'Convidados' },
    { href: '#apoiar-evento', label: 'Apoie o evento' },
    { href: '#sobre-mtst', label: 'Sobre o MTST' }
]
export function NavMenu(props: any) {
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
                            {navItems.map((item) => {
                                return <NavItem active={false} href={item.href} label={item.label} key={item.label} clickEvent={props.onClose} />
                            })}
                        </List>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}