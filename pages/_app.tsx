import '../styles/globals.css';
import Layout from '../components/Layout/layout'
import type { AppProps } from 'next/app';
import { ChainProvider } from '@cosmos-kit/react';
import { ChakraProvider } from '@chakra-ui/react';

function CreateCosmosApp({ Component, pageProps }: AppProps) {

  return (
    <>
    <ChakraProvider>
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={[...keplrWallets, ...cosmostationWallets, ...leapWallets]}
        walletConnectOptions={{
          signClient: {
            projectId: 'a8510432ebb71e6948cfd6cde54b70f7',
            relayUrl: 'wss://relay.walletconnect.org',
            metadata: {
              name: 'CosmosKit Template',
              description: 'CosmosKit dapp template',
              url: 'https://docs.cosmoskit.com/',
              icons: [],
            },
          },
        }}
        wrappedWithChakra={true}
        signerOptions={signerOptions}
      >
      <Layout>
       <Component {...pageProps} />
      </Layout>
      </ChainProvider>
    </ChakraProvider>
    </>
  );
}

export default CreateCosmosApp;
