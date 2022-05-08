import { Image, Link } from "@chakra-ui/react";

interface SponsorProps {
  logo: string
  href: string
  alt: string
}

export function Sponsor({ logo, href, alt }: SponsorProps) {
  return (
    <Link href={href} target="_blank" aria-label={alt}>
      <Image src={logo} w={["80px", "100px"]} h={["80px", "100px"]} borderRadius="50%" cursor="pointer" alt={alt} />
    </Link>
  )
}