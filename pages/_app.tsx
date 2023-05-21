import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { defaultTheme } from '@cosmos-kit/react';
import { ChakraProvider } from '@chakra-ui/react';

function CreateCosmosApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default CreateCosmosApp;
