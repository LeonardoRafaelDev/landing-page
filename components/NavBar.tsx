import { Flex, IconButton, List, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { NavItem } from './NavItem';
import { NavMenu } from './NavMenu';

export function NavBar({...props}) {
    const [background, setBackground] = useState("transparent")
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navItems = [
        { href: '/', label: 'Início' },
        { href: '#evento', label: 'O evento' },
        { href: '#comunidades', label: 'Comunidades' },
        { href: '#convidados', label: 'Convidados' },
        { href: '#apoiar-evento', label: 'Apoie o evento' },
        { href: '#sobre-mtst', label: 'Sobre o MTST' }
    ];

    const changeBackground = () => {
        if (window.pageYOffset > 150) {
            setBackground("brand.background")
        } else {
            setBackground("transparent")
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", changeBackground)
    }

    return (
        <Flex 
            as="nav" 
            width='100%' 
            justify={{ base: 'end', md: 'center' }} {...props}
            position="fixed"
            bgColor={background}
            zIndex="10"
        >
            <List display={{ base: 'none', md: 'block' }}>
                {navItems.map((item) => {
                    return <NavItem active={false} href={item.href} label={item.label} key={item.label} />
                })}
            </List>
            <IconButton
                display={{base: 'block', 'md': 'none'}}
                aria-label="Mobile menu"
                as={HiMenu}
                boxSize="2.5rem"
                color="white"
                background='none'
                m={5}
                onClick={onOpen}
            />
            <NavMenu onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
        </Flex>
    )
}