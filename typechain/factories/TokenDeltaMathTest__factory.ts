/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TokenDeltaMathTest } from "../TokenDeltaMathTest";

export class TokenDeltaMathTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TokenDeltaMathTest> {
    return super.deploy(overrides || {}) as Promise<TokenDeltaMathTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenDeltaMathTest {
    return super.attach(address) as TokenDeltaMathTest;
  }
  connect(signer: Signer): TokenDeltaMathTest__factory {
    return super.connect(signer) as TokenDeltaMathTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenDeltaMathTest {
    return new Contract(address, _abi, signerOrProvider) as TokenDeltaMathTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroToOne",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetNewPriceAfterInput",
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
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroToOne",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetNewPriceAfterOutput",
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
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetToken0Delta",
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
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetToken1Delta",
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
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroToOne",
        type: "bool",
      },
    ],
    name: "getNewPriceAfterInput",
    outputs: [
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroToOne",
        type: "bool",
      },
    ],
    name: "getNewPriceAfterOutput",
    outputs: [
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getToken0Delta",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getToken1Delta",
    outputs: [
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d5f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80635e3971de1161005b5780635e3971de146102f757806397a28f5414610397578063b294af3014610421578063f608d071146104c157610088565b8063053be9c11461008d5780631594271c1461011757806320a62e2a146101b75780633877c01114610257575b600080fd5b610101600480360360808110156100a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803515159060200190929190505050610561565b6040518082815260200191505060405180910390f35b6101a16004803603608081101561012d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610582565b6040518082815260200191505060405180910390f35b610241600480360360808110156101cd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506105a3565b6040518082815260200191505060405180910390f35b6102cb6004803603608081101561026d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035151590602001909291905050506105bb565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61036b6004803603608081101561030d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035151590602001909291905050506105d3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61040b600480360360808110156103ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035151590602001909291905050506105eb565b6040518082815260200191505060405180910390f35b6104ab6004803603608081101561043757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff16906020019092919080351515906020019092919050505061060c565b6040518082815260200191505060405180910390f35b61054b600480360360808110156104d757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610624565b6040518082815260200191505060405180910390f35b6000805a905061057386868686610645565b505a8103915050949350505050565b6000805a90506105948686868661065f565b505a8103915050949350505050565b60006105b18585858561065f565b9050949350505050565b60006105c985858585610754565b9050949350505050565b60006105e185858585610645565b9050949350505050565b6000805a90506105fd86868686610754565b505a8103915050949350505050565b600061061a8585858561076e565b9050949350505050565b6000805a90506106368686868661076e565b505a8103915050949350505050565b6000610655858585856000610830565b9050949350505050565b60008085850373ffffffffffffffffffffffffffffffffffffffff1690508473ffffffffffffffffffffffffffffffffffffffff16811061069f57600080fd5b6000606060ff16856fffffffffffffffffffffffffffffffff16901b905083610707578673ffffffffffffffffffffffffffffffffffffffff166106fa83838973ffffffffffffffffffffffffffffffffffffffff16610b6a565b8161070157fe5b04610748565b61074761072b83838973ffffffffffffffffffffffffffffffffffffffff16610c33565b8873ffffffffffffffffffffffffffffffffffffffff16610cd0565b5b92505050949350505050565b6000610764858585856001610830565b9050949350505050565b60008473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610156107a957600080fd5b600085850373ffffffffffffffffffffffffffffffffffffffff169050826107fa576107f581856fffffffffffffffffffffffffffffffff166c01000000000000000000000000610b6a565b610825565b61082481856fffffffffffffffffffffffffffffffff166c01000000000000000000000000610c33565b5b915050949350505050565b6000808673ffffffffffffffffffffffffffffffffffffffff161161085457600080fd5b6000856fffffffffffffffffffffffffffffffff161161087357600080fd5b81151583151514156109ff57600084141561089057859050610b61565b6000606060ff16866fffffffffffffffffffffffffffffffff16901b905082156109775760008773ffffffffffffffffffffffffffffffffffffffff16868973ffffffffffffffffffffffffffffffffffffffff168802925082816108f157fe5b041415610933576000818301905082811061093157610927838a73ffffffffffffffffffffffffffffffffffffffff1683610c33565b9350505050610b61565b505b61096e82610969888b73ffffffffffffffffffffffffffffffffffffffff16868161095a57fe5b04610ce390919063ffffffff16565b610cd0565b92505050610b61565b60008773ffffffffffffffffffffffffffffffffffffffff16868973ffffffffffffffffffffffffffffffffffffffff168802925082816109b457fe5b04146109bf57600080fd5b8082116109cb57600080fd5b6109f66109f1838a73ffffffffffffffffffffffffffffffffffffffff16848603610c33565b610cfd565b92505050610b61565b8115610aad57610aa6610aa173ffffffffffffffffffffffffffffffffffffffff8016861115610a5857610a53866c01000000000000000000000000896fffffffffffffffffffffffffffffffff16610b6a565b610a7c565b866fffffffffffffffffffffffffffffffff16606060ff1687901b81610a7a57fe5b045b8873ffffffffffffffffffffffffffffffffffffffff16610ce390919063ffffffff16565b610cfd565b9050610b61565b600073ffffffffffffffffffffffffffffffffffffffff8016851115610afc57610af7856c01000000000000000000000000886fffffffffffffffffffffffffffffffff16610c33565b610b20565b610b1f606060ff1686901b876fffffffffffffffffffffffffffffffff16610cd0565b5b9050808773ffffffffffffffffffffffffffffffffffffffff1611610b4457600080fd5b808773ffffffffffffffffffffffffffffffffffffffff16039150505b95945050505050565b60008083850290506000801985870982811083820303915050808411610b8f57600080fd5b6000811415610ba45783820492505050610c2c565b8385870982811182039150808303925050600084856000031690508085049450808304925060018182600003040190508082028317925060006002866003021890508086026002038102905080860260020381029050808602600203810290508086026002038102905080860260020381029050808602600203810290508084029450505050505b9392505050565b600080841480610c505750828484860292508281610c4d57fe5b04145b15610c735760008211610c6257600080fd5b600082820611828204019050610cc9565b610c7e848484610b6a565b905060008280610c8a57fe5b8486091115610cc8577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110610cbf57600080fd5b80806001019150505b5b9392505050565b6000808284061182840401905092915050565b6000828284019150811015610cf757600080fd5b92915050565b6000818291508173ffffffffffffffffffffffffffffffffffffffff1614610d2457600080fd5b91905056fea2646970667358221220647a9a97f852c23cf74977f0803b6fd0a5e8b98a87fd5b17b35fafb513a25fad64736f6c63430007060033";
