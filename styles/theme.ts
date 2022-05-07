import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      "yellow": "#FFDE38",
      "red": "#FF3438",
      "blue": "#529BFC",
      "green": "#74FF38",
      "greenOpacity": "#74FF381A",
      "white": "#FFFFFF",
      "gray": "#7C7C8C",
      "darkGray": "#2D2D32",
      "black": "#0A0A0A",
      "background": "#030303",
    }
  },
  fonts: {
    body: "Sora, sans-serif",
    heading: "Sora, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  }
})