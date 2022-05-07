import { Image, Link } from "@chakra-ui/react";

interface SponsorProps {
  logo: string
  href: string
}

export function Sponsor({ logo, href }: SponsorProps) {
  return (
    <Link href={href} target="_blank">
      <Image src={logo} w={["80px", "100px"]} h={["80px", "100px"]} borderRadius="50%" cursor="pointer"/>
    </Link>
  )
}