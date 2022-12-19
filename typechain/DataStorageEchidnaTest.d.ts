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

interface DataStorageEchidnaTestInterface extends ethers.utils.Interface {
  functions: {
    "advanceTime(uint32)": FunctionFragment;
    "checkTimeWeightedAveragesAlwaysFitsType(uint32)": FunctionFragment;
    "checkTwoAdjacentTimepointsTickCumulativeModTimeElapsedAlways0(uint16)": FunctionFragment;
    "checkVolatilityOnRangeNotOverflowUint88(uint32,int24,int24,int24,int24)": FunctionFragment;
    "echidna_avgTickNotOverflows()": FunctionFragment;
    "echidna_canAlwaysGetPoints0IfInitialized()": FunctionFragment;
    "echidna_indexAlwaysLtCardinality()": FunctionFragment;
    "initialize(uint32,int24,uint128)": FunctionFragment;
    "update(uint32,int24,uint128)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "advanceTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkTimeWeightedAveragesAlwaysFitsType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkTwoAdjacentTimepointsTickCumulativeModTimeElapsedAlways0",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkVolatilityOnRangeNotOverflowUint88",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_avgTickNotOverflows",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_canAlwaysGetPoints0IfInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_indexAlwaysLtCardinality",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "advanceTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkTimeWeightedAveragesAlwaysFitsType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkTwoAdjacentTimepointsTickCumulativeModTimeElapsedAlways0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkVolatilityOnRangeNotOverflowUint88",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_avgTickNotOverflows",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_canAlwaysGetPoints0IfInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_indexAlwaysLtCardinality",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {};
}

export class DataStorageEchidnaTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DataStorageEchidnaTestInterface;

