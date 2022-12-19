/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AdaptiveFeeEchidnaTest } from "../AdaptiveFeeEchidnaTest";

export class AdaptiveFeeEchidnaTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<AdaptiveFeeEchidnaTest> {
    return super.deploy(overrides || {}) as Promise<AdaptiveFeeEchidnaTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AdaptiveFeeEchidnaTest {
    return super.attach(address) as AdaptiveFeeEchidnaTest;
  }
  connect(signer: Signer): AdaptiveFeeEchidnaTest__factory {
    return super.connect(signer) as AdaptiveFeeEchidnaTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdaptiveFeeEchidnaTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AdaptiveFeeEchidnaTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "gamma",
        type: "uint16",
      },
    ],
    name: "expInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint88",
        name: "volatility",
        type: "uint88",
      },
      {
        internalType: "uint256",
        name: "volumePerLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "gamma1",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "gamma2",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "alpha1",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "alpha2",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "beta1",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "beta2",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "volumeGamma",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "volumeBeta",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "baseFee",
        type: "uint16",
      },
    ],
    name: "getFeeInvariants",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "gamma",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "alpha",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "beta",
        type: "uint256",
      },
    ],
    name: "sigmoidInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610612806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80636675894314610046578063e13f1eba14610082578063fe66321514610160575b600080fd5b6100806004803603604081101561005c57600080fd5b8101908080359060200190929190803561ffff1690602001909291905050506101b4565b005b61014a600480360361016081101561009957600080fd5b8101908080356affffffffffffffffffffff16906020019092919080359060200190929190803561ffff169060200190929190803561ffff169060200190929190803561ffff169060200190929190803561ffff169060200190929190803563ffffffff169060200190929190803563ffffffff169060200190929190803561ffff169060200190929190803563ffffffff169060200190929190803561ffff169060200190929190505050610216565b6040518082815260200191505060405180910390f35b6101b26004803603608081101561017657600080fd5b8101908080359060200190929190803561ffff169060200190929190803561ffff169060200190929190803590602001909291905050506103d0565b005b60008161ffff1614156101c657600080fd5b8060060261ffff1682106101d957610212565b600060088261ffff160a905060006101f2848484610415565b905071020000000000000000000000000000000000811061020f57fe5b50505b5050565b600061ffff80168261ffff168861ffff168a61ffff16010111156102a2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f4d6178206665652065786365656465640000000000000000000000000000000081525060200191505060405180910390fd5b60008a61ffff16141580156102bc575060008961ffff1614155b80156102cd575060008461ffff1614155b61033f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f47616d6d6173206d757374206265203e2030000000000000000000000000000081525060200191505060405180910390fd5b60006103608d6affffffffffffffffffffff168c8b8a63ffffffff16610526565b905060006103838e6affffffffffffffffffffff168c8b8a63ffffffff16610526565b905061ffff8016818301111561039557fe5b6103a98d878385018863ffffffff16610526565b8461ffff1601925061ffff80168311156103bf57fe5b50509b9a5050505050505050505050565b60008361ffff1614156103e257600080fd5b60006103f085858585610526565b905061ffff801681111561040057fe5b8261ffff1681111561040e57fe5b5050505050565b6000808490508291508361ffff16838161042b57fe5b049250828102820191508361ffff16838161044257fe5b049250848102905060028382028161045657fe5b04820191508361ffff16838161046857fe5b049250848102905060068382028161047c57fe5b04820191508361ffff16838161048e57fe5b04925084810290506018838202816104a257fe5b04820191508361ffff1683816104b457fe5b04925084810290506078838202816104c857fe5b04820191508361ffff1683816104da57fe5b04925084810290506102d0838202816104ef57fe5b04820191508481029050619d808582028161050657fe5b046113b08561ffff1683028161051857fe5b040182019150509392505050565b6000818511156105855781850394508361ffff16600602851061054f578261ffff1690506105d4565b600060088561ffff160a90506000610568878784610415565b9050808201818661ffff16028161057b57fe5b04925050506105d3565b84820394508361ffff1660060285106105a157600090506105d4565b600060088561ffff160a905060006105ba878784610415565b8201905080828661ffff1602816105cd57fe5b04925050505b5b94935050505056fea26469706673582212200c3461b9673b1eb92ead0c5c8042d29c9b3d7e851f687c9aafbde10747accdce64736f6c63430007060033";