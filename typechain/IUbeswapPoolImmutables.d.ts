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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IUbeswapPoolImmutablesInterface extends ethers.utils.Interface {
  functions: {
    "dataStorageOperator()": FunctionFragment;
    "factory()": FunctionFragment;
    "maxLiquidityPerTick()": FunctionFragment;
    "tickSpacing()": FunctionFragment;
    "token0()": FunctionFragment;
    "token1()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "dataStorageOperator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxLiquidityPerTick",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tickSpacing",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "dataStorageOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxLiquidityPerTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tickSpacing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;

  events: {};
}

export class IUbeswapPoolImmutables extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IUbeswapPoolImmutablesInterface;

  functions: {
    dataStorageOperator(overrides?: CallOverrides): Promise<[string]>;

    "dataStorageOperator()"(overrides?: CallOverrides): Promise<[string]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxLiquidityPerTick()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    tickSpacing(overrides?: CallOverrides): Promise<[number]>;

    "tickSpacing()"(overrides?: CallOverrides): Promise<[number]>;

    token0(overrides?: CallOverrides): Promise<[string]>;

    "token0()"(overrides?: CallOverrides): Promise<[string]>;

    token1(overrides?: CallOverrides): Promise<[string]>;

    "token1()"(overrides?: CallOverrides): Promise<[string]>;
  };

  dataStorageOperator(overrides?: CallOverrides): Promise<string>;

  "dataStorageOperator()"(overrides?: CallOverrides): Promise<string>;

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

  "maxLiquidityPerTick()"(overrides?: CallOverrides): Promise<BigNumber>;

  tickSpacing(overrides?: CallOverrides): Promise<number>;

  "tickSpacing()"(overrides?: CallOverrides): Promise<number>;

  token0(overrides?: CallOverrides): Promise<string>;

  "token0()"(overrides?: CallOverrides): Promise<string>;

  token1(overrides?: CallOverrides): Promise<string>;

  "token1()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    dataStorageOperator(overrides?: CallOverrides): Promise<string>;

    "dataStorageOperator()"(overrides?: CallOverrides): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

    "maxLiquidityPerTick()"(overrides?: CallOverrides): Promise<BigNumber>;

    tickSpacing(overrides?: CallOverrides): Promise<number>;

    "tickSpacing()"(overrides?: CallOverrides): Promise<number>;

    token0(overrides?: CallOverrides): Promise<string>;

    "token0()"(overrides?: CallOverrides): Promise<string>;

    token1(overrides?: CallOverrides): Promise<string>;

    "token1()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    dataStorageOperator(overrides?: CallOverrides): Promise<BigNumber>;

    "dataStorageOperator()"(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

    "maxLiquidityPerTick()"(overrides?: CallOverrides): Promise<BigNumber>;

    tickSpacing(overrides?: CallOverrides): Promise<BigNumber>;

    "tickSpacing()"(overrides?: CallOverrides): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    "token0()"(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    "token1()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    dataStorageOperator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "dataStorageOperator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxLiquidityPerTick(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxLiquidityPerTick()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tickSpacing(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tickSpacing()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token0()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token1()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
