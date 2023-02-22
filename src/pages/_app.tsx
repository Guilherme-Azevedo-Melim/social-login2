import type { AppProps } from 'next/app'
import { theme } from '../../chakra.theme';
import { ChakraProvider } from '@chakra-ui/react';
import {SessionProvider} from 'next-auth/react'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
    )
}
