import { Circle, Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface HorizontalInfoProps {
  icon: IconType,
  title: string,
  content: string
}

export function HorizontalInfo({ icon, title, content }: HorizontalInfoProps) {
  return (
    <Flex gap="3">
      <Circle
        bgColor="brand.greenOpacity"
        size="30px"
      >
        <Icon
          as={icon}
          color="brand.green"
        />
      </Circle>
      <Flex direction="column">
        <Text color="brand.white" fontWeight="bold">
          {title}
        </Text>
        <Text color="brand.gray">
          {content}
        </Text>
      </Flex>
    </Flex>
  )
}