import { Link, LinkProps } from "@chakra-ui/react";

interface ButtonProps extends LinkProps {
  href: string;
  target?: string;
  children: React.ReactNode;
}

export function Button({ href, target, children }: ButtonProps) {
  return (
    <Link href={href} target={target}
      color="black"
      textDecoration="none"
      px="8"
      py="2"
      fontWeight="bold"
      bgColor="brand.green"
      _hover={{
        bgColor: "brand.background",
        color: "brand.green",
        textDecoration: "none"
      }}
    >
      {children}  
    </Link>
  )
}