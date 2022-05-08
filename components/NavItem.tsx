import { Link, ListItem } from '@chakra-ui/react';
import NextLink from 'next/link';
import { MouseEventHandler } from 'react';

interface NavItemProps {
    label: String
    href: string
    active: Boolean
    clickEvent?: MouseEventHandler
}

export function NavItem({ label, href, active, clickEvent } : NavItemProps) {
    return (
        <ListItem
            paddingY={{ base: '1rem', md: '0' }}
            marginTop="1rem"
            borderBottom={{ base: '1px', md: '0'}}
            borderColor={{ base: 'brand.darkGray', md: '' }}
            float={{ md: 'left' }}
        >
            <NextLink href={href} passHref>
                <Link
                    onClick={clickEvent}
                    color="white"
                    paddingY={{ md: '6px' }}
                    marginX={{ md: '2rem' }}
                    position='relative'
                    _before={
                        active ? { content: '""', position: 'absolute', height: '2px', width: '100%', backgroundColor: 'brand.green', bottom: '0' } : {}
                    }
                    _hover={{ color: 'brand.green' }}
                >
                    { label }
                </Link>
            </NextLink>
        </ListItem>
    )
}