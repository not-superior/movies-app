import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
import "../styles/global/globals.css";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
