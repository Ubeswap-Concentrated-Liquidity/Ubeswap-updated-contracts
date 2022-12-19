/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PriceMovementMathTest } from "../PriceMovementMathTest";

export class PriceMovementMathTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<PriceMovementMathTest> {
    return super.deploy(overrides || {}) as Promise<PriceMovementMathTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PriceMovementMathTest {
    return super.attach(address) as PriceMovementMathTest;
  }
  connect(signer: Signer): PriceMovementMathTest__factory {
    return super.connect(signer) as PriceMovementMathTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceMovementMathTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PriceMovementMathTest;
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
        internalType: "uint160",
        name: "sqrtPTarget",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "int256",
        name: "amountRemaining",
        type: "int256",
      },
      {
        internalType: "uint16",
        name: "feePips",
        type: "uint16",
      },
    ],
    name: "getGasCostOfmovePriceTowardsTarget",
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
        internalType: "uint160",
        name: "sqrtPTarget",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "int256",
        name: "amountRemaining",
        type: "int256",
      },
      {
        internalType: "uint16",
        name: "feePips",
        type: "uint16",
      },
    ],
    name: "movePriceTowardsTarget",
    outputs: [
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610be8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631a7961761461003b57806385d38e1614610112575b600080fd5b6100d1600480360360a081101561005157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803561ffff1690602001909291905050506101be565b604051808573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200194505050505060405180910390f35b6101a8600480360360a081101561012857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803561ffff169060200190929190505050610214565b6040518082815260200191505060405180910390f35b6000806000806102008973ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff16108a8a8a8a8a610269565b935093509350935095509550955095915050565b6000805a90506102568773ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16108888888888610269565b505050505a810391505095945050505050565b600080600080610bb08a61027f5761046c610283565b6104845b9050600087126103905760006102ab888861ffff16620f42400362ffffff16620f424061049c565b90506102bc8a8c8b8563ffffffff16565b94508481106102ec578995506102e5858861ffff168961ffff16620f42400362ffffff16610565565b9250610369565b6102f88b8a838f610602565b95508573ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff16146103485761033c868c8b8563ffffffff16565b94508488039250610368565b610365858861ffff168961ffff16620f42400362ffffff16610565565b92505b5b610388868c8b8f61037c5761061c610380565b6106345b63ffffffff16565b93505061045e565b610bb08b6103a05761061c6103a4565b6106345b90506103b58a8c8b8463ffffffff16565b93508760000397508388106103cc5789955061042c565b6103d88b8a8a8f61064c565b95508573ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff161461041f5761041c868c8b8463ffffffff16565b93505b8784111561042b578793505b5b61043b868c8b8563ffffffff16565b945061045a858861ffff168961ffff16620f42400362ffffff16610565565b9250505b509650965096509692505050565b600061047b8385846001610666565b90509392505050565b60006104938484846001610728565b90509392505050565b600080838502905060008019858709828110838203039150508084116104c157600080fd5b60008114156104d6578382049250505061055e565b8385870982811182039150808303925050600084856000031690508085049450808304925060018182600003040190508082028317925060006002866003021890508086026002038102905080860260020381029050808602600203810290508086026002038102905080860260020381029050808602600203810290508084029450505050505b9392505050565b600080841480610582575082848486029250828161057f57fe5b04145b156105a5576000821161059457600080fd5b6000828206118282040190506105fb565b6105b084848461049c565b9050600082806105bc57fe5b84860911156105fa577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81106105f157600080fd5b80806001019150505b5b9392505050565b600061061285858585600161081d565b9050949350505050565b600061062b8385846000610728565b90509392505050565b60006106438484846000610666565b90509392505050565b600061065c85858585600061081d565b9050949350505050565b60008473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610156106a157600080fd5b600085850373ffffffffffffffffffffffffffffffffffffffff169050826106f2576106ed81856fffffffffffffffffffffffffffffffff166c0100000000000000000000000061049c565b61071d565b61071c81856fffffffffffffffffffffffffffffffff166c01000000000000000000000000610565565b5b915050949350505050565b60008085850373ffffffffffffffffffffffffffffffffffffffff1690508473ffffffffffffffffffffffffffffffffffffffff16811061076857600080fd5b6000606060ff16856fffffffffffffffffffffffffffffffff16901b9050836107d0578673ffffffffffffffffffffffffffffffffffffffff166107c383838973ffffffffffffffffffffffffffffffffffffffff1661049c565b816107ca57fe5b04610811565b6108106107f483838973ffffffffffffffffffffffffffffffffffffffff16610565565b8873ffffffffffffffffffffffffffffffffffffffff16610b57565b5b92505050949350505050565b6000808673ffffffffffffffffffffffffffffffffffffffff161161084157600080fd5b6000856fffffffffffffffffffffffffffffffff161161086057600080fd5b81151583151514156109ec57600084141561087d57859050610b4e565b6000606060ff16866fffffffffffffffffffffffffffffffff16901b905082156109645760008773ffffffffffffffffffffffffffffffffffffffff16868973ffffffffffffffffffffffffffffffffffffffff168802925082816108de57fe5b041415610920576000818301905082811061091e57610914838a73ffffffffffffffffffffffffffffffffffffffff1683610565565b9350505050610b4e565b505b61095b82610956888b73ffffffffffffffffffffffffffffffffffffffff16868161094757fe5b04610b6a90919063ffffffff16565b610b57565b92505050610b4e565b60008773ffffffffffffffffffffffffffffffffffffffff16868973ffffffffffffffffffffffffffffffffffffffff168802925082816109a157fe5b04146109ac57600080fd5b8082116109b857600080fd5b6109e36109de838a73ffffffffffffffffffffffffffffffffffffffff16848603610565565b610b84565b92505050610b4e565b8115610a9a57610a93610a8e73ffffffffffffffffffffffffffffffffffffffff8016861115610a4557610a40866c01000000000000000000000000896fffffffffffffffffffffffffffffffff1661049c565b610a69565b866fffffffffffffffffffffffffffffffff16606060ff1687901b81610a6757fe5b045b8873ffffffffffffffffffffffffffffffffffffffff16610b6a90919063ffffffff16565b610b84565b9050610b4e565b600073ffffffffffffffffffffffffffffffffffffffff8016851115610ae957610ae4856c01000000000000000000000000886fffffffffffffffffffffffffffffffff16610565565b610b0d565b610b0c606060ff1686901b876fffffffffffffffffffffffffffffffff16610b57565b5b9050808773ffffffffffffffffffffffffffffffffffffffff1611610b3157600080fd5b808773ffffffffffffffffffffffffffffffffffffffff16039150505b95945050505050565b6000808284061182840401905092915050565b6000828284019150811015610b7e57600080fd5b92915050565b6000818291508173ffffffffffffffffffffffffffffffffffffffff1614610bab57600080fd5b919050565bfefea26469706673582212204553da933f90c453f937d727fa51a6cf28c35df6e6c985b0d1bf5925cabcff5b64736f6c63430007060033";
