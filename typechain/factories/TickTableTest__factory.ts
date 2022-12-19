/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TickTableTest } from "../TickTableTest";

export class TickTableTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TickTableTest> {
    return super.deploy(overrides || {}) as Promise<TickTableTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TickTableTest {
    return super.attach(address) as TickTableTest;
  }
  connect(signer: Signer): TickTableTest__factory {
    return super.connect(signer) as TickTableTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickTableTest {
    return new Contract(address, _abi, signerOrProvider) as TickTableTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int16",
        name: "",
        type: "int16",
      },
    ],
    name: "bitmap",
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
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "getGasCostOfFlipTick",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "bool",
        name: "lte",
        type: "bool",
      },
    ],
    name: "getGasCostOfNextTickInTheSameRow",
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
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "isInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "bool",
        name: "lte",
        type: "bool",
      },
    ],
    name: "nextTickInTheSameRow",
    outputs: [
      {
        internalType: "int24",
        name: "next",
        type: "int24",
      },
      {
        internalType: "bool",
        name: "initialized",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "toggleTick",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610795806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631e1b16de146100675780632bdc2fd3146100b85780633ffc81ee146100ff5780638ce5172e14610144578063def1371414610175578063f04bc943146101d2575b600080fd5b6100a26004803603604081101561007d57600080fd5b81019080803560020b9060200190929190803515159060200190929190505050610217565b6040518082815260200191505060405180910390f35b6100e7600480360360208110156100ce57600080fd5b81019080803560020b9060200190929190505050610241565b60405180821515815260200191505060405180910390f35b61012e6004803603602081101561011557600080fd5b81019080803560010b9060200190929190505050610280565b6040518082815260200191505060405180910390f35b6101736004803603602081101561015a57600080fd5b81019080803560020b9060200190929190505050610298565b005b6101b06004803603604081101561018b57600080fd5b81019080803560020b90602001909291908035151590602001909291905050506102af565b604051808360020b815260200182151581526020019250505060405180910390f35b610201600480360360208110156101e857600080fd5b81019080803560020b90602001909291905050506102d3565b6040518082815260200191505060405180910390f35b6000805a9050610233848460006102f89092919063ffffffff16565b50505a810391505092915050565b600080600061025d84600160006102f89092919063ffffffff16565b915091508360020b8260020b14610275576000610277565b805b92505050919050565b60006020528060005260406000206000915090505481565b6102ac81600061043090919063ffffffff16565b50565b6000806102c8848460006102f89092919063ffffffff16565b915091509250929050565b6000805a90506102ed83600061043090919063ffffffff16565b5a8103915050919050565b6000806000603c90508085071519600086121681860503945050821561039e5760008060ff861690508560081c915060008160ff0360ff168860008560010b60010b815260200190815260200160002054901b90506000811461037f5761035e8161050e565b60ff0360ff168703965061037187610568565b600194509450505050610428565b8160ff168703965061039087610568565b600094509450505050610428565b60018401935060008060ff861690508560081c915060008160ff168860008560010b60010b815260200190815260200160002054901c90506000811461040a576103ec818260000316610624565b60ff16870196506103fc87610568565b600194509450505050610428565b8160ff0360ff168701965061041e87610568565b6000945094505050505b935093915050565b6000603c60020b8260020b8161044257fe5b0760020b146104b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f7469636b206973206e6f7420737061636564000000000000000000000000000081525060200191505060405180910390fd5b603c60020b8160020b816104c957fe5b05905060008060ff831690508260081c91508060ff166001901b8460008460010b60010b81526020019081526020016000206000828254189250508190555050505050565b60008160011c821791508160021c821791508160041c821791508160081c821791508160101c821791508160201c821791508160401c821791508160801c821791508160011c8203915061056182610624565b9050919050565b6000603c820290507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860020b8160020b12156105c6577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff27618905061061f565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860000360020b8160020b131561061e577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2761860000390505b5b919050565b60007f555555555555555555555555555555555555555555555555555555555555555582161590506fffffffffffffffffffffffffffffffff82161560071b8117905077ffffffffffffffff0000000000000000ffffffffffffffff82161560061b811790507bffffffff00000000ffffffff00000000ffffffff00000000ffffffff82161560051b811790507dffff0000ffff0000ffff0000ffff0000ffff0000ffff0000ffff0000ffff82161560041b811790507eff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff82161560031b811790507f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f82161560021b811790507f333333333333333333333333333333333333333333333333333333333333333382161560011b8117905091905056fea26469706673582212200b7eecbd885b887061bffab443a5678df36bff86f5fb415645fd76d488750a7a64736f6c63430007060033";