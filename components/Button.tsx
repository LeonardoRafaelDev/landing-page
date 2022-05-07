import { Link } from "@chakra-ui/react";

interface ButtonProps {
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
    >
      {children}  
    </Link>
  )
}