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

interface IDataStorageOperatorInterface extends ethers.utils.Interface {
  functions: {
    "calculateVolumePerLiquidity(uint128,int256,int256)": FunctionFragment;
    "changeFeeConfiguration(tuple)": FunctionFragment;
    "getAverages(uint32,int24,uint16,uint128)": FunctionFragment;
    "getFee(uint32,int24,uint16,uint128)": FunctionFragment;
    "getSingleTimepoint(uint32,uint32,int24,uint16,uint128)": FunctionFragment;
    "getTimepoints(uint32,uint32[],int24,uint16,uint128)": FunctionFragment;
    "initialize(uint32,int24)": FunctionFragment;
    "timepoints(uint256)": FunctionFragment;
    "window()": FunctionFragment;
    "write(uint16,uint32,int24,uint128,uint128)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateVolumePerLiquidity",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeFeeConfiguration",
    values: [
      {
        alpha1: BigNumberish;
        alpha2: BigNumberish;
        beta1: BigNumberish;
        beta2: BigNumberish;
        gamma1: BigNumberish;
        gamma2: BigNumberish;
        volumeBeta: BigNumberish;
        volumeGamma: BigNumberish;
        baseFee: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAverages",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFee",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSingleTimepoint",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getTimepoints",
    values: [
      BigNumberish,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "timepoints",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "window", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "write",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateVolumePerLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeFeeConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAverages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSingleTimepoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimepoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timepoints", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "window", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "write", data: BytesLike): Result;

  events: {
    "FeeConfiguration(tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FeeConfiguration"): EventFragment;
}

export class IDataStorageOperator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IDataStorageOperatorInterface;

  functions: {
    calculateVolumePerLiquidity(
      liquidity: BigNumberish,
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { volumePerLiquidity: BigNumber }>;

    "calculateVolumePerLiquidity(uint128,int256,int256)"(
      liquidity: BigNumberish,
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { volumePerLiquidity: BigNumber }>;

    changeFeeConfiguration(
      feeConfig: {
        alpha1: BigNumberish;
        alpha2: BigNumberish;
        beta1: BigNumberish;
        beta2: BigNumberish;
        gamma1: BigNumberish;
        gamma2: BigNumberish;
        volumeBeta: BigNumberish;
        volumeGamma: BigNumberish;
        baseFee: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changeFeeConfiguration(tuple)"(
      feeConfig: {
        alpha1: BigNumberish;
        alpha2: BigNumberish;
        beta1: BigNumberish;
        beta2: BigNumberish;
        gamma1: BigNumberish;
        gamma2: BigNumberish;
        volumeBeta: BigNumberish;
        volumeGamma: BigNumberish;
        baseFee: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getAverages(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        TWVolatilityAverage: BigNumber;
        TWVolumePerLiqAverage: BigNumber;
      }
    >;

    "getAverages(uint32,int24,uint16,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        TWVolatilityAverage: BigNumber;
        TWVolumePerLiqAverage: BigNumber;
      }
    >;

    getFee(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number] & { fee: number }>;

    "getFee(uint32,int24,uint16,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number] & { fee: number }>;

    getSingleTimepoint(
      time: BigNumberish,
      secondsAgo: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulative: BigNumber;
        volatilityCumulative: BigNumber;
        volumePerAvgLiquidity: BigNumber;
      }
    >;

    "getSingleTimepoint(uint32,uint32,int24,uint16,uint128)"(
      time: BigNumberish,
      secondsAgo: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulative: BigNumber;
        volatilityCumulative: BigNumber;
        volumePerAvgLiquidity: BigNumber;
      }
    >;

    getTimepoints(
      time: BigNumberish,
      secondsAgos: BigNumberish[],
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
        tickCumulatives: BigNumber[];
        secondsPerLiquidityCumulatives: BigNumber[];
        volatilityCumulatives: BigNumber[];
        volumePerAvgLiquiditys: BigNumber[];
      }
    >;

    "getTimepoints(uint32,uint32[],int24,uint16,uint128)"(
      time: BigNumberish,
      secondsAgos: BigNumberish[],
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
        tickCumulatives: BigNumber[];
        secondsPerLiquidityCumulatives: BigNumber[];
        volatilityCumulatives: BigNumber[];
        volumePerAvgLiquiditys: BigNumber[];
      }
    >;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(uint32,int24)"(
      time: BigNumberish,
      tick: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    timepoints(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, number, BigNumber, BigNumber, BigNumber, number, BigNumber] & {
        initialized: boolean;
        blockTimestamp: number;
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulative: BigNumber;
        volatilityCumulative: BigNumber;
        averageTick: number;
        volumePerLiquidityCumulative: BigNumber;
      }
    >;

    "timepoints(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, number, BigNumber, BigNumber, BigNumber, number, BigNumber] & {
        initialized: boolean;
        blockTimestamp: number;
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulative: BigNumber;
        volatilityCumulative: BigNumber;
        averageTick: number;
        volumePerLiquidityCumulative: BigNumber;
      }
    >;

    window(
      overrides?: CallOverrides
    ): Promise<[number] & { windowLength: number }>;

    "window()"(
      overrides?: CallOverrides
    ): Promise<[number] & { windowLength: number }>;

    write(
      index: BigNumberish,
      blockTimestamp: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "write(uint16,uint32,int24,uint128,uint128)"(
      index: BigNumberish,
      blockTimestamp: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  calculateVolumePerLiquidity(
    liquidity: BigNumberish,
    amount0: BigNumberish,
    amount1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calculateVolumePerLiquidity(uint128,int256,int256)"(
    liquidity: BigNumberish,
    amount0: BigNumberish,
    amount1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  changeFeeConfiguration(
    feeConfig: {
      alpha1: BigNumberish;
      alpha2: BigNumberish;
      beta1: BigNumberish;
      beta2: BigNumberish;
      gamma1: BigNumberish;
      gamma2: BigNumberish;
      volumeBeta: BigNumberish;
      volumeGamma: BigNumberish;
      baseFee: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changeFeeConfiguration(tuple)"(
    feeConfig: {
      alpha1: BigNumberish;
      alpha2: BigNumberish;
      beta1: BigNumberish;
      beta2: BigNumberish;
      gamma1: BigNumberish;
      gamma2: BigNumberish;
      volumeBeta: BigNumberish;
      volumeGamma: BigNumberish;
      baseFee: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getAverages(
    time: BigNumberish,
    tick: BigNumberish,
    index: BigNumberish,
    liquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      TWVolatilityAverage: BigNumber;
      TWVolumePerLiqAverage: BigNumber;
    }
  >;

  "getAverages(uint32,int24,uint16,uint128)"(
    time: BigNumberish,
    tick: BigNumberish,
    index: BigNumberish,
    liquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      TWVolatilityAverage: BigNumber;
      TWVolumePerLiqAverage: BigNumber;
    }
  >;

  getFee(
    time: BigNumberish,
    tick: BigNumberish,
    index: BigNumberish,
    liquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "getFee(uint32,int24,uint16,uint128)"(
    time: BigNumberish,
    tick: BigNumberish,
    index: BigNumberish,
    liquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getSingleTimepoint(
    time: BigNumberish,
    secondsAgo: BigNumberish,
    tick: BigNumberish,
    index: BigNumberish,
    liquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      tickCumulative: BigNumber;
      secondsPerLiquidityCumulative: BigNumber;
      volatilityCumulative: BigNumber;
      volumePerAvgLiquidity: BigNumber;
    }
  >;

  "getSingleTimepoint(uint32,uint32,int24,uint16,uint128)"(
    time: BigNumberish,
    secondsAgo: BigNumberish,
    tick: BigNumberish,
    index: BigNumberish,
    liquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      tickCumulative: BigNumber;
      secondsPerLiquidityCumulative: BigNumber;
      volatilityCumulative: BigNumber;
      volumePerAvgLiquidity: BigNumber;
    }
  >;

  getTimepoints(
    time: BigNumberish,
    secondsAgos: BigNumberish[],
    tick: BigNumberish,
    index: BigNumberish,
    liquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
      tickCumulatives: BigNumber[];
      secondsPerLiquidityCumulatives: BigNumber[];
      volatilityCumulatives: BigNumber[];
      volumePerAvgLiquiditys: BigNumber[];
    }
  >;

  "getTimepoints(uint32,uint32[],int24,uint16,uint128)"(
    time: BigNumberish,
    secondsAgos: BigNumberish[],
    tick: BigNumberish,
    index: BigNumberish,
    liquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
      tickCumulatives: BigNumber[];
      secondsPerLiquidityCumulatives: BigNumber[];
      volatilityCumulatives: BigNumber[];
      volumePerAvgLiquiditys: BigNumber[];
    }
  >;

  initialize(
    time: BigNumberish,
    tick: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(uint32,int24)"(
    time: BigNumberish,
    tick: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  timepoints(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, number, BigNumber, BigNumber, BigNumber, number, BigNumber] & {
      initialized: boolean;
      blockTimestamp: number;
      tickCumulative: BigNumber;
      secondsPerLiquidityCumulative: BigNumber;
      volatilityCumulative: BigNumber;
      averageTick: number;
      volumePerLiquidityCumulative: BigNumber;
    }
  >;

  "timepoints(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, number, BigNumber, BigNumber, BigNumber, number, BigNumber] & {
      initialized: boolean;
      blockTimestamp: number;
      tickCumulative: BigNumber;
      secondsPerLiquidityCumulative: BigNumber;
      volatilityCumulative: BigNumber;
      averageTick: number;
      volumePerLiquidityCumulative: BigNumber;
    }
  >;

  window(overrides?: CallOverrides): Promise<number>;

  "window()"(overrides?: CallOverrides): Promise<number>;

  write(
    index: BigNumberish,
    blockTimestamp: BigNumberish,
    tick: BigNumberish,
    liquidity: BigNumberish,
    volumePerLiquidity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "write(uint16,uint32,int24,uint128,uint128)"(
    index: BigNumberish,
    blockTimestamp: BigNumberish,
    tick: BigNumberish,
    liquidity: BigNumberish,
    volumePerLiquidity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    calculateVolumePerLiquidity(
      liquidity: BigNumberish,
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateVolumePerLiquidity(uint128,int256,int256)"(
      liquidity: BigNumberish,
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeFeeConfiguration(
      feeConfig: {
        alpha1: BigNumberish;
        alpha2: BigNumberish;
        beta1: BigNumberish;
        beta2: BigNumberish;
        gamma1: BigNumberish;
        gamma2: BigNumberish;
        volumeBeta: BigNumberish;
        volumeGamma: BigNumberish;
        baseFee: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "changeFeeConfiguration(tuple)"(
      feeConfig: {
        alpha1: BigNumberish;
        alpha2: BigNumberish;
        beta1: BigNumberish;
        beta2: BigNumberish;
        gamma1: BigNumberish;
        gamma2: BigNumberish;
        volumeBeta: BigNumberish;
        volumeGamma: BigNumberish;
        baseFee: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    getAverages(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        TWVolatilityAverage: BigNumber;
        TWVolumePerLiqAverage: BigNumber;
      }
    >;

    "getAverages(uint32,int24,uint16,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        TWVolatilityAverage: BigNumber;
        TWVolumePerLiqAverage: BigNumber;
      }
    >;

    getFee(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "getFee(uint32,int24,uint16,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getSingleTimepoint(
      time: BigNumberish,
      secondsAgo: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulative: BigNumber;
        volatilityCumulative: BigNumber;
        volumePerAvgLiquidity: BigNumber;
      }
    >;

    "getSingleTimepoint(uint32,uint32,int24,uint16,uint128)"(
      time: BigNumberish,
      secondsAgo: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulative: BigNumber;
        volatilityCumulative: BigNumber;
        volumePerAvgLiquidity: BigNumber;
      }
    >;

    getTimepoints(
      time: BigNumberish,
      secondsAgos: BigNumberish[],
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
        tickCumulatives: BigNumber[];
        secondsPerLiquidityCumulatives: BigNumber[];
        volatilityCumulatives: BigNumber[];
        volumePerAvgLiquiditys: BigNumber[];
      }
    >;

    "getTimepoints(uint32,uint32[],int24,uint16,uint128)"(
      time: BigNumberish,
      secondsAgos: BigNumberish[],
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
        tickCumulatives: BigNumber[];
        secondsPerLiquidityCumulatives: BigNumber[];
        volatilityCumulatives: BigNumber[];
        volumePerAvgLiquiditys: BigNumber[];
      }
    >;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(uint32,int24)"(
      time: BigNumberish,
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    timepoints(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, number, BigNumber, BigNumber, BigNumber, number, BigNumber] & {
        initialized: boolean;
        blockTimestamp: number;
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulative: BigNumber;
        volatilityCumulative: BigNumber;
        averageTick: number;
        volumePerLiquidityCumulative: BigNumber;
      }
    >;

    "timepoints(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, number, BigNumber, BigNumber, BigNumber, number, BigNumber] & {
        initialized: boolean;
        blockTimestamp: number;
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulative: BigNumber;
        volatilityCumulative: BigNumber;
        averageTick: number;
        volumePerLiquidityCumulative: BigNumber;
      }
    >;

    window(overrides?: CallOverrides): Promise<number>;

    "window()"(overrides?: CallOverrides): Promise<number>;

    write(
      index: BigNumberish,
      blockTimestamp: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "write(uint16,uint32,int24,uint128,uint128)"(
      index: BigNumberish,
      blockTimestamp: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {
    FeeConfiguration(feeConfig: null): EventFilter;
  };

  estimateGas: {
    calculateVolumePerLiquidity(
      liquidity: BigNumberish,
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateVolumePerLiquidity(uint128,int256,int256)"(
      liquidity: BigNumberish,
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeFeeConfiguration(
      feeConfig: {
        alpha1: BigNumberish;
        alpha2: BigNumberish;
        beta1: BigNumberish;
        beta2: BigNumberish;
        gamma1: BigNumberish;
        gamma2: BigNumberish;
        volumeBeta: BigNumberish;
        volumeGamma: BigNumberish;
        baseFee: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changeFeeConfiguration(tuple)"(
      feeConfig: {
        alpha1: BigNumberish;
        alpha2: BigNumberish;
        beta1: BigNumberish;
        beta2: BigNumberish;
        gamma1: BigNumberish;
        gamma2: BigNumberish;
        volumeBeta: BigNumberish;
        volumeGamma: BigNumberish;
        baseFee: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    getAverages(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAverages(uint32,int24,uint16,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFee(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFee(uint32,int24,uint16,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSingleTimepoint(
      time: BigNumberish,
      secondsAgo: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSingleTimepoint(uint32,uint32,int24,uint16,uint128)"(
      time: BigNumberish,
      secondsAgo: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTimepoints(
      time: BigNumberish,
      secondsAgos: BigNumberish[],
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTimepoints(uint32,uint32[],int24,uint16,uint128)"(
      time: BigNumberish,
      secondsAgos: BigNumberish[],
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(uint32,int24)"(
      time: BigNumberish,
      tick: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    timepoints(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "timepoints(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    window(overrides?: CallOverrides): Promise<BigNumber>;

    "window()"(overrides?: CallOverrides): Promise<BigNumber>;

    write(
      index: BigNumberish,
      blockTimestamp: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "write(uint16,uint32,int24,uint128,uint128)"(
      index: BigNumberish,
      blockTimestamp: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateVolumePerLiquidity(
      liquidity: BigNumberish,
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateVolumePerLiquidity(uint128,int256,int256)"(
      liquidity: BigNumberish,
      amount0: BigNumberish,
      amount1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeFeeConfiguration(
      feeConfig: {
        alpha1: BigNumberish;
        alpha2: BigNumberish;
        beta1: BigNumberish;
        beta2: BigNumberish;
        gamma1: BigNumberish;
        gamma2: BigNumberish;
        volumeBeta: BigNumberish;
        volumeGamma: BigNumberish;
        baseFee: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changeFeeConfiguration(tuple)"(
      feeConfig: {
        alpha1: BigNumberish;
        alpha2: BigNumberish;
        beta1: BigNumberish;
        beta2: BigNumberish;
        gamma1: BigNumberish;
        gamma2: BigNumberish;
        volumeBeta: BigNumberish;
        volumeGamma: BigNumberish;
        baseFee: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getAverages(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAverages(uint32,int24,uint16,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFee(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getFee(uint32,int24,uint16,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSingleTimepoint(
      time: BigNumberish,
      secondsAgo: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSingleTimepoint(uint32,uint32,int24,uint16,uint128)"(
      time: BigNumberish,
      secondsAgo: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTimepoints(
      time: BigNumberish,
      secondsAgos: BigNumberish[],
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTimepoints(uint32,uint32[],int24,uint16,uint128)"(
      time: BigNumberish,
      secondsAgos: BigNumberish[],
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(uint32,int24)"(
      time: BigNumberish,
      tick: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    timepoints(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "timepoints(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    window(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "window()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    write(
      index: BigNumberish,
      blockTimestamp: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "write(uint16,uint32,int24,uint128,uint128)"(
      index: BigNumberish,
      blockTimestamp: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
