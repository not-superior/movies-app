import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {},
  fonts: {},
  fontSizes: {},
  breakpoints: {
    sm: "48em",
    md: "52em",
    lg: "64em",
    xl: "80em",
  },
});

const theme = extendTheme({ customTheme });

export default customTheme;