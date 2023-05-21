# Setup Guide
for local development.

## Requirements
- junod cli tool
- docker
- yarn
- rust tools


##  Web app setup
Go to the root of the project then run in order:
```
yarn
yarn dev
```


## Contract deployment
Start local junod node:
```
docker run -it \
  --name juno_node_1 \
  -p 1317:1317 \
  -p 26656:26656 \
  -p 26657:26657 \
  -e STAKE_TOKEN=ujunox \
  -e UNSAFE_CORS=true \
  ghcr.io/cosmoscontracts/juno:14.1.0 \
  ./setup_and_run.sh juno16g2rahf5846rxzp3fwlswy08fz8ccuwk03k57y
```

Change cwd to contract directory then run this to compile the contract:
```
docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer-arm64:0.12.11
```
Copy compiled wasm output to local testnet:
```
docker cp artifacts/cw_voting-aarch64.wasm juno_node_1:/contract.wasm
```
Deploy wasm binary to network and save the tx hash:
```
docker exec -i juno_node_1 \
junod tx wasm store "/contract.wasm" \
--gas-prices 0.1ujunox --gas auto --gas-adjustment 1.3 \
-y -b block --chain-id testing \
--from validator --output json
```
Use the tx hash to obtain code id:

```
CODE_ID=$(junod q tx <tx hash here> --output json | jq -r  '.logs[0].events[] | select(.type == "store_code").attributes[] | select(.key == "code_id").value')  &&  echo  "Code Id: $CODE_ID"
```

Use code id to initialize the contract.(Requires a wallet with sufficient balance and your public key)
```
junod tx wasm instantiate $CODE_ID '{}' --label contract5 --from wallet --chain-id=testing --gas=170000 --broadcast-mode=block -y --admin juno16g2rahf5846rxzp3fwlswy08fz8ccuwk03k57y
```
Output of this command gives you the contract address that you can use to interact with it.
