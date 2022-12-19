/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DataStorageTest } from "../DataStorageTest";

export class DataStorageTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DataStorageTest> {
    return super.deploy(overrides || {}) as Promise<DataStorageTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DataStorageTest {
    return super.attach(address) as DataStorageTest;
  }
  connect(signer: Signer): DataStorageTest__factory {
    return super.connect(signer) as DataStorageTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DataStorageTest {
    return new Contract(address, _abi, signerOrProvider) as DataStorageTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "by",
        type: "uint32",
      },
    ],
    name: "advanceTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "advanceTimeBy",
            type: "uint32",
          },
          {
            internalType: "int24",
            name: "tick",
            type: "int24",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
        ],
        internalType: "struct DataStorageTest.UpdateParams[]",
        name: "params",
        type: "tuple[]",
      },
    ],
    name: "batchUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAverageTick",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
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
    name: "getGasCostOfGetPoints",
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
  {
    inputs: [],
    name: "index",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "time",
            type: "uint32",
          },
          {
            internalType: "int24",
            name: "tick",
            type: "int24",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
        ],
        internalType: "struct DataStorageTest.InitializeParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidity",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tick",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "time",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "timepoints",
    outputs: [
      {
        internalType: "bool",
        name: "initialized",
        type: "bool",
      },
      {
        internalType: "uint32",
        name: "blockTimestamp",
        type: "uint32",
      },
      {
        internalType: "int56",
        name: "tickCumulative",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "secondsPerLiquidityCumulative",
        type: "uint160",
      },
      {
        internalType: "uint88",
        name: "volatilityCumulative",
        type: "uint88",
      },
      {
        internalType: "int24",
        name: "averageTick",
        type: "int24",
      },
      {
        internalType: "uint144",
        name: "volumePerLiquidityCumulative",
        type: "uint144",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "advanceTimeBy",
            type: "uint32",
          },
          {
            internalType: "int24",
            name: "tick",
            type: "int24",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
        ],
        internalType: "struct DataStorageTest.UpdateParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "dt",
        type: "uint32",
      },
      {
        internalType: "int24",
        name: "tick0",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tick1",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "avgTick0",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "avgTick1",
        type: "int24",
      },
    ],
    name: "volatilityOnRange",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "window",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612aef806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80635fb3d9261161008c5780639d3a5241116100665780639d3a524114610255578063d81740db14610288578063daf50f6b146102a4578063f7fd2cfa146102c0576100ea565b80635fb3d926146101d357806365829dc51461020357806374eceae61461021f576100ea565b80632986c0e5116100c85780632986c0e5146101495780633eaf5d9f14610167578063461645bf146101855780634b508b08146101a3576100ea565b806310508802146100ef57806316ada5471461010d5780631a6865021461012b575b600080fd5b6100f76102dc565b604051610104919061280f565b60405180910390f35b610115610425565b604051610122919061287b565b60405180910390f35b61013361043d565b604051610140919061282a565b60405180910390f35b610151610461565b60405161015e9190612845565b60405180910390f35b61016f610477565b60405161017c91906127f4565b60405180910390f35b61018d61048c565b60405161019a9190612860565b60405180910390f35b6101bd60048036038101906101b891906122b9565b61049d565b6040516101ca9190612860565b60405180910390f35b6101ed60048036038101906101e891906123f4565b61057e565b6040516101fa9190612860565b60405180910390f35b61021d60048036038101906102189190612350565b6105aa565b005b610239600480360381019061023491906123a2565b6106dc565b60405161024c9796959493929190612785565b60405180910390f35b61026f600480360381019061026a91906122b9565b6107b2565b60405161027f9493929190612724565b60405180910390f35b6102a2600480360381019061029d9190612274565b61087d565b005b6102be60048036038101906102b99190612327565b610a3f565b005b6102da60048036038101906102d591906123cb565b610b33565b005b60008060006202000060179054906101000a900461ffff1661ffff1662010000811061030457fe5b6002020160000160019054906101000a900463ffffffff1690506000806202000060179054906101000a900461ffff1661ffff1662010000811061034457fe5b6002020160000160059054906101000a900460060b905060008060016202000060179054906101000a900461ffff160161ffff1662010000811061038457fe5b6002020160000160009054906101000a900460ff16156103b75760016202000060179054906101000a900461ffff160190505b60008060006202000060009054906101000a900463ffffffff166202000060049054906101000a900460020b6202000060179054906101000a900461ffff1692509250925061041a838383878a8a6000610b6e909695949392919063ffffffff16565b965050505050505090565b6202000060009054906101000a900463ffffffff1681565b6202000060079054906101000a90046fffffffffffffffffffffffffffffffff1681565b6202000060179054906101000a900461ffff1681565b6202000060049054906101000a900460020b81565b60006201518063ffffffff16905090565b60008060008060006202000060009054906101000a900463ffffffff166202000060049054906101000a900460020b6202000060079054906101000a90046fffffffffffffffffffffffffffffffff166202000060179054906101000a900461ffff16935093509350935060005a905061056a85898980806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050508685876000610d039095949392919063ffffffff16565b505050505a81039550505050505092915050565b600061059f8663ffffffff168660020b8660020b8660020b8660020b610fad565b905095945050505050565b6105c58160000160208101906105c091906123cb565b610b33565b6106386202000060179054906101000a900461ffff166202000060009054906101000a900463ffffffff166202000060049054906101000a900460020b6202000060079054906101000a90046fffffffffffffffffffffffffffffffff166000806110159095949392919063ffffffff16565b6202000060176101000a81548161ffff021916908361ffff16021790555080602001602081019061066991906122fe565b6202000060046101000a81548162ffffff021916908360020b62ffffff16021790555080604001602081019061069f9190612379565b6202000060076101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555050565b6000816201000081106106ee57600080fd5b600202016000915090508060000160009054906101000a900460ff16908060000160019054906101000a900463ffffffff16908060000160059054906101000a900460060b9080600001600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a90046affffffffffffffffffffff169080600101600b9054906101000a900460020b9080600101600e9054906101000a900471ffffffffffffffffffffffffffffffffffff16905087565b60608060608061086c6202000060009054906101000a900463ffffffff16878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050506202000060049054906101000a900460020b6202000060179054906101000a900461ffff166202000060079054906101000a90046fffffffffffffffffffffffffffffffff166000610d039095949392919063ffffffff16565b935093509350935092959194509250565b60006202000060049054906101000a900460020b905060006202000060079054906101000a90046fffffffffffffffffffffffffffffffff16905060006202000060179054906101000a900461ffff16905060006202000060009054906101000a900463ffffffff16905060005b868690508110156109955786868281811061090257fe5b905060600201600001602081019061091a91906123cb565b8201915061093a838387876000806110159095949392919063ffffffff16565b925086868281811061094857fe5b905060600201602001602081019061096091906122fe565b945086868281811061096e57fe5b90506060020160400160208101906109869190612379565b935080806001019150506108eb565b50836202000060046101000a81548162ffffff021916908360020b62ffffff160217905550826202000060076101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550816202000060176101000a81548161ffff021916908361ffff160217905550806202000060006101000a81548163ffffffff021916908363ffffffff160217905550505050505050565b806000016020810190610a5291906123cb565b6202000060006101000a81548163ffffffff021916908363ffffffff160217905550806020016020810190610a8791906122fe565b6202000060046101000a81548162ffffff021916908360020b62ffffff160217905550806040016020810190610abd9190612379565b6202000060076101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550610b30816000016020810190610b0d91906123cb565b6202000060049054906101000a900460020b600061143b9092919063ffffffff16565b50565b806202000060008282829054906101000a900463ffffffff160192506101000a81548163ffffffff021916908363ffffffff16021790555050565b600080888561ffff16620100008110610b8357fe5b6002020160000160019054906101000a900463ffffffff1690506000898661ffff16620100008110610bb157fe5b6002020160000160059054906101000a900460060b9050610bd882620151808b038b611508565b15610cbc57610bed85620151808b038b611508565b15610c795760018703965060008a8861ffff16620100008110610c0c57fe5b6002020190508060000160009054906101000a900460ff16610c31578860020b610c6e565b8060000160019054906101000a900463ffffffff16860363ffffffff168160000160059054906101000a900460060b860360060b81610c6c57fe5b055b60060b935050610cb7565b6000610c8e8b8b620151808c8c8c600061154f565b9050620151808a87030163ffffffff168160400151860360060b81610caf57fe5b0560060b9350505b610cf6565b8163ffffffff168563ffffffff1614610ceb5781850363ffffffff1681850360060b81610ce557fe5b05610cf0565b8760020b5b60060b92505b5050979650505050505050565b606080606080875167ffffffffffffffff81118015610d2157600080fd5b50604051908082528060200260200182016040528015610d505781602001602082028036833780820191505090505b509350875167ffffffffffffffff81118015610d6b57600080fd5b50604051908082528060200260200182016040528015610d9a5781602001602082028036833780820191505090505b509250875167ffffffffffffffff81118015610db557600080fd5b50604051908082528060200260200182016040528015610de45781602001602082028036833780820191505090505b509150875167ffffffffffffffff81118015610dff57600080fd5b50604051908082528060200260200182016040528015610e2e5781602001602082028036833780820191505090505b5090506000806001880190508b8161ffff16620100008110610e4c57fe5b6002020160000160009054906101000a900460ff1615610e6a578091505b610e726120d4565b60005b8b51811015610f9c57610ea08e8e8e8481518110610e8f57fe5b60200260200101518e8e898f61154f565b91508160400151826060015183608001518460c00151816affffffffffffffffffffff1691508071ffffffffffffffffffffffffffffffffffff1690508b8581518110610ee957fe5b602002602001018b8681518110610efc57fe5b602002602001018b8781518110610f0f57fe5b602002602001018b8881518110610f2257fe5b6020026020010184815250846dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff168152508473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152508460060b60060b815250505050508080600101915050610e75565b505050509650965096509692505050565b60008083830386860303905060008785880302905060006001896002020160018a018a02029050600060018a018a02905060028a0a6006026002840a8b600602028286866006020202846002880a0201018161100557fe5b0594505050505095945050505050565b600080878761ffff1662010000811061102a57fe5b6002020190508563ffffffff168160000160019054906101000a900463ffffffff1663ffffffff1614156110615786915050611431565b6000816040518060e00160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160059054906101000a900460060b60060b60060b815260200160008201600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a90046affffffffffffffffffffff166affffffffffffffffffffff166affffffffffffffffffffff16815260200160018201600b9054906101000a900460020b60020b60020b815260200160018201600e9054906101000a900471ffffffffffffffffffffffffffffffffffff1671ffffffffffffffffffffffffffffffffffff1671ffffffffffffffffffffffffffffffffffff168152505090506001880192506000898461ffff166201000081106111e757fe5b6002020160000160009054906101000a900460ff1615611205578390505b600061121e8b8a8a8d8688602001518960400151610b6e565b905060008890508261ffff168b61ffff16146112a55760008c60018d0361ffff1662010000811061124b57fe5b60020201905060008160000160019054906101000a900463ffffffff16905060008260000160059054906101000a900460060b90508187602001510363ffffffff168188604001510360060b8161129e57fe5b0593505050505b6112b4848b8b848c878d611da0565b8c8761ffff166201000081106112c657fe5b6002020160008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548163ffffffff021916908363ffffffff16021790555060408201518160000160056101000a81548166ffffffffffffff021916908360060b66ffffffffffffff160217905550606082015181600001600c6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160010160006101000a8154816affffffffffffffffffffff02191690836affffffffffffffffffffff16021790555060a082015181600101600b6101000a81548162ffffff021916908360020b62ffffff16021790555060c082015181600101600e6101000a81548171ffffffffffffffffffffffffffffffffffff021916908371ffffffffffffffffffffffffffffffffffff16021790555090505050505050505b9695505050505050565b82600062010000811061144a57fe5b6002020160000160009054906101000a900460ff161561146957600080fd5b600183600062010000811061147a57fe5b6002020160000160006101000a81548160ff021916908315150217905550818360006201000081106114a857fe5b6002020160000160016101000a81548163ffffffff021916908363ffffffff160217905550808360006201000081106114dd57fe5b60020201600101600b6101000a81548162ffffff021916908360020b62ffffff160217905550505050565b60008163ffffffff168463ffffffff161190508163ffffffff168363ffffffff161115158115151415611548578263ffffffff168463ffffffff16111590505b9392505050565b6115576120d4565b6000868803905060008763ffffffff1614806115a357506115a2898661ffff1662010000811061158357fe5b6002020160000160019054906101000a900463ffffffff16828a611508565b5b15611835576000898661ffff166201000081106115bc57fe5b600202016040518060e00160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160059054906101000a900460060b60060b60060b815260200160008201600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a90046affffffffffffffffffffff166affffffffffffffffffffff166affffffffffffffffffffff16815260200160018201600b9054906101000a900460020b60020b60020b815260200160018201600e9054906101000a900471ffffffffffffffffffffffffffffffffffff1671ffffffffffffffffffffffffffffffffffff1671ffffffffffffffffffffffffffffffffffff168152505090508163ffffffff16816020015163ffffffff16141561174b578092505050611d95565b60006117648b8b8a8a8a87602001518860400151610b6e565b905060008890508661ffff168861ffff161461181a576117826120d4565b60008d60018b0361ffff1662010000811061179957fe5b6002020190508060000160019054906101000a900463ffffffff16826020019063ffffffff16908163ffffffff16815250508060000160059054906101000a900460060b826040019060060b908160060b81525050816020015185602001510363ffffffff16826040015186604001510360060b8161181457fe5b05925050505b61182a83858b848a876000611da0565b945050505050611d95565b611869898561ffff1662010000811061184a57fe5b6002020160000160019054906101000a900463ffffffff16828a611508565b6118db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260038152602001807f4f4c44000000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000806118eb8b8b858a8a611f6b565b6040518060e00160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160059054906101000a900460060b60060b60060b815260200160008201600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a90046affffffffffffffffffffff166affffffffffffffffffffff166affffffffffffffffffffff16815260200160018201600b9054906101000a900460020b60020b60020b815260200160018201600e9054906101000a900471ffffffffffffffffffffffffffffffffffff1671ffffffffffffffffffffffffffffffffffff1671ffffffffffffffffffffffffffffffffffff168152505091506040518060e00160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160059054906101000a900460060b60060b60060b815260200160008201600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a90046affffffffffffffffffffff166affffffffffffffffffffff166affffffffffffffffffffff16815260200160018201600b9054906101000a900460020b60020b60020b815260200160018201600e9054906101000a900471ffffffffffffffffffffffffffffffffffff1671ffffffffffffffffffffffffffffffffffff1671ffffffffffffffffffffffffffffffffffff16815250509150806020015163ffffffff168363ffffffff161415611be057809350505050611d95565b816020015163ffffffff168363ffffffff1614611d8e5760008260200151826020015103905060008360200151850390508063ffffffff168263ffffffff16856040015185604001510360060b81611c3457fe5b0502846040018181510191509060060b908160060b815250508163ffffffff168163ffffffff16856060015185606001510373ffffffffffffffffffffffffffffffffffffffff160281611c8457fe5b04846060018181510191509073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508063ffffffff168263ffffffff1685608001518560800151036affffffffffffffffffffff1681611cef57fe5b040284608001818151019150906affffffffffffffffffffff1690816affffffffffffffffffffff16815250508063ffffffff168263ffffffff168560c001518560c001510371ffffffffffffffffffffffffffffffffffff1681611d5057fe5b04028460c0018181510191509071ffffffffffffffffffffffffffffffffffff16908171ffffffffffffffffffffffffffffffffffff168152505050505b8193505050505b979650505050505050565b611da86120d4565b6000886020015188039050600189600001901515908115158152505087896020019063ffffffff16908163ffffffff16815250508063ffffffff168760020b02896040018181510191509060060b908160060b815250506000856fffffffffffffffffffffffffffffffff1611611e20576001611e22565b845b6fffffffffffffffffffffffffffffffff1660808263ffffffff1673ffffffffffffffffffffffffffffffffffffffff16901b73ffffffffffffffffffffffffffffffffffffffff1681611e7257fe5b04896060018181510191509073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050611ed38163ffffffff168760020b8960020b8c60a0015160020b8860020b610fad565b89608001818151019150906affffffffffffffffffffff1690816affffffffffffffffffffff1681525050838960a0019060020b908160020b81525050826fffffffffffffffffffffffffffffffff168960c0018181510191509071ffffffffffffffffffffffffffffffffffff16908171ffffffffffffffffffffffffffffffffffff168152505088915050979650505050505050565b60008060008361ffff16905060008461ffff168661ffff161015611f9857620100008661ffff1601611f9e565b8561ffff165b905060006001828401901c90505b898161ffff16620100008110611fbe57fe5b6002020194506000808660000160009054906101000a900460ff168760000160019054906101000a900463ffffffff169150915081156120a357612003818b8d611508565b15612097578b6001840161ffff1662010000811061201d57fe5b6002020195506000808760000160009054906101000a900460ff168860000160019054906101000a900463ffffffff1691509150811561207e576120628c828f611508565b1561207357505050505050506120ca565b600185019650612090565b888998509850505050505050506120ca565b505061209e565b6001830393505b6120aa565b6001830194505b6001848601901c925050506001611fac5784935060006120c657fe5b5050505b9550959350505050565b6040518060e00160405280600015158152602001600063ffffffff168152602001600060060b8152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160006affffffffffffffffffffff168152602001600060020b8152602001600071ffffffffffffffffffffffffffffffffffff1681525090565b60008083601f84011261216857600080fd5b8235905067ffffffffffffffff81111561218157600080fd5b60208301915083606082028301111561219957600080fd5b9250929050565b60008083601f8401126121b257600080fd5b8235905067ffffffffffffffff8111156121cb57600080fd5b6020830191508360208202830111156121e357600080fd5b9250929050565b6000813590506121f981612a5d565b92915050565b60006060828403121561221157600080fd5b81905092915050565b60006060828403121561222c57600080fd5b81905092915050565b60008135905061224481612a74565b92915050565b60008135905061225981612a8b565b92915050565b60008135905061226e81612aa2565b92915050565b6000806020838503121561228757600080fd5b600083013567ffffffffffffffff8111156122a157600080fd5b6122ad85828601612156565b92509250509250929050565b600080602083850312156122cc57600080fd5b600083013567ffffffffffffffff8111156122e657600080fd5b6122f2858286016121a0565b92509250509250929050565b60006020828403121561231057600080fd5b600061231e848285016121ea565b91505092915050565b60006060828403121561233957600080fd5b6000612347848285016121ff565b91505092915050565b60006060828403121561236257600080fd5b60006123708482850161221a565b91505092915050565b60006020828403121561238b57600080fd5b600061239984828501612235565b91505092915050565b6000602082840312156123b457600080fd5b60006123c28482850161224a565b91505092915050565b6000602082840312156123dd57600080fd5b60006123eb8482850161225f565b91505092915050565b600080600080600060a0868803121561240c57600080fd5b600061241a8882890161225f565b955050602061242b888289016121ea565b945050604061243c888289016121ea565b935050606061244d888289016121ea565b925050608061245e888289016121ea565b9150509295509295909350565b60006124778383612670565b60208301905092915050565b600061248f838361268e565b60208301905092915050565b60006124a783836126bb565b60208301905092915050565b60006124bf83836126e8565b60208301905092915050565b60006124d6826128d6565b6124e08185612936565b93506124eb83612896565b8060005b8381101561251c578151612503888261246b565b975061250e83612902565b9250506001810190506124ef565b5085935050505092915050565b6000612534826128e1565b61253e8185612947565b9350612549836128a6565b8060005b8381101561257a5781516125618882612483565b975061256c8361290f565b92505060018101905061254d565b5085935050505092915050565b6000612592826128ec565b61259c8185612958565b93506125a7836128b6565b8060005b838110156125d85781516125bf888261249b565b97506125ca8361291c565b9250506001810190506125ab565b5085935050505092915050565b60006125f0826128f7565b6125fa8185612969565b9350612605836128c6565b8060005b8381101561263657815161261d88826124b3565b975061262883612929565b925050600181019050612609565b5085935050505092915050565b61264c8161297a565b82525050565b61265b81612986565b82525050565b61266a81612993565b82525050565b6126798161299d565b82525050565b6126888161299d565b82525050565b612697816129aa565b82525050565b6126a6816129c4565b82525050565b6126b5816129e0565b82525050565b6126c481612a0c565b82525050565b6126d381612a0c565b82525050565b6126e2816129fe565b82525050565b6126f181612a2c565b82525050565b61270081612a2c565b82525050565b61270f81612a36565b82525050565b61271e81612a46565b82525050565b6000608082019050818103600083015261273e81876124cb565b905081810360208301526127528186612587565b905081810360408301526127668185612529565b9050818103606083015261277a81846125e5565b905095945050505050565b600060e08201905061279a600083018a612643565b6127a76020830189612706565b6127b4604083018861267f565b6127c160608301876126ca565b6127ce6080830186612715565b6127db60a0830185612652565b6127e860c08301846126ac565b98975050505050505050565b60006020820190506128096000830184612652565b92915050565b60006020820190506128246000830184612661565b92915050565b600060208201905061283f600083018461269d565b92915050565b600060208201905061285a60008301846126d9565b92915050565b600060208201905061287560008301846126f7565b92915050565b60006020820190506128906000830184612706565b92915050565b6000819050602082019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60008115159050919050565b60008160020b9050919050565b6000819050919050565b60008160060b9050919050565b60006dffffffffffffffffffffffffffff82169050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b600071ffffffffffffffffffffffffffffffffffff82169050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b60006affffffffffffffffffffff82169050919050565b612a6681612986565b8114612a7157600080fd5b50565b612a7d816129c4565b8114612a8857600080fd5b50565b612a9481612a2c565b8114612a9f57600080fd5b50565b612aab81612a36565b8114612ab657600080fd5b5056fea2646970667358221220576e4767e2626995715d60aa125d600932582387c291fae980b49e69bd9e2b6c64736f6c63430007060033";
