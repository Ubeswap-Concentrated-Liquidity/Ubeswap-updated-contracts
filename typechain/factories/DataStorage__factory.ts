/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DataStorage } from "../DataStorage";

export class DataStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DataStorage> {
    return super.deploy(overrides || {}) as Promise<DataStorage>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DataStorage {
    return super.attach(address) as DataStorage;
  }
  connect(signer: Signer): DataStorage__factory {
    return super.connect(signer) as DataStorage__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DataStorage {
    return new Contract(address, _abi, signerOrProvider) as DataStorage;
  }
}

const _abi = [
  {
    inputs: [],
    name: "WINDOW",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6097610024600b82828239805160001a607314601757fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063a53e5412146038575b600080fd5b603e605a565b604051808263ffffffff16815260200191505060405180910390f35b620151808156fea264697066735822122080ecd81678bd10095fe64e55e282ed2ac4a5de09c811ad434901638aea0640d664736f6c63430007060033";
