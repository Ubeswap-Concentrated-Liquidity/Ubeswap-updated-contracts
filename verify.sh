#!/usr/bin/env bash

mkdir -p verified-sources/
cp -R contracts/uniswapv2/ verified-sources/contracts/

CONTRACTS=(
    "contracts/UniswapV2Router02.sol"
    "contracts/UniswapV2Factory.sol"
)

for CONTRACT in ${CONTRACTS[@]}; do
    echo "$CONTRACT"
    CBASENAME=$(basename $CONTRACT)
    CBASE=${CBASENAME%.sol}
    CONTRACT_DIR=deployments/metadata/"$CBASE"/
    mkdir -p "deployments/metadata/$CBASE"
    docker run -v "$(pwd)/verified-sources/:/sources" -w /sources ethereum/solc:0.6.12 \
        --optimize --optimize-runs 5000 \
        --combined-json abi,bin,bin-runtime,compact-format,devdoc,hashes,interface,metadata "$CONTRACT" \
        | jq ".contracts | to_entries | map(select(.key | contains(\":$CBASE\"))) | first | .value " \
        | jq ".metadata | fromjson" > $CONTRACT_DIR/metadata.json
done

cp -R verified-sources/contracts/**/*.sol verified-sources/
rm -fr verified-sources/contracts/
