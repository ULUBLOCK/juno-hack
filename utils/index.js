import { getConfig } from '../config/network';
import { keplrConfig } from "../config/keplr";
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { GasPrice } from '@cosmjs/stargate';
import { useContext, createContext, useState, useEffect } from 'react';

export const connect = async () => {
  await window.keplr.experimentalSuggestChain(keplrConfig(getConfig()));

  const chainId = "testing";

  await window.keplr.enable(chainId);

  const offlineSigner = window.getOfflineSigner(chainId);

  const [account] = await offlineSigner.getAccounts();

  const client = await SigningCosmWasmClient.connectWithSigner("http://localhost:26657", offlineSigner, {
    gasPrice: GasPrice.fromString("0.025ujunox"),
  });

  const state = {client: client, account: account};

  return state;
}

const contract = "juno1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgs44adts";

export const getData = async (client) => {
  const data = await client.queryContractSmart(contract, { config: {}});
  return data;
}

const WalletContext = createContext();
export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({children}) => {
  const [wallet, setWallet] = useState({});

  useEffect(() => {
    // const state = localStorage.getItem("wallet");
    // if (state !== undefined && wallet === {}) {
    //   setWallet(state);
    // }

    (async function tmp() {
      setWallet(await connect());
      
    })();
  }, []);

  return (
    <WalletContext.Provider value={{wallet, setWallet}}>
      {children}
    </WalletContext.Provider>
  );
};

const DataContext = createContext();
export const useData = () => useContext(WalletContext);

export const DataProvider = ({children}) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    (async function tmp() {
      setWallet(await connect());
    })();
  }, []);

  return (
    <WalletContext.Provider value={{wallet, setWallet}}>
      {children}
    </WalletContext.Provider>
  );
};