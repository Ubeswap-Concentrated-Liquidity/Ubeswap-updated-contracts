/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { LiquidityMathTest } from "../LiquidityMathTest";

export class LiquidityMathTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LiquidityMathTest> {
    return super.deploy(overrides || {}) as Promise<LiquidityMathTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LiquidityMathTest {
    return super.attach(address) as LiquidityMathTest;
  }
  connect(signer: Signer): LiquidityMathTest__factory {
    return super.connect(signer) as LiquidityMathTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityMathTest {
    return new Contract(address, _abi, signerOrProvider) as LiquidityMathTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint128",
        name: "x",
        type: "uint128",
      },
      {
        internalType: "int128",
        name: "y",
        type: "int128",
      },
    ],
    name: "addDelta",
    outputs: [
      {
        internalType: "uint128",
        name: "z",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "x",
        type: "uint128",
      },
      {
        internalType: "int128",
        name: "y",
        type: "int128",
      },
    ],
    name: "getGasCostOfAddDelta",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102cf806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063402d44fb1461003b578063cf41632f146100ae575b600080fd5b6100866004803603604081101561005157600080fd5b8101908080356fffffffffffffffffffffffffffffffff1690602001909291908035600f0b906020019092919050505061010f565b60405180826fffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100f9600480360360408110156100c457600080fd5b8101908080356fffffffffffffffffffffffffffffffff1690602001909291908035600f0b9060200190929190505050610123565b6040518082815260200191505060405180910390f35b600061011b8383610140565b905092915050565b6000805a90506101338484610140565b505a810391505092915050565b60008082600f0b12156101f357826fffffffffffffffffffffffffffffffff168260000384039150816fffffffffffffffffffffffffffffffff16106101ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f4c5300000000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b610293565b826fffffffffffffffffffffffffffffffff168284019150816fffffffffffffffffffffffffffffffff161015610292576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f4c4100000000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b5b9291505056fea26469706673582212208ee574c210353489c62713db88ac7e51a06cfd500d0b332d281ee17efc2a041564736f6c63430007060033";
