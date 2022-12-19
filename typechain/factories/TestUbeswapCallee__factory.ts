/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestUbeswapCallee } from "../TestUbeswapCallee";

export class TestUbeswapCallee__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestUbeswapCallee> {
    return super.deploy(overrides || {}) as Promise<TestUbeswapCallee>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestUbeswapCallee {
    return super.attach(address) as TestUbeswapCallee;
  }
  connect(signer: Signer): TestUbeswapCallee__factory {
    return super.connect(signer) as TestUbeswapCallee__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUbeswapCallee {
    return new Contract(address, _abi, signerOrProvider) as TestUbeswapCallee;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "fee0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee1",
        type: "uint256",
      },
    ],
    name: "FlashCallback",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Owed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Owed",
        type: "uint256",
      },
    ],
    name: "MintCallback",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Owed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Owed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "resultLiquidity",
        type: "uint256",
      },
    ],
    name: "MintResult",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
    ],
    name: "SwapCallback",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pay0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pay1",
        type: "uint256",
      },
    ],
    name: "flash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
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
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0Owed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Owed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "resultLiquidity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "limitSqrtPrice",
        type: "uint160",
      },
    ],
    name: "swap0ForExact1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "limitSqrtPrice",
        type: "uint160",
      },
    ],
    name: "swap1ForExact0",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "limitSqrtPrice",
        type: "uint160",
      },
    ],
    name: "swapExact0For1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "limitSqrtPrice",
        type: "uint160",
      },
    ],
    name: "swapExact0For1SupportingFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "limitSqrtPrice",
        type: "uint160",
      },
    ],
    name: "swapExact1For0",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "limitSqrtPrice",
        type: "uint160",
      },
    ],
    name: "swapExact1For0SupportingFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "price",
        type: "uint160",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "swapToHigherSqrtPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "price",
        type: "uint160",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "swapToLowerSqrtPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "ubeswapFlashCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Owed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Owed",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "ubeswapMintCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506122a4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80637b4f53271161008c578063bac7bf7811610066578063bac7bf78146105e8578063e227ae9514610676578063e2be910914610703578063f603482c14610791576100cf565b80637b4f53271461041a5780639e77b805146104d6578063acc36a2b1461055a576100cf565b8063034b0f8f146100d45780632ec20bf914610160578063410853ce146101e457806346d8945c1461027157806358b56631146102fe5780636dfc0ddb1461038c575b600080fd5b61015e600480360360c08110156100ea57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001909291908035906020019092919050505061081f565b005b6101e26004803603606081101561017657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061096a565b005b61026f600480360360608110156101fa57600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561022b57600080fd5b82018360208201111561023d57600080fd5b8035906020019184600183028401116401000000008311171561025f57600080fd5b9091929391929390505050610b11565b005b6102fc6004803603606081101561028757600080fd5b810190808035906020019092919080359060200190929190803590602001906401000000008111156102b857600080fd5b8201836020820111156102ca57600080fd5b803590602001918460018302840111640100000000831117156102ec57600080fd5b9091929391929390505050610e5c565b005b61038a6004803603608081101561031457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111a4565b005b610418600480360360808110156103a257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611352565b005b6104b2600480360360a081101561043057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560020b9060200190929190803560020b906020019092919080356fffffffffffffffffffffffffffffffff1690602001909291905050506114e2565b60405180848152602001838152602001828152602001935050505060405180910390f35b610558600480360360608110156104ec57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611702565b005b6105e66004803603608081101561057057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118a9565b005b610674600480360360808110156105fe57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a57565b005b6107016004803603606081101561068c57600080fd5b810190808035906020019092919080359060200190929190803590602001906401000000008111156106bd57600080fd5b8201836020820111156106cf57600080fd5b803590602001918460018302840111640100000000831117156106f157600080fd5b9091929391929390505050611bea565b005b61078f6004803603608081101561071957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611f15565b005b61081d600480360360808110156107a757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506120a5565b005b8573ffffffffffffffffffffffffffffffffffffffff1663490e6cbc868686338787604051602001808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200193505050506040516020818303038152906040526040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156108fb5780820151818401526020810190506108e0565b50505050905090810190601f1680156109285780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561094a57600080fd5b505af115801561095e573d6000803e3d6000fd5b50505050505050505050565b8273ffffffffffffffffffffffffffffffffffffffff1663128acb088260017f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8633604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610a76578082015181840152602081019050610a5b565b50505050905090810190601f168015610aa35780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b158015610ac557600080fd5b505af1158015610ad9573d6000803e3d6000fd5b505050506040513d6040811015610aef57600080fd5b8101908080519060200190929190805190602001909291905050505050505050565b600082826020811015610b2357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505090507fd48241df4a75e663b29e55f9506b31f77ed0f48cfe7e7612d1163144995dc1ca8585604051808381526020018281526020019250505060405180910390a16000851315610ce4573373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015610bda57600080fd5b505afa158015610bee573d6000803e3d6000fd5b505050506040513d6020811015610c0457600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8233886040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610ca357600080fd5b505af1158015610cb7573d6000803e3d6000fd5b505050506040513d6020811015610ccd57600080fd5b810190808051906020019092919050505050610e55565b6000841315610e3d573373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015610d3357600080fd5b505afa158015610d47573d6000803e3d6000fd5b505050506040513d6020811015610d5d57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8233876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610dfc57600080fd5b505af1158015610e10573d6000803e3d6000fd5b505050506040513d6020811015610e2657600080fd5b810190808051906020019092919050505050610e54565b600085148015610e4d5750600084145b610e5357fe5b5b5b5050505050565b7f2b0391b4fa408cfe47abd1977d72985695b2e5ebd3175f55be25f2c68c5df21b8484604051808381526020018281526020019250505060405180910390a1600080600084846060811015610eb057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291905050509250925092506000821115611046573373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015610f4057600080fd5b505afa158015610f54573d6000803e3d6000fd5b505050506040513d6020811015610f6a57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8433856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561100957600080fd5b505af115801561101d573d6000803e3d6000fd5b505050506040513d602081101561103357600080fd5b8101908080519060200190929190505050505b600081111561119b573373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561109557600080fd5b505afa1580156110a9573d6000803e3d6000fd5b505050506040513d60208110156110bf57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8433846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561115e57600080fd5b505af1158015611172573d6000803e3d6000fd5b505050506040513d602081101561118857600080fd5b8101908080519060200190929190505050505b50505050505050565b8373ffffffffffffffffffffffffffffffffffffffff166371334694338460006111cd88612238565b8633604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156112b557808201518184015260208101905061129a565b50505050905090810190601f1680156112e25780820380516001836020036101000a031916815260200191505b509750505050505050506040805180830381600087803b15801561130557600080fd5b505af1158015611319573d6000803e3d6000fd5b505050506040513d604081101561132f57600080fd5b810190808051906020019092919080519060200190929190505050505050505050565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb0883600161137a87612238565b8533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561144657808201518184015260208101905061142b565b50505050905090810190601f1680156114735780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b15801561149557600080fd5b505af11580156114a9573d6000803e3d6000fd5b505050506040513d60408110156114bf57600080fd5b810190808051906020019092919080519060200190929190505050505050505050565b60008060008773ffffffffffffffffffffffffffffffffffffffff1663aafe29c0338989898933604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018560020b81526020018460020b8152602001836fffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156115ef5780820151818401526020810190506115d4565b50505050905090810190601f16801561161c5780820380516001836020036101000a031916815260200191505b50975050505050505050606060405180830381600087803b15801561164057600080fd5b505af1158015611654573d6000803e3d6000fd5b505050506040513d606081101561166a57600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050806fffffffffffffffffffffffffffffffff1690508093508194508295505050507fe6f6d49dd9278ee75517145a401566440c7245213758f9caf1618c642feec23e83838360405180848152602001838152602001828152602001935050505060405180910390a1955095509592505050565b8273ffffffffffffffffffffffffffffffffffffffff1663128acb088260007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8633604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561180e5780820151818401526020810190506117f3565b50505050905090810190601f16801561183b5780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b15801561185d57600080fd5b505af1158015611871573d6000803e3d6000fd5b505050506040513d604081101561188757600080fd5b8101908080519060200190929190805190602001909291905050505050505050565b8373ffffffffffffffffffffffffffffffffffffffff166371334694338460016118d288612238565b8633604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156119ba57808201518184015260208101905061199f565b50505050905090810190601f1680156119e75780820380516001836020036101000a031916815260200191505b509750505050505050506040805180830381600087803b158015611a0a57600080fd5b505af1158015611a1e573d6000803e3d6000fd5b505050506040513d6040811015611a3457600080fd5b810190808051906020019092919080519060200190929190505050505050505050565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb08836001611a7f87612238565b6000038533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611b4e578082015181840152602081019050611b33565b50505050905090810190601f168015611b7b5780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b158015611b9d57600080fd5b505af1158015611bb1573d6000803e3d6000fd5b505050506040513d6040811015611bc757600080fd5b810190808051906020019092919080519060200190929190505050505050505050565b600082826020811015611bfc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505090506000851115611d7a573373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015611c7457600080fd5b505afa158015611c88573d6000803e3d6000fd5b505050506040513d6020811015611c9e57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8233886040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015611d3d57600080fd5b505af1158015611d51573d6000803e3d6000fd5b505050506040513d6020811015611d6757600080fd5b8101908080519060200190929190505050505b6000841115611ecf573373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015611dc957600080fd5b505afa158015611ddd573d6000803e3d6000fd5b505050506040513d6020811015611df357600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166323b872dd8233876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015611e9257600080fd5b505af1158015611ea6573d6000803e3d6000fd5b505050506040513d6020811015611ebc57600080fd5b8101908080519060200190929190505050505b7fa0968be00566083701c9ef671c169d7fb05ac8907de4ca17185de74ccbb694d48585604051808381526020018281526020019250505060405180910390a15050505050565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb08836000611f3d87612238565b8533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612009578082015181840152602081019050611fee565b50505050905090810190601f1680156120365780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b15801561205857600080fd5b505af115801561206c573d6000803e3d6000fd5b505050506040513d604081101561208257600080fd5b810190808051906020019092919080519060200190929190505050505050505050565b8373ffffffffffffffffffffffffffffffffffffffff1663128acb088360006120cd87612238565b6000038533604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561219c578082015181840152602081019050612181565b50505050905090810190601f1680156121c95780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b1580156121eb57600080fd5b505af11580156121ff573d6000803e3d6000fd5b505050506040513d604081101561221557600080fd5b810190808051906020019092919080519060200190929190505050505050505050565b60007f8000000000000000000000000000000000000000000000000000000000000000821061226657600080fd5b81905091905056fea2646970667358221220b24586973b4064e12510c3eb71b3d4eb4fbadf9bc78cd3ca4100854a468581fd64736f6c63430007060033";
