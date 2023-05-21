import '../styles/globals.css';
import Layout from '../components/Layout/layout'
import { ChakraProvider } from '@chakra-ui/react';
import { DataProvider, WalletProvider } from "../utils"

function MyApp({ Component, pageProps }) {
    return (
      <WalletProvider>
      <ChakraProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </WalletProvider>
  );
}

export default MyApp;
