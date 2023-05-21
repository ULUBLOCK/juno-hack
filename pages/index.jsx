import Head from 'next/head';
import {
  Container,
} from '@chakra-ui/react';
import { getConfig } from '../config/network';
import { useEffect } from 'react';
import { keplrConfig } from "../config/keplr";
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { GasPrice } from '@cosmjs/stargate';

export default function Home() {
  useEffect(() => {

    (async function func() {
    await window.keplr.experimentalSuggestChain(keplrConfig(getConfig()));

    const chainId = "testing";

    await window.keplr.enable(chainId);

    const offlineSigner = window.getOfflineSigner(chainId);

    const [account] = await offlineSigner.getAccounts();

    const client = await SigningCosmWasmClient.connectWithSigner("http://localhost:26657", offlineSigner, {
      gasPrice: GasPrice.fromString("0.05ujunox"),
    });

    console.log(await client.getBalance(account.address, "ujunox"));
    const contract = await client.getContract("juno1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgs44adts");

    // const args = {
    //   create_hackathon: {
    //     name: "adsfsf",
    //     balance: "30",
    //     jury1: "juno16g2rahf5846rxzp3fwlswy08fz8ccuwk03k57y",
    //     jury2: "juno16g2rahf5846rxzp3fwlswy08fz8ccuwk03k57y",
    //     jury3: "juno16g2rahf5846rxzp3fwlswy08fz8ccuwk03k57y",
    //     deadline: 13,
    //   }
    // };

    // await client.execute(account.address, contract.address, args, "auto");

    const state = await client.queryContractSmart(contract.address, { config: {} });
    console.log(state);
    })();
  }, []);

  return (
    <Container maxW="5xl" py={10}>
      <Head>
        <title>Create Cosmos App</title>
        <meta name="description" content="Generated by create cosmos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Container>
  );
}
