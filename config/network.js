export const mainnetConfig = {
  chainId: 'juno-1',
  chainName: 'Juno',
  addressPrefix: 'juno',
  rpcUrl: 'https://rpc-juno.itastakers.com',
  feeToken: 'ujuno',
  stakingToken: 'ujuno',
  coinMap: {
    ujuno: { denom: 'JUNO', fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  fees: {
    upload: 1500000,
    init: 500000,
    exec: 200000,
  },
}

export const uniTestnetConfig = {
  chainId: 'testing',
  chainName: 'JunoTestnet',
  addressPrefix: 'juno',
  rpcUrl: 'http://localhost:26657',
  restUrl: 'http://localhost:1317',
  httpUrl: 'http://localhost:1317',
  feeToken: 'ujunox',
  stakingToken: 'ujunox',
  coinMap: {
    ujunox: { denom: 'JUNOX', fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  fees: {
    upload: 1500000,
    init: 500000,
    exec: 200000,
  },
}

export const getConfig = (network) => {
  if (network === 'mainnet') return mainnetConfig
  return uniTestnetConfig
}
