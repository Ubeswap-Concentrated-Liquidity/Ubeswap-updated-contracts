/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IUbeswapPoolDerivedState } from "../IUbeswapPoolDerivedState";

export class IUbeswapPoolDerivedState__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUbeswapPoolDerivedState {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUbeswapPoolDerivedState;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int24",
        name: "bottomTick",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "topTick",
        type: "int24",
      },
    ],
    name: "getInnerCumulatives",
    outputs: [
      {
        internalType: "int56",
        name: "innerTickCumulative",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "innerSecondsSpentPerLiquidity",
        type: "uint160",
      },
      {
        internalType: "uint32",
        name: "innerSecondsSpent",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "secondsAgos",
        type: "uint32[]",
      },
    ],
    name: "getTimepoints",
    outputs: [
      {
        internalType: "int56[]",
        name: "tickCumulatives",
        type: "int56[]",
      },
      {
        internalType: "uint160[]",
        name: "secondsPerLiquidityCumulatives",
        type: "uint160[]",
      },
      {
        internalType: "uint112[]",
        name: "volatilityCumulatives",
        type: "uint112[]",
      },
      {
        internalType: "uint256[]",
        name: "volumePerAvgLiquiditys",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
