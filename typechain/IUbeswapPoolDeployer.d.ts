/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IUbeswapPoolDeployerInterface extends ethers.utils.Interface {
  functions: {
    "deploy(address,address,address,address)": FunctionFragment;
    "parameters()": FunctionFragment;
    "setFactory(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deploy",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "parameters",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setFactory", values: [string]): string;

  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFactory", data: BytesLike): Result;

  events: {
    "Factory(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Factory"): EventFragment;
}

export class IUbeswapPoolDeployer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IUbeswapPoolDeployerInterface;

  functions: {
    deploy(
      dataStorage: string,
      factory: string,
      token0: string,
      token1: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deploy(address,address,address,address)"(
      dataStorage: string,
      factory: string,
      token0: string,
      token1: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    parameters(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        dataStorage: string;
        factory: string;
        token0: string;
        token1: string;
      }
    >;

    "parameters()"(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        dataStorage: string;
        factory: string;
        token0: string;
        token1: string;
      }
    >;

    setFactory(
      factory: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFactory(address)"(
      factory: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  deploy(
    dataStorage: string,
    factory: string,
    token0: string,
    token1: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deploy(address,address,address,address)"(
    dataStorage: string,
    factory: string,
    token0: string,
    token1: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  parameters(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string] & {
      dataStorage: string;
      factory: string;
      token0: string;
      token1: string;
    }
  >;

  "parameters()"(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string] & {
      dataStorage: string;
      factory: string;
      token0: string;
      token1: string;
    }
  >;

  setFactory(
    factory: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setFactory(address)"(
    factory: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    deploy(
      dataStorage: string,
      factory: string,
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "deploy(address,address,address,address)"(
      dataStorage: string,
      factory: string,
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    parameters(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        dataStorage: string;
        factory: string;
        token0: string;
        token1: string;
      }
    >;

    "parameters()"(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        dataStorage: string;
        factory: string;
        token0: string;
        token1: string;
      }
    >;

    setFactory(factory: string, overrides?: CallOverrides): Promise<void>;

    "setFactory(address)"(
      factory: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Factory(factory: string | null): EventFilter;
  };

  estimateGas: {
    deploy(
      dataStorage: string,
      factory: string,
      token0: string,
      token1: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deploy(address,address,address,address)"(
      dataStorage: string,
      factory: string,
      token0: string,
      token1: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    parameters(overrides?: CallOverrides): Promise<BigNumber>;

    "parameters()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFactory(factory: string, overrides?: Overrides): Promise<BigNumber>;

    "setFactory(address)"(
      factory: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deploy(
      dataStorage: string,
      factory: string,
      token0: string,
      token1: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deploy(address,address,address,address)"(
      dataStorage: string,
      factory: string,
      token0: string,
      token1: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    parameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "parameters()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFactory(
      factory: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFactory(address)"(
      factory: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
