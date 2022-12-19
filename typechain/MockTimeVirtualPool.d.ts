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

interface MockTimeVirtualPoolInterface extends ethers.utils.Interface {
  functions: {
    "cross(int24,bool)": FunctionFragment;
    "currentTick()": FunctionFragment;
    "increaseCumulative(uint32)": FunctionFragment;
    "setIsExist(bool)": FunctionFragment;
    "setIsStarted(bool)": FunctionFragment;
    "timestamp()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cross",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "currentTick",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increaseCumulative",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setIsExist", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setIsStarted",
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: "timestamp", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cross", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseCumulative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setIsExist", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setIsStarted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "timestamp", data: BytesLike): Result;

  events: {};
}

export class MockTimeVirtualPool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockTimeVirtualPoolInterface;

  functions: {
    cross(
      nextTick: BigNumberish,
      zeroToOne: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cross(int24,bool)"(
      nextTick: BigNumberish,
      zeroToOne: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    currentTick(overrides?: CallOverrides): Promise<[number]>;

    "currentTick()"(overrides?: CallOverrides): Promise<[number]>;

    increaseCumulative(
      currentTimestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "increaseCumulative(uint32)"(
      currentTimestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setIsExist(
      _isExist: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setIsExist(bool)"(
      _isExist: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setIsStarted(
      _isStarted: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setIsStarted(bool)"(
      _isStarted: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    timestamp(overrides?: CallOverrides): Promise<[number]>;

    "timestamp()"(overrides?: CallOverrides): Promise<[number]>;
  };

  cross(
    nextTick: BigNumberish,
    zeroToOne: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cross(int24,bool)"(
    nextTick: BigNumberish,
    zeroToOne: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  currentTick(overrides?: CallOverrides): Promise<number>;

  "currentTick()"(overrides?: CallOverrides): Promise<number>;

  increaseCumulative(
    currentTimestamp: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "increaseCumulative(uint32)"(
    currentTimestamp: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setIsExist(
    _isExist: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setIsExist(bool)"(
    _isExist: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setIsStarted(
    _isStarted: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setIsStarted(bool)"(
    _isStarted: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  timestamp(overrides?: CallOverrides): Promise<number>;

  "timestamp()"(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    cross(
      nextTick: BigNumberish,
      zeroToOne: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "cross(int24,bool)"(
      nextTick: BigNumberish,
      zeroToOne: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    currentTick(overrides?: CallOverrides): Promise<number>;

    "currentTick()"(overrides?: CallOverrides): Promise<number>;

    increaseCumulative(
      currentTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "increaseCumulative(uint32)"(
      currentTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    setIsExist(_isExist: boolean, overrides?: CallOverrides): Promise<void>;

    "setIsExist(bool)"(
      _isExist: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setIsStarted(_isStarted: boolean, overrides?: CallOverrides): Promise<void>;

    "setIsStarted(bool)"(
      _isStarted: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    timestamp(overrides?: CallOverrides): Promise<number>;

    "timestamp()"(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    cross(
      nextTick: BigNumberish,
      zeroToOne: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cross(int24,bool)"(
      nextTick: BigNumberish,
      zeroToOne: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    currentTick(overrides?: CallOverrides): Promise<BigNumber>;

    "currentTick()"(overrides?: CallOverrides): Promise<BigNumber>;

    increaseCumulative(
      currentTimestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "increaseCumulative(uint32)"(
      currentTimestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setIsExist(_isExist: boolean, overrides?: Overrides): Promise<BigNumber>;

    "setIsExist(bool)"(
      _isExist: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setIsStarted(
      _isStarted: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setIsStarted(bool)"(
      _isStarted: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    timestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "timestamp()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cross(
      nextTick: BigNumberish,
      zeroToOne: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cross(int24,bool)"(
      nextTick: BigNumberish,
      zeroToOne: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    currentTick(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentTick()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseCumulative(
      currentTimestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "increaseCumulative(uint32)"(
      currentTimestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setIsExist(
      _isExist: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setIsExist(bool)"(
      _isExist: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setIsStarted(
      _isStarted: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setIsStarted(bool)"(
      _isStarted: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    timestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "timestamp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