  functions: {
    advanceTime(
      by: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "advanceTime(uint32)"(
      by: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "checkTimeWeightedAveragesAlwaysFitsType(uint32)"(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    checkTwoAdjacentTimepointsTickCumulativeModTimeElapsedAlways0(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "checkTwoAdjacentTimepointsTickCumulativeModTimeElapsedAlways0(uint16)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    checkVolatilityOnRangeNotOverflowUint88(
      dt: BigNumberish,
      tick0: BigNumberish,
      tick1: BigNumberish,
      avgTick0: BigNumberish,
      avgTick1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "checkVolatilityOnRangeNotOverflowUint88(uint32,int24,int24,int24,int24)"(
      dt: BigNumberish,
      tick0: BigNumberish,
      tick1: BigNumberish,
      avgTick0: BigNumberish,
      avgTick1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    echidna_avgTickNotOverflows(overrides?: CallOverrides): Promise<[boolean]>;

    "echidna_avgTickNotOverflows()"(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    echidna_canAlwaysGetPoints0IfInitialized(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "echidna_canAlwaysGetPoints0IfInitialized()"(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "echidna_indexAlwaysLtCardinality()"(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(uint32,int24,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    update(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "update(uint32,int24,uint128)"(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  advanceTime(
    by: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "advanceTime(uint32)"(
    by: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  checkTimeWeightedAveragesAlwaysFitsType(
    secondsAgo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkTimeWeightedAveragesAlwaysFitsType(uint32)"(
    secondsAgo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  checkTwoAdjacentTimepointsTickCumulativeModTimeElapsedAlways0(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkTwoAdjacentTimepointsTickCumulativeModTimeElapsedAlways0(uint16)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  checkVolatilityOnRangeNotOverflowUint88(
    dt: BigNumberish,
    tick0: BigNumberish,
    tick1: BigNumberish,
    avgTick0: BigNumberish,
    avgTick1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkVolatilityOnRangeNotOverflowUint88(uint32,int24,int24,int24,int24)"(
    dt: BigNumberish,
    tick0: BigNumberish,
    tick1: BigNumberish,
    avgTick0: BigNumberish,
    avgTick1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  echidna_avgTickNotOverflows(overrides?: CallOverrides): Promise<boolean>;

  "echidna_avgTickNotOverflows()"(overrides?: CallOverrides): Promise<boolean>;

  echidna_canAlwaysGetPoints0IfInitialized(
    overrides?: CallOverrides
  ): Promise<boolean>;

  "echidna_canAlwaysGetPoints0IfInitialized()"(
    overrides?: CallOverrides
  ): Promise<boolean>;

  echidna_indexAlwaysLtCardinality(overrides?: CallOverrides): Promise<boolean>;

  "echidna_indexAlwaysLtCardinality()"(
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    time: BigNumberish,
    tick: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(uint32,int24,uint128)"(
    time: BigNumberish,
    tick: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  update(
    advanceTimeBy: BigNumberish,
    tick: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "update(uint32,int24,uint128)"(
    advanceTimeBy: BigNumberish,
    tick: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    advanceTime(by: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "advanceTime(uint32)"(
      by: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkTimeWeightedAveragesAlwaysFitsType(uint32)"(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkTwoAdjacentTimepointsTickCumulativeModTimeElapsedAlways0(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkTwoAdjacentTimepointsTickCumulativeModTimeElapsedAlways0(uint16)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkVolatilityOnRangeNotOverflowUint88(
      dt: BigNumberish,
      tick0: BigNumberish,
      tick1: BigNumberish,
      avgTick0: BigNumberish,
      avgTick1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkVolatilityOnRangeNotOverflowUint88(uint32,int24,int24,int24,int24)"(
      dt: BigNumberish,
      tick0: BigNumberish,
      tick1: BigNumberish,
      avgTick0: BigNumberish,
      avgTick1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    echidna_avgTickNotOverflows(overrides?: CallOverrides): Promise<boolean>;

    "echidna_avgTickNotOverflows()"(
      overrides?: CallOverrides
    ): Promise<boolean>;

    echidna_canAlwaysGetPoints0IfInitialized(
      overrides?: CallOverrides
    ): Promise<boolean>;

    "echidna_canAlwaysGetPoints0IfInitialized()"(
      overrides?: CallOverrides
    ): Promise<boolean>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<boolean>;

    "echidna_indexAlwaysLtCardinality()"(
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(uint32,int24,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    update(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "update(uint32,int24,uint128)"(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    advanceTime(by: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "advanceTime(uint32)"(
      by: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkTimeWeightedAveragesAlwaysFitsType(uint32)"(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkTwoAdjacentTimepointsTickCumulativeModTimeElapsedAlways0(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkTwoAdjacentTimepointsTickCumulativeModTimeElapsedAlways0(uint16)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkVolatilityOnRangeNotOverflowUint88(
      dt: BigNumberish,
      tick0: BigNumberish,
      tick1: BigNumberish,
      avgTick0: BigNumberish,
      avgTick1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkVolatilityOnRangeNotOverflowUint88(uint32,int24,int24,int24,int24)"(
      dt: BigNumberish,
      tick0: BigNumberish,
      tick1: BigNumberish,
      avgTick0: BigNumberish,
      avgTick1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    echidna_avgTickNotOverflows(overrides?: CallOverrides): Promise<BigNumber>;

    "echidna_avgTickNotOverflows()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    echidna_canAlwaysGetPoints0IfInitialized(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "echidna_canAlwaysGetPoints0IfInitialized()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "echidna_indexAlwaysLtCardinality()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(uint32,int24,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    update(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "update(uint32,int24,uint128)"(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    advanceTime(
      by: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "advanceTime(uint32)"(
      by: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkTimeWeightedAveragesAlwaysFitsType(uint32)"(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkTwoAdjacentTimepointsTickCumulativeModTimeElapsedAlways0(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkTwoAdjacentTimepointsTickCumulativeModTimeElapsedAlways0(uint16)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkVolatilityOnRangeNotOverflowUint88(
      dt: BigNumberish,
      tick0: BigNumberish,
      tick1: BigNumberish,
      avgTick0: BigNumberish,
      avgTick1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkVolatilityOnRangeNotOverflowUint88(uint32,int24,int24,int24,int24)"(
      dt: BigNumberish,
      tick0: BigNumberish,
      tick1: BigNumberish,
      avgTick0: BigNumberish,
      avgTick1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_avgTickNotOverflows(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "echidna_avgTickNotOverflows()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_canAlwaysGetPoints0IfInitialized(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "echidna_canAlwaysGetPoints0IfInitialized()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "echidna_indexAlwaysLtCardinality()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(uint32,int24,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    update(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "update(uint32,int24,uint128)"(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
