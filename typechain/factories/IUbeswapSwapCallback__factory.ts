/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IUbeswapSwapCallback } from "../IUbeswapSwapCallback";

export class IUbeswapSwapCallback__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUbeswapSwapCallback {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUbeswapSwapCallback;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "ubeswapSwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
