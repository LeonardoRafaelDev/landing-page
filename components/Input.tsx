import { Input as ChakraInput } from "@chakra-ui/react"

export function Input({ ...props }) {
  return (
    <ChakraInput 
      {...props} 
      borderWidth="1px"
      borderColor="brand.darkGray"
      borderRadius="none"
      color="brand.white"
      _placeholder={{
        color: "brand.white",
        fontWeight: "bold"
      }}
      maxW="630px"
    />
  )
}